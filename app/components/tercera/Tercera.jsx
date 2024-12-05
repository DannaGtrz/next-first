"use client";

import React from "react";
import { Pie, Bar } from "react-chartjs-2";

export default function TerceraPage() {
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Mi First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="pt-6 px-4">
      <div className="flex space-x-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 w-1/2">
          <h1 className="text-2xl font-normal text-gray-500 mb-4">
            Categorías Más Vendidas
          </h1>
          <Pie data={pieData} />
        </div>
  
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 w-1/2">
          <h1 className="text-2xl font-normal text-gray-500 mb-4">
            Productos Más Vendidos
          </h1>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
  
}  
