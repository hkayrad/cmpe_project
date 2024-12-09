import { supabase } from "../../supabaseClient";
import { ascDsc } from "../../types";

export async function getListings(
    setState: Function,
    orderBy: string = "listing_id",
    isAscending: number = ascDsc.asc
  ) {
    const { data } = await supabase
      .from("listing")
      .select("*")
      .order(orderBy, { ascending: Boolean(isAscending) });
    setState(data);
    return data;
  }