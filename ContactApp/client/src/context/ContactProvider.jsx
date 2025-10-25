import ContactContext from "./ContactContext";
import { getContacts , createContact, updateContact , deleteContact, deleteContact } from "../services/contactAPI";
import { useEffect, useState } from "react";

const ContactProvider = ({children}) => {
    const [contacts , setContacts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    const fetchContacts = async () =>{
        setLoading(true);
        try {
            const data = await getContacts();
            setContacts(data);
            setError(null);
        } catch (error) {
            setError(error.messgae);
        }finally{
            setLoading(false);
        }
    };

    const addContact = async (contactData) =>{
        try {
            const newContact = await createContact(contactData);
            setContacts([...contacts , newContact]);
            return newContact;
        } catch (error) {
            setError(error.messgae);
            throw error;
        }
    };

    const editContact = async (id , contactData) =>{
        try {
            const updatedContact = await updateContact(id , contactData);
            setContacts(contacts.map(contact => 
                contact._id === id ? updatedContact : contact
            ));
            return updatedContact;
        } catch (error) {
            setError(error.messgae);
            throw error;
        }
    };

    const removeContact = async (id) =>{
        try {
             await deleteContact(id);
            setContacts(contacts.filter(contact => 
                contact._id !== id
            ))
        } catch (error) {
            setError(error.messgae);
            throw error;
        }
    };

    useEffect(()=>{
        fetchContacts();
    },[]);

    const value = {
        contacts,
        loading,
        error,
        fetchContacts,
        addContact,
        editContact,
        removeContact
    };

  return (
    <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
  )
}

export default ContactProvider;