import { useModal } from "@/context/modal";
import { useProfile } from "@/context/ProfilesContext";
import { Profile } from "@/types";
import React, { useState } from "react";
import toast from "react-hot-toast";

// interface Profile {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   contacts: {
//     phone: string;
//     email: string;
//     address: string;
//   };
//   coordinates: {
//     latitude: number;
//     longitude: number;
//   };
//   hobbies: string[];
//   socialMedia: {
//     platform: string;
//     url: string;
//   }[];
//   achievements: string[];
// }
const defaultProfile: Profile = {
  id: Math.random(),
  name: "",
  description: "",
  image: "",
  contacts: {
    phone: 0,
    email: "",
    address: "",
  },
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  hobbies: [],
  socialMedia: [],
  achievements: [],
};

const UpdateProfileForm = () => {
  const { isOpen, setIsOpen, profileId } = useModal();
  const { getProfileById, deleteProfileById, updateProfileById } = useProfile();
  const profile = getProfileById(profileId);
  const [formData, setFormData] = useState(profile || defaultProfile);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: any) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required.";
      case "description":
        return value.trim() ? "" : "Description is required.";
      case "image":
        return value.trim() ? "" : "image URL is required.";
      case "contacts.phone":
        return /^\d{10}$/.test(value) ? "" : "Phone must be a 10-digit number.";
      case "contacts.email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format.";
      case "contacts.address":
        return value.trim() ? "" : "Address is required.";
      case "coordinates.latitude":
      case "coordinates.longitude":
        return !isNaN(value) && value !== ""
          ? ""
          : "Coordinates must be valid numbers.";
      case "socialMedia":
        return value.every((item: any) => item.platform && item.url)
          ? ""
          : "Each social media entry must include a platform and URL.";
      case "achievements":
        return Array.isArray(value) && value.length > 0
          ? ""
          : "At least one achievement is required.";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    let updatedData: any = { ...formData };

    if (keys.length === 1) {
      updatedData[keys[0]] = value;
    } else if (keys.length === 2) {
      updatedData[keys[0]][keys[1]] = value;
    }

    setFormData(updatedData);

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    console.log("Handle Submit");

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, (formData as any)[key]);
      console.log(error);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log("Updated Profile:", formData);
      updateProfileById(formData.id, formData);
      toast.success("Profile updated successfully!");
      setIsOpen(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-100 rounded shadow-md space-y-4 w-[80vw] md:w-[50vw] h-[70vh] overflow-scroll"
    >
      <h2 className="text-lg font-bold">Update Profile</h2>

      <div>
        <label className="block">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      <div>
        <label className="block">image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>

      <div>
        <label className="block">Phone</label>
        <input
          type="text"
          name="contacts.phone"
          value={formData.contacts.phone}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors["contacts.phone"] && (
          <p className="text-red-500 text-sm">{errors["contacts.phone"]}</p>
        )}
      </div>
      <div>
        <label className="block">Address</label>
        <input
          type="text"
          name="contacts.address"
          value={formData.contacts.address}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors["contacts.address"] && (
          <p className="text-red-500 text-sm">{errors["contacts.address"]}</p>
        )}
      </div>
      <div>
        <label className="block">Latitude</label>
        <input
          type="text"
          name="coordinates.latitude"
          value={formData.coordinates.latitude}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors["coordinates.latitude"] && (
          <p className="text-red-500 text-sm">
            {errors["coordinates.latitude"]}
          </p>
        )}
      </div>
      <div>
        <label className="block">Longitude</label>
        <input
          type="text"
          name="coordinates.longitude"
          value={formData.coordinates.longitude}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors["coordinates.longitude"] && (
          <p className="text-red-500 text-sm">
            {errors["coordinates.longitude"]}
          </p>
        )}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          name="contacts.email"
          value={formData.contacts.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
        {errors["contacts.email"] && (
          <p className="text-red-500 text-sm">{errors["contacts.email"]}</p>
        )}
      </div>

      <div>
        <label className="block">Achievements</label>
        <textarea
          name="achievements"
          value={formData.achievements.join(", ")}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              achievements: e.target.value.split(",").map((a) => a.trim()),
            }))
          }
          className="w-full p-2 border rounded"
        />
        {errors.achievements && (
          <p className="text-red-500 text-sm">{errors.achievements}</p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
