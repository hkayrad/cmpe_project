import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import {
  getAccountInfoFromUuid,
  getBuyerInfo,
  getSellerInfo,
} from "../../hooks/account/get";
import { AccountType, BuyerType, SellerType } from "../../types";
import { updateAccountInfo } from "../../hooks/account/update";

export default function EditAccount() {
  const { uuid } = useParams();
  const [account, setAccount] = useState<AccountType>();
  const [buyer, setBuyer] = useState<BuyerType>();
  const [seller, setSeller] = useState<SellerType>();
  const [isBuyer, setIsBuyer] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAccountInfoFromUuid(setAccount, uuid!);
    getBuyerInfo(setBuyer, uuid!);
    getSellerInfo(setSeller, uuid!);
    setIsBuyer(buyer ? true : false);
    setIsSeller(seller ? true : false);
  }, [uuid]);

  const updateAccount = () => {
    setLoading(true);
    updateAccountInfo(account!, buyer!, seller!, isBuyer, isSeller);
    setLoading(false);
  };

  console.log(account, buyer, seller);

  return (
    <div className="px-8 py-4 flex flex-col gap-4 w-[99vw]">
      <NavLink
        to="/accounts"
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
        <h2 className="text-4xl">Edit User</h2>
      </div>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
      <h3 className="text-2xl">General Account Data</h3>
      <div className="grid grid-cols-6 gap-4">
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">UUID</label>
          <input type="text" disabled value={account?.id} className="p-2" />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Created At</label>
          <input
            type="text"
            disabled
            value={account?.created_at}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Mail</label>
          <input
            type="text"
            value={account?.mail}
            onChange={(e) => setAccount({ ...account!, mail: e.target.value })}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Username</label>
          <input
            type="text"
            value={account?.username}
            onChange={(e) =>
              setAccount({ ...account!, username: e.target.value })
            }
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Is Buyer</label>
          <input
            type="checkbox"
            checked={isBuyer ? true : false}
            onChange={() => setIsBuyer(!isBuyer)}
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 py-1 font-bold italic">Is Seller</label>
          <input
            type="checkbox"
            checked={isSeller ? true : false}
            onChange={() => setIsSeller(!isSeller)}
            className="p-2"
          />
        </div>
      </div>
      {isBuyer && (
        <div>
          <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
          <h3 className="text-2xl">Buyer Data</h3>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">First Name</label>
              <input
                type="text"
                value={buyer?.first_name}
                onChange={(e) =>
                  setBuyer({ ...buyer!, first_name: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Middle Name</label>
              <input
                type="text"
                value={buyer?.middle_name}
                onChange={(e) =>
                  setBuyer({ ...buyer!, middle_name: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Last Name</label>
              <input
                type="text"
                value={buyer?.last_name}
                onChange={(e) =>
                  setBuyer({ ...buyer!, last_name: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Birth Year</label>
              <input
                type="date"
                value={buyer?.birth_year}
                onChange={(e) =>
                  setBuyer({ ...buyer!, birth_year: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">
                Driving License Type
              </label>
              <input
                type="text"
                value={buyer?.driving_license_type}
                onChange={(e) =>
                  setBuyer({ ...buyer!, driving_license_type: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">
                Driving Since
              </label>
              <input
                type="date"
                value={buyer?.driving_experience}
                onChange={(e) =>
                  setBuyer({ ...buyer!, driving_experience: e.target.value })
                }
                className="p-2"
              />
            </div>
          </div>
        </div>
      )}
      {isSeller && (
        <div>
          <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
          <h3 className="text-2xl">Seller Data</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Company Name</label>
              <input
                type="text"
                value={seller?.company_name}
                onChange={(e) =>
                  setSeller({ ...seller!, company_name: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Tax Office</label>
              <input
                type="text"
                value={seller?.tax_office}
                onChange={(e) =>
                  setSeller({ ...seller!, tax_office: e.target.value })
                }
                className="p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="px-2 py-1 font-bold italic">Tax Number</label>
              <input
                type="number"
                value={seller?.tax_number}
                onChange={(e) =>
                  setSeller({ ...seller!, tax_number: parseInt(e.target.value) })
                }
                className="p-2"
              />
            </div>
          </div>
        </div>
      )}
      <button
        onClick={updateAccount}
        disabled={loading}
        className="w-fit mt-12 mx-auto bg-slate-200 text-black"
      >
        Submit Changes
      </button>
    </div>
  );
}
