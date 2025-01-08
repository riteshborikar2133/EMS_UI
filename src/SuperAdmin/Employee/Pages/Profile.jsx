// import React, { useState, useEffect, useRef } from "react";
// import Kutta from "../../../assets/Images/Kutta.jpg";
// import About from "../Components/About";
// import WorkTypeShift from "../Components/WorkTypeShift";
// import Attendance from "../Components/Attendance";
// import Leave from "../Components/Leave";
// import Payroll from "../Components/Payroll";
// import AllowanceDeduction from "../Components/AllowanceDeduction";
// import PenaltyAccount from "../Components/PenaltyAccount";
// import Assets from "../Components/Assets";
// import Performance from "../Components/Performance";
// import Documents from "../Components/Documents";
// import BonusPoints from "../Components/BonusPoints";
// import ScheduledInterview from "../Components/ScheduledInterview";
// import Resignation from "../Components/Resignation";

// export default function Profile() {
//   const [list, setList] = useState([
//     { id: 1, name: "About", checked: true }, // About is checked by default
//     { id: 2, name: "Work Type & Shift", checked: false },
//     { id: 3, name: "Attendance", checked: false },
//     { id: 4, name: "Leave", checked: false },
//     { id: 5, name: "Payroll", checked: false },
//     { id: 6, name: "Allowance & Deduction", checked: false },
//     { id: 7, name: "Penalty Account", checked: false },
//     { id: 8, name: "Assets", checked: false },
//     { id: 9, name: "Performance", checked: false },
//     { id: 10, name: "Documents", checked: false },
//     { id: 11, name: "Bonus Points", checked: false },
//     { id: 12, name: "Scheduled Interview", checked: false },
//     { id: 13, name: "Resignation", checked: false },
//   ]);

//   const [activeSection, setActiveSection] = useState({ id: 1, name: "About" }); // Set About as the default active section
//   const [isFilterVisible, setIsFilterVisible] = useState(false);
//   const filterRef = useRef(null); // Reference for the filter dropdown

//   // Handle checkbox change
//   const handleCheckboxChange = (id) => {
//     setList((prevList) =>
//       prevList.map((item) =>
//         item.id === id && id !== 1 // Prevent About from being unchecked
//           ? { ...item, checked: !item.checked }
//           : item
//       )
//     );
//   };

//   // Select All checkboxes
//   const handleSelectAll = () => {
//     setList((prevList) =>
//       prevList.map((item) => ({ ...item, checked: true }))
//     );
//   };

//   // Unselect All checkboxes (except About)
//   const handleUnselectAll = () => {
//     setList((prevList) =>
//       prevList.map((item) =>
//         item.id === 1 ? item : { ...item, checked: false }
//       )
//     );
//   };

//   // Filter the list to show only selected items (About will always be in the list)
//   const filteredList = list.filter((item) => item.checked);

//   // Handle item click to set the active section and show its corresponding component
//   const handleItemClick = (item) => {
//     setActiveSection(item);
//   };

//   // Close the filter when clicking outside of the filter dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (filterRef.current && !filterRef.current.contains(event.target)) {
//         setIsFilterVisible(false);
//       }
//     };

//     // Attach event listener to close dropdown when clicking outside
//     document.addEventListener("mousedown", handleClickOutside);

//     // Clean up event listener on component unmount
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="box-border border bg-white p-3 px-6 rounded-lg shadow-sm w-full my-3 relative">
//       <div className="flex h-[11rem]">
//         <div className="w-[32%] flex items-center justify-left gap-3">
//           <img src={Kutta} alt="" className="w-[8rem] h-[8rem] rounded-md" />
//           <h1 className="font-semibold text-2xl">{"  "}Employee Name(ID)</h1>
//         </div>
//         <div className="flex w-[68%] items-center">
//           <div>
//             <h2 className="text-md mb-2 text-gray-600">Work: None</h2>
//             <h2 className="text-md mb-2 text-gray-600">Email: None</h2>
//             <h2 className="text-md mb-2 text-gray-600">Work Phone: None</h2>
//             <h2 className="text-md mb-2 text-gray-600">Phone: 8973700081</h2>
//           </div>
//         </div>
//         <div>
//           Edit button
//         </div>
//       </div>

//       <div className="flex flex-col">
//         {/* Three Dots Button */}
//         <div className="flex justify-end relative">
//           <button
//             onClick={() => setIsFilterVisible(!isFilterVisible)}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//           >
//             &#x22EE; {/* Unicode for vertical three dots */}
//           </button>

//           {/* Filter List - Positioned Below the Button */}
//           {isFilterVisible && (
//             <div
//               ref={filterRef} // Attach the ref here
//               className="absolute top-full right-0 mt-2 w-[20rem] border p-4 rounded-md bg-gray-50 shadow-lg z-50"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex gap-2">
//                   <button
//                     onClick={handleSelectAll}
//                     className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   >
//                     Select All
//                   </button>
//                   <button
//                     onClick={handleUnselectAll}
//                     className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                   >
//                     Unselect All
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 {list.map((item) => (
//                   <label key={item.id} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={item.checked}
//                       onChange={() => handleCheckboxChange(item.id)}
//                       className="w-4 h-4"
//                       disabled={item.id === 1} // Disable About checkbox
//                     />
//                     <span>{item.name}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Display Selected Items */}
//         <div className="flex gap-4 flex-wrap mt-4">
//           {filteredList.length > 0 ? (
//             filteredList.map((item) => (
//               <span
//                 key={item.id}
//                 className="p-2 bg-gray-100 border rounded-md text-gray-800 cursor-pointer"
//                 onClick={() => handleItemClick(item)}
//               >
//                 {item.name}
//               </span>
//             ))
//           ) : (
//             <p className="text-gray-500">No items selected</p>
//           )}
//         </div>

//         {/* Dynamically Render Components based on Active Section */}
//         {activeSection && (
//           <div className="mt-6 p-4 bg-gray-100 border rounded-md">
//             <h3 className="text-xl font-semibold">{activeSection.name}</h3>
//             {activeSection.name === "About" && <About />}
//             {activeSection.name === "Work Type & Shift" && <WorkTypeShift />}
//             {activeSection.name === "Attendance" && <Attendance />}
//             {activeSection.name === "Leave" && <Leave />}
//             {activeSection.name === "Payroll" && <Payroll />}
//             {activeSection.name === "Allowance & Deduction" && <AllowanceDeduction />}
//             {activeSection.name === "Penalty Account" && <PenaltyAccount />}
//             {activeSection.name === "Assets" && <Assets />}
//             {activeSection.name === "Performance" && <Performance />}
//             {activeSection.name === "Documents" && <Documents />}
//             {activeSection.name === "Bonus Points" && <BonusPoints />}
//             {activeSection.name === "Scheduled Interview" && <ScheduledInterview />}
//             {activeSection.name === "Resignation" && <Resignation />}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Luffy from "../../../assets/Images/luffy.jpg";

// Import components for each section
import About from "../Components/About"; // Create and import components
import WorkTypeShift from "../Components/WorkTypeShift";
import Attendance from "../Components/Attendance";
import Leave from "../Components/Leave";
import Payroll from "../Components/Payroll";
import AllowanceDeduction from "../Components/AllowanceDeduction";
import PenaltyAccount from "../Components/PenaltyAccount";
import Assets from "../Components/Assets";
import Performance from "../Components/Performance";
import Documents from "../Components/Documents";
import BonusPoints from "../Components/BonusPoints";
import ScheduledInterview from "../Components/ScheduledInterview";
import Resignation from "../Components/Resignation";
// Import other sections...

export default function Profile() {
  // State to track the selected section in the sidebar
  const [selectedSection, setSelectedSection] = useState("profile");

  // Function to handle sidebar item click and update the selected section
  const handleSidebarClick = (section) => {
    setSelectedSection(section);
  };

  // Render the corresponding component based on the selected section
  const renderSection = () => {
    switch (selectedSection) {
      case "profile":
        return <About />;
      case "worktype":
        return <WorkTypeShift />;
      case "attendance":
        return <Attendance />;
      case "leave":
        return <Leave />;
      case "payroll":
        return <Payroll />;
      case "allowance":
        return <AllowanceDeduction />;
      case "penalty":
        return <PenaltyAccount />;
      case "assets":
        return <Assets />;
      case "performance":
        return <Performance />;
      case "documents":
        return <Documents />;
      case "bonus":
        return <BonusPoints />;
      case "interview":
        return <ScheduledInterview />;
      case "resignation":
        return <Resignation />;
      default:
        return <About />;
    }
  };

  return (

    <div className="flex bg-white mt-6 rounded-lg h-[85vh] shadow-md">
      {/* Sidebar */}
      <div className="min-h-full rounded-lg flex ">
        <div className="border-r-2 py-6 px-6">
          <div className="text-xl font-semibold mb-6">Employee Profile</div>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleSidebarClick("profile")}
                className="hover:text-gray-400"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("worktype")}
                className="hover:text-gray-400"
              >
                Work Type & Shift
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("attendance")}
                className="hover:text-gray-400"

    <div className="box-border border bg-white p-3 px-6 rounded-lg shadow-sm w-full my-3">
      <div className="flex h-[11rem]">
        <div className="w-[32%] flex items-center justify-left gap-3">
          <img src={Kutta} alt="" className="w-[8rem] h-[8rem] rounded-md" />
          <h1 className="font-semibold text-2xl">{"  "}Employee Name(ID)</h1>
        </div>
        <div className="flex w-[68%] items-center">
          <div>
            <h2 className="text-md mb-2 text-gray-600">Work: None</h2>
            <h2 className="text-md mb-2 text-gray-600">Email: None</h2>
            <h2 className="text-md mb-2 text-gray-600">Work Phone: None</h2>
            <h2 className="text-md mb-2 text-gray-600">Phone: 8973700081</h2>
          </div>
        </div>
        <div>
          Edit button
        </div>
      </div>

      <div className="flex flex-col">
        {/* Three Dots Button */}
        <div className="flex justify-end relative">
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            &#x22EE; {/* Unicode for vertical three dots */}
          </button>

          {/* Filter List - Positioned Below the Button */}
          {isFilterVisible && (
            <div
              ref={filterRef} // Attach the ref here
              className="absolute top-full right-0 mt-2 w-[20rem] border p-4 rounded-md bg-gray-50 shadow-lg z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={handleSelectAll}
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Select All
                  </button>
                  <button
                    onClick={handleUnselectAll}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Unselect All
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {list.map((item) => (
                  <label key={item.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="w-4 h-4"
                      disabled={item.id === 1} // Disable About checkbox
                    />
                    <span>{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Display Selected Items */}
        <div className="flex gap-4 flex-wrap mt-4">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <span
                key={item.id}
                className="p-2 bg-gray-100 border rounded-md text-gray-800 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                Attendance
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("leave")}
                className="hover:text-gray-400"
              >
                Leave
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("payroll")}
                className="hover:text-gray-400"
              >
                Payroll
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("allowance")}
                className="hover:text-gray-400"
              >
                Allowance & Deduction
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("penalty")}
                className="hover:text-gray-400"
              >
                Penalty Account
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("assets")}
                className="hover:text-gray-400"
              >
                Assets
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("performance")}
                className="hover:text-gray-400"
              >
                Performance
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("documents")}
                className="hover:text-gray-400"
              >
                Documents
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("bonus")}
                className="hover:text-gray-400"
              >
                Bonus Points
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("interview")}
                className="hover:text-gray-400"
              >
                Scheduled Interview
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSidebarClick("resignation")}
                className="hover:text-gray-400"
              >
                Resignation
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 m-1 p-6">
        {/* Render the selected section content dynamically */}
        {renderSection()}
      </div>
    </div>
  );
}
