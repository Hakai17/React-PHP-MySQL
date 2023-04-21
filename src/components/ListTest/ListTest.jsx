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

  const handleDelete = async () => {
    const selectedItems = items.filter((item) => item.checked);
    const selectedIds = selectedItems.map((item) => item.id);
    try {
      await axios.delete("http://localhost/scandiweb/src/api/index.php", {
        data: { ids: selectedIds },
      });
      setItems((prevItems) =>
        prevItems.filter((item) => !selectedIds.includes(item.id))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxChange = (event) => {
    const id = Number(event.target.value);
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const navigate = useNavigate();
  const redirectForAdd = () => {
    navigate("/addproduct");
  };

  return (
    <form id="product_form" method="POST">
      <div className="row">
        <div className="col header-left">
          <Navbar title="Product List" />
        </div>
        <div className="col header-right">
          <div className="float-end">
            <button onClick={redirectForAdd}>ADD</button>
            <button onClick={handleDelete} id="delete-product-btn">
              MASS DELETE
            </button>
          </div>
        </div>
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
                      name={`checkbox${item.id}`}
                      checked={item.checked}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <p className="text-center product-card-text">{item.sku}</p>
                  <p className="text-center product-card-text">{item.name}</p>
                  <p className="text-center product-card-text">{item.price}</p>
                  <p className="text-center product-card-text">
                    {item.atributte}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}

export default List;
