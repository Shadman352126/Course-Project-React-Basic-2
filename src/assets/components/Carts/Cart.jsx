const Cart = ({ item }) => {
  const { courseName } = item;

  return (
    <div className="pl-3">
      <li className="list-decimal">{courseName}</li>
    </div>
  );
};

export default Cart;
