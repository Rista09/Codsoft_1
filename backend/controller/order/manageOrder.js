const addToCart = require('../../models/cartProduct');
const orderProduct = require('../../models/orderProduct');
const axios = require('axios');
const request = require('request');

const handleKhaltiCallback = async (req, res, next) => {
  try {
    const { pidx } = req.query;

    const options = {
      method: "POST",
      url: "https://a.khalti.com/api/v2/epayment/lookup/",
      headers: {
        Authorization: "Key live_secret_key_68791341fdd94846a146f0457ff7b455",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "pidx": pidx
      }) 
    }

    request(options, async function (error, response, body) {
      if (error) {
        console.error("Error creating payment:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("Khalti Lookup Response:", body);

      const responseData = JSON.parse(body);

      if (response.statusCode === 404) {
        return res.status(404).json({
          error: 'Resource not found',
        });
      }

      if (responseData.status !== 'Completed') {
        return res.status(400).json({
          error: 'Payment not completed',
        });
      }

      try {
        const cartProducts = await addToCart.find({ userId: req.userId });

        if (!cartProducts || cartProducts.length === 0) {
          return res.status(404).json({ error: 'No products found in cart' });
        }

        const createOrderProductPromises = cartProducts.map(async (cartProduct) => {
          const orderProductData = {
            userId: req.userId,
            productId: cartProduct.productId,
            pidx: responseData.pidx,
            totalAmount: responseData.total_amount,
            status: responseData.status,
            quantity: cartProduct.quantity, 
          };

          const createdOrderProduct = await orderProduct.create(orderProductData);
          return createdOrderProduct;
        });

        await Promise.all(createOrderProductPromises);

        await addToCart.deleteMany({ userId: req.userId });

        res.json({
          success: true,
          message: 'Payment handled successfully',
          data: responseData,
        });
      } catch (err) {
        console.error('Error creating orderProduct:', err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    });

  } catch (error) {
    console.error('Error processing Khalti callback:', error);
    return res.status(500).json({
      error: error.message || 'Error processing Khalti',
    });
  }
};

module.exports = {
    handleKhaltiCallback
}