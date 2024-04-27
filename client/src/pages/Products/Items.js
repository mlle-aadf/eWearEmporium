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
        <Loading>Loading . . .</Loading>
      ) : (
        <ProductsContainer>
          {products.map((product) => {
            const { imageSrc, name, price, _id } = product;

            return (
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
