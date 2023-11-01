import { createContext, useContext, useState } from "react";
import { products } from "./products";
import { toast } from "react-toastify";

export const ProductContext = createContext();
export const CartContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export function ProductProvider({ children }) {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  const [productRemoved, setProductRemoved] = useState(false);

  // for cart drawer
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen((prevState) => !prevState);
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // Returns true if item already in cart

    if (isItemInCart) {
      toast.error("Already in your cart", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // console.log(item);

      item.inCart = true;
      item.quantity = item.quantity + 1;

      setCartItems([...cartItems, item]);

      setProductAdded(true);

      toast.success("Successfully added to your cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsOpen(true);
    }
  };

  const removeFromCart = (item) => {
    item.inCart = false;
    item.quantity = item.quantity + 0;

    setCartItems([...cartItems, item]);

    // setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

    setProductRemoved(true);

    toast.success("Removed from your cart", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    let ammount = 0;

    const priceArr = cartItems.filter((cartItem) => cartItem.inCart);

    priceArr.forEach((item) => {
      ammount = item.price * item.quantity;
      totalAmount += ammount;
    });
    return Number(totalAmount).toFixed(2);
  };

  const clearCart = () => {
    setProductRemoved(true);
    toast.success("Removed every thing from your cart", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return setCartItems([]);
  };

  const increaseQuantity = (item) => {
    setCartItems([...cartItems, { quantity: item.quantity++ }]);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      var deleteConfirm = confirm("Remove from cart?");
      if (deleteConfirm) {
        // alert("remove");
        removeFromCart(item);
      } else {
        return;
      }
    } else {
      setCartItems([...cartItems, { quantity: item.quantity-- }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        clearCart,
        productAdded,
        productRemoved,
        increaseQuantity,
        decreaseQuantity,
        toggleCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
