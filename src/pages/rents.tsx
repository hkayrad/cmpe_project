import { useEffect, useState } from "react";
import { ascDsc, RentType } from "../types";
import { NavLink } from "react-router";
import { getRents } from "../hooks/rents/get";
import RentingDetails from "../components/rentingDetails";

export default function Rents() {
  const [rentsData, setRentsData] = useState<Array<RentType>>();
  const [orderType, setOrderType] = useState<ascDsc>(ascDsc.asc);
  const [orderBy, setOrderBy] = useState<string>("transaction_id");

  function changeOrder() {
    setOrderType(orderType === ascDsc.asc ? ascDsc.dsc : ascDsc.asc);
  }

  function changeOrderBy(e: any) {
    setOrderBy(e.target.value);
  }

  useEffect(() => {
    getRents(setRentsData, orderBy, orderType);
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
        <h2 className="text-4xl">Rentings</h2>
        <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
        <div className="flex gap-2">
          <select
            name=""
            className="rounded-lg bg-[#1a1a1a] px-2"
            onChange={changeOrderBy}
          >
            <option value="transaction_id">ID</option>
          </select>
          <button onClick={changeOrder}>
            Order By: {orderType === ascDsc.asc ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>
      {rentsData && (
        <div>
          {rentsData.map((renting: any) => (
            <>
              <RentingDetails
                key={renting.transaction_id}
                renting={renting}
                setState={setRentsData}
              />
              <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
