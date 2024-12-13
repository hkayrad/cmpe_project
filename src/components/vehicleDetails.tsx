import { useEffect, useState } from "react";
import { deleteVehicle } from "../hooks/vehicle/delete";
import { Vehicle } from "../types";
import { NavLink } from "react-router";

export default function VehicleDetails({
  vehicle,
  extra,
  setState,
}: {
  vehicle: Vehicle;
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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative border border-white border-opacity-10 rounded-lg p-4"
    >
      <div
        className={`flex bg-red-600 p-2 rounded-full absolute -top-3 -right-3 cursor-pointer ${
          hover ? "" : "hidden"
        }`}
        onClick={() => deleteVehicle(vehicle.vin, vehicle.plate_no, setState)}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg=="
          className="brightness-0 invert w-5"
        />
      </div>
      <NavLink to={`edit/${vehicle.vin};${vehicle.plate_no}`}
        className={`flex bg-green-600 p-2 rounded-full absolute -top-3 right-8 cursor-pointer ${
          hover ? "" : "hidden"
        }`}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbmNpbCI+PHBhdGggZD0iTTIxLjE3NCA2LjgxMmExIDEgMCAwIDAtMy45ODYtMy45ODdMMy44NDIgMTYuMTc0YTIgMiAwIDAgMC0uNS44M2wtMS4zMjEgNC4zNTJhLjUuNSAwIDAgMCAuNjIzLjYyMmw0LjM1My0xLjMyYTIgMiAwIDAgMCAuODMtLjQ5N3oiLz48cGF0aCBkPSJtMTUgNSA0IDQiLz48L3N2Zz4="
          className="brightness-0 invert w-5"
        />
      </NavLink>
      <table className="min-w-full flex flex-col">
        <tr className="min-w-full flex mb-2 text-center">
          <th className="w-[calc(100%/13)]">VIN</th>
          <th className="w-[calc(100%/13)]">Plate No</th>
          <th className="w-[calc(100%/13)]">Make</th>
          <th className="w-[calc(100%/13)]">Model</th>
          <th className="w-[calc(100%/13)]">HP</th>
          <th className="w-[calc(100%/13)]">KM</th>
          <th className="w-[calc(100%/13)]">Fuel</th>
          <th className="w-[calc(100%/13)]">Fuel Capacity</th>
          <th className="w-[calc(100%/13)]">Transmission</th>
          <th className="w-[calc(100%/13)]">Seat Count</th>
          <th className="w-[calc(100%/13)]">Emission</th>
          <th className="w-[calc(100%/13)]">Year</th>
          <th className="w-[calc(100%/13)]">RDLT</th>
        </tr>
        <tr className="min-w-full flex">
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.vin}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.plate_no}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.make}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.model}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.hp}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.km}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.fuel}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.fuel_capacity}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.transmission}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.seat_count}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.emission}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.year}</td>
          <td className="text-center bg-[#303030] w-[calc(100%/13)]">{vehicle.required_driving_license_type}</td>
        </tr>
      </table>
    </div>
  );
}
