// components/CategoriesDropdown.tsx

import React, { useState, useEffect, useRef } from 'react';

const CategoriesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

  // Close the dropdown when the user clicks outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Attach a click event listener to the document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
    // Handle other keyboard interactions as needed (e.g., arrow keys, Enter)
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute bg-white shadow-md mt-2 p-2 ${isOpen ? '' : 'hidden'}`}
      onKeyDown={handleKeyDown}
    >
      <ul>
        {/* Render your category items */}
        <li>
          <a href="/categories/category1" className="block px-4 py-2 hover:bg-gray-200">
            Category 1
          </a>
        </li>
        <li>
          <a href="/categories/category2" className="block px-4 py-2 hover:bg-gray-200">
            Category 2
          </a>
        </li>
        {/* Add more category items */}
      </ul>
    </div>
  );
};

export default CategoriesDropdown;
