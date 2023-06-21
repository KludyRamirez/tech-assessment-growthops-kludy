import React, { useState } from "react";

const DateConverter = () => {
  //variable that contains the date
  const [dateInput, setDateInput] = useState("");

  //identifies what date will be converted
  const handleInputChange = (event) => {
    setDateInput(event.target.value);
  };

  //conversion function
  const handleConvertClick = () => {
    const oldDate = dateInput.split("/");
    const convertedDate = `${oldDate}`;
    alert(`Converted Date: ${convertedDate}`);
  };

  return (
    <div className="container">
      <div className="">
        <label htmlFor="dateInput" className="fw-bold pb-2">
          Date
        </label>
        <div className=" d-flex justify-content-start gap-2">
          <input
            type="date"
            id="dateInput"
            placeholder="DD/MM/YYYY"
            value={dateInput}
            onChange={handleInputChange}
            className="form-control w-50"
          />
          <button
            className="btn"
            disabled={!dateInput}
            onClick={handleConvertClick}
            style={{ background: "#D21045", fontSize: "14px" }}
          >
            <span className="fw-bold text-white">CONVERT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateConverter;
