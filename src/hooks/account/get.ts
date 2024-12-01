import { supabase } from "../../supabaseClient";

export async function getAccounts(setState: Function) {
    const { data } = await supabase.from("account").select("*");
    setState(data);
  }