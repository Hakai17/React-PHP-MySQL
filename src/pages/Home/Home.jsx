import ListTest from "../../components/ListTest/ListTest";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "../../pages/pages.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const navigate = useNavigate();
  const redirectForAdd = () => {
    navigate("/addproduct");
  };

  return (
    <>
      <div className="row">
        <div className="col header-left">
          <Navbar title="Product List" />
        </div>
        <div className="col header-right">
          <div className="float-end">
            <button onClick={redirectForAdd}>ADD</button>
            <button id="delete-product-btn">MASS DELETE</button>
          </div>
        </div>
      </div>
      <hr />
      <ListTest />
      <hr />
      <Footer />
    </>
  );
}
