import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Account from "./pages/account.tsx";
import Vehicle from "./pages/vehicle.tsx";
import Listing from "./pages/listing.tsx";
import Rents from "./pages/rents.tsx";
import EditAccount from "./pages/edit/account.tsx";
import EditVehicle from "./pages/edit/vehicle.tsx";
import EditListing from "./pages/edit/listing.tsx";
import EditRenting from "./pages/edit/rents.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="accounts">
        <Route index element={<Account />} />
        <Route path="edit/:uuid" element={<EditAccount />} />
      </Route>
      <Route path="vehicles">
        <Route index element={<Vehicle />} />
        <Route path="edit/:vinPlate" element={<EditVehicle />} />
      </Route>
      <Route path="listings">
        <Route index element={<Listing />} />
        <Route path="edit/:listingId" element={<EditListing />} />
      </Route>
      <Route path="rentings">
        <Route index element={<Rents />} />
        <Route path="edit/:transactionId" element={<EditRenting />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
