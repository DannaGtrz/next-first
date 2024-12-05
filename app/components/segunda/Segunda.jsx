"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function SegundaPage() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Categorías más Vendidas",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
  return (
    <>
      <div className="pt-6 px-4">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-normal text-gray-500">
                  Ventas por grupo
                </h1>
              </div>
            </div>
            <div id="main-chart"></div>
            <Line data={data} />
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Resumen General
                </h3>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="overflow-x-auto rounded-lg">
                <div className="align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50"></thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                              P
                            </div>
                            <div>
                              Prospectos
                              <p className="text-sm text-slate-500">
                                Ver todos las Prospectos
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                              O
                            </div>
                            <div>
                              Oportunidades
                              <p className="text-sm text-slate-500">
                                Ver todos las Oportunidades
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            2
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                              C
                            </div>
                            <div>
                              Clientes
                              <p className="text-sm text-slate-500">
                                Ver todos las Clientes
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            9
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white mr-2">
                              A
                            </div>
                            <div>
                              Cotizaciones Activas
                              <p className="text-sm text-slate-500">
                                Ver todas las Cotizaciones Activas
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            39
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white mr-2">
                              G
                            </div>
                            <div>
                              Grupos
                              <p className="text-sm text-slate-500">
                                Ver todos los Grupos
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            57
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white mr-2">
                              E
                            </div>
                            <div>
                              Ejecutivos
                              <p className="text-sm text-slate-500">
                                Ver todos los Ejecutivos
                              </p>
                            </div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            110
                          </td>
                        </tr>
                        <tr>
                          <td className="flex items-center text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                              G
                            </div>
                            <div>Gerentes</div>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            33
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
