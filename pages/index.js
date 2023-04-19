import Head from "next/head";
import Image from "next/image";
import facebook from "../public/facebook.svg";

const index = () => {
  return (
    <div className="flex justify-center bg-gray-200 h-screen text-center">
      <div className="w-1/4 my-auto">
        <Image src={facebook} alt="Facebook" width={260} className="mx-auto" />
        <div className="bg-white flex flex-col p-6 rounded-md space-y-3">
          <h5 className="">Log in to Facebook</h5>
          <input
            type="text"
            className="px-3 py-2 border-2 border-gray-200 rounded-md"
            placeholder="Enter email or phone number"
          />
          <input
            type="password"
            className="px-3 py-2 border-2 border-gray-200 rounded-md"
            placeholder="Password"
          />
          <button className="font-bold bg-blue-500 py-3 text-white rounded-md">
            Log in
          </button>
          <div className="space-x-3 text-sm  text-blue-400">
            <span className="hover:underline cursor-pointer">
              Forgotten account?
            </span>
            <span className="hover:underline cursor-pointer">
              Sign up for Facebook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
