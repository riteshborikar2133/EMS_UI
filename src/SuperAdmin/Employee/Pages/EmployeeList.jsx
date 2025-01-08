// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export default function EmployeeList() {
//   // State to store the list of employees fetched from the backend
//   const [employees, setEmployees] = useState([]);
//   // State to toggle between List View and Card View
//   const [isCardView, setIsCardView] = useState(true);

//   // Fetch employees from backend when the component mounts
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/company/2/employee_list/`
//         ); // Replace with your backend API
//         console.log(response.data.employees);
//         setEmployees(response.data.employees);
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   // Toggle view between List and Card
//   const toggleView = () => {
//     setIsCardView(!isCardView);
//   };

//   return (
//     <div className="box-border border bg-white p-3 px-6 rounded-lg shadow-sm w-full my-3 relative">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="font-semibold text-2xl">Employees</h1>

//         {/* View Buttons */}
//         <div className="flex gap-2">
//           <button
//             onClick={toggleView}
//             className={`px-4 py-2 border rounded-md ${
//               !isCardView
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             List View
//           </button>
//           <button
//             onClick={toggleView}
//             className={`px-4 py-2 border rounded-md ${
//               isCardView
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             Card View
//           </button>
//         </div>
//       </div>

//       {/* Display Employees */}
//       <div className="mt-4">
//         {employees.length > 0 ? (
//           isCardView ? (
//             // Card View
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {employees.map((employee) => (
//                 <div
//                   key={employee.id}
//                   className="p-4 border rounded-lg shadow-lg"
//                 >
//                   <h2 className="text-lg font-medium">
//                     {employee.employee_first_name} {employee.employee_last_name}{" "}
//                     ({employee.badge_id})
//                   </h2>
//                   <p className="text-gray-500">{employee.email}</p>
//                   <p className="text-gray-500">{employee.email}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             // List View
//             <div>
//               {employees.map((employee) => (
//                 <div key={employee.id} className="p-3 border-b">
//                   <h2 className="text-lg font-medium">
//                     {employee.employee_first_name} {employee.employee_last_name}{" "}
//                     ({employee.badge_id})
//                   </h2>
//                   <p className="text-gray-500">{employee.email}</p>
//                   <p className="text-gray-500">{employee.email}</p>
//                 </div>
//               ))}
//             </div>
//           )
//         ) : (
//           <p>No employees found</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function EmployeeList() {
  // Mock employee data
  const employees = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      gender: "Male",
      address: "123 Main St, Cityville",
      qualification: "B.Tech",
      status: "Converted",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      gender: "Female",
      address: "456 Elm St, Townsville",
      qualification: "MBA",
      status: "Hired",
    },
    {
      name: "Alice Johnson",
      email: "alicej@example.com",
      gender: "Female",
      address: "789 Pine St, Villageville",
      qualification: "PhD",
      status: "Not Hired",
    },
    {
      name: "Bob Brown",
      email: "bobbrown@example.com",
      gender: "Male",
      address: "321 Oak St, Hamlet",
      qualification: "B.Sc",
      status: "Canceled",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      gender: "Male",
      address: "123 Main St, Cityville",
      qualification: "B.Tech",
      status: "Converted",
    },
  ];

  // State for selected filter
  const [filter, setFilter] = useState("All");

  // Function to get the color class based on the employee's status
  const getStatusColor = (status) => {
    switch (status) {
      case "Converted":
        return "border-l-[0.31rem] border-lime-300";
      case "Hired":
        return "border-l-[0.31rem] border-blue-300";
      case "Not Hired":
        return "border-l-[0.31rem] border-gray-400";
      case "Canceled":
        return "border-l-[0.31rem] border-red-300";
      default:
        return "bg-white";
    }
  };

  // Filtered employees based on the selected filter
  const filteredEmployees =
    filter === "All"
      ? employees
      : employees.filter((employee) => employee.status === filter);

  return (
    <>
      <div className="box-border  p-3 px-6 rounded-lg w-full my-3">
        <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
          <h2 className="font-semibold text-xl">Employees</h2>
          <div className="flex items-center gap-2">
            <select
              className="border p-2 rounded-md text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Converted">Converted</option>
              <option value="Hired">Hired</option>
              <option value="Not Hired">Not Hired</option>
              <option value="Canceled">Canceled</option>
            </select>
            <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
              Create
            </button>
          </div>
        </div>

        <div className="cardwrapper flex mt-4 gap-5">
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Converted</h2>
              <h2 className="font-bold text-xl">
                {employees.filter((e) => e.status === "Converted").length}
              </h2>
            </div>
            <div className="bg-lime-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Hired</h2>
              <h2 className="font-bold text-xl">
                {employees.filter((e) => e.status === "Hired").length}
              </h2>
            </div>
            <div className="bg-blue-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Not Hired</h2>
              <h2 className="font-bold text-xl">
                {employees.filter((e) => e.status === "Not Hired").length}
              </h2>
            </div>
            <div className="bg-gray-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Canceled</h2>
              <h2 className="font-bold text-xl">
                {employees.filter((e) => e.status === "Canceled").length}
              </h2>
            </div>
            <div className="bg-red-300 h-5 w-5 rounded-full"></div>
          </div>
        </div>

        <div className="list bg-white mt-4 shadow-md rounded-md p-4">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Gender</th>
                <th className="p-3 border-b">Address</th>
                <th className="p-3 border-b">Qualification</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr
                  key={index}
                  className={`${getStatusColor(employee.status)} bg-opacity-50`}
                >
                  <td className="p-3 font-medium">{employee.name}</td>
                  <td className="p-3 text-gray-500">{employee.email}</td>
                  <td className="p-3 text-gray-500">{employee.gender}</td>
                  <td className="p-3 text-gray-500">{employee.address}</td>
                  <td className="p-3 text-gray-500">{employee.qualification}</td>
                  <td className="p-3 text-gray-500">{employee.status}</td>
                  <td className="p-3">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                      View
                    </button>
                    <button className="bg-yellow-500 text-white p-2 ml-2 rounded-md hover:bg-yellow-700 text-sm">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 ml-2 rounded-md hover:bg-red-700 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
