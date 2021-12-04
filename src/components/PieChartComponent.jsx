import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import {sampleData, sampleColours} from '../SampleData';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({elements}) => {

    const labels = sampleData.slice(0, elements.length);
    const colours = sampleColours.slice(0, elements.length);

    const dataPoints = {
        labels,
        datasets: [
          {
            label: '# of fruits',
            data: elements,
            backgroundColor: colours,
            borderColor: colours,
            borderWidth: 1,
          },
        ],
    };

    return(
        <>
          <div className="commonWidthHeight">
            <Pie data={dataPoints} />
          </div>
        </>
    );
};

export default PieChartComponent;
