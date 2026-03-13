import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import './App.css'
import ContactDetail from "./pages/ContactDetail";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:contactID" element={<ContactDetail />} />
        </Route>
      </Routes>
    </>

  )
}
