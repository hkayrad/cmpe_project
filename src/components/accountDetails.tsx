import { useEffect, useState } from "react";
import { deleteAccount } from "../hooks/account/delete";
import { getBuyerInfo, getSellerInfo } from "../hooks/account/get";
import { AccountType } from "../types";

export default function AccountDetails({
  setState,
  account,
}: {
  setState: Function;
  account: AccountType;
}) {
  const [hover, setHover] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState<any>([]);
  const [sellerInfo, setSellerInfo] = useState<any>([]);

  useEffect(() => {
    getBuyerInfo(setBuyerInfo, account.id);
    getSellerInfo(setSellerInfo, account.id);
  }, []);

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
        onClick={() => deleteAccount(setState, account.id)}
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg=="
          className="brightness-0 invert w-5"
        />
      </div>
      <table className="flex flex-col max-w-full">
        <tr className="grid grid-cols-5 min-w-full">
          <th>Username</th>
          <th>Mail</th>
          <th>Created At</th>
          <th>Is Buyer</th>
          <th>Is Seller</th>
        </tr>
        <tr className="grid grid-cols-5 min-w-full text-center gap-2 mt-2">
          <td className="bg-[#303030]">{account.username}</td>
          <td className="bg-[#303030]">{account.mail}</td>
          <td className="bg-[#303030]">{account.created_at}</td>
          <td className="text-center bg-[#303030]">
            <input
              type="checkbox"
              checked={buyerInfo[0] != null ? true : false}
            />
          </td>
          <td className="text-center bg-[#303030]">
            <input
              type="checkbox"
              checked={sellerInfo[0] != null ? true : false}
            />
          </td>
        </tr>
      </table>
      <div className="flex flex-col ml-32">
        {buyerInfo[0] != null ? (
          <table className="mt-4">
            <tr className="grid grid-cols-5">
              <th></th>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Driving License Type</th>
              <th>Driving Since</th>
            </tr>
            <tr className="grid grid-cols-5 text-center gap-2 mt-2">
              <th>Buyer Information</th>
              <td className="bg-[#303030]">{`${buyerInfo[0].first_name} ${
                buyerInfo[0].middle_name ?? ""
              } ${buyerInfo[0].last_name}`}</td>
              <td className="bg-[#303030]">{buyerInfo[0].birth_year}</td>
              <td className="bg-[#303030]">
                {buyerInfo[0].driving_license_type.toUpperCase()}
              </td>
              <td className="bg-[#303030]">
                {buyerInfo[0].driving_experience}
              </td>
            </tr>
          </table>
        ) : (
          ""
        )}
        {sellerInfo[0] != null ? (
          <table className="mt-4">
            <tr className="grid grid-cols-5">
              <th></th>
              <th>Company Name</th>
              <th>Tax Office</th>
              <th>Tax Number</th>
            </tr>
            <tr className="grid grid-cols-5 text-center gap-2 mt-2">
              <th>Seller Information</th>
              <td className="bg-[#303030]">{sellerInfo[0].company_name}</td>
              <td className="bg-[#303030]">{sellerInfo[0].tax_office}</td>
              <td className="bg-[#303030]">{sellerInfo[0].tax_number}</td>
            </tr>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
