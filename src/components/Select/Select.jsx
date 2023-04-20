import React, { useState } from "react";

const Select = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="col-sm-8">
      <div className="mb-3 row">
        <label htmlFor="productType" className="col-sm-2 col-htmlForm-label">
          Type Switcher
        </label>
        <div className="col-sm-4">
          <select
            className="htmlForm-control"
            name="productType"
            id="productType"
            value={value}
            onChange={handleChange}
            required
          >
            <option defaultValue="">Type Switcher</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
          <hr />
          {value === "dvd" && (
            <div className="mb-3 row">
              <label htmlFor="size" className="col-sm-2 col-htmlForm-label">
                Size (MB)
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="htmlForm-control"
                  name="size"
                  id="size"
                  required
                />
              </div>
              <p className="description">Please, provide size in MB htmlFormat</p>
            </div>
          )}
          {value === "book" && (
            <div className="mb-3 row">
              <label htmlFor="weight" className="col-sm-3 col-htmlForm-label">
                Weight (KG)
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="htmlForm-control"
                  name="weight"
                  id="weight"
                  required
                />
              </div>
              <p className="description">Please, provide weight in KG htmlFormat</p>
            </div>
          )}
          {value === "furniture" && (
            <>
              <div className="mb-3 row">
                <label htmlFor="height" className="col-sm-3 col-htmlForm-label">
                  Height (CM)
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="htmlForm-control"
                    name="height"
                    id="height"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="width" className="col-sm-3 col-htmlForm-label">
                  Width (CM)
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="htmlForm-control"
                    name="width"
                    id="width"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="length" className="col-sm-3 col-htmlForm-label">
                  Length (CM)
                </label>
                <div className="col-sm-4">
                  <input
                    type="number"
                    className="htmlForm-control"
                    name="length"
                    id="length"
                    required
                  />
                </div>
                <p className="description">
                  Please, provide dimensions in HxWxL htmlFormat
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
