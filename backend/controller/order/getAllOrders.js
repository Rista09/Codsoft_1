const uploadProductPermission = require('../../helpers/permission');
const orderProduct = require('../../models/orderProduct');
const User = require('../../models/userModel'); // Replace with your user model import

const getAllOrder = async (req, res) => {
  try {
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    // Fetch all orders
    const orders = await orderProduct.find();

    // Fetch user details for each order
    const ordersWithUserDetails = await Promise.all(orders.map(async (order) => {
      const userId = order.userId;
      const user = await User.findById(userId); // Assuming you have a User model

      // Return order with user details
      return {
        ...order.toJSON(), // Convert Mongoose document to JSON
        user: user ? user.toJSON() : null // Include user details if found, or null
      };
    }));

    res.json({
      success: true,
      error: false,
      orders: ordersWithUserDetails
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error"
    });
  }
};

module.exports = {
  getAllOrder
};
