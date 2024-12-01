import { supabase } from "../../supabaseClient";
import { getVehicles } from "./get";

export async function deleteVehicle(
  vin: number,
  plate_no: string,
  setState: Function
) {
  const { data: vehicle } = await supabase
    .from("vehicle")
    .delete()
    .match({ vin: vin, plate_no: plate_no });

  console.log(vehicle);

  getVehicles(setState);
}
