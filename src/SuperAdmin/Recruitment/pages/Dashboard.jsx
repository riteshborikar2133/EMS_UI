import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Emp from "../../../assets/icons/emp.png";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const data = {
    labels: ["Not Sent", "Sent", "Accepted", "Rejected", "Joined"],
    datasets: [
      {
        label: "Offer Letter Status",
        data: [10, 20, 30, 15, 25], // Example data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to adjust dynamically
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="dash-card block md:flex justify-evenly gap-5 ">
        {/* <div className="bg-white p-4 rounded-sm border-l-4 border-amber-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-l-4 border-red-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-l-4 border-green-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-l-4 border-blue-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div> */}

        <div className="bg-white p-3 flex  items-center justify-between  border-l-4 border-blue-400 rounded-md shadow-md w-full md:w-1/4 my-3">
          <div className="">
            <h2 className="text-lg mb-2 font-semibold text-gray-500 ">
              Total Employee
            </h2>
            <h2 className="text-2xl mb-2 font-semibold ">25</h2>
          </div>
          <div className="rounded-md">
            <img src={Emp} alt="" />
          </div>
        </div>
        <div className="bg-white p-3 flex items-center justify-between  border-l-4 border-green-400 rounded-md shadow-md w-full md:w-1/4 my-3">
          <div className="">
            <h2 className="text-lg mb-2 font-semibold text-gray-500 ">
              Total Employee
            </h2>
            <h2 className="text-2xl mb-2 font-semibold ">25</h2>
          </div>
          <div className="rounded-md">
            <img src={Emp} alt="" />
          </div>
        </div>
        <div className="bg-white p-3 flex items-center justify-between  border-l-4 border-orange-400 rounded-md shadow-md w-full md:w-1/4 my-3">
          <div className="">
            <h2 className="text-lg mb-2 font-semibold text-gray-500 ">
              Total Employee
            </h2>
            <h2 className="text-2xl mb-2 font-semibold ">25</h2>
          </div>
          <div className="rounded-md">
            <img src={Emp} alt="" />
          </div>
        </div>
        <div className="bg-white p-3 flex items-center justify-between  border-l-4 border-violet-400 rounded-md shadow-md w-full md:w-1/4 my-3">
          <div className="">
            <h2 className="text-lg mb-2 font-semibold text-gray-500 ">
              Total Employee
            </h2>
            <h2 className="text-2xl mb-2 font-semibold ">25</h2>
          </div>
          <div className="rounded-md">
            <img src={Emp} alt="" />
          </div>
        </div>
      </div>

      <div className="layer-2 box-border mt-3 flex gap-5 justify-center">
        <div className="skill-zone bg-white mt-3 rounded-md shadow-md	w-1/3">
          <h2 className="p-3 text-sm rounded-t-md font-semibold">
            Skill Zone Status
          </h2>
          <hr />
          <div className="px-3 text-sm ">
            <div className=" mt-2 flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <div className="logo p-2 rounded-xl bg-blue-700 text-white">
                RB
              </div>
              <div>Ritesh Borikar</div>
            </div>
            <div className=" mt-2 flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <div className="logo p-2 rounded-xl bg-black text-white">RB</div>
              <div>Ritesh Borikar</div>
            </div>
            <div className=" mt-2 flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <div className="logo p-2 rounded-xl bg-black text-white">RB</div>
              <div>Ritesh Borikar</div>
            </div>
          </div>
        </div>

        <div className="offerletter bg-white mt-3 rounded-md shadow-md  w-1/3">
          <h2 className="p-3 text-sm rounded-t-md font-semibold">
            Candidate Offer Letter
          </h2>
          <hr />
          <div className="mt-4 h-[15rem] py-3">
            <Pie data={data} options={options} />
          </div>
        </div>

        <div className="OnboardView bg-white mt-3 rounded-md shadow-md	w-1/3	">
          <h2 className="p-3 text-sm rounded-t-md font-semibold">
            Candidate on Onboard
          </h2>
          <hr className="" />
          <div className="px-3 text-sm">
            <div className=" mt-2 flex items-center gap-3 p-1">
              <div className="logo p-2 rounded-xl bg-black text-white">SS</div>
              <div>Ritesh Borikar</div>
            </div>
            <div className=" mt-2 flex items-center gap-3 p-1">
              <div className="logo p-2 rounded-xl bg-black text-white">SS</div>
              <div>Sahil Sharma</div>
            </div>
            <div className=" mt-2 flex items-center gap-3 p-1">
              <div className="logo p-2 rounded-xl bg-black text-white">SS</div>
              <div>Sahil Sharma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
