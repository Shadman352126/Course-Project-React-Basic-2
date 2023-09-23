import { useEffect, useState } from "react";
import Item from "./item";

const Items = ({ selectedBtnHandleClick }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 ml-3">
      {items.map((item) => (
        <Item
          key={item.price}
          item={item}
          selectedBtnHandleClick={selectedBtnHandleClick}
        />
      ))}
    </div>
  );
};

export default Items;
