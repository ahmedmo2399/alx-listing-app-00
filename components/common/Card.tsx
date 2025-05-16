import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill" 
          objectFit="cover"          className="rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
