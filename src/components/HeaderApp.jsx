import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const headerHeight = '64px';

const HeaderApp = ({ proyectoKey }) => {
    console.log("Proyecto seleccionado Header:", proyectoKey);
    return (
        <AppBar position="static" style={{ backgroundColor: 'white', color: '#222223', minHeight: headerHeight, zIndex: '1000' }}>
            <Toolbar>
                <img src="/images/proyectoIcn.svg" alt="Logo" style={{ width: '35px', alignSelf: 'flex-start', marginRight: '15px', marginTop: '15px' }} />
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  {proyectoKey}
                </Typography>
                <img src="/images/campana.svg" alt="Imagen" style={{ width: '30px', marginRight: '15px' }} /> {/* Imagen adicional a la izquierda del círculo */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#DA291C',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    DF
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderApp;
