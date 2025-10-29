import ChartBarLabel from "@/features/Dashboard/ChartBarLabel";
import ChartLineLabel from "@/features/Dashboard/ChartLineLabel";
import ChartRadarLabel from "@/features/Dashboard/ChartRaderLabel";
import DashboardCard from "@/features/Dashboard/DashboardCard";
import PieChartLable from "@/features/Dashboard/PieChartLable";
import FadeinBox from "@/motion/FadeinBox";
import Header from "@/ui/Header";
// import ChartPieLabel from "../features/Dashboard/PieChartLable";

function Dashboard() {
  // hideRange -- don't need: false.
  // stats -- don't need: false.

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FadeinBox>
            <DashboardCard
              title="Income"
              number={"৳200.0"}
              updown={{ up: true, value: 20 }}
            />
          </FadeinBox>
          <FadeinBox delay={0.1}>
            <DashboardCard
              title="Completed Orders"
              number={20}
              updown={{ up: false, value: 20 }}
            />
          </FadeinBox>
          <FadeinBox delay={0.2}>
            <DashboardCard
              title="Canceled Orders"
              number={2}
              updown={{ up: true, value: 20 }}
            />
          </FadeinBox>
          <FadeinBox delay={0.3}>
            <DashboardCard
              title="Reviews"
              number={4}
              updown={{ up: true, value: 5 }}
            />
          </FadeinBox>
          <FadeinBox delay={0.4}>
            <DashboardCard
              title="New Orders"
              number={2}
              hideRange={false}
              stats={false}
            />
          </FadeinBox>
          <FadeinBox delay={0.5}>
            <DashboardCard
              title="Preparing Orders"
              number={4}
              hideRange={false}
              stats={false}
            />
          </FadeinBox>

          {/* Extra Menu Stats, only first one is usefull, might wanna replace */}
          {/* <FadeinBox delay={0.5}>
            <DashboardCard
              title="Menu Items"
              number={10}
              hideRange={false}
              stats={false}
            />
          </FadeinBox>
          <FadeinBox delay={0.5}>
            <DashboardCard
              title="Disabled Menu Items"
              number={9}
              hideRange={false}
              stats={false}
            />
          </FadeinBox>
          <FadeinBox delay={0.5}>
            <DashboardCard
              title="Closed Menu Items"
              number={1}
              hideRange={false}
              stats={false}
            />
          </FadeinBox> */}
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PieChartLable />
          <ChartRadarLabel />
          <ChartLineLabel />
          <ChartBarLabel />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
