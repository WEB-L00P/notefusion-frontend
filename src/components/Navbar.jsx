import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const notify = () =>
    toast("You clicked profile", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  return (
    <>
      <Toaster />
      <div className="navbar py-2 flex justify-between items-center">
        <div className="hamnurgure  hover:rounded-full">
          {/* <div className="absolute -z-[1px] w-[25px] h-[25px] hover:text-black hover:bg-white hover:rounded-full"></div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            color="#fff"
          >
            <path
              stroke="#fff"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M3 12h18M3 19h18"
            ></path>
          </svg>
        </div>
        <div>
          <img
            src="../../public/logo.png"
            alt="logo"
            className="logo hover:animate-pulse"
          />
        </div>
        <div className="avatar">
          <img
            onClick={notify}
            src="/user.jpg"
            alt="avatar"
            className="w-11 rounded-full hover:animate-spin"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
