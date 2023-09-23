import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Carts from "./assets/components/Carts/Carts";
import Header from "./assets/components/header/Header";
import Items from "./assets/components/items/Items";
import Footer from "./assets/components/Footer/Footer";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalcredit, setTotalCredit] = useState(0);
  const [cardTotalPrice, setCardTotalPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const selectedBtnHandleClick = (item, credit, price) => {
    const isExist = selectedItems.find((findItem) => findItem.id == item.id);

    if (!isExist && credit <= remaining) {
      setSelectedItems([...selectedItems, item]);
      setTotalCredit(totalcredit + credit);
      setRemaining(remaining - credit);
      setCardTotalPrice(cardTotalPrice + price);
    } else {
      return toast(
        "Sorry!! An item cannot be added to the cart section twice and above 20 credits."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="md:flex">
        <Items selectedBtnHandleClick={selectedBtnHandleClick} />{" "}
        <Carts
          selectedItems={selectedItems}
          totalcredit={totalcredit}
          cardTotalPrice={cardTotalPrice}
          remaining={remaining}
        />{" "}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
