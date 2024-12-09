import { NavLink } from "react-router";
import AccountIcon from "./components/svg/account";
import VehicleIcon from "./components/svg/vehicle";
import ListingIcon from "./components/svg/listing";
import RentsIcon from "./components/svg/rents";

function App() {
  return (
    <div className="flex w-screen h-screen justify-center relative">
      <h1 className="absolute top-24">CMPE341 Group 5</h1>
      <div className="flex gap-12 m-auto h-fit">
        <NavLink to="accounts" className="flex flex-col justify-center text-white gap-2 border border-white border-opacity-10 rounded-lg p-8 transition-all hover:scale-105">
          <AccountIcon/>
          <p>Accounts</p>
        </NavLink>
        <NavLink to="vehicles" className="flex flex-col justify-center text-white gap-2 border border-white border-opacity-10 rounded-lg p-8 transition-all hover:scale-105">
          <VehicleIcon/>
          <p>Vehicles</p>
        </NavLink>
        <NavLink to="listings" className="flex flex-col justify-center text-white gap-2 border border-white border-opacity-10 rounded-lg p-8 transition-all hover:scale-105">
          <ListingIcon/>
          <p>Listings</p>
        </NavLink>
        <NavLink to="rentings" className="flex flex-col justify-center text-white gap-2 border border-white border-opacity-10 rounded-lg p-8 transition-all hover:scale-105">
          <RentsIcon/>
          <p>Rentings</p>
        </NavLink>
      </div>
    </div>
  );
}

export default App;
