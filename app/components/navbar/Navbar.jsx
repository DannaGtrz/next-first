const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white-800 bg-opacity-30 p-4 m-4 rounded-lg shadow-md">
      <div>
        <h1 className="text-xl font-bold">¡Buenas tardes!</h1>
        <p className="text-sm text-gray-500">
          Esto es lo que está pasando por tus equipos
        </p>
      </div>
      <input
        className="reloj"
        type="month"
      />
    </nav>
  );
};

export default Navbar;
