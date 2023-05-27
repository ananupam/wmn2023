import React, { useState, useEffect} from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Dashboard = () => {
        const [yearlyDatas, setYearlyData] = useState(new Array(12).fill([]));
       const  yearlyData = [[0,0,6,4,],[46,64],[],[]]
        const getCurrentYear = () => {
          return new Date().getFullYear();
        };
        
        const daysInMonth = (month, year) => {
          return new Date(year, month + 1, 0).getDate();
        };
        
        const data = yearlyData.flatMap((monthData, monthIndex) => {
          const monthYear = new Date(getCurrentYear(), monthIndex, 1);
          const numDays = daysInMonth(monthIndex, getCurrentYear());
          return Array.from({ length: numDays }, (_, dayIndex) => ({
            date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 1),
            count: monthData[dayIndex] || 5,
          }));
        });


  useEffect(() => {
    // Fetch doctors from MongoDB
    const fetchData = async () => {
      const response = await fetch('http://localhost:5005/tracker/');
      const datas = await response.json();
      data= datas;
    };

    fetchData();
  }, []);
        
      
        console.log(data)
      
  return (
    <div className="monthly-tracker">
        <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={data}
        showWeekdayLabels={true}
        classForValue={(value) => {
            if (!value) {
            return 'color-empty';
            }
            return `color-scale-${value.count}`;
        }}
        />
        
        <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={data}
        showWeekdayLabels={true}
        classForValue={(value) => {
            if (!value) {
            return 'color-empty';
            }
            console.log(value.count)
            return `color-scale-${value.count}`;
        }}
        />

  </div>
);
};

export default Dashboard;