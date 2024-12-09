import { useState } from "react";
import { RentType } from "../types";
import { deleteRenting } from "../hooks/rents/delete";

export default function RentingDetails({
  setState,
  renting,
}: {
  setState: Function;
  renting: RentType;
}) {
  const [hover, setHover] = useState(false);

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
        onClick={() => deleteRenting(setState, renting.transaction_id)}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg=="
          className="brightness-0 invert w-5"
        />
      </div>
      <table className="flex flex-col max-w-full">
        <tr className="grid grid-cols-9 min-w-full">
          <th>Transaction ID</th>
          <th>Buyer UUID</th>
          <th>Listing ID</th>
          <th>Total Price</th>
          <th>Payment Status</th>
          <th>Payment Medium</th>
          <th>Dropoff Location</th>
          <th>Renting Start Date</th>
          <th>Renting End Date</th>
        </tr>
        <tr className="grid grid-cols-9 min-w-full text-center gap-2 mt-2">
          <td className="bg-[#303030]">
            <p
              className="line-clamp-1"
              title="Click to copy"
              onClick={() =>
                navigator.clipboard.writeText(renting.transaction_id)
              }
            >
              {renting.transaction_id}
            </p>
          </td>
          <td className="bg-[#303030]">
            <p
              className="line-clamp-1"
              title="Click to copy"
              onClick={() => navigator.clipboard.writeText(renting.buyer_uuid)}
            >
              {renting.buyer_uuid}
            </p>
          </td>
          <td className="bg-[#303030]">
            <p
              className="line-clamp-1"
              title="Click to copy"
              onClick={() => navigator.clipboard.writeText(renting.listing_id)}
            >
              {renting.listing_id}
            </p>
          </td>
          <td className="bg-[#303030]">{renting.total_price}</td>
          <td className="bg-[#303030]">{renting.payment_status}</td>
          <td className="bg-[#303030]">{renting.payment_medium}</td>
          <td className="bg-[#303030]">{renting.dropoff_location}</td>
          <td className="bg-[#303030]">{renting.renting_start_date}</td>
          <td className="bg-[#303030]">{renting.renting_end_date}</td>
        </tr>
      </table>
    </div>
  );
}
