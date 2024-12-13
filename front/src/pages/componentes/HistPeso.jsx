import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useUserInfo from '../../hooks/UserInfo'; 
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricoPeso = () => {
  const [dados, setDados] = useState([]);       // Estado para os dados do gráfico
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null);     // Estado de erro
  const { userInfo } = useUserInfo();           // Obtendo informações do usuário

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      if (userInfo?.id) {
        setLoading(true); // Ativa o carregamento
        console.log('Buscando dados com ID:', userInfo.id); // Log do ID do usuário

        try {
          const response = await axios.get(`http://localhost:5000/historico_peso/${userInfo.id}`);
          console.log('Resposta completa da API:', response); // Log da resposta completa
          console.log('Dados recebidos da API:', response.data); // Log dos dados específicos

          // Validação e estruturação dos dados
          if (Array.isArray(response.data)) {
            setDados(response.data);
          } else {
            console.warn('Os dados recebidos não estão no formato esperado:', response.data);
            setDados([]);
          }
          setError(null); // Limpa qualquer erro anterior
        } catch (err) {
          console.error('Erro ao buscar dados da API:', err.message);
          setError('Erro ao carregar os dados.');
          setDados([]);
        } finally {
          setLoading(false); // Finaliza o carregamento
        }
      } else {
        console.warn('userInfo.id_pessoa não está disponível.');
        setLoading(false);
      }
    };

    fetchData();
  }, [userInfo]);

  // Estruturação dos dados para o gráfico
  const data = {
    labels: dados.map((item, index) => {
      const label = item?.data || `Data ${index + 1}`; // Garante um label válido
      console.log(`Label gerado: ${label}`); // Log dos labels gerados
      return label;
    }),
    datasets: [
      {
        label: 'Peso (kg)',
        data: dados.map((item, index) => {
          const peso = parseFloat(item?.peso) || 0; // Garante um valor numérico
          console.log(`Peso gerado [${index}]:`, peso); // Log dos valores gerados
          return peso;
        }),
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        tension: 0.4,
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: 'Data' } },
      y: { title: { display: true, text: 'Peso (kg)' }, beginAtZero: true },
    },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Histórico de Peso' },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', height: '400px' }}>
      <h2 style={{ textAlign: 'center' }}>Histórico de Peso</h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Carregando...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
      ) : (
        <>
          <p style={{ textAlign: 'center' }}>Dados carregados com sucesso!</p>
          <Line data={data} options={options} />
        </>
      )}
    </div>
  );
};

export default HistoricoPeso;
