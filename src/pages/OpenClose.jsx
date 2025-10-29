import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FadeinBox from "@/motion/FadeinBox";
import Header from "@/ui/Header";
import SelectUi from "@/ui/SelectUi";
import { useState } from "react";

function OpenClose() {
  const [selectedOpenHour, setSelectedOpenHour] = useState("AM");
  const [selectedClosingHour, setSelectedClosingHour] = useState("PM");
  const selectContent = [
    {
      group: "Set Hour",
      item: ["AM", "PM"],
    },
  ];

  return (
    <>
      <FadeinBox>
        <div className="flex justify-center items-center h-100">
          <Card className="sm:w-120 ">
            <CardContent>
              <div className="grid w-full sm:w-auto items-center gap-3">
                <div className="grid gap-3">
                  <Label htmlFor="open">Opening Hour</Label>
                  <div className="flex gap-2">
                    <Input id="open" type="number" value={10} />
                    <SelectUi
                      placeholder="Hour"
                      setSelect={setSelectedOpenHour}
                      selectContent={selectContent}
                      select={selectedOpenHour}
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="open">Opening Hour</Label>
                  <div className="flex gap-2">
                    <Input id="open" type="number" value={10} />
                    <SelectUi
                      placeholder="Hour"
                      setSelect={setSelectedClosingHour}
                      selectContent={selectContent}
                      select={selectedClosingHour}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-5">Save</Button>
            </CardContent>
          </Card>
        </div>
      </FadeinBox>
    </>
  );
}

export default OpenClose;
