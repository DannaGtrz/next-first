export default function CuartaPage() {
  return (
    <div className="pt-6 px-4">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
          <h1 className="text-2xl font-normal text-gray-500 col-span-2">
            Mapa de ventas por estado
          </h1>
          <section className="text-gray-600 body-font relative">
            <div className="relative w-full h-96 bg-gray-300">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=México&ie=UTF8&t=&z=5&iwloc=B&output=embed"
              ></iframe>
            </div>
          </section>
        </div>

        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
          <h1 className="text-2xl font-normal text-gray-500">
            Ventas por Estado
          </h1>
          <table className="w-full text-left table-auto min-w-max">
            <tbody>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Chiapas
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$3,300,358.95</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Ciudad de Mexico
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$1,577,369.65</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Aguascalientes
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$541,325.84</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Baja California Sur
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$195,365.21</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Estado de Mexico
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$47,658.65</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    Baja California
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$12.74</p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between items-center px-4 py-3">
            <div className="text-sm text-slate-500">
              Showing <b>1-5</b> of 45
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Prev
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                1
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                2
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                3
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
