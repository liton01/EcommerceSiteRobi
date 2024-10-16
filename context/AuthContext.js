"use client";

import axios from "axios";
import { CldOgImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  //const [updated, setUpdated] = useState(false);

  console.log('User =>',user);

  const router = useRouter();

  const registerUser = async ({ name, email, password }) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      if (data?.user) {
        router.push("/");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const loadUser = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("/api/auth/session?update");

      if (data?.user) {
        setUser(data.user);
        router.replace("/me");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const updateProfile = async (formData) => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `${process.env.API_URL}/api/auth/me/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data?.user) {
        loadUser();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  const updatePassword = async ({ currentPassword, newPassword }) => {
    try {
      const { data } = await axios.put(
        `${process.env.API_URL}/api/auth/me/update_password`,
        {
          currentPassword,
          newPassword,
        }
      );

      if (data?.success) {
        router.replace("/me");
      }
    } catch (error) {
      console.log(error.response);
      setError(error?.response?.data?.message);
    }
  };


  const addNewAddress = async (address) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/address`,
        address
      );

      if (data) {
        router.push("/me");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  
  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,

        setUser,
        registerUser,
        updateProfile,
        updatePassword,
        addNewAddress,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;