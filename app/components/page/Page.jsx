import React from "react";
import { FaUserFriends } from "react-icons/fa";


function Tarjeta({ titulo, costo, boton }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-gray-600">{titulo}</h2>
      <p className="text-lg font-bold">{costo}</p>
      <button className="flex justify-between w-full">
        {boton}
        <FaUserFriends className="ml-1" />
      </button>
    </div>
  );
}

export default function HomePage() {
  return (

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Tarjeta
        titulo="Monto Vendido"
        costo="$5,910,309.88"
        boton="Ver todas las ventas"
      />
      <Tarjeta
        titulo="Monto Pagado"
        costo="$468,933,250.28"
        boton="Ver todos los pagos"
      />
      <Tarjeta
        titulo="Monto a Cobrar"
        costo="$941,857,587.20"
        boton="Ver todos los pagos"
      />
      <Tarjeta
        titulo="Monto Cotizado"
        costo="$509,098.48"
        boton="Ver todas las cotizaciones"
      />
    </section>
  );
}
