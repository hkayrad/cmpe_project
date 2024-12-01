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
    year: Date;
    required_driving_license_type: string;
    rdlt: string;
    hp: number;
    fuel_capacity: number;
    luggage_capacity?: number;
    is_luxury?: boolean;
    extra_luggage_container_available?: boolean;
    max_leaning_angle?: number;
  }