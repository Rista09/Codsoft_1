const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async(req,res)=>{
    try{
        const { category } = req?.body || req?.query
        await console.log(">>>",category);
        const product = await productModel.find({ category })
        console.log("Products", product);

        res.json({
            data : product,
            message : "Product",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryWiseProduct