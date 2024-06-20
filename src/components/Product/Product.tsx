import React from "react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";
import { ProductProps, ProductObject } from "../../interfaces";
import classes from "./Product.module.css";
const Products: React.FC<ProductProps> = ({ allProducts, onAdd }) => {
  const { product_container } = classes;
  return (
    <section id="products">
      <Container>
        <div className={product_container}>
          {allProducts.map((singleProduct: ProductObject) => (
            <Card key={singleProduct.id}>
              <ProductItem productItem={singleProduct} onAdd={onAdd} />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
