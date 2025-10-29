import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WithdrawTable from "@/features/Payment/WithdrawTable";
import FadeinBox from "@/motion/FadeinBox";

const tableContnet = [
  {
    title: "Kacchi Biryani",
    quantity: 2,
    amount: 340,
    time: "12:00 PM",
  },
  {
    title: "Rara Biryani",
    quantity: 2,
    amount: 40,
    time: "12:00 PM",
  },
  {
    title: "Pao vaji",
    quantity: 2,
    amount: 140,
    time: "12:00 PM",
  },
  {
    title: "Checken Biryani",
    quantity: 2,
    amount: 300,
    time: "12:00 PM",
  },
];

function Withdraw() {
  return (
    <div className="grid gap-3">
      <FadeinBox>
        <div className="bg-[#00b795] font-semibold flex flex-col items-center justify-center h-60 rounded-xl text-white gap-3">
          <h1 className="text-xl ">Your Balance</h1>
          <span className="text-2xl ">৳5000</span>
          <Button variant="outline" className="bg-transparent">
            Withdraw
          </Button>
        </div>
      </FadeinBox>
      <FadeinBox delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Income</CardTitle>
          </CardHeader>
          <CardContent>
            <WithdrawTable tableContent={tableContnet} />
          </CardContent>
        </Card>
      </FadeinBox>
    </div>
  );
}

export default Withdraw;
