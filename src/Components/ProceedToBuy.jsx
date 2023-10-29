import { LuCheckCircle2 } from "react-icons/lu";

const ProceedToBuy = ({ productsInCart, getCartTotal }) => {
  const numberOfItemsInCart = productsInCart.length;
  var numberOfItem;
  if (numberOfItemsInCart === 1) {
    numberOfItem = "1 item";
  } else {
    numberOfItem = numberOfItemsInCart + " items";
  }

  return (
    <div
      className={`proceed-to-buy h-max w-full md:w-1/4 mt-4 px-2 py-4 border border-neutral-300 dark:border-neutral-700 rounded-md ${
        productsInCart.length > 0 ? "flex flex-col" : "hidden"
      }`}
    >
      <div className="top-bar flex items-center gap-2">
        <LuCheckCircle2 color="green" size={20} />
        <p className="text-green-600 text-sm">
          Your order is eligible for FREE Delivery.
        </p>
      </div>
      <div className="total-ammount my-4">
        <h3 className="text-textBlack dark:text-textWhite font-light">
          Subtotal ({numberOfItem}) :{" "}
          <span className="font-semibold">${getCartTotal()}</span>
        </h3>
      </div>
      <div className="button-container w-full">
        <button className="w-full bg-gradient-to-tr from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-700 transition-all px-4 py-2 rounded text-textWhite">
          Proceed to buy
        </button>
      </div>
    </div>
  );
};

export default ProceedToBuy;
