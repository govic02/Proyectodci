import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ControlEstadisticas = () => {
  const cardStyle = {
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '20px',
  };

  const buttonStyle = (isActive) => ({
    marginLeft: '10px',
    borderRadius: '20px',
    backgroundColor: isActive ? '#DA291C' : 'white',
    color: isActive ? '#FFF' : '#DA291C',
    border: '2px solid #DA291C',
    '&:hover': {
      backgroundColor: '#DA291C',
      color: '#FFF',
    },
  });

  return (
    <Card style={cardStyle}>
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <img src="images/estadisticaIcn.svg" alt="Estadísticas" style={{ width: '35px', marginRight: '10px' }} />
        <Typography style={{ color: '#DA291C' }}>
          Estadísticas
        </Typography>
      </CardContent>
      <div>
        {/* Ejemplo de botón activo */}
        <Button variant="contained" style={buttonStyle(true)}>
          <img src="images/pdfWhite.svg" alt="PDF" style={{ marginRight: '5px' }} />
          Generar PDF
        </Button>
        {/* Ejemplo de botón no activo */}
        <Button variant="contained" style={buttonStyle(false)}>
          <img src="images/cvsRed.svg" alt="CSV" style={{ marginRight: '5px' }} />
          Generar CSV
        </Button>
        <Button variant="contained" style={buttonStyle(false)}>
          <img src="images/maestro.svg" alt="CSV" style={{ marginRight: '5px' }} />
          Generar CSV
        </Button>
        <Button variant="contained" style={buttonStyle(false)}>
          <img src="images/verDatos.svg" alt="CSV" style={{ marginRight: '5px' }} />
          Generar CSV
        </Button>
        {/* Repite para otros botones */}
      </div>
    </Card>
  );
};

export default ControlEstadisticas;
