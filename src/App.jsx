import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import './App.css'
import ContactDetail from "./pages/ContactDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contanctID" element={<ContactDetail />} />
      </Routes>
    </>

  )
}
