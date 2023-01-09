import React from "react";
import "../styles/AddProperty.css";
import "../styles/add-property.css";

function AddProperty() {
  return (
    <div className="AddProperty">
      Add Property Page
      <button
        className="add-property-form__element add-property-form__button"
        type="submit"
      >
        Add
      </button>
    </div>
  );
}

export default AddProperty;
