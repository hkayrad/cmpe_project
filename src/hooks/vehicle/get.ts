import { supabase } from "../../supabaseClient";
import { Vehicle } from "../../types";

export async function getVehicles(setState: Function) {
    const { data } = await supabase.from("vehicle").select("*");
    setState(data);
  }

export async function getFourWheel(vin: number, plate_no:string)  {
    const { data } = await supabase.from("four_wheel").select("*").eq("vin", vin).eq("plate_no", plate_no);
    return data;
}

export async function getTwoWheel(vin: number, plate_no:string)  {
  const { data } = await supabase.from("two_wheel").select("*").eq("vin", vin).eq("plate_no", plate_no);
  return data;
}

export async function getVehicle(vin: number, plate_no:string)  {
  const { data } = await supabase.from("vehicle").select("*").eq("vin", vin).eq("plate_no", plate_no);
  return data;
}

export async function getExtra(vin: number, plate_no:string)  {
  const toSearch = await getVehicle(vin, plate_no);
  switch (toSearch![0].required_driving_license_type) {
    case "A1":
    case "A2":
    case "A":
    case "M":
      return getTwoWheel(vin, plate_no);
    default:
      return getFourWheel(vin, plate_no);
  }
}