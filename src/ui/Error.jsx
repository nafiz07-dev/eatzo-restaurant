import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4 flex items-center gap-2">
        Page Not Found <span className="text-yellow-500 text-2xl">⚠️</span>
      </h2>
      <p className="text-gray-500 mt-2">
        we couldn't find the page you are looking for.
      </p>
      <Link to={"/"}>
        <button className="mt-6 px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200 shadow-md">
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default Error;
