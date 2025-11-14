import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import { FiTrash2 , FiEdit2 } from "react-icons/fi";
const ContactList = ({onEdit}) => {
  const { contacts, loading, error, removeContact } =
    useContext(ContactContext);
  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-blue-500">Loading Contacts...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500">Error:{error}</div>
      </div>
    );
  }
  if (contacts.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500">
          No contacts found. Add a your first contact!
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contacts.map((contact) => (
        <div key={contact._id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 ">
                {contact.name}
              </h3>
              <p className="text-gray-600 mt-2">{contact.email}</p>
              <p className="text-gray-600 ">{contact.phone}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit && onEdit(contact)}
                className="text-blue-600 hover:text-blue-700 p-2 rounded cursor-pointer"
                title="Edit"
              >
                <FiEdit2 size={20} />
              </button>
            <button
            onClick={ async () => {
              const ok = window.confirm(`Delete ${contact.name}?`);
              if (!ok) return;
              try {
                await removeContact(contact._id);
              } catch (error) {
                console.error( error);
                alert(`Error deleting contact: ${error.message}`);
                
              }
            }} 
            className="text-red-600 hover:text-red-700 p-2 rounded cursor-pointer"
            title="Delete Contact"
            >

              <FiTrash2 size={20} />
            </button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
