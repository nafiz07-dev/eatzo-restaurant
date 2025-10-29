import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function PaymentHistoryCard({
  withdraw = false,
  amount,
  cancel = false,
  accepted = false,
  pending = false,
  time,
}) {
  return (
    <Link>
      <Card className="lg:w-150">
        <CardHeader>
          <CardTitle
            className={`${
              withdraw || cancel
                ? "text-red-600"
                : pending
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {withdraw
              ? "Withdraw"
              : cancel
              ? "Canceled"
              : accepted
              ? "Accepted"
              : pending
              ? "Pending"
              : "Income"}
          </CardTitle>
          <CardAction>
            {withdraw ? "-" : ""} ৳{amount}
          </CardAction>
          <CardDescription>Sunday 29, August, 2025 at 12:30PM</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default PaymentHistoryCard;
