

// const contacts = require('../models/contacts')

const {Contact} = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");
// const { get } = require("../routes/api/contacts");




const getAll = async (req, res, next) => {

        const result = await Contact.find();
        res.json(result)

};

 
const getById = async (req, res, next) => {
    
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
        throw HttpError(404, "Not found");
        // const error = new Error("Not found");
        // error.status = 404;
        // throw error;
        // return res.status(404).json({
        //   message: "Not found"
        // }) 
    };

    res.json(result)

};

const add = async (req, res, next) => { 
      
        const result = await Book.create(req.body);
        res.status(201).json(result)
};



const updateById = async (req, res, next) => {

    
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
      
    }
    res.json(result);
 
};

const updateFavorite = async (req, res, next) => {

    
    const { id } = req.params;
    // const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
   
    if (!result) {
        throw HttpError(404, "Not found");
      
    }
    res.json(result);
 
};

const deleteById = async (req, res, next) => {
        const { id } = req.params;
        const result = await Contact.findByIdAndRemove(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json({
            message: "Delete success"
        })
  
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
};