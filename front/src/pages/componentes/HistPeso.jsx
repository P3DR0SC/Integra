import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricoPeso = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/historico-peso'); // Rota da API
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: dados.map(item => item.data), 
    datasets: [
      {
        label: 'Peso (kg)',
        data: dados.map(item => item.peso), 
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: { display: true, text: 'Evolução do peso' },
    },
    scales: {
      x: { title: { display: true, text: 'Data' } },
      y: { title: { display: true, text: 'Peso (kg)' } },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Histórico</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default HistoricoPeso;
