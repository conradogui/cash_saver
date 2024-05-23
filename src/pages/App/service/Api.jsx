import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.alphavantage.co/query?function=INFLATION&apikey=demo"
      );

      const responseData = response.data.data;
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data)

  useEffect(() => {
    getData();
  }, []);

  const prepareChartData = () => {
    const labels = data.map((item) => item.date);
    const values = data.map((item) => parseFloat(item.value));

    return {
      labels,
      datasets: [
        {
          label: "Taxa de inflação de 1960 - 2022",
          data: values,
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
          pointBorderColor: "#fff",
        },
      ],
    };
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {data.length > 0 ? (
        <Line className="w-full flex" data={prepareChartData()} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Api;
