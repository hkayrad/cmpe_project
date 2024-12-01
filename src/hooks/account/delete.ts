import { supabase } from "../../supabaseClient";
import { getAccounts } from "./get";

export async function deleteAccount(uuid: string, setState: Function) {
    const { data, error } = await supabase
      .from("account")
      .delete()
      .match({ id: uuid });
    console.log(data, error);

    getAccounts(setState);
  }