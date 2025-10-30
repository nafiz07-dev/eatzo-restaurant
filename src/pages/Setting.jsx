import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FadeinBox from "@/motion/FadeinBox";

function Setting() {
  return (
    <div className="flex flex-col items-center gap-3">
      <FadeinBox>
        <Card className="w-100">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-3">
              {/* <Label htmlFor="oldpassword">Old Password</Label> */}
              <Input placeholder="Old password" type="text" id="oldpassword" />
              <Input placeholder="New password" type="text" id="oldpassword" />
              <Input
                placeholder="Confirm New Password"
                type="text"
                id="oldpassword"
              />
            </div>
            <CardAction className="mt-5">
              <Button>Save</Button>
            </CardAction>
          </CardContent>
        </Card>
      </FadeinBox>
    </div>
  );
}

export default Setting;
