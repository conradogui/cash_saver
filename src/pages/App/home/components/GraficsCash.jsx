import React, { useEffect, useState } from "react";
import { useFetchDocuments } from "@/hooks/useFetchDocuments.jsx";
import Chart from "chart.js/auto";
import moment from "moment";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const MIN_DATE = "2024-05-21";
const MAX_DATE = "2026-05-21";
const DOCUMENT_LIMIT = 100;

const GraficsCash = () => {
  const { documents, loading, error } = useFetchDocuments(
    "amount",
    DOCUMENT_LIMIT
  );
  const [chart, setChart] = useState(null);
  const [selectedDate, setSelectedDate] = useState(MIN_DATE);

  const drawChart = (selectedDate) => {
    const filteredDocuments = documents.filter((doc) => {
      const createdAt = doc.createdAt.toDate();
      return moment(createdAt).format("YYYY-MM-DD") === selectedDate;
    });

    const chartData = {
      datasets: [
        {
          label: "Balanço Diário",
          data: filteredDocuments.map((doc) => doc.totalCashValue),
          backgroundColor: "#243e36",
        },
      ],
      labels: filteredDocuments.map((doc) =>
        moment(doc.createdAt.toDate()).format("DD MMM")
      ),
    };

    if (chart) {
      chart.data = chartData;
      chart.update();
    } else {
      const ctx = document.getElementById("chart").getContext("2d");
      const newChart = new Chart(ctx, {
        type: "bar",
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
      setChart(newChart);
    }
  };

  useEffect(() => {
    if (documents && documents.length > 0) {
      drawChart(selectedDate);
    }
  }, [documents, selectedDate]);

  useEffect(() => {
    flatpickr("#date", {
      dateFormat: "Y-m-d",
      defaultDate: MIN_DATE,
      maxDate: MAX_DATE,
      onChange: function (selectedDates) {
        setSelectedDate(moment(selectedDates[0]).format("YYYY-MM-DD"));
      },
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white text-black mt-2 rounded-2xl">
      <input type="text" id="date" className="" />
      <canvas id="chart"></canvas>
    </div>
  );
};

export default GraficsCash;
