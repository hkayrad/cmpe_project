import { supabase } from "../../supabaseClient";
import { getListings } from "./get";

export async function deleteListing(setState: Function, listing_id: string) {
    const { data, error } = await supabase
      .from("listing")
      .delete()
      .match({ listing_id: listing_id });
    console.log(data, error);

    getListings(setState);
} 