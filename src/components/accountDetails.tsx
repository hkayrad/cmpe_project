import { useEffect, useState } from "react";
import { deleteAccount } from "../hooks/account/delete";
import { getBuyerInfo, getSellerInfo } from "../hooks/account/get";

export default function AccountDetails({
  setState,
  account,
}: {
  setState: Function;
  account: any;
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
      className="bg-[#1a1a1a] flex flex-col p-4 rounded-lg border border-[#1a1a1a] hover:border hover:border-amber-400 transition-all relative
    "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div
          className="absolute w-8 h-8 flex justify-center align-middle rounded-full bg-red-600 -top-3 -right-3 hover:cursor-pointer"
          onClick={() => deleteAccount(setState, account.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
      <p className="mb-2 max-w-[32ch] break-words">
        <span className="font-bold">UUID: </span>
        {account.id}
      </p>
      <p className="mb-2 max-w-[32ch] break-words">
        <span className="font-bold">Register Date: </span>
        {account.created_at}
      </p>
      <p className="mb-2 max-w-[32ch] break-words">
        <span className="font-bold">Email: </span>
        {account.mail}
      </p>
      <p className="font-bold">User Password Hash:</p>
      <p className="max-w-[32ch] break-words">{account.password}</p>
      {buyerInfo[0] != null ? (
        <>
          <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
          <p className="font-bold">Buyer Info:</p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Name: </span>
            {buyerInfo[0].first_name}{" "}
            {buyerInfo[0].middle_name ? buyerInfo[0].middle_name : ""}{" "}
            {buyerInfo[0].last_name}
          </p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Birth Year: </span>
            {buyerInfo[0].birth_year}
          </p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Driving License Type: </span>
            {buyerInfo[0].driving_license_type}
          </p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Driving Experience: </span>
            {buyerInfo[0].driving_experience}
          </p>
        </>
      ) : (
        ""
      )}
      {sellerInfo[0] != null ? (
        <>
          <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
          <p className="font-bold">Seller Info:</p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Company Name: </span>
            {sellerInfo[0].company_name}
          </p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Tax Number: </span>
            {sellerInfo[0].tax_number}
          </p>
          <p className="mb-2 max-w-[32ch] break-words">
            <span className="font-bold">Tax Office: </span>
            {sellerInfo[0].tax_office}
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
