import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

export const useCreateEmployee = () => {
    const [createEmployeeIsLoading, setCreateEmployeeIsLoading] = useState(false);
    const [createEmployeeError, setCreateEmployeeError] = useState("");

   const createEmployee = async (payload) => {
    try {
        setCreateEmployeeIsLoading(true);
        await axiosInstance.post("/employees", {
        name: payload,
    });
        
    } catch (error) {
        setCreateEmployeeError(error.message)
    } finally {
        setCreateEmployeeIsLoading(false);
    }
   };

   return {
    createEmployeeError,
    createEmployeeIsLoading,
    createEmployee
   };
};