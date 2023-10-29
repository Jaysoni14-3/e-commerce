import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import { CartProvider, ProductProvider } from "./Context";
import FilterProductPage from "./Pages/FilterProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <div className="bg-neutral-100 dark:bg-neutral-800 min-h-screen">
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/product-details/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/product/:category" element={<FilterProductPage />} />
                </Routes>
              </main>
            </div>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
