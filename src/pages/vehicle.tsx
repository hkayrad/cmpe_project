import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getExtra, getVehicles } from "../hooks/vehicle/get";
import VehicleDetails from "../components/vehicleDetails";
import { addVehicle } from "../hooks/vehicle/add";
import { ascDsc } from "../types";
import type { Vehicle } from "../types";

export default function Vehicle() {
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [orderType, setOrderType] = useState<ascDsc>(ascDsc.asc);
  const [orderBy, setOrderBy] = useState<string>("km");

  function changeOrder() {
    setOrderType(orderType === ascDsc.asc ? ascDsc.dsc : ascDsc.asc);
  }

  function changeOrderBy(e: any) {
    setOrderBy(e.target.value);
  }

  useEffect(() => {
    getVehicles(setVehicleData, orderBy, orderType);
  }, [orderType, orderBy]);

  return (
    <div className="px-8 py-4 flex flex-col gap-4 w-[99vw]">
      <NavLink
        to="/"
        className="hover:bg-slate-100 hover:bg-opacity-10 transition-all p-2 rounded-full w-fit text-white hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-fit"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </NavLink>
      <h2 className="text-4xl">Vehicle Data</h2>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>

      {vehicleData && (
        <div className="grid grid-cols-5 gap-4">
          {vehicleData.map((vehicle: any) => (
            <VehicleDetails
              key={vehicle.vin}
              vehicle={vehicle}
              extra={getExtra(vehicle.vin, vehicle.plate_no)}
              setState={setVehicleData}
            />
          ))}
        </div>
      )}
      <div>
        <h2 className="text-4xl">Control</h2>
        <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
        <div className="flex gap-2">
          <select
            name=""
            className="rounded-lg bg-[#1a1a1a] px-2"
            onChange={changeOrderBy}
          >
            <option value="km">Kilometers</option>
            <option value="vin">VIN</option>
            <option value="plate_no">Plate No</option>
            <option value="fuel_capacity">Fuel Capacity</option>
          </select>
          <button onClick={changeOrder}>
            Order By: {orderType === ascDsc.asc ? "Ascending" : "Descending"}
          </button>
          <button
            onClick={() => {
              addVehicle(setVehicleData, {
                vin: Math.floor(
                  Math.random() * (99999999 - 10000000) + 10000000
                ),
                plate_no: `${Math.floor(
                  Math.random() * (99999999 - 10000000) + 10000000
                )}`,
                make: "BMW",
                model: "320i",
                km: Math.floor(Math.random() * 400000),
                fuel: "Petrol",
                transmission: "Automatic",
                seat_count: 1,
                emission: Math.random(),
                year: new Date("2011-01-01"),
                required_driving_license_type: "B",
                hp: 170,
                fuel_capacity: 65,
                is_luxury: true,
                luggage_capacity: 500
              } as Vehicle);
            }}
          >
            Add Random Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}
