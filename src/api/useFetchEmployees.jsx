import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true); //Toggle mode loading on
      //   const response = await fetch("http://localhost:2000/employees", {
      //       method: "GET"
      //   });

      // const responseJson = await response.json(); //array of objects

      const response = await axiosInstance.get("/employees");
      console.log(response.data);

      setEmployees(response.data);
    } catch (error) {
      setEmployeesError(error.message);
    } finally {
      setEmployeesIsLoading(false); //Toggle mode loading off
    }
  };
  return {
    fetchEmployees,
    employeesIsLoading,
    employeesError,
    employees,
  };
};
