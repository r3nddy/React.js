import { useFetchEmployees } from "../api/useFetchEmployees";
import { useState } from "react";
import { useCreateEmployee } from "../api/lib/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";
import { useEditEmployee } from "../api/useEditEmployee";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");
  const [jobInputText, setJobInputText] = useState("");

  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [editInputText, setEditInputText] = useState("");
  const [editJobInputText, setEditJobInputText] = useState("");

  const { employees, employeesError, employeesIsLoading, fetchEmployees } =
    useFetchEmployees();
  const { createEmployeeError, createEmployeeIsLoading, createEmployee } =
    useCreateEmployee();
  const { deleteEmployee, deleteEmployeeError } = useDeleteEmployee();
  const { editEmployeeError, editEmployee, editEmployeeIsLoading } =
    useEditEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee({
      name: inputText,
      job: jobInputText,
    });
    await fetchEmployees();
    setInputText("");
    setJobInputText("");
  };

  const handleDeleteEmployee = async (employeeId) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  const handleEditEmployee = async () => {
    if (selectedEmployeeId && (editInputText || editJobInputText)) {
      await editEmployee(selectedEmployeeId, {
        job: editJobInputText,
        name: editInputText,
      });
      await fetchEmployees();

      setSelectedEmployeeId("");
      setEditInputText("");
      setEditJobInputText("");
    }
  };

  return (
    <div>
      <h1>Employees page</h1>
      <button disabled={employeesIsLoading} onClick={fetchEmployees}>
        fetchEmployees
      </button>
      {employeesIsLoading && <p>Loading...</p>}
      {employeesError && <p style={{ color: "red" }}>{employeesError}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
            <th>Select Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <input
                    checked={employee.id === selectedEmployeeId}
                    onChange={() => {
                      setSelectedEmployeeId(employee.id);
                      setEditInputText(employee.name);
                      setEditJobInputText(employee.job);
                    }}
                    type="radio"
                    name="employee-edit"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                value={inputText}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Job"
                value={jobInputText}
                onChange={(e) => setJobInputText(e.target.value)}
              />
            </td>
            <td>
              <button
                disabled={createEmployeeIsLoading}
                onClick={handleCreateEmployee}
              >
                Create Employee
              </button>
            </td>
          </tr>

          {createEmployeeError && (
            <tr>
              <td colSpan={3}>{createEmployeeError}</td>
            </tr>
          )}

          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setEditInputText(e.target.value)}
                type="text"
                value={editInputText}
              />
            </td>
            <td>
              <input
                type="text"
                value={editJobInputText}
                onChange={(e) => setEditJobInputText(e.target.value)}
              />
            </td>
            <td>
              <button
                disabled={editEmployeeIsLoading || !selectedEmployeeId}
                onClick={handleEditEmployee}
              >
                Update Employee
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {/* employeesIsLoading ? <p>Loading...</p> : null */}
    </div>
  );
};
export default EmployeesPage;
