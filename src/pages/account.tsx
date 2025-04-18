import { useEffect, useState } from "react";
import AccountDetails from "../components/accountDetails";
import { getAccounts } from "../hooks/account/get";
import { NavLink } from "react-router";
import { AccountType, ascDsc } from "../types";
import AddAccount from "../components/addAccount";

export default function Account() {
  const [accountData, setAccountData] = useState<Array<AccountType>>();
  const [orderType, setOrderType] = useState<ascDsc>(ascDsc.asc);
  const [orderBy, setOrderBy] = useState<string>("id");

  function changeOrder() {
    setOrderType(orderType === ascDsc.asc ? ascDsc.dsc : ascDsc.asc);
  }

  function changeOrderBy(e: any) {
    setOrderBy(e.target.value);
  }

  useEffect(() => {
    getAccounts(setAccountData, orderBy, orderType);
  }, [orderBy, orderType]);

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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-fit"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </NavLink>
      <div className="flex flex-row gap-8">
        <h2 className="text-4xl">Accounts Data</h2>
        <span className="h-11 w-px opacity-50 bg-white"></span>
        <div className="flex gap-2">
          <label htmlFor="orderCriteria" className="my-auto">
            Order Criteria:{" "}
          </label>
          <select
            name="orderCriteria"
            className="rounded-lg bg-[#1a1a1a] px-2"
            onChange={changeOrderBy}
          >
            <option value="id">ID</option>
            <option value="mail">Email</option>
            <option value="created_at">Register Date</option>
          </select>
          <button onClick={changeOrder}>
            Order By: {orderType === ascDsc.asc ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>

      {accountData && (
        <div>
          {accountData.map((account: any) => (
            <>
              <AccountDetails
                key={account.id}
                account={account}
                setState={setAccountData}
              />
              <span className="w-full h-px flex bg-white bg-opacity-50 my-4"></span>
            </>
          ))}
        </div>
      )}
      <div>
        <AddAccount setAccountState={setAccountData} />
      </div>
    </div>
  );
}
