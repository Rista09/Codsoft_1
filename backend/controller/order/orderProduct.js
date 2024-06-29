const orderProduct = require("../../models/orderProduct");
const addToCartModel = require("../../models/cartProduct");
const user = require("../../models/userModel");

var request = require("request");
const axios = require("axios");

const createOrderProduct = async (req, res) => {
  try {
    // const { productId } = req?.body;
    // const userId = req.body.userId;

    // const currentUser = await user.findById(userId);

    // const currentUserId = currentUser._id;
    
    const userId = req.userId
    const currentUser = await user.findById(userId);

    console.log("User id", userId);

    const allProduct = await addToCartModel
      .find({
        userId: req.userId,
      })
      .populate("productId");

      

    // Calculate total price
    let totalPrice = 0;
    allProduct.forEach((cartItem) => {
      totalPrice += cartItem.productId.sellingPrice * cartItem.quantity;
    });

    console.log("Total Price:",totalPrice * 100);

    const options = {
      method: "POST",
      url: "https://a.khalti.com/api/v2/epayment/initiate/",
      headers: {
        Authorization: "Key live_secret_key_68791341fdd94846a146f0457ff7b455",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        return_url: `http://localhost:3000/#/bill/`,
        website_url: "http://localhost:3000/#/",
        amount: totalPrice * 100,
        purchase_order_id: 1,
        purchase_order_name: "test",
        customer_info: {
          name: currentUser.name,
          email: currentUser.email,
          phone: currentUser.phone,
        },
      }),
    };

    request(options, function (error, response) {
      if (error) {
        console.error("Error creating payment:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(response.body);
      res.status(200).json({
        success: true,
        message: "Payment initiation successful",
        data: JSON.parse(response.body), 
      });
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = createOrderProduct;
