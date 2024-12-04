import React from "react";

export default function SegundaPage() {
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
              <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                12.5%
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div id="main-chart"></div>
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
                          <td className="text-sm font-semibold text-slate-700">
                            Prospectos
                            <p className="text-sm text-slate-500">
                              Ver todos las Prospectos
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            1
                          </td>
                        </tr>

                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Oportunidades
                            <p className="text-sm text-slate-500">
                              Ver todos las Oportunidades
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            2
                          </td>
                        </tr>

                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Clientes
                            <p className="text-sm text-slate-500">
                              Ver todos las Clientes
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            9
                          </td>
                        </tr>
                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Cotizaciones Activas
                            <p className="text-sm text-slate-500">
                              Ver todas las Cotizaciones Activas
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            39
                          </td>
                        </tr>
                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Grupos
                            <p className="text-sm text-slate-500">
                              Ver todos los Grupos
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            57
                          </td>
                        </tr>
                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Ejecutivos
                            <p className="text-sm text-slate-500">
                              Ver todos los Ejecutivos
                            </p>
                          </td>
                          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                            110
                          </td>
                        </tr>
                        <tr>
                          <td className="text-sm font-semibold text-slate-700">
                            Gerentes
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
