import { useEffect, useState } from "react";
import Products from "./components/Product/Product";
import "./App.css";
import { ProductObject, ShoppingCartObject } from "./interfaces/index";
import CartIcon from "./components/Cart/CartIcon";

function App() {
  const [getProducts, setGetProducts] = useState<ProductObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartObject>({
    items: 0,
    cartItems: [],
    total: 0,
  });
  useEffect(() => {
    const getAllProduct = async () => {
      setLoading(true);
      try {
        const products = await fetch(
          "https://fakestoreapi.com/products?limit=12"
        );
        if (!products.ok) {
          throw new Error("something went wrong when getting product");
        }
        const response = await products?.json();
        response.forEach((product: any) => {
          product.quantity = 1;
        });
        setGetProducts(response);
      } catch (error) {
        console.log("error :>> ", error);
        setLoading(false);
      }
      setLoading(false);
    };
    getAllProduct();
  }, []);
  console.log("getProducts :>> ", getProducts);
  const addToCartHandler = (item: ProductObject): void => {
    setShoppingCart((prev): ShoppingCartObject => {
      const { items, cartItems, total } = prev;

      let findId = cartItems.findIndex(
        (prod: ProductObject) => prod.id === item.id
      );
      if (findId < 0) {
        return {
          ...prev,
          items: items + 1,
          cartItems: [...cartItems, item],
          total: total + item.price,
        };
      } else {
        let productFound = cartItems[findId];
        const updatedProduct = {
          ...productFound,
          quantity: productFound.quantity + 1,
        };
        return {
          ...prev,
          total: Number((total + productFound?.price).toFixed(2)),
          items: items + 1,
          cartItems: cartItems.splice(findId, 1, updatedProduct),
        };
      }
    });
  };
  const removeToCartHandler = (id: number): void => {};
  console.log("shoppingCart :>> ", shoppingCart);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping App Demo</h1>
        <div className="icon">
          <CartIcon />
          <span>{shoppingCart.items}</span>
        </div>
      </header>
      {loading && <p>Getting Products ...</p>}
      {!loading && getProducts && (
        <Products allProducts={getProducts} onAdd={addToCartHandler} />
      )}
    </div>
  );
}

export default App;
