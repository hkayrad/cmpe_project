import { supabase } from "../../supabaseClient";
import { Vehicle } from "../../types";
import { getVehicles } from "./get";

export async function addVehicle(setState: Function, vehicle_details: Vehicle) {
  await supabase.from("vehicle").insert({
    vin: vehicle_details.vin,
    plate_no: vehicle_details.plate_no,
    make: vehicle_details.make,
    model: vehicle_details.model,
    km: vehicle_details.km,
    fuel: vehicle_details.fuel,
    transmission: vehicle_details.transmission,
    seat_count: vehicle_details.seat_count,
    emission: vehicle_details.emission,
    year: vehicle_details.year,
    required_driving_license_type:
      vehicle_details.required_driving_license_type,
    hp: vehicle_details.hp,
    fuel_capacity: vehicle_details.fuel_capacity,
  });

  switch (vehicle_details.required_driving_license_type) {
    case "A1":
    case "A2":
    case "A":
    case "M":
      await supabase.from("two_wheel").insert({
        vin: vehicle_details.vin,
        plate_no: vehicle_details.plate_no,
        extra_luggage_container_available:
          vehicle_details.extra_luggage_container_available,
        max_leaning_angle: vehicle_details.max_leaning_angle,
      });
      break;
    default:
      await supabase.from("four_wheel").insert({
        vin: vehicle_details.vin,
        plate_no: vehicle_details.plate_no,
        luggage_capacity: vehicle_details.luggage_capacity,
        is_luxury: vehicle_details.is_luxury,
      });
      break;
  }
  getVehicles(setState);
}
