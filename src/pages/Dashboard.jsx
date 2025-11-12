import { Skeleton } from "@/components/ui/skeleton";
import ChartBarLabel from "@/features/Dashboard/ChartBarLabel";
import ChartLineLabel from "@/features/Dashboard/ChartLineLabel";
import ChartRadarLabel from "@/features/Dashboard/ChartRaderLabel";
import DashboardCard from "@/features/Dashboard/DashboardCard";
import PieChartLable from "@/features/Dashboard/PieChartLable";
import useRestaurantId from "@/hooks/useRestaurantId";
import useRevenue from "@/hooks/useRevenue";
import FadeinBox from "@/motion/FadeinBox";
import {
  getMostSoldItems,
  getNewOrders,
  getStatsOfOrder,
} from "@/services/apiDashboard";
import Header from "@/ui/Header";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
// import ChartPieLabel from "../features/Dashboard/PieChartLable";

function Dashboard() {
  // Dashboardcard:
  // hideRange -- don't need: false.
  // stats -- don't need: false.

  // restaurant id.
  const restId = useRestaurantId();

  // //// fetch data for Revenue:
  const { revenue: totalRevenue, isLoading: isLoadingRevenue } = useRevenue();

  //// fetch data for new orders
  const { data: NewOrders, isLoading: isLoadingNewOrders } = useQuery({
    queryKey: ["dashboard-new-orders", { restId }],
    queryFn: getNewOrders,
    refetchOnMount: "always",
    enabled: !!restId,
  });

  const numOfNewOrders = NewOrders?.length;

  //// fetch data for Completed Orders
  const [completedOrdersFilter, setCompletedOrdersFilter] = useState("Today");

  const { data: CompletedOrders, isLoading: isLoadingCompletedOrders } =
    useQuery({
      queryKey: [
        "dashboard-completed-orders",
        { restId, filterBy: completedOrdersFilter, type: "delivered" },
      ],
      queryFn: getStatsOfOrder,
      enabled: !!restId,
    });

  const numOfCompletedOrders = CompletedOrders?.length;

  //// fetch data for Completed Orders
  const [canceledOrdersFilter, setCanceledOrdersFilter] = useState("Today");

  const { data: CanceledOrders, isLoading: isLoadingCanceledOrders } = useQuery(
    {
      queryKey: [
        "dashboard-canceled-orders",
        { restId, filterBy: canceledOrdersFilter, type: "canceled" },
      ],
      queryFn: getStatsOfOrder,
      enabled: !!restId,
    }
  );

  const numOfCanceledOrders = CanceledOrders?.length;

  //// fetch data for preparing Orders
  const [preparingOrdersFilter, setPreparingOrdersFilter] = useState("Today");

  const { data: PreparingOrders, isLoading: isLoadingPreparingOrders } =
    useQuery({
      queryKey: [
        "dashboard-preparing-orders",
        { restId, filterBy: preparingOrdersFilter, type: "preparing" },
      ],
      queryFn: getStatsOfOrder,
      enabled: !!restId,
    });

  const numOfPreparingOrders = PreparingOrders?.length;

  //// fetch data for preparing reviews
  const [reviewsOrdersFilter, setReviewsOrdersFilter] = useState("Today");

  const { data: Reviews, isLoading: isLoadingReviewsOrders } = useQuery({
    queryKey: [
      "dashboard-reviews",
      { restId, filterBy: reviewsOrdersFilter, ratings: true },
    ],
    queryFn: getStatsOfOrder,
    enabled: !!restId,
  });

  const numOfReviews = Reviews?.length;

  /////// Chart data fetching
  const { data: SoldItemChart, isLoading: isLoadingPieData } = useQuery({
    queryKey: ["pie-chart", { restId, filterBy: "All Time" }],
    queryFn: getMostSoldItems,
    enabled: !!restId,
  });

  ////// Bar charts data fetching
  const { data: ordersForBar, isLoading: isLoadingBarData } = useQuery({
    queryKey: ["bar-chart", { restId, filterBy: "This Week", type: "bars" }],
    queryFn: getMostSoldItems,
    enabled: !!restId,
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FadeinBox>
            <DashboardCard
              title="Revenue"
              number={`৳${totalRevenue}.00`}
              updown={{ up: true, value: 20 }}
              hideRange={false}
              stats={false}
              isLoading={isLoadingRevenue}
            />
          </FadeinBox>
          <FadeinBox delay={0.1}>
            <DashboardCard
              title="New Orders"
              number={numOfNewOrders}
              hideRange={false}
              stats={false}
              isLoading={isLoadingNewOrders}
            />
          </FadeinBox>
          <FadeinBox delay={0.2}>
            <DashboardCard
              title="Completed Orders"
              number={numOfCompletedOrders}
              stats={false}
              isLoading={isLoadingCompletedOrders}
              setRange={setCompletedOrdersFilter}
              range={completedOrdersFilter}
            />
          </FadeinBox>
          <FadeinBox delay={0.3}>
            <DashboardCard
              title="Preparing Orders"
              number={numOfPreparingOrders}
              hideRange={false} // Is hidden, but works in back
              stats={false}
              isLoading={isLoadingPreparingOrders}
              setRange={setPreparingOrdersFilter}
              range={preparingOrdersFilter}
            />
          </FadeinBox>
          <FadeinBox delay={0.4}>
            <DashboardCard
              title="Canceled Orders"
              number={numOfCanceledOrders}
              updown={{ up: true, value: 20 }}
              stats={false}
              isLoading={isLoadingCanceledOrders}
              range={canceledOrdersFilter}
              setRange={setCanceledOrdersFilter}
            />
          </FadeinBox>
          <FadeinBox delay={0.5}>
            <DashboardCard
              title="Reviews"
              number={numOfReviews}
              stats={false}
              isLoading={isLoadingReviewsOrders}
              setRange={setReviewsOrdersFilter}
              range={reviewsOrdersFilter}
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
          <PieChartLable
            rawChartData={SoldItemChart}
            isLoading={isLoadingPieData}
          />
          {/* 
           Mostly useless, might want them later.
          <ChartRadarLabel />
          <ChartLineLabel /> */}
          <ChartBarLabel
            rawBarData={ordersForBar}
            isLoading={isLoadingBarData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
