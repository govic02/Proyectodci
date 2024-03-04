import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DatosUsuario = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleGuardar = () => {
    // Acción de guardar
    console.log('Guardando', { nombreCompleto, email, contrasena });
  };

  return (
    <Card style={{ margin: '20px', padding: '20px', borderRadius: '20px' }}> {/* Bordes redondeados para el Card */}
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: '20px' }}>
          Datos de Usuario
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Nombre Completo
        </Typography>
        <TextField
          label="Nombre Completo"
          variant="outlined"
          fullWidth
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Email
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Contraseña
        </Typography>
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
         Repetir Contraseña
        </Typography>
        <TextField
          label="Repetir Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          style={{ marginBottom: '20px' }}
        />  <div style={{ textAlign: 'center', marginTop: '20px' }}> {/* Centrar el botón */}
        <Button
          variant="contained"
          style={{ backgroundColor: '#DA291C', color: 'white' }}
          onClick={handleGuardar}
        >
          Guardar
        </Button></div>
      </CardContent>
    </Card>
  );
};

export default DatosUsuario;
