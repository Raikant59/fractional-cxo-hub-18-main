
import React, { useState } from 'react';

interface Category {
  id: string;
  label: string;
}

interface CategoryTabsProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleSelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelect(categoryId);
  };

  return (
    <div className="flex overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:-mx-0 md:px-0">
      <div className="flex space-x-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary text-white shadow-sm'
                : 'bg-secondary text-primary hover:bg-secondary/70'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
