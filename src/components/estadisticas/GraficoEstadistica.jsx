import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoEstadistica = ({ titulo }) => {
  const data = {
    labels: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5'],
    datasets: [
      {
        label: 'Dato 1',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#E04C41',
      },
      {
        label: 'Dato 2',
        data: [2, 3, 20, 5, 1],
        backgroundColor: '#737373',
      },
      {
        label: 'Dato 3',
        data: [3, 10, 13, 15, 22],
        backgroundColor: '#EE736A',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const cardStyle = {
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '40px',
    borderRadius: '20px', // Bordes redondeados
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ fontSize: 14 }}>
          {titulo}
        </Typography>
        <div>
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default GraficoEstadistica;
