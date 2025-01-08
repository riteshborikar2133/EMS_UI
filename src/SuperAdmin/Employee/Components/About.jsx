import React from "react";
import Luffy from "../../../assets/Images/luffy.jpg";

const About = () => {
  return (
    <div className="border-red-600 overflow-y-scroll h-full">
      {/* Image Segment */}
      <h4 className="font-semibold text-lg mb-2">My Profile</h4>
      <div className="border-2 p-3 rounded-lg shadow-sm flex items-center mb-6">
        <img
          src={Luffy}
          alt="Profile"
          className="w-[8rem] h-[8rem] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-md font-semibold">John Doe</h2>
          <p className="text-gray-500">Software Engineer</p>
          <p className="text-gray-500">johndoe@gmail.com</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="border-2 p-3 rounded-lg shadow-sm flex items-center mb-6 w-full">
        <div className="ml-4 w-full">
          <h2 className="text-md font-semibold">Personal Information</h2>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Date of Birth</p>
              <h2 className="text-md font-semibold">Dec. 9, 2024</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Gender</p>
              <h2 className="text-md font-semibold">Male</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Address</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Country</p>
              <h2 className="text-md font-semibold">Singapore</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">State</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">City</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Qualification</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Experience</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Marital Status</p>
              <h2 className="text-md font-semibold">Single</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Children</p>
              <h2 className="text-md font-semibold">2</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Emergency Contact</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">
                Emergency Contact Name
              </p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">
                Emergency Contact Relation
              </p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Work Information */}
      <div className="border-2 p-3 rounded-lg shadow-sm flex items-center mb-6 w-full">
        <div className="ml-4 w-full">
          <h2 className="text-md font-semibold">Work Information</h2>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Department</p>
              <h2 className="text-md font-semibold">S/W Dept</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Shift Information</p>
              <h2 className="text-md font-semibold">Regular Shift</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Employee Type</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Reporting Manager</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Work Location</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">End Date</p>
              <h2 className="text-md font-semibold">May. 22, 2024</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Job Position</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Work Type</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Salary</p>
              <h2 className="text-md font-semibold">18000</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Company</p>
              <h2 className="text-md font-semibold">Micronet</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Joining Date</p>
              <h2 className="text-md font-semibold">May. 22, 2024</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Tags</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Information */}
      <div className="border-2 p-3 rounded-lg shadow-sm flex items-center mb-6 w-full">
        <div className="ml-4 w-full">
          <h2 className="text-md font-semibold">Bank Information</h2>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Bank Name</p>
              <h2 className="text-md font-semibold">sdasdasdasd</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Branch</p>
              <h2 className="text-md font-semibold">sadasd</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Bank Address</p>
              <h2 className="text-md font-semibold">sadasd</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Bank Code #2</p>
              <h2 className="text-md font-semibold">asd</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Account Number</p>
              <h2 className="text-md font-semibold">asdasd</h2>
            </div>
            <div>
              <p className="text-gray-500 mt-6 text-md">Bank Code #1</p>
              <h2 className="text-md font-semibold">asdasd</h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="px-6 w-[38%]">
              <p className="text-gray-500 mt-6 text-md">Country</p>
              <h2 className="text-md font-semibold">None</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
