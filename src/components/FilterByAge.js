import React from "react";

const FilterByAge = ({ onChange }) => {
  return (
    <div className="container pt-5">
      <h6>Filter By Age</h6>
      {/* the filter itself */}
      <div className="w-25">
        <select className="form-select" onChange={onChange}>
          <option value="all">All</option>
          <option value="20">20 and below</option>
          <option value="21-39">21 to 39</option>
          <option value="40">40 and above</option>
        </select>
      </div>
    </div>
  );
};

export default FilterByAge;
