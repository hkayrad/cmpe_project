import { supabase } from "../../supabaseClient";
import { AccountType, BuyerType, SellerType } from "../../types";

export async function updateAccountInfo(
  account: AccountType,
  buyer: BuyerType,
  seller: SellerType,
  isBuyer: boolean,
  isSeller: boolean
) {
  await supabase.from("account").update(account).eq("id", account.id);
  if (isBuyer) {
    await supabase
      .from("buyer")
      .upsert({
        ...buyer,
        id: account.id,
      })
      .eq("id", account.id);
  } else {
    await supabase.from("buyer").delete().eq("id", account.id);
  }
  if (isSeller) {
    await supabase
      .from("seller")
      .upsert({
        ...seller,
        id: account.id,
      })
      .eq("id", account.id);
  } else {
    await supabase.from("seller").delete().eq("id", account.id);
  }
}
