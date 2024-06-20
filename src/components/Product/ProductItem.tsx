import { FC } from "react";
import { ProductItemProps } from "../../interfaces";
import classes from "./ProductItem.module.css";
const ProductItem: FC<ProductItemProps> = ({ productItem, onAdd }) => {
  const { content } = classes;
  return (
    <div className={content}>
      <img src={productItem.image} alt={productItem.title} />
      <h4>{productItem.title}</h4>
      <p>Price: {` $${productItem.price}`}</p>
      <button onClick={() => onAdd(productItem)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
