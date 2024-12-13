export type Vehicle = {
  vin: number;
  plate_no: string;
  make: string;
  model: string;
  km: number;
  fuel: string;
  transmission: string;
  seat_count: number;
  emission: number;
  year: string;
  required_driving_license_type: string;
  rdlt: string;
  hp: number;
  fuel_capacity: number;
  luggage_capacity?: number;
  is_luxury?: boolean;
  extra_luggage_container_available?: boolean;
  max_leaning_angle?: number;
};

export type VehicleExtra = {
  luggage_capacity?: number;
  is_luxury?: boolean;
  extra_luggage_container_available?: boolean;
  max_leaning_angle?: number;
};

export enum ascDsc {
  asc = 1,
  dsc = 0,
}

export type AccountType = {
  id: string;
  created_at: string;
  mail: string;
  username: string;
  password: string;

}

export type BuyerType = {
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_year: string;
  driving_license_type: string;
  driving_experience: string;
}

export type SellerType = {
  company_name: string;
  tax_number: number;
  tax_office: string;
}

export type ListingType = {
  listing_id: string;
  price: number;
  listed_at: string;
  pickup_location: string;
  minimum_driving_experience: string;
  seller_uuid: string;
  listed_vehicle_vin: number;
  listed_vehicle_plate_no: string;
  listing_images: any;
}

export type RentType = {
  transaction_id: string;
  buyer_uuid: string;
  listing_id: string;
  total_price: number;
  payment_status: string;
  payment_medium: string;
  dropoff_location: string;
  renting_start_date: string;
  renting_end_date: string;
}