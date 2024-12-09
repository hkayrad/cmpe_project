import { supabase } from "../../supabaseClient";
import { getRents } from "./get";

export async function deleteRenting(setState: Function, transaction_id: string) {
    const { data, error } = await supabase
      .from("rents")
      .delete()
      .match({ transaction_id: transaction_id });
    console.log(data, error);

    getRents(setState);
} 