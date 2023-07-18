const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between bg-fuchsia-600 text-white  p-14 w-full  border-b border-gray-200 dark:border-gray-600">
        <h1 className="text-[4rem] font-bold">A Typical Page</h1>
        <div>
          <ul className="p-0 m-0 flex justify-around">
            <li className="p-4 text-2xl">Admin</li>
            <li className="p-4 text-2xl">User</li>
            <li className="p-2 text-2xl">
              <button className="bg-red-500 py-2 px-4 rounded-2xl hover:bg-red-700">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
