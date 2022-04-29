const inq_mod = require('../models/inquiry_model')

const err_han = require('../services/err_hand')

exports.inquiry = async (req, res) =>{
    const inquiry_form = req.body
    console.log(inquiry_form)

    try{

        const inqu = new inq_mod(inquiry_form)
        const ing_en = await inqu.save()
        res.status(200).json(ing_en)

    }catch(err){
        console.log(err)
        res.status(400).json({"Error": err_han.error_hand(err)})
    }

}