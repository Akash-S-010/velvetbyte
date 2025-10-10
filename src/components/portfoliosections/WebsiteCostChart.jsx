import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Text,
  ReferenceDot
} from 'recharts';

// --- Chart Data ---
const chartData = [
  { name: 'Small Business', cost: 6000 },
  { name: 'E-commerce', cost: 17000 },
  { name: 'Enterprise', cost: 21500 },
  { name: 'Web Application', cost: 27000 },
];

// --- Custom Tick Component for Y-Axis (adds 'K' suffix) ---
const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <Text x={x} y={y} dy={-4} fill="#888888" fontSize={12} textAnchor="end">
      {/* Format value from e.g., 10000 to 10K */}
      {payload.value > 0 ? `${payload.value / 1000}K` : '0'}
    </Text>
  );
};

// --- Styles as JavaScript Objects ---
const styles = {
    // Styling for the main card container
    chartContainer: {
        backgroundColor: '#FFFFFF', // White background
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)', // Subtle shadow
        maxWidth: '850px',
        margin: '50px auto', // Center the card
        fontFamily: 'sans-serif',
    },
    // Styling for the main title
    mainTitle: {
        fontFamily: 'Georgia, serif', // Using a serif font to match the elegant look
        fontSize: '36px',
        fontWeight: 'normal',
        color: '#333333',
        marginBottom: '60px',
        textAlign: 'left',
    },
};

// --- Main Chart Component ---
const WebsiteCostChart = () => {
  // Approximate position for the standalone black dot seen in the image (x=index 1.3, y=22000)
  // We use the dataKey 'name' for the X position and numerical value for the Y position.
  const dotXPosition = chartData[0].name; // Start with 'Small Business' X position
  const dotYPosition = 22000;
  
  // NOTE: Placing a ReferenceDot at a specific *non-data* coordinate is tricky in Recharts.
  // We'll place it at 22K on the Y-axis and manually adjust the X coordinate.
  
  return (
    <div style={styles.chartContainer}>
      <h2 style={styles.mainTitle}>Website Costs By Website Type</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 10,
            left: -10, // Adjust left margin for Y-axis text
            bottom: 5,
          }}
          barCategoryGap="25%" // Space between bars
        >
          {/* Light dashed horizontal grid lines */}
          <CartesianGrid
            strokeDasharray="5 5" // Dashed line style
            vertical={false} // Only horizontal lines
            stroke="#E0E0E0" // Light gray stroke color
          />

          {/* X-Axis (Bottom Labels: Small Business, E-commerce, etc.) */}
          <XAxis
            dataKey="name"
            axisLine={false} // Hide the solid axis line
            tickLine={false} // Hide the small tick marks
            tick={{ fill: '#555555', fontSize: 13 }}
            interval={0}
            padding={{ left: 20, right: 20 }}
          />

          {/* Y-Axis (Left Labels: 0, 10K, 20K, 30K) */}
          <YAxis
            axisLine={false} // Hide the solid axis line
            tickLine={false} // Hide the small tick marks
            tick={CustomYAxisTick} // Use the custom component for 'K' suffix
            domain={[0, 30000]} // Explicit max Y value
            tickCount={4} // 0, 10k, 20k, 30k
          />

          {/* Gradient Definition for Bars */}
          <defs>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffb3c7" stopOpacity={0.7} /> {/* Lighter pink at top */}
              <stop offset="95%" stopColor="#ff69a3" stopOpacity={0.3} /> {/* Deeper pink/more transparent at bottom */}
            </linearGradient>
          </defs>

          {/* Bar Definition */}
          <Bar dataKey="cost" fill="url(#colorCost)" barSize={40} radius={[8, 8, 0, 0]} />

          {/* ReferenceDot for the standalone black dot annotation */}
          {/* The x position for ReferenceDot needs to be an item from the dataKey.
             To place it between 'Small Business' (index 0) and 'E-commerce' (index 1),
             we use the string "Small Business" and manually adjust the X position (dx).
          */}
          
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WebsiteCostChart;