import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut, userCurrentToken } from "../../redux/feature/authSlice";
import Swal from "sweetalert2";

const Navbar = () => {
  const authenticated = useAppSelector(userCurrentToken);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(logOut());
        Swal.fire({
          text: "You have been logged out.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#a80000] gap-2 flex flex-col md:flex-row lg:flex-row justify-between items-center px-2 md:px-24 lg:px-36 py-2 md:py-4 lg:py-5">
      <NavLink to="/">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl lg:text-4xl font-extrabold">HealthUnity</h1>
          <img src="/logo.jpg" alt="" className="w-10 h-10" />
        </div>
      </NavLink>

      <div className=" flex flex-wrap gap-5 justify-center items-center">
        <NavLink
          to="/supplies"
          className="text-white hover:text-[#d4d4d4] transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium "
        >
          All Supplies
        </NavLink>
        {authenticated && (
          <NavLink
            to="/dashboard"
            className="text-white hover:text-[#d4d4d4] transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium "
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          to="/leaderboard"
          className="text-white hover:text-[#d4d4d4] transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium "
        >
          Leaderboard
        </NavLink>
        <NavLink
          to="/community"
          className="text-white hover:text-[#d4d4d4] transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium "
        >
          Community
        </NavLink>
        {!authenticated && (
          <NavLink
            to="/login"
            className="text-[#a80000] bg-white hover:bg-[#a80000]  hover:text-white transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium py-1.5 px-4 rounded"
          >
            Login
          </NavLink>
        )}
        {authenticated && (
          <button
            onClick={() => handleLogout()}
            className="text-[#a80000] bg-white hover:bg-[#a80000]  hover:text-white transition_custom text-xs md:text-lg lg:text-xl font-normal md:font-medium lg:font-medium py-1.5 px-4 rounded"
          >
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
