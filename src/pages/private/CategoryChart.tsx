import { useEffect, useRef } from "react";
import { useGetSuppliesQuery } from "../../redux/feature/suppliesApi";
import Chart from "chart.js/auto";
import { TFetchData } from "../../utils/Type";

const CategoryChart = () => {
  const chartRef: any = useRef(null);
  const chartInstance: any = useRef(null);

  const { data, isLoading } = useGetSuppliesQuery("");
  console.log(data);
  useEffect(() => {
    if (data) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const myChartRef = chartRef.current!.getContext("2d");

      const categoryCounts = data.reduce(
        (counts: Record<string, number>, item: TFetchData) => {
          const category = item.category;
          counts[category] = (counts[category] || 0) + 1;
          return counts;
        },
        {}
      );

      const categories = Object.keys(categoryCounts);
      const counts = Object.values(categoryCounts);

      chartInstance.current = new Chart(myChartRef, {
        type: "pie",
        data: {
          labels: categories,
          datasets: [
            {
              data: counts,
              backgroundColor: [
                "rgb(255,99,132)",
                "rgb(54,162,235)",
                "rgb(255,205,86)",
              ],
            },
          ],
        },
      });

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [data]);
  return (
    <div>
      {isLoading ? (
        <div></div>
      ) : (
        <div className="w-full">
          <canvas
            ref={chartRef}
            style={{
              width: "15rem",
              height: "15rem",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryChart;
