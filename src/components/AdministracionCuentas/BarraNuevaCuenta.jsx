import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const BarraNuevaCuenta = () => {
  const titleStyle = {
    color: '#E30613', // Color rojo para el título "¡Iniciemos!"
    alignItems: 'center'
  };
  const imageStyle = {
    marginLeft: '20px', // Margen a la izquierda de 20px para la imagen
  };
  const buttonStyle = {
    borderRadius: '20px', // Bordes redondeados para el botón
    backgroundColor: '#E30613', // Color de fondo,
    marginLeft: '-85px'
  };

  const cardStyle = {
    margin: '4px 5px', // Margen de 4px arriba y abajo, 5px a los lados
    borderRadius: '20px'
  };
  return (
    <Card className="m-4" style={cardStyle}>
      <CardContent>
      <div className="row align-items-center mb-4">
          <div className="col d-flex justify-content-start align-items-center">
            <img src="images/administracionCuentasIcn.svg" alt="Admin Icon" style={imageStyle} />
            <Typography variant="subtitle1" style={{ marginLeft: '5px' }}>
              Admin de Cuentas
            </Typography>
          </div>
          <div className="col d-flex justify-content-center">
           
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
          <Typography variant="h5" style={titleStyle}>
              ¡Iniciemos!
            </Typography>
            <Typography variant="subtitle1"  style={{ marginLeft: '-85px' }}>
              Ingrese los datos para crear una cuenta
            </Typography>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <TextField label="Nombre de Usuario" variant="outlined" className="me-2" />
          </div>
          <div className="col-auto">
            <TextField label="E-Mail" variant="outlined" className="me-2" />
          </div>
          <div className="col-auto">
            <TextField label="Contraseña" variant="outlined" className="me-2" />
          </div>
          <div className="col-auto">
            <RadioGroup row>
              <FormControlLabel value="visualizador" control={<Radio />} label="visualizador" />
              <FormControlLabel value="Editor" control={<Radio />} label="Editor" />
              <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
            </RadioGroup>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Button variant="contained" style={buttonStyle}>
              Crear Cuenta
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarraNuevaCuenta;
