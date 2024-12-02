import { sha512 } from "js-sha512";
import { supabase } from "../../supabaseClient";
import { getAccountInfoFromUsername, getAccounts } from "./get";
import { AccountType } from "../../types";

export async function addAccount(
  setState: Function,
  account: AccountType
) {
  await supabase.from("account").insert({
    mail: account.mail,
    password: sha512(`${account.password}${account.username}`),
    username: account.username,
    account_type: false,
  });

  const data = await getAccountInfoFromUsername(account.username);

  if (account.isBuyer) {
    await supabase.from("buyer").insert({
      id: data![0].id,
      first_name: account.firstName,
      middle_name: account.middleName,
      last_name: account.lastName,
      birth_year: account.birthYear,
      driving_license_type: account.drivingLicenseType,
      driving_experience: account.drivingExperience,
    });
  }

  if (account.isSeller) {
    await supabase.from("seller").insert({
      id: data![0].id,
      company_name: account.companyName,
      tax_number: account.taxNumber,
      tax_office: account.taxOffice,
    });
  }

  getAccounts(setState);
}
