import { supabase } from "../../supabaseClient";
import { ListingType } from "../../types";

export async function updateListingInfo(listing: ListingType) {
  await supabase
    .from("listing")
    .update(listing)
    .eq("listing_id", listing.listing_id);
}
