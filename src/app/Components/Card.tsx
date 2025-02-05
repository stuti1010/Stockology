import React from 'react';

// Define the type for the props
interface CardProps {
  title: string; // Title of the card (e.g., "850k")
  description: string; // Description of the card (e.g., "Employee")
  backgroundColor?: string; // Optional background color (default: 'bg-green-50')
  hoverEffect?: boolean; // Optional hover effect (default: true)
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  backgroundColor = 'bg-white',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`border rounded-xl shadow-md ${backgroundColor} px-10 py-6 md:px-20 w-fit transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-lg hover:scale-105' : ''
      }`}
    >
       <div className="flex flex-col items-center space-y-1">
        {icon && <div className="text-4xl">{icon}</div>} 
        <h1 className={`md:text-4xl text-2xl font-semibold `}>{title}</h1>
        <p className={`font-medium `}>{description}</p>
      </div>
    </div>
  );
};

export default Card;