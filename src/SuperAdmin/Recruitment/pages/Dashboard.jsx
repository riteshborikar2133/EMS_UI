import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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
      <div className="dash-card flex justify-evenly gap-5 ">
        <div className="bg-white p-4 rounded-sm border-t-4 border-amber-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-t-4 border-red-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-t-4 border-green-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
        <div className="bg-white p-4 rounded-sm border-t-4 border-blue-400 shadow-md w-1/4 hover:shadow-lg">
          <h2 className="text-lg mb-2 ">Total Vacancies</h2>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
      </div>

      <div className="layer-2 box-border mt-3 flex gap-5 justify-center">
        <div className="skill-zone bg-white mt-3 p-3 rounded-sm shadow-md border-t-4 border-orange-400	w-1/3">
          <h2 className="mb-2 text-sm">Skill Zone Status</h2>
          <hr />
          <div className=" mt-2 flex items-center gap-3 p-1">
            <div className="logo p-2 rounded-xl bg-black text-white">RB</div>
            <div>Ritesh Borikar</div>
          </div>
          <div className=" mt-2 flex items-center gap-3 p-1">
            <div className="logo p-2 rounded-xl bg-black text-white">RB</div>
            <div>Ritesh Borikar</div>
          </div>
          <div className=" mt-2 flex items-center gap-3 p-1">
            <div className="logo p-2 rounded-xl bg-black text-white">RB</div>
            <div>Ritesh Borikar</div>
          </div>
        </div>

        <div className="offerletter bg-white mt-3 p-3 rounded-sm shadow-md border-t-4 border-green-400 w-1/3">
          <h2 className="mb-2 text-sm">Candidate Offer Letter</h2>
          <hr />
          <div className="mt-4 h-[15rem]">
            <Pie data={data} options={options} />
          </div>
        </div>

        <div className="OnboardView bg-white mt-3 p-3 rounded-sm shadow-md border-t-4 border-teal-500 w-1/3	">
          <h2 className="text-sm">Candidate on Onboard</h2>
          <hr className="mt-3" />
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
  );
}
