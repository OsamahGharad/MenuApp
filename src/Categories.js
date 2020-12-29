import React from 'react';

const Categories = ({filterItems}) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() =>
          filterItems('breakfast')
      }>Break Fast</button>
    </div>
  )
};

export default Categories;
