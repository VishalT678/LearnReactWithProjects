import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.get('/' , async(req , res) =>{
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/' , async (req, res)=>{
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

router.put('/:id' , async (req , res)=>{
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id , req.body , { new: true});
        if(!contact){
            return res.status(404).json({message: 'contact not found'})
        }
        res.json(contact);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.delete('/:id' , async (req , res)=>{
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if(!contact){
            return res.status(404).json({message: 'Contact not found'})
        }
        res.json({message: 'Contact delete Successfully'})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

export default router;