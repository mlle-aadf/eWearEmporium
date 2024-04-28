import {
  ProductsContainer,
  ProductCard,
  ProductImg,
  ProductName,
  Price,
  Loading,
} from "./StyledComponents";

const Items = ({ products }) => {
  return (
    <>
      {!products || products === null ? (
        // Displays loading message if "products" value is not available 
        <Loading>Loading . . .</Loading>
      ) : (
        <ProductsContainer>
          {/* renders a product card for each item in returned products array */}
          {products.map((product) => {
            const { imageSrc, name, price, _id } = product;

            return (
              // Displays product image and info on rendered cards
              <ProductCard key={_id} to={`/products/${_id}`}>
                <ProductImg src={imageSrc} alt={name} />
                <ProductName>{name}</ProductName>
                <Price>{price}</Price>
              </ProductCard>
            );
          })}
        </ProductsContainer>
      )}
    </>
  );
};

export default Items;
