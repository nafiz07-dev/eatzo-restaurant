import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, CircleUser, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

function ReviewCard() {
  return (
    <Card className="lg:w-200">
      <CardHeader>
        <div className="flex gap-2 items-center">
          <CircleUser />
          <CardTitle>Nafiz Al Rakib (4.5)</CardTitle>
        </div>
        <CardDescription>Tuesday 25, August, 2025 at 12:12PM</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex gap-1 text-yellow-500">
          <Star size={18} />
          <Star size={18} />
          <Star size={18} />
          <Star size={18} />
          <StarHalf size={18} />
        </div>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis
          deserunt odit praesentium sed aperiam, saepe excepturi adipisci
          reiciendis. Ea.
        </CardDescription>
      </CardContent>
      <Link>
        <CardFooter className="flex justify-between">
          <CardTitle>Kacci Biryani</CardTitle>
          <CardAction>
            <ChevronRight />
          </CardAction>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default ReviewCard;
