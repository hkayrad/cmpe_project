import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Account from "./pages/account.tsx";
import Vehicle from "./pages/vehicle.tsx";
import Listing from "./pages/listing.tsx";
import Rents from "./pages/rents.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="accounts" element={<Account />} />
      <Route path="vehicles" element={<Vehicle />} />
      <Route path="listings" element={<Listing />} />
      <Route path="rentings" element={<Rents />} />
    </Routes>
  </BrowserRouter>
);
