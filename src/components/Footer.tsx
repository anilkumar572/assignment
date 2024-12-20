import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-300 p-6 mt-0 w-full">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Some Tech Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;