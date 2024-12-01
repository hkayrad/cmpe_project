import { sha512 } from "js-sha512";
import { supabase } from "../../supabaseClient";
import { getAccounts } from "./get";

export async function addAccount(setState: Function) {
    const { data, error } = await supabase
      .from("account")
      .insert({
        mail: "asdaa123312312321sdasdsdsa@gmail.com",
        password: sha512(`testtesthkayrad`),
        username: "123123123123",
        account_type: false,
      });
    console.log(data, error);

    getAccounts(setState);
  }