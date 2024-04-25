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
          zIndex: "2000",
        }}
      >
        <CartItem />
      </div>
    </>
  );
};

export default Cart;
