import { NavBar } from '@/components/NavBar';
import React from 'react'
import { Trash, Heart, Phone, Mail } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Contact me through email',
    href: '#',
    originalPrice: '₹48,900',
    discount: '5% Off',
    color: 'krishkalathiya009@gmail.com',
    text: 'hire me through my email address now !!',
    icon: <Mail size={75} />, // Lucide icon component
  },
  {
    id: 2,
    name: 'Contact me through Phone number',
    href: '#',
    color: '+91 9724989843',
    text: 'call me for any inquiry and get my cv',
    icon: <Phone size={75} />, // Another Lucide icon component
  },
];

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <h2 className="text-3xl font-bold">Contact me</h2>
        <p className="mt-3 text-sm font-medium text-gray-700">hire me !!</p>
        <ul className="flex flex-col divide-y divide-gray-200">
          {products.map((product) => (
            <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <div className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32">
                  {product.icon} {/* Lucide icon component */}
                </div>
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.name}</h3>
                      <p className="text-sm">{product.color}</p>
                      <p>{product.text}</p>
                    </div>
                    <div className="text-right"></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contact ;
