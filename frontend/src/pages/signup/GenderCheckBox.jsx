import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary"
            checked={selectGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
