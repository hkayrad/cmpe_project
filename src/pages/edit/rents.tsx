import { NavLink, useParams } from "react-router";
import { RentType } from "../../types";
import { useEffect, useState } from "react";
import { updateRentingInfo } from "../../hooks/rents/update";
import { getRentInfoFromID } from "../../hooks/rents/get";

export default function EditRenting() {
  const [renting, setRenting] = useState<RentType>();
  const [loading, setLoading] = useState(false);
  const { transactionId } = useParams();

  const updateRenting = () => {
    setLoading(true);
    updateRentingInfo(renting!);
    setLoading(false);
  };

  useEffect(() => {
    getRentInfoFromID(setRenting, transactionId!);
  }, [transactionId]);

  return (
    <div className="px-8 py-4 flex flex-col gap-4 w-[99vw]">
      <NavLink
        to="/listings"
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
        <h2 className="text-4xl">Edit Renting</h2>
      </div>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Transaction ID</label>
          <input
            type="text"
            disabled
            value={renting?.transaction_id}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Buyer ID</label>
          <input
            type="text"
            value={renting?.buyer_uuid}
            onChange={(e) =>
              setRenting({ ...renting!, buyer_uuid: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Listing ID</label>
          <input
            type="text"
            value={renting?.listing_id}
            onChange={(e) =>
              setRenting({ ...renting!, listing_id: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Total Price</label>
          <input
            type="number"
            value={renting?.total_price}
            onChange={(e) =>
              setRenting({ ...renting!, total_price: parseInt(e.target.value) })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Payment Status</label>
          <input
            type="text"
            value={renting?.payment_status}
            onChange={(e) =>
              setRenting({ ...renting!, payment_status: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Payment Medium</label>
          <input
            type="text"
            value={renting?.payment_medium}
            onChange={(e) =>
              setRenting({ ...renting!, payment_medium: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Dropoff Location</label>
          <input
            type="text"
            value={renting?.dropoff_location}
            onChange={(e) =>
              setRenting({ ...renting!, dropoff_location: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Renting Start Date</label>
          <input
            type="date"
            value={renting?.renting_start_date}
            onChange={(e) =>
              setRenting({ ...renting!, renting_start_date: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Renting End Date</label>
          <input
            type="date"
            value={renting?.renting_end_date}
            onChange={(e) =>
              setRenting({ ...renting!, renting_end_date: e.target.value })
            }
            className="p-2"
          />
        </div>
      </div>
      <button
        onClick={updateRenting}
        disabled={loading}
        className="w-fit mt-12 mx-auto bg-slate-200 text-black"
      >
        Submit Changes
      </button>
    </div>
  );
}
