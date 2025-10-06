import React, { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const stats = [
    { id: 1, value: 25, label: "Team Specialists" },
    { id: 2, value: 500, label: "Bespoke Websites" },
    { id: 3, value: 503, label: "Clients across the globe" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer → triggers when section appears on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fafafa",
        padding: "80px 20px",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {stats.map((stat) => (
        <CounterCard
          key={stat.id}
          targetValue={stat.value}
          label={stat.label}
          visible={visible}
        />
      ))}
    </section>
  );
};

// Counter animation logic
const CounterCard = ({ targetValue, label, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / targetValue));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= targetValue) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, targetValue]);

  return (
    <div style={{ flex: "1 1 200px" }}>
      <h1
        style={{
          fontSize: "80px",
          color: "#FF9900",
          margin: "0",
          fontWeight: "700",
        }}
      >
        {count}
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#000",
          marginTop: "10px",
          fontWeight: "400",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatsSection;
