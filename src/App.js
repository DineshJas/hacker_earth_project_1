import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { getDataFromApi } from './action/Data';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';

function App() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.DataReducer.dataForGraph);

  useEffect(() => {
    getDataFromApi(dispatch)
  }, [dispatch]);

  return (
    <div className="App">
      {data.length && data.map((value, index) => (
        value.type === 'Pie' ? 
            <PieChartComponent key={index} elements={value.elements} /> : 
        value.type === 'Bar' ? 
            <BarChartComponent key={index} elements={value.elements} /> : ''
      ))}
    </div>
  );
}

export default App;
