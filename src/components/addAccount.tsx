import { useState } from "react";
import { addAccount } from "../hooks/account/add";
import { AccountType } from "../types";

export default function AddAccount({
  setAccountState,
}: {
  setAccountState: Function;
}) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isBuyer, setIsBuyer] = useState<boolean>(false);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthYear, setBirthYear] = useState<Date>(new Date());
  const [drivingLicenseType, setDrivingLicenseType] = useState<string>("");
  const [drivingExperience, setDrivingExperience] = useState<Date>(new Date());
  const [companyName, setCompanyName] = useState<string>("");
  const [taxNumber, setTaxNumber] = useState<number>(0);
  const [taxOffice, setTaxOffice] = useState<string>("");

  const handleAddAccount = () => {
    addAccount(setAccountState, {
      username,
      password,
      mail: email,
      isBuyer,
      isSeller,
      firstName,
      middleName,
      lastName,
      birthYear: birthYear.toDateString(),
      drivingLicenseType,
      drivingExperience: drivingExperience.toDateString(),
      companyName,
      taxNumber: taxNumber,
      taxOffice,
    } as AccountType);
  };

  return (
    <div className="mt-4">
      <h2 className="text-4xl">Add Account</h2>
      <span className="flex h-px bg-white bg-opacity-20 my-4"></span>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
            required
          />
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked={isBuyer}
              onChange={(e) => setIsBuyer(e.target.checked)}
              className="rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
            />
            <label className="text-white my-auto">Buyer</label>
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              checked={isSeller}
              onChange={(e) => setIsSeller(e.target.checked)}
              className="rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
            />
            <label className="text-white my-auto">Seller</label>
          </div>
        </div>
        {isBuyer && (
          <>
            <h2 className="text-2xl mt-2">Buyer Info</h2>
            <div className="grid grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white h-fit my-auto"
                required={isBuyer}
              />
              <input
                type="text"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white h-fit my-auto"
                required={isBuyer}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white h-fit my-auto"
                required={isBuyer}
              />
              <div className="flex flex-col">
                <label htmlFor="birth">Birth Date</label>
                <input
                  type="date"
                  name="birth"
                  onChange={(e) => setBirthYear(new Date(e.target.value))}
                  className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
                  required={isBuyer}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="licence">License Type</label>
                <select
                  name="licence"
                  className="rounded-lg bg-[#1a1a1a] px-2 py-3 my-auto h-fit"
                  value={drivingLicenseType}
                  onChange={(e) => setDrivingLicenseType(e.target.value)}
                  required={isBuyer}
                >
                  <option value="a">A</option>
                  <option value="a1">A1</option>
                  <option value="a2">A2</option>
                  <option value="m">M</option>
                  <option value="b">B</option>
                  <option value="b1">B1</option>
                  <option value="be">BE</option>
                  <option value="c">C</option>
                  <option value="c1">C1</option>
                  <option value="ce">CE</option>
                  <option value="c1e">C1E</option>
                  <option value="d">D</option>
                  <option value="d1">D1</option>
                  <option value="de">DE</option>
                  <option value="d1e">D1E</option>
                  <option value="g">G</option>
                  <option value="f">F</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="experience">Driving Since</label>
                <input
                  type="date"
                  name="experience"
                  onChange={(e) =>
                    setDrivingExperience(new Date(e.target.value))
                  }
                  className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
                  required={isBuyer}
                />
              </div>
            </div>
          </>
        )}
        {isSeller && (
          <>
            <h2 className="text-2xl mt-2">Seller Info</h2>
            <div className="grid grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white h-fit my-auto"
                required={isSeller}
              />
              <div className="flex flex-col">
                <label htmlFor="taxno">Tax Number</label>
                <input
                  type="number"
                  name="taxno"
                  placeholder="Tax Number"
                  value={taxNumber}
                  onChange={(e) => setTaxNumber(parseInt(e.target.value))}
                  className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white"
                  required={isSeller}
                />
              </div>
              <input
                type="text"
                placeholder="Tax Office"
                value={taxOffice}
                onChange={(e) => setTaxOffice(e.target.value)}
                className="p-2 rounded-lg border border-[#1a1a1a] bg-[#1a1a1a] text-white h-fit my-auto"
                required={isSeller}
              />
            </div>
          </>
        )}
        <button onClick={handleAddAccount}>Add Account</button>
      </div>
    </div>
  );
}
