import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Text,
} from 'recharts';

// --- Chart Data ---
const chartData = [
  { name: 'Small Business', cost: 6000 },
  { name: 'E-commerce', cost: 17000 },
  { name: 'Enterprise', cost: 21500 },
  { name: 'Web Application', cost: 27000 },
];

// --- Custom Y-Axis Tick Component ---
const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <Text x={x} y={y} dy={-4} fill="#888888" fontSize={12} textAnchor="end">
      {payload.value > 0 ? `${payload.value / 1000}K` : '0'}
    </Text>
  );
};

// --- Main Chart Component ---
const WebsiteCostChart = () => {
  // Check screen width to apply responsive text size
  const isMobile = window.innerWidth < 600;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically if needed
        padding: isMobile ? '20px 10px' : '40px 20px',
        width: '100%',
      }}
    >
      <h2
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: isMobile ? '24px' : '36px',
          fontWeight: 'normal',
          color: '#333333',
          marginBottom: isMobile ? '30px' : '60px',
          textAlign: 'center',
          maxWidth: '90%',
        }}
      >
        Website Costs By Website Type
      </h2>

      <div style={{ width: '100%', maxWidth: '850px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: -10,
              bottom: 5,
            }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              strokeDasharray="5 5"
              vertical={false}
              stroke="#E0E0E0"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#555555',
                fontSize: isMobile ? 10 : 12,
              }}
              interval={0}
              padding={{ left: 20, right: 20 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={CustomYAxisTick}
              domain={[0, 30000]}
              tickCount={4}
            />

            <defs>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb3c7" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#ff69a3" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <Bar
              dataKey="cost"
              fill="url(#colorCost)"
              barSize={40}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WebsiteCostChart;
