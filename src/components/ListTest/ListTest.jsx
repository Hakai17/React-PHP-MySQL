import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/scandiweb/src/api/index.php")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <form id="product_form" action="/" method="post">
      <div className="row">
        <div className="col-sm-4">
          <div className="card product-card">
            <div className="card-body">
              <label>
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  name=""
                  value=""
                />
              </label>
              <div className="product-card-body">
                <ul>
                  {list.map((item) => (
                    <li key={item.id}>
                      <p className="product-card-text">{item.sku}</p>
                      <p className="product-card-text">{item.name}</p>
                      <p className="product-card-text">{item.price}</p>
                      <p className="product-card-text">{item.atributte}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default List;
