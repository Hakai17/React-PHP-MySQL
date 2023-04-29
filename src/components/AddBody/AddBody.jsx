import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AddBody() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [attribute, setAttribute] = useState("");
  const [attributeSwitcher, setAttributeSwitcher] = useState("");

  function handleClick() {
    const data = { sku, name, price, type, attribute };
    axios
      .post("http://localhost/scandiweb/src/api/index.php", data)
      .then(response => console.log(response.data))
      .then(redirectForHome)
      .catch((error) => console.error(error));
  }

  const handleChangeAttributeSwitcher = (event) => {
    setAttributeSwitcher(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const navigate = useNavigate();
  const redirectForHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="row">
        <div className="col header-left">
          <Navbar title="Product Add" />
        </div>
        <div className="col header-right">
          <div className="float-end">
            <button onClick={handleClick}>Save</button>
            <button onClick={redirectForHome}>Cancel</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <form id="product_form">
        <div className="col-sm-6 m-4">
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
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 m-4">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 m-4">
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-8 m-4">
          <div className="mb-3 row">
            <label
              htmlFor="productType"
              className="col-sm-2 col-htmlForm-label"
            >
              Type Switcher
            </label>
            <div className="col-sm-4">
              <select
                className="htmlForm-control"
                name="productType"
                id="productType"
                value={type}
                onChange={(event) => {
                  handleChangeAttributeSwitcher(event);
                  handleChangeType(event);
                }}
                required
              >
                <option value="">Type Switcher</option>
                <option value="DVD">DVD</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture</option>
              </select>
              <hr />
              {attributeSwitcher === "DVD" && (
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
                      value={attribute}
                      onChange={(e) => setAttribute(e.target.value)}
                    />
                  </div>
                  <p className="description">
                    Please, provide size in MB htmlFormat
                  </p>
                </div>
              )}
              {attributeSwitcher === "Book" && (
                <div className="mb-3 row">
                  <label
                    htmlFor="weight"
                    className="col-sm-3 col-htmlForm-label"
                  >
                    Weight (KG)
                  </label>
                  <div className="col-sm-4">
                    <input
                      type="number"
                      className="htmlForm-control"
                      name="weight"
                      id="weight"
                      required
                      value={attribute}
                      onChange={(e) => setAttribute(e.target.value)}
                    />
                  </div>
                  <p className="description">
                    Please, provide weight in KG htmlFormat
                  </p>
                </div>
              )}
              {attributeSwitcher === "Furniture" && (
                <>
                  <div className="mb-3 row">
                    <label
                      htmlFor="height"
                      className="col-sm-3 col-htmlForm-label"
                    >
                      Height (CM)
                    </label>
                    <div className="col-sm-4">
                      <input
                        type="number"
                        className="htmlForm-control"
                        name="height"
                        id="height"
                        required
                        value={attribute}
                        onChange={(e) => setAttribute(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="width"
                      className="col-sm-3 col-htmlForm-label"
                    >
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
                    <label
                      htmlFor="length"
                      className="col-sm-3 col-htmlForm-label"
                    >
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
      </form>
      <div className="col-sm-8" id="attributes"></div>
    </>
  );
}
