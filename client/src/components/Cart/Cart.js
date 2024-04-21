import CartItem from "./CartItem";

const Cart = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "20px",
          border: "1px solid black",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <div>Your cart is empty</div>
        <CartItem />
      </div>
    </>
  );
};

export default Cart;
