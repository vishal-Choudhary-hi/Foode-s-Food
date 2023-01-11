import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [showModal, setShowModal] = useState(false);
  const showCart = () => {
    console.log(showModal);
    setShowModal(true);
  };
  const hideCart = () => {
    setShowModal(false);
  };
  return (
    <ContextProvider>
      {showModal && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
