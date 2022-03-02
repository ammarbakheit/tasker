const NavBar = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse flex-col justify-between items-start w-full px-10 py-10">
      <input type="text" placeholder="Search" className="py-1 flex-1  border-indigo-100 border-1 focus:ring-indigo-200   w-full shadow-sm sm:text-sm  rounded-md" />

      <div className="w-full flex-1 flex justify-end">

        <a href="#" className=" my-2 lg:my-0 flex flex-row-reverse items-center">
          <div className="bg-indigo-500 rounded-full w-8 h-8 flex justify-center items-center">
            <span className="text-sm text-white font-bold"> A </span>
          </div>
          <span className="mx-4 font-medium text-sm">Amar Bakheit </span>
        </a>

      </div>

    </div>
  );
}


export default NavBar;