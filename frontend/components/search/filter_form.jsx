import React from 'react';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);


const FilterForm = ({ minPrice, maxPrice, updateFilter }) => {
  if (maxPrice === undefined) {
    maxPrice = 1000;}
return (
  <div className="filter-form">
  <label>Max Price
  <input
    id="typeinp"
    type="range"
    min="0" max="1000"

    value={maxPrice}
    onChange={handleChange('maxPrice', updateFilter)}
    step="5"/>
  ${maxPrice}
  </label>
  </div>
);
};
export default FilterForm;
