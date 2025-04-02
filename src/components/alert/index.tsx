import React from 'react';

type AlertProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
};

const Alert = ({ message, type, onClose }: AlertProps) => {
  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[250px] p-4 z-[1000] rounded-lg text-white shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
      role="alert"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-xl font-bold">&times;</button>
      </div>
    </div>
  );
};

export default Alert;
