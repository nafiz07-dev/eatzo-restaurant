import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function NotificationCard() {
  return (
    <Link>
      <Card className=" hover:bg-black/10 transition ease-in cursor-pointer mt-2">
        <CardContent>
          <CardTitle className="text-sm">Withdraw ৳3000</CardTitle>
          <CardDescription>Tuesday 24, August, 2025 at 11:00PM</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default NotificationCard;
