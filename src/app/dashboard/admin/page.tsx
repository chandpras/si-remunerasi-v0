import CountChart from "@/components/CountCharts";
import WidgetCards from "@/components/WidgetCards";
import BarCharts from "@/components/BarCharts";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between">
          <WidgetCards type="widget1" />
          <WidgetCards type="widget2" />
          <WidgetCards type="widget3" />
          <WidgetCards type="widget4" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col md:flex-row py-4">
          {/* COUNTS CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* BAR CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <BarCharts />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
      </div>
      {/* RIGHT SIDE */}
      {/* <div className="w-full lg:w-1/3">r</div> */}
    </div>
  );
};

export default AdminPage;
