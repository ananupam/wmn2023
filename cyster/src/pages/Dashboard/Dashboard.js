import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import "./Dashboard.css"
import {Chart} from 'react-chartjs-2';

const Dashboard = () => {
  const [period, setPeriod] = useState([]);
  const [weight, setWeight] = useState([]);
  const [mood, setMood] = useState([]);
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  useEffect(() => {
    // Fetch doctors from MongoDB
    const fetchData = async () => {
      const response = await fetch('http://localhost:5005/tracker/');
      const datas = await response.json();

      const perioddata = datas.period.flatMap((monthData, monthIndex) => {
        const monthYear = new Date(getCurrentYear(), monthIndex, 1);
        const numDays = daysInMonth(monthIndex, getCurrentYear());
        return Array.from({ length: numDays }, (_, dayIndex) => ({
          date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 1),
          count: monthData[dayIndex] || 1,
        }));
      });
      
      const mooddata = datas.mood.flatMap((monthData, monthIndex) => {
        const monthYear = new Date(getCurrentYear(), monthIndex, 1);
        const numDays = daysInMonth(monthIndex, getCurrentYear());
        return Array.from({ length: numDays }, (_, dayIndex) => ({
          date: new Date(monthYear.getFullYear(), monthYear.getMonth(), dayIndex + 1),
          count: monthData[dayIndex] || 1,
        }));
      });
      setPeriod(perioddata)
      setMood(mooddata)
    };

    fetchData();
  }, []);



  return (
    <div className="monthly-tracker">
      <CalendarHeatmap
        startDate={new Date(getCurrentYear(), 0, 1)}
        endDate={new Date(getCurrentYear(), 11, 31)}
        values={period}
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
        values={weight}
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
        values={mood}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
      />

    </div>
  );
};

export default Dashboard;