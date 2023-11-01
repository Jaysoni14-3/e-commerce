import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { useCartContext } from "../Context";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import { ToastContainer } from "react-toastify";

const CartDrawer = () => {
  const {
    isOpen,
    toggleCart,
    products,
    cartItems,
    removeFromCart,
    getCartTotal,
    // clearCart,
    productRemoved,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();

  const productsInCart = products.filter((product) => {
    return product.inCart === true;
  });

  const numberOfItemsInCart = productsInCart.length;
  var numberOfItem;
  if (numberOfItemsInCart === 1) {
    numberOfItem = "1 item";
  } else if (numberOfItemsInCart === 0) {
    numberOfItem = "";
  } else {
    numberOfItem = numberOfItemsInCart + " items";
  }

  return (
    <Drawer
      lockBackgroundScroll={false}
      open={isOpen}
      onClose={toggleCart}
      direction="right"
      style={{ width: "500px", maxWidth: "100%" }}
      className="bg-neutral-100 dark:bg-neutral-800"
      // size={500}
    >
      {/* HEADER */}
      <div className="px-4 py-2 drawer-header flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h1 className="text-textBlack dark:text-textWhite">Cart</h1>
          <span className="text-textBlack dark:text-textWhite">
            {numberOfItem}
          </span>
        </div>
        <div
          onClick={toggleCart}
          className="close-icon p-2 cursor-pointer rounded-full border w-max opacity-80 hover:opacity-100"
        >
          <LuX className="text-textBlack dark:text-textWhite" size={24} />
        </div>
      </div>
      <hr />
      {/* PRODUCTS */}
      <div className="cart-products flex flex-col gap-2 h-4/5 overflow-y-scroll px-4 pt-2 pb-4">
        {productsInCart.map((product) => (
          <article
            key={product.id}
            className="flex gap-4 border border-neutral-300 dark:border-neutral-700 rounded-md p-2"
          >
            <figure className="h-36 w-36 ">
              <img
                className="object-contain h-full w-full"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="product-details w-full flex flex-col">
              <h4 className="text-textBlack dark:text-textWhite">
                {product.title}
              </h4>
              <div className="price flex items-start mt-2">
                <span className="text-textBlack dark:text-textWhite">$</span>
                <h4 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                  {product.price}
                </h4>
              </div>
              {/* <div className="stock">
                <p className="text-sm text-green-500 opacity-70">In stock</p>
              </div> */}
              <div className="quantity my-2 flex gap-4">
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-6 h-6 rounded-full text-textWhite"
                >
                  <LuMinus />
                </button>
                <h4 className="w-6 text-textBlack dark:text-textWhite">
                  {product.quantity}
                </h4>
                <button
                  onClick={() => increaseQuantity(product)}
                  className="flex justify-center items-center bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all w-6 h-6 rounded-full text-textWhite"
                >
                  <LuPlus />
                </button>
              </div>
              <div className="bottom-section flex gap-4 items-center mt-auto">
                <div className="remove-btn">
                  <button
                    onClick={() => removeFromCart(product)}
                    className="px-3 py-1 text-textBlack dark:text-textWhite outline-none font-header-font font-normal text-base rounded-lg transition-colors ease-out duration-300 flex items-center justify-center bg-transparent hover:text-red-600 dark:hover:text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* BOTTOM */}
      <div className="absolute bottom-0 px-4 pb-2 z-50 border-t border-t-neutral-200 w-full ">
        {cartItems.length > 0 ? (
          <>
            <div className="ms-auto py-2 text-textBlack dark:text-textWhite">
              Total:{" "}
              <h1 className="text-textBlack dark:text-textWhite">
                ${getCartTotal()}
              </h1>
            </div>
            <div className="button-container flex flex-col  md:flex-row gap-4 mt-2">
              <button className="w-full bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all px-4 py-2 rounded text-textWhite">
                Proceed to checkout
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-textBlack dark:text-textWhite">
              Your cart is empty
            </h1>
            <button
              onClick={() => (window.location = "/")}
              className="mx-auto px-3 py-1 w-max border border-yellow-600 outline-none font-header-font font-normal text-base rounded-lg transition-colors ease-out duration-300 flex items-center justify-center bg-transparent hover:bg-yellow-500 text-yellow-600 hover:text-yellow-800 hover:border-yellow-800"
            >
              Shop now
            </button>
          </>
        )}
      </div>
      {productRemoved ? <ToastContainer /> : ""}
    </Drawer>
  );
};

export default CartDrawer;
