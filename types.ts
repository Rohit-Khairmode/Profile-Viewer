export interface Profile {
  id: number;
  name: string;
  description: string;
  image: string;
  contacts: {
    phone: number;
    email: string;
    address: string;
  };
  hobbies: string[];
  socialMedia: {
    platform: string;
    url: string;
  }[];
  achievements: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
