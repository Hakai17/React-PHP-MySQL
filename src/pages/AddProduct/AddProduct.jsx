import React from "react";
import Select from "../../components/Select/Select";

export default function AddProduct() {
  return (
    <form id="product_form" action="/add-product" method="post">
      <div className="col-sm-6">
        <div className="mb-3 row">
          <label htmlFor="sku" className="col-sm-2 col-form-label">
            SKU
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="sku"
              id="sku"
              required
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Price ($)
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              required
            />
          </div>
        </div>
      </div>
      <Select />
      <div className="col-sm-8" id="attributes"></div>
    </form>
  );
}
