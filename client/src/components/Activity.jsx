import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useStore from '../store/store';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Basic options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Applications per Day',
    },
  },
};

// Utility function to format a Date object as "YYYY-MM-DD"
const formatDate = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

// Function to generate an array of the last 7 dates from a given date
const getLast7DaysDates = (endDate) => {
  let dates = [];
  for (let i = 6; i >= 0; i--) {
    let d = new Date(endDate);
    d.setDate(d.getDate() - i);
    dates.push(formatDate(d));
  }
  return dates;
};

// Import ChartJS and Bar from 'react-chartjs-2' and useStore from your store path

const Activity = () => {
  const { cardCount } = useStore();

  // Assume today as the end date or adjust as needed to view previous weeks
  const endDate = new Date(); // Today's date
  const last7DaysLabels = getLast7DaysDates(endDate);

  // Filter cardCount to include only the last 7 days
  const filteredCounts = last7DaysLabels.map((date) => cardCount[date] || 0);
  console.log('Last 7 days labels:', last7DaysLabels);
  console.log('Filtered counts:', filteredCounts);
  console.log('cardCount state:', cardCount);

  const data = {
    labels: last7DaysLabels,
    datasets: [
      {
        label: 'Applications',
        data: filteredCounts,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Activity;
