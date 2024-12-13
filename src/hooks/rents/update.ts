import { supabase } from "../../supabaseClient";
import { RentType } from "../../types";

export async function updateRentingInfo(renting: RentType) {
  await supabase
    .from("rents")
    .update(renting)
    .eq("transaction_id", renting.transaction_id);
}
