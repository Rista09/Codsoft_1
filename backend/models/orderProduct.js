const mongoose = require('mongoose');

const orderProductSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    pidx: {
        type: String,
    },
    totalAmount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['Completed', 'Refunded', 'Pending'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

const orderProductModel = mongoose.model('orderProduct', orderProductSchema);

module.exports = orderProductModel;
