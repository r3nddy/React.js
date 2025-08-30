import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useEditEmployee = () => {
  const [editEmployeeIsLoading, setEditEmployeeIsLoading] = useState(false);
  const [editEmployeeError, setEditEmployeeError] = useState("");

  const editEmployee = async (employeeId, payload) => {
    try {
      setEditEmployeeIsLoading(true);

      // PATCH => Mengganti beberapa fields dalam object/data/record
      // PUT => Mengganti keseluruhan object/data/record

      await axiosInstance.patch(`/employees/${employeeId}`, {
        name: payload.name ? payload.name : undefined,
        job: payload.job ? payload.job : undefined,
      });
    } catch (error) {
      setEditEmployeeError(error.message);
    } finally {
      setEditEmployeeIsLoading(false);
    }
  };

  return {
    editEmployee,
    editEmployeeIsLoading,
    editEmployeeError,
  };
};
