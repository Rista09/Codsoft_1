const OrderProduct = require('../../models/orderProduct');

const getMyOrders = async (req, res) => {
    try {
        const userId = req.userId;

        // Query orders where userId matches the logged-in user's ID
        const orders = await OrderProduct.find({ userId: userId });

        res.json({
            success: true,
            error: false,
            orders: orders
        });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({
            success: false,
            error: true,
            message: "Internal server error"
        });
    }
};

module.exports = {
    getMyOrders
};
