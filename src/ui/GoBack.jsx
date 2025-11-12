import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function GoBack({ className, type, to, children }) {
  const navigate = useNavigate();

  if (type === "Link") {
    return (
      <div className={`${className}`}>
        <Link to={to}>
          <Button variant="outline" className="cursor-pointer mb-2 right-0">
            {children}
            <ChevronRight />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-end lg:hidden">
      <Button
        variant="outline"
        className={`cursor-pointer mb-2 ${className}`}
        onClick={() => navigate(-1)}
      >
        Go Back <ChevronRight />
      </Button>
    </div>
  );
}

export default GoBack;
