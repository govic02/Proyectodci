 import React from 'react';
 import { makeStyles } from '@mui/styles';
 import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

 const useStyles = makeStyles({
   tableContainer: {
     marginTop: '50px',
   
     fontFamily: 'Rajdhani, sans-serif',
     '&.css-11xur9t-MuiPaper-root-MuiTableContainer-root': {
       width: '93%',
     },
   },
   headerCell: {
     fontWeight: 'bold',
   },
   button: {
     backgroundColor: '#FFF',
     color: '#DA291C',
     border: '1px solid #DA291C',
   },
 });
 const ProyectosUsuarios = () => {
   const classes = useStyles();
   const filas = [
     { nombre: 'Nombre1', usuario: 'Usuario 1', perfil: 'Admin' },
     // ... otros datos
   ];

   return (
     <TableContainer component={Paper} className={classes.tableContainer}>
       <Table aria-label="tabla de proyectos y usuarios">
         <TableHead>
           <TableRow>
             <TableCell className={classes.headerCell}>Nombre</TableCell>
             <TableCell className={classes.headerCell}>Usuario</TableCell>
             <TableCell className={classes.headerCell}>Perfil</TableCell>
             <TableCell className={classes.headerCell}>Accion</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {filas.map((fila, index) => (
             <TableRow key={index}>
               <TableCell>{fila.nombre}</TableCell>
               <TableCell>{fila.usuario}</TableCell>
               <TableCell>{fila.perfil}</TableCell>
               <TableCell>
                 <Button 
                   variant="contained" 
                   className={classes.button}
                   startIcon={<img src="images/eliminaAsociacionIcn.svg" alt="" />}
                 >
                   Eliminar
                 </Button>
               </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
   ); };

 export default ProyectosUsuarios;
