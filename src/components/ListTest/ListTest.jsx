import React, { useState, useEffect } from "react";
import "./ListTest.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/scandiweb/src/api/index.php")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteProductById = () => {
    const arrayids = [];
    items.forEach((item) => {
      if (item.select) {
        arrayids.push(item.id);
      }
    });
    axios
      .delete("http://localhost/scandiweb/src/api/index.php")
      .then(redirectForHome);
    console.log(arrayids);
  };

  const navigate = useNavigate();
  const redirectForAdd = () => {
    navigate("/addproduct");
  };
  const redirectForHome = () => {
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col header-left">
        <Navbar title="Product List" />
      </div>
      <div className="col header-right">
        <div className="float-end">
          <button onClick={redirectForAdd}>ADD</button>
          <button
            onClick={() => {
              deleteProductById();
            }}
            className="delete-checkbox"
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <form id="product_form">
        <hr></hr>
        <div className="col-sm-12">
          <div className="product-card-body">
            <ul className="product-card-ul">
              {items.map((item) => (
                <li className="card" key={item.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="m-2 delete-checkbox"
                      value={item.id}
                      name={item.id}
                      onChange={(e) => {
                        item.select = e.target.checked;
                        setItems(items);
                      }}
                      title="test"
                    />
                  </label>
                  <p className="text-center product-card-text">{item.sku}</p>
                  <p className="text-center product-card-text">{item.name}</p>
                  <p className="text-center product-card-text">
                    {item.price} $
                  </p>
                  <div>
                    {item.type === "DVD" && (
                      <p className="text-center product-card-text">
                        Size: {item.attribute}MB
                      </p>
                    )}
                    {item.type === "Book" && (
                      <p className="text-center product-card-text">
                       Weight: {item.attribute}KG
                      </p>
                    )}
                    {item.type === "Furniture" && (
                      <p className="text-center product-card-text">
                        Dimension: {item.attribute}x{item.attribute2}x{item.attribute3}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default List;
