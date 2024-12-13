import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { Vehicle, VehicleExtra } from "../../types";
import { getFourWheel, getVehicle } from "../../hooks/vehicle/get";

export default function EditVehicle() {
  const { vinPlate } = useParams();
  const [vin, plateNo] = vinPlate!.split(";");

  const [vehicle, setVehicle] = useState<Vehicle>();
  const [vehicleExtra, setVehicleExtra] = useState<VehicleExtra>();

  useEffect(() => {
    getVehicle(Number(vin), plateNo, setVehicle);
  }, [vinPlate]);

  return (
    <div className="px-8 py-4 flex flex-col gap-4 w-[99vw]">
      <NavLink
        to="/vehicles"
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
      <div className="flex flex-row gap-8">
        <h2 className="text-4xl">Edit Vehicle</h2>
      </div>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
      <h3 className="text-2xl">Vehicle Data</h3>
      <div className="grid grid-cols-6 gap-4"></div>
    </div>
  );
}
