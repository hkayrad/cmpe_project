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

export async function getListingInfoFromUuid(setState: Function, uuid: string) {
  const { data } = await supabase
    .from("listing")
    .select("*")
    .eq("listing_id", uuid);
  setState(data![0]);
  return data;
}
