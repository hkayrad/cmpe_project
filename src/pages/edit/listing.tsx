import { NavLink, useParams } from "react-router";
import { ListingType } from "../../types";
import { useEffect, useState } from "react";
import { getListingInfoFromUuid } from "../../hooks/listing/get";
import { updateListingInfo } from "../../hooks/listing/update";

export default function EditListing() {
  const [listing, setListing] = useState<ListingType>();
  const [loading, setLoading] = useState(false);
  const { listingId } = useParams();

  const updateListing = () => {
    setLoading(true);
    updateListingInfo(listing!);
    setLoading(false);
  };

  useEffect(() => {
    getListingInfoFromUuid(setListing, listingId!);
  }, [listingId]);

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
        <h2 className="text-4xl">Edit Listing</h2>
      </div>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Listing ID</label>
          <input
            type="text"
            disabled
            value={listing?.listing_id}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Listed At</label>
          <input
            type="text"
            disabled
            value={listing?.listed_at}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Price</label>
          <input
            type="number"
            value={listing?.price}
            onChange={(e) =>
              setListing({ ...listing!, price: parseInt(e.target.value) })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Pickup Location</label>
          <input
            type="text"
            value={listing?.pickup_location}
            onChange={(e) =>
              setListing({ ...listing!, pickup_location: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Seller UUID</label>
          <input
            type="text"
            value={listing?.seller_uuid}
            onChange={(e) =>
              setListing({ ...listing!, seller_uuid: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">
            Listed Vehicle VIN
          </label>
          <input
            type="number"
            value={listing?.listed_vehicle_vin}
            onChange={(e) =>
              setListing({
                ...listing!,
                listed_vehicle_vin: parseInt(e.target.value),
              })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">
            Listed Vehicle Plate
          </label>
          <input
            type="text"
            value={listing?.listed_vehicle_plate_no}
            onChange={(e) =>
              setListing({
                ...listing!,
                listed_vehicle_plate_no: e.target.value,
              })
            }
            className="p-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="px-2 py-1 font-bold italic">
          Listing Images (Comma Seperated)
        </label>
        <textarea
          value={listing?.listing_images.images}
          onChange={(e) =>
            setListing({ ...listing!, listing_images: { images: e.target.value.split(",") } })
          }
          className="p-2"
        />
      </div>
      <button
        onClick={updateListing}
        disabled={loading}
        className="w-fit mt-12 mx-auto bg-slate-200 text-black"
      >
        Submit Changes
      </button>
    </div>
  );
}
