import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Bem Vindo, CELESC Rei delas</h1>
      <div className="cards">
        <Card title="Steps" value="9300" unit="steps" icon="🥗" color="blue" />
        <Card title="Calories"
        value="2900" unit="calories" icon="🍲" color="orange" />
        <Card title="Progress" value="86" unit="%" icon="🥑" color="green" />
      </div>

      <div className="activities">
        <Card
          title="Dormiu"
          value="8.3"
          unit="hours last night"
          icon="🛌"
          color="purple"
          chart
        />
        <Card
          title="Pedalou"
          value="3.5"
          unit="kms today"
          icon="🚴"
          color="blue"
          chart
        />
        <Card
          title="Correu"
          value="2.8"
          unit="kms today"
          icon="🏃"
          color="blue"
          chart
        />
        <Card
          title="Treinou"
          value="2.6"
          unit="hours today"
          icon="💪"
          color="red"
          chart
        />
      </div>

      <div className="upcoming">
        <h2>Upcoming Events</h2>
        <div className="event">
          <p>Sat 30</p>
          <p>Fitness Retreats</p>
          <p>4:30 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
