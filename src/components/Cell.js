import React from 'react';

const Cell = ({ value, selected, onClick }) => {
  const selectedClass = selected ? 'selected' : '';

  return (
    <div className={`cell ${selectedClass}`} onClick={onClick}>
      <div className="circle" />
      {value}
    </div>
  )
}

export default Cell;
