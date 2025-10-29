import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import RestBanner from "../asets/Restaurants/rest-banner.png";
import RestLogo from "../asets/Restaurants/rest-logo.png";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import FadeinBox from "@/motion/FadeinBox";

function EditProfile() {
  return (
    <div className="sm:flex sm:justify-center">
      <FadeinBox>
        <Card className="sm:w-150">
          <CardContent>
            <img src={RestBanner} alt="" className="rounded-md mb-5" />
            <div className="flex gap-5 items-center">
              <img src={RestLogo} alt="" className="rounded-full w-20" />
              <div className="grid gap-2">
                <CardTitle>Kusum Kitchen</CardTitle>
                <div>
                  <CardDescription>01307761543</CardDescription>
                  <CardDescription>Notun Hat, Jamalgang Road</CardDescription>
                </div>
              </div>
            </div>
            <Button className="w-full mt-5">
              <SquarePen /> Edit
            </Button>
          </CardContent>
        </Card>
      </FadeinBox>
    </div>
  );
}

export default EditProfile;
