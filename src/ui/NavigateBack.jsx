import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function NavigateBack({ left = false }) {
  const navigate = useNavigate(-1);

  return (
    <div
      className="px-1 py-1 border rounded-md border-gray-300 active:bg-gray-300/50 transition ease-in-out"
      onClick={() => navigate(-1)}
    >
      {left ? (
        <MdKeyboardArrowLeft size={30} />
      ) : (
        <MdKeyboardArrowRight size={30} />
      )}
    </div>
  );
}

export default NavigateBack;
