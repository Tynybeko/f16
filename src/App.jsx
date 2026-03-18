import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import './App.css'
import ContactDetail from "./pages/ContactDetail";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";
import { createContext, useState } from "react";
import PrivateLayout from "./layouts/PrivateLayout";
import Login from "./pages/Login";
export const CartContext = createContext();

export default function App() {
  const [state, setState] = useState(1)
  return (
    <>
      <Header />
      <CartContext.Provider value={[state, setState]}>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="contact/:contactID" element={<ContactDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </CartContext.Provider>
    </>

  )
}
