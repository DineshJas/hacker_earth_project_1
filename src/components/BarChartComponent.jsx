import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {sampleData, sampleColours} from '../SampleData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      }
    }
};

const BarChartComponent = ({elements}) => {

    const labels = sampleData.slice(0, elements.length);
    const dataPoints = {
        labels,
        datasets: [
            {
                label: "fruits counts",
                data: elements,
                backgroundColor: sampleColours[Math.floor(Math.random() * elements.length)]
            }
        ]
    };

    return(
        <>
            <div className="commonWidthHeight">
                <Bar options={options} data={dataPoints} />
            </div>
        </>
    );
};

export default BarChartComponent;
