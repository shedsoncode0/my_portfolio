import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import {
  HiArrowCircleDown,
  HiArrowCircleLeft,
  HiArrowCircleRight,
  HiArrowCircleUp,
} from "react-icons/hi";
import {
   BiRun
} from "react-icons/bi";

const MobileControl = () => {
  const { setMove } = useContext(AppContext);
  return (
    <section className="w-full p-4 fixed bottom-0 left-0 flex justify-between">
      <div className="w-[200px] h-[200px] p-3 backdrop-blur-sm rounded-full bg-slate-300/30 block  lg:hidden">
        <div className="w-full flex justify-center">
          <button
            onPointerDown={() => setMove({ forward: true })}
            onPointerUp={() => setMove({ forward: false })}
            className="cursor-pointer outline-none rounded-full bg-white "
          >
            <HiArrowCircleUp size={55} />
          </button>
        </div>
        <div className="w-full flex justify-between">
          <button
            onPointerDown={() => setMove({ left: true })}
            onPointerUp={() => setMove({ left: false })}
            className="cursor-pointer outline-none rounded-full bg-white "
          >
            <HiArrowCircleLeft size={55} />
          </button>
          <button
            onPointerDown={() => setMove({ right: true })}
            onPointerUp={() => setMove({ right: false })}
            className="cursor-pointer outline-none rounded-full bg-white "
          >
            <HiArrowCircleRight size={55} />
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button
            onPointerDown={() => setMove({ backward: true })}
            onPointerUp={() => setMove({ backward: false })}
            className="cursor-pointer outline-none rounded-full bg-white "
          >
            <HiArrowCircleDown size={55} />
          </button>
        </div>
      </div>

      <div className="text-white flex flex-col flex-1 justify-between items-end gap-5">
        <div  onPointerDown={() => setMove({ run: true })}
            onPointerUp={() => setMove({ run: false })} className=" py-5 w-16 cursor-pointer text-center backdrop-blur-sm bg-slate-300/30 rounded-lg flex justify-center items-center">
          <BiRun size={50}/>
        </div>
        <div  onPointerDown={() => setMove({ jump: true })}
            onPointerUp={() => setMove({ jump: false })} className="py-9 w-16 cursor-pointer text-center backdrop-blur-sm bg-slate-300/30 rounded-lg flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 123.711 139.059"
            viewBox="0 0 123.711 139.059"
            id="jumping-kid"
            className="text-white w-10 h-10"
            color="white"
            fill="white"
          >
            <path d="M123.655 40.798c-.468-3.559-3.731-6.066-7.292-5.599l-36.165 4.749c-.302.04-.594.106-.879.185-6.561.651-12.311 5.314-13.999 12.078l-5.252 21.047c-2.15 8.601 3.086 17.32 11.691 19.46.164.041.328.062.491.097l-.918 3.863-13.286 5.733c-4.058 1.749-5.928 6.458-4.176 10.516 1.304 3.023 4.251 4.832 7.348 4.832 1.058 0 2.134-.211 3.166-.657l16.971-7.322c2.332-1.008 4.025-3.024 4.613-5.495l12.755-53.657 19.333-2.539C121.615 47.622 124.123 44.359 123.655 40.798zM79.224 32.93c8.438 4.885 19.234 2.015 24.125-6.425 4.881-8.437 2.01-19.234-6.428-24.125-8.436-4.89-19.24-2.004-24.129 6.428C67.904 17.25 70.787 28.051 79.224 32.93zM2.891 135.368c10.898-15.302 24.63-29.517 41.33-36.52 5.32-2.219 9.551-4.578 9.155-6.788-.352-2.135-6.189-2.594-12.069.568-17.784 9.774-29.892 25.688-39.376 42.141C-.998 140.278-.529 140.485 2.891 135.368zM86.034 112.787c-.545.094-.912.611-.818 1.156.083.488.507.833.985.833.057 0 .113-.005.17-.015 2.604-.435 4.282-1.657 5.193-3.07.914-1.408 1.097-2.906 1.099-3.944 0-.82-.114-1.371-.125-1.421-.115-.538-.647-.885-1.187-.769-.539.114-.885.645-.769 1.185h-.002c0 0 .017.068.037.247.022.178.046.441.046.758 0 .802-.155 1.91-.775 2.851C89.265 111.534 88.211 112.406 86.034 112.787z"></path>
            <path
              d="M94.067,113.344c-1.09,1.677-2.982,3.217-6.77,3.729c-0.549,0.07-0.935,0.572-0.864,1.121
		c0.067,0.504,0.498,0.871,0.994,0.871c0.043,0,0.086-0.003,0.13-0.009c4.247-0.541,6.823-2.464,8.193-4.637
		c1.378-2.165,1.61-4.466,1.612-5.867c0-0.813-0.079-1.333-0.085-1.372c-0.087-0.547-0.599-0.918-1.145-0.831
		c-0.544,0.085-0.917,0.596-0.831,1.142c0,0.004,0.063,0.383,0.063,1.062C95.367,109.729,95.147,111.661,94.067,113.344z"
            ></path>
            <polygon points="95.303 107.492 95.303 107.49 95.303 107.49"></polygon>
            <path
              d="M67.463,37.689c0.542-0.102,0.901-0.624,0.801-1.166c-0.102-0.542-0.624-0.902-1.166-0.801
		c-5.196,0.908-6.269,4.915-6.183,6.975c0,0.899,0.141,1.51,0.153,1.562c0.107,0.462,0.52,0.773,0.973,0.773
		c0.075,0,0.151-0.009,0.228-0.027c0.539-0.125,0.873-0.664,0.747-1.203c0,0-0.018-0.079-0.047-0.276
		c-0.025-0.196-0.054-0.487-0.054-0.829C63.002,41.028,63.317,38.523,67.463,37.689z"
            ></path>
            <path
              d="M66.131,33.428c0.546-0.081,0.924-0.588,0.844-1.133c-0.079-0.546-0.588-0.926-1.133-0.846
		c-4.143,0.594-6.668,2.48-8.025,4.613c-1.364,2.129-1.609,4.396-1.613,5.845c0.002,0.93,0.104,1.535,0.113,1.578
		c0.086,0.485,0.507,0.826,0.984,0.826c0.059,0,0.117-0.005,0.177-0.016c0.543-0.097,0.906-0.617,0.809-1.159v-0.002
		c0,0-0.082-0.45-0.082-1.228c-0.002-1.22,0.227-3.111,1.294-4.762C60.572,35.499,62.437,33.985,66.131,33.428z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MobileControl;
