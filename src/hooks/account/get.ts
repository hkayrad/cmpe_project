import { supabase } from "../../supabaseClient";
import { ascDsc } from "../../types";

export async function getAccounts(
  setState: Function,
  orderBy: string = "id",
  isAscending: number = ascDsc.asc
) {
  const { data } = await supabase
    .from("account")
    .select("*")
    .order(orderBy, { ascending: Boolean(isAscending) });
  setState(data);
  return data;
}

export async function getAccountInfoFromUuid(uuid: string) {
  const { data } = await supabase.from("account").select("*").eq("id", uuid);
  
  return data;
}

export async function getAccountInfoFromUsername(username: string) {
  const { data } = await supabase.from("account").select("*").eq("username", username);
  return data;
}

export async function getBuyerInfo(setState: Function, uuid: string) {
  const { data } = await supabase.from("buyer").select("*").eq("id", uuid);
  setState(data);
  return data;
}

export async function getSellerInfo(setState: Function, uuid: string) {
  const { data } = await supabase.from("seller").select("*").eq("id", uuid);
  setState(data);
  return data;
}
