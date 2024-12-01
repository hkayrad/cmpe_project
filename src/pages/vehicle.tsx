import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getExtra, getVehicles } from "../hooks/vehicle/get";
import VehicleDetails from "../components/vehicleDetails";
import { addVehicle } from "../hooks/vehicle/add";
import type { Vehicle } from "../types";

export default function Vehicle() {
  const [vehicleData, setVehicleData] = useState<any>(null);

  useEffect(() => {
    getVehicles(setVehicleData);
  }, []);

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
        <button
          onClick={() => {
            addVehicle(setVehicleData, {
              vin: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
              plate_no: `${Math.floor(
                Math.random() * (99999999 - 10000000) + 10000000
              )}`,
              make: "Yamaha",
              model: "R25",
              km: Math.floor(Math.random() * 400000),
              fuel: "Petrol",
              transmission: "Manual",
              seat_count: 1,
              emission: Math.random(),
              year: new Date("2011-01-01"),
              required_driving_license_type: "A",
              hp: 36,
              fuel_capacity: 14,
              extra_luggage_container_available: false,
              max_leaning_angle: 45,
            } as Vehicle);
          }}
        >
          Add Random Vehicle
        </button>
      </div>
    </div>
  );
}
