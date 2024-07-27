
import Logo from "/logo.png";

function Navbar() {
  return (
    <div className=" bg-black bg-opacity-20 font-poppins flex justify-between items-center py-2 px-20  ">
      <div className=" h-20">
        <img className="h-full w-full" src={Logo} />
      </div>

      <div className="flex justify-between items-center w-2/5">
        <div className="text-white text-xl hover:underline">
          <a href="">Home</a>
        </div>
        <div className="text-white text-xl hover:underline">
          <a href="">Recipes</a>
        </div>
        <div className="text-white text-xl hover:underline">
          <a href="">Forum</a>
        </div>
        <div className="text-white text-xl hover:underline">
          <a href="">Contact Us</a>
        </div>
      </div>

      <div>
        <button className="bg-white text-black font-medium text-base rounded-full px-14 py-2 hover:bg-[#D86464] hover:text-white transition-all duration-300">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
