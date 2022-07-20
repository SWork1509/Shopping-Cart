import React from 'react';
import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
  return (
    <div className="directories-container">
      {
        categories.map(category => {
          const { id } = category;
          return <CategoryItem key={id} category={category} />
        })
      }
    </div>
  )
}


export default Directory;
