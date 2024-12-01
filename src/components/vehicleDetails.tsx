import { useEffect, useState } from "react";
import { deleteVehicle } from "../hooks/vehicle/delete";
import { getExtra } from "../hooks/vehicle/get";

export default function VehicleDetails({
  vehicle,
  extra,
  setState,
}: {
  vehicle: any;
  extra: any;
  setState: Function;
}) {
  const [hover, setHover] = useState(false);
  const [extraData, setExtraData] = useState<any>(null);

  
  useEffect(() => {
    extra.then((data: any) => setExtraData(data[0]));
    console.log(extraData);

  }, [extra]);


  return (
    <div
      className="bg-[#1a1a1a] flex flex-col p-4 rounded-lg border border-[#1a1a1a] hover:border hover:border-amber-400 transition-all relative
    "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div
          className="absolute w-8 h-8 flex justify-center align-middle rounded-full bg-red-600 -top-3 -right-3 hover:cursor-pointer"
          onClick={() => deleteVehicle(vehicle.vin, vehicle.plate_no, setState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="m-auto"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </div>
      )}
      <p>
        <span className="font-bold">VIN: </span>
        {vehicle.vin}
      </p>
      <p>
        <span className="font-bold">Plate No: </span>
        {vehicle.plate_no}
      </p>
      <p>
        <span className="font-bold">Make: </span>
        {vehicle.make}
      </p>
      <p>
        <span className="font-bold">Model: </span>
        {vehicle.model}
      </p>
      <p>
        <span className="font-bold">KM: </span>
        {vehicle.km}
      </p>
      <p>
        <span className="font-bold">Fuel: </span>
        {vehicle.fuel}
      </p>
      <p>
        <span className="font-bold">Transmission: </span>
        {vehicle.transmission}
      </p>
      <p>
        <span className="font-bold">Seat Count: </span>
        {vehicle.seat_count}
      </p>
      <p>
        <span className="font-bold">Emission: </span>
        {vehicle.emission}
      </p>
      <p>
        <span className="font-bold">Year: </span>
        {vehicle.year}
      </p>
      <p>
        <span className="font-bold">RDLT: </span>
        {vehicle.required_driving_license_type}
      </p>
      <p>
        <span className="font-bold">HP: </span>
        {vehicle.hp}
      </p>
      <p>
        <span className="font-bold">Fuel Capacity: </span>
        {vehicle.fuel_capacity}
      </p>
      {extraData?.extra_luggage_container_available != null &&(
        <p>
          <span className="font-bold">Extra Luggage Container Available: </span>
          {extraData.extra_luggage_container_available ? "Yes" : "No"}
        </p>
      )}
      {extraData?.max_leaning_angle && (
        <p>
          <span className="font-bold">Max Leaning Angle: </span>
          {extraData.max_leaning_angle}
        </p>
      )}
      {extraData?.luggage_capacity && (
        <p>
          <span className="font-bold">Luggage Capacity: </span>
          {extraData.luggage_capacity}
        </p>
      )}
      {extraData?.is_luxury != null && (
        <p>
          <span className="font-bold">Is Luxury: </span>
          {extraData.is_luxury ? "Yes" : "No"}
        </p>
      )}
    </div>
  );
}
