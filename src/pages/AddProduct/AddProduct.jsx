import React from "react";
import Footer from "../../components/Footer/Footer";
import AddBody from "../../components/AddBody/AddBody";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/pages.css"

export default function AddProduct() {
  return (
    <>
      <div className="row">
        <div className="col header-left">
          <Navbar title="Product Add" />
        </div>
        <div className="col header-right">
          <div className="float-end">
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
      <hr />
      <AddBody />
      <hr />
      <Footer />
    </>
  );
}
