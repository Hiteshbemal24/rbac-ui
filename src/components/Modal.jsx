import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative p-6 transform transition-transform duration-300 scale-100">
            {/* Close Sign */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
