import React from 'react'

function Footer() {
  return (
   <footer className='bg-black text-white text-center py-4 mt-10'>
    &copy; {new Date(). getFullYear()} Mini Movie Explorer &mdash; Made with ❤️ in React
   </footer>
  );
}

export default Footer
