import React, { ReactElement } from 'react';

interface TabButtonProps {
  id: string;
  icon: ReactElement;
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, onClick, isActive }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full py-2 transition-colors active:scale-95 ${
      isActive ? 'text-blue-500' : 'text-gray-400 hover:text-gray-500'
    }`}
  >
    {React.cloneElement(icon, { 
      size: 24, 
      strokeWidth: isActive ? 2.5 : 2,
      className: "mb-1"
    })}
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

export default TabButton;