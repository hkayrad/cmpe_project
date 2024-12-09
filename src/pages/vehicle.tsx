import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getExtra, getVehicles } from "../hooks/vehicle/get";
import VehicleDetails from "../components/vehicleDetails";
import { addVehicle } from "../hooks/vehicle/add";
import { ascDsc } from "../types";
import type { Vehicle } from "../types";

export default function Vehicle() {
  const [vehicleData, setVehicleData] = useState<Array<Vehicle>>();
  const [orderType, setOrderType] = useState<ascDsc>(ascDsc.asc);
  const [orderBy, setOrderBy] = useState<string>("km");
  const [isTwoWheelOpen, setIsTwoWheelOpen] = useState<boolean>(true);
  const [isFourWheelOpen, setIsFourWheelOpen] = useState<boolean>(true);

  const vehicles = [
    {
      make: "BMW",
      model: "320i",
      fuel: "Petrol",
      transmission: "Automatic",
      seat_count: 5,
      required_driving_license_type: "B",
    },
    {
      make: "Mercedes",
      model: "C200",
      fuel: "Petrol",
      transmission: "Automatic",
      seat_count: 5,
      required_driving_license_type: "B",
    },
    {
      make: "Audi",
      model: "A6",
      fuel: "Diesel",
      transmission: "Automatic",
      seat_count: 5,
      required_driving_license_type: "B",
    },
    {
      make: "Volkswagen",
      model: "Passat",
      fuel: "Diesel",
      transmission: "Automatic",
      seat_count: 5,
      required_driving_license_type: "B",
    },
    {
      make: "Ford",
      model: "Focus",
      fuel: "Diesel",
      transmission: "Automatic",
      seat_count: 5,
      required_driving_license: "B",
    },
    {
      make: "Yamaha",
      model: "MT-07",
      fuel: "Petrol",
      transmission: "Manual",
      seat_count: 2,
      required_driving_license_type: "A2",
    },
    {
      make: "KTM",
      model: "Duke 390",
      fuel: "Petrol",
      transmission: "Manual",
      seat_count: 2,
      required_driving_license_type: "A2",
    },
  ];

  function randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toDateString();
  }

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
      <div className="mb-4">
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
            <option value="make">Make</option>
          </select>
          <button onClick={changeOrder}>
            Order By: {orderType === ascDsc.asc ? "Ascending" : "Descending"}
          </button>
          <button
            onClick={() => {
              const randomVehicle =
                vehicles[Math.floor(Math.random() * vehicles.length)];
              addVehicle(setVehicleData, {
                vin: Math.floor(
                  Math.random() * (99999999 - 10000000) + 10000000
                ),
                plate_no: `${Math.floor(
                  Math.random() * (99999999 - 10000000) + 10000000
                )}`,
                make: randomVehicle.make,
                model: randomVehicle.model,
                km: Math.floor(Math.random() * 400000),
                fuel: randomVehicle.fuel,
                transmission: randomVehicle.transmission,
                seat_count: randomVehicle.seat_count,
                emission: Math.random(),
                year: randomDate(new Date(2010, 0, 1), new Date()),
                required_driving_license_type:
                  randomVehicle.required_driving_license_type,
                hp: Math.floor(Math.random() * 300),
                fuel_capacity: Math.floor(Math.random() * 70),
                is_luxury: Math.random() > 0.5,
                luggage_capacity: Math.floor(Math.random() * 500),
              } as Vehicle);
            }}
          >
            Add Random Vehicle
          </button>
        </div>
      </div>

      {vehicleData && (
        <div className="flex flex-col">
          <h2
            className="text-4xl cursor-pointer flex gap-2"
            onClick={() => setIsTwoWheelOpen(!isTwoWheelOpen)}
          >
            <p className={isTwoWheelOpen ? "rotate-90" : "h-0"}>{">"}</p>
            <p>Two Wheel Data</p>
          </h2>
          <span
            className={`flex h-px bg-white bg-opacity-20 my-4 ${
              isTwoWheelOpen ? "h-px" : "h-0"
            }`}
          ></span>
          <div
            className={`flex flex-col gap-4 ${
              isTwoWheelOpen ? "h-auto" : "h-0 overflow-hidden"
            }`}
          >
            {vehicleData.map((vehicle: Vehicle) =>
              vehicle.required_driving_license_type == "A1" ||
              vehicle.required_driving_license_type == "A2" ||
              vehicle.required_driving_license_type == "A" ||
              vehicle.required_driving_license_type == "m" ? (
                <>
                  <VehicleDetails
                    key={vehicle.vin}
                    vehicle={vehicle}
                    extra={getExtra(vehicle.vin, vehicle.plate_no)}
                    setState={setVehicleData}
                  />
                  <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
                </>
              ) : (
                ""
              )
            )}
          </div>
          <h2
            className="text-4xl flex gap-2 cursor-pointer"
            onClick={() => setIsFourWheelOpen(!isFourWheelOpen)}
          >
            <p className={isFourWheelOpen ? "rotate-90" : "h-0"}>{">"}</p>
            <p>Four Wheel Data</p>
          </h2>
          <span
            className={`flex h-px bg-white bg-opacity-20 my-4 ${
              isFourWheelOpen ? "h-px" : "h-0"
            }`}
          ></span>
          <div
            className={`flex flex-col gap-4 ${
              isFourWheelOpen ? "h-auto" : "h-0 overflow-hidden"
            }`}
          >
            {vehicleData.map((vehicle: Vehicle) =>
              vehicle.required_driving_license_type !== "A1" &&
              vehicle.required_driving_license_type !== "A2" &&
              vehicle.required_driving_license_type !== "A" &&
              vehicle.required_driving_license_type !== "m" ? (
                <>
                  <VehicleDetails
                    key={vehicle.vin}
                    vehicle={vehicle}
                    extra={getExtra(vehicle.vin, vehicle.plate_no)}
                    setState={setVehicleData}
                  />
                  <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
                </>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
