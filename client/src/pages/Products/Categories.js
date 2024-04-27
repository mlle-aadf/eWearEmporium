import Checkbox from "react-custom-checkbox";
import check from "../../images/check.png";
import { categories } from "./StyledComponents";

const Categories = ({ filtersHandler }) => {
  return (
    <>
      <h3>Categories</h3>
      {categories.map((category) => {
        return (
          <Checkbox
            key={category}
            onChange={filtersHandler}
            borderColor="var(--nav-bar-color)"
            style={{ backgroundColor: "var(--nav-bar-color)" }}
            value={category}
            label={category}
            labelStyle={{ marginLeft: "0.5rem", fontSize: "1rem" }}
            containerStyle={{ margin: "0.75rem 0", cursor: "pointer" }}
            icon={<img src={check} style={{ height: "1rem" }} alt="check" />}
          />
        );
      })}
    </>
  );
};

export default Categories;
