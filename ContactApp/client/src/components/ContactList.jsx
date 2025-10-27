import { useContext} from 'react'
import ContactContext from '../context/ContactContext'

const ContactList = () => {
  const { contacts , loading , error } = useContext(ContactContext);
  if(loading){
    return(
        <div className='text-center py-8'>
            <div className='text-blue-500'>Loading Contacts...</div>
        </div>
    );
  }
  if(error){
    return(
        <div className='text-center py-8'>
            <div className='text-red-500'>Error:{error}</div>
        </div>
    );
  }
  if(contacts.length === 0){
    return(
        <div className='text-center py-8'>
            <div className='text-gray-500'>No contacts found. Add a your first contact!</div>
        </div>
    );
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {contacts.map((contact)=>(
            <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-semibold text-gray-800 '>{contact.name}</h3>
            <p className='text-gray-600 mt-2'>{contact.email}</p>
            <p className='text-gray-600 '>{contact.phone}</p>
        </div>
        ))}
    </div>
  )
}

export default ContactList;