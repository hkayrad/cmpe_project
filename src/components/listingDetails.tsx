import { useState } from "react";
import { ListingType } from "../types";
import { deleteListing } from "../hooks/listing/delete";
import { NavLink } from "react-router";

export default function ListingDetails({
  setState,
  listing,
}: {
  setState: Function;
  listing: ListingType;
}) {
  const [hover, setHover] = useState(false);

  const images = listing.listing_images.images;

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
        onClick={() => deleteListing(setState, listing.listing_id)}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg=="
          className="brightness-0 invert w-5"
        />
      </div>
      <NavLink to={`edit/${listing.listing_id}`}
        className={`flex bg-green-600 p-2 rounded-full absolute -top-3 right-8 cursor-pointer ${
          hover ? "" : "hidden"
        }`}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbmNpbCI+PHBhdGggZD0iTTIxLjE3NCA2LjgxMmExIDEgMCAwIDAtMy45ODYtMy45ODdMMy44NDIgMTYuMTc0YTIgMiAwIDAgMC0uNS44M2wtMS4zMjEgNC4zNTJhLjUuNSAwIDAgMCAuNjIzLjYyMmw0LjM1My0xLjMyYTIgMiAwIDAgMCAuODMtLjQ5N3oiLz48cGF0aCBkPSJtMTUgNSA0IDQiLz48L3N2Zz4="
          className="brightness-0 invert w-5"
        />
      </NavLink>
      <table className="flex flex-col max-w-full">
        <tr className="grid grid-cols-8 min-w-full">
          <th>Listing ID</th>
          <th>Price</th>
          <th>Listed At</th>
          <th>Pickup Location</th>
          <th>Min. Driving Exp.</th>
          <th>Seller UUID</th>
          <th>Listed Veh. VIN</th>
          <th>Listed Plate No.</th>
        </tr>
        <tr className="grid grid-cols-8 min-w-full text-center gap-2 mt-2">
          <td className="bg-[#303030]">
            <p
              className="line-clamp-1"
              title="Click to copy"
              onClick={() => navigator.clipboard.writeText(listing.listing_id)}
            >
              {listing.listing_id}
            </p>
          </td>
          <td className="bg-[#303030]">{listing.price}</td>
          <td className="bg-[#303030]">{listing.listed_at}</td>
          <td className="bg-[#303030]">{listing.pickup_location}</td>
          <td className="bg-[#303030]">{listing.minimum_driving_experience}</td>
          <td className="bg-[#303030]">
            <p
              className="line-clamp-1"
              title="Click to copy"
              onClick={() => navigator.clipboard.writeText(listing.seller_uuid)}
            >
              {listing.seller_uuid}
            </p>
          </td>
          <td className="bg-[#303030]">{listing.listed_vehicle_vin}</td>
          <td className="bg-[#303030]">{listing.listed_vehicle_plate_no}</td>
        </tr>
        {images[0] != null ? (
          <div className="flex flex-col justify-center mt-4">
            <h2 className="mx-auto mb-2">Images</h2>
            <div className="flex gap-2 overflow-x-scroll relative">
              {images.map((image: string) => (
                <img
                  src={image}
                  title="Click to copy img url"
                  onClick={() => navigator.clipboard.writeText(image)}
                  className="mx-auto w-48"
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </table>
    </div>
  );
}
