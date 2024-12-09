import { supabase } from "../../supabaseClient";
import { ascDsc } from "../../types";

export async function getRents(
    setState: Function,
    orderBy: string = "transaction_id",
    isAscending: number = ascDsc.asc
  ) {
    const { data } = await supabase
      .from("rents")
      .select("*")
      .order(orderBy, { ascending: Boolean(isAscending) });
    setState(data);
    return data;
  }