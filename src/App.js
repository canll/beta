import "./App.css";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalChange } from "./Redux/control/productCartSlice";
function App() {
  const { productList } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalChange());
  }, [productList]);
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
