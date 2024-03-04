import React , { useState, useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const TablaUsuarios = () => {
    const [filtro, setFiltro] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const data = React.useMemo(
        () => [
          { nombre: 'Nombre 01', email: 'Email01@example.com', tipo: 'Administrador' },
          { nombre: 'Nombre 02', email: 'Email02@example.com', tipo: 'Administrador' },
          { nombre: 'Nombre 03', email: 'Email03@example.com', tipo: 'Editor' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
          { nombre: 'Nombre 02', email: 'Email02@example.com', tipo: 'Administrador' },
          { nombre: 'Nombre 03', email: 'Email03@example.com', tipo: 'Editor' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
          { nombre: 'Nombre 03', email: 'Email03@example.com', tipo: 'Editor' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
          { nombre: 'Nombre 04', email: 'Email04@example.com', tipo: 'Visualizador' },
        ],
        []
      );
      const columns = React.useMemo(
        () => [
          { Header: 'Nombre', accessor: 'nombre' },
          { Header: 'E-Mail', accessor: 'email' },
          { Header: 'Tipo de Usuario', accessor: 'tipo' },
        ],
        []
      );
    

    const datosFiltrados = useMemo(() => {
        if (!filtro) return data;
        return data.filter(item => 
            item.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
            item.email.toLowerCase().includes(filtro.toLowerCase()) ||
            item.tipo.toLowerCase().includes(filtro.toLowerCase())
        );
    }, [filtro, data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        setPageSize: setPageSizeReactTable,
        state: { pageIndex },
    } = useTable(
        { columns, data: datosFiltrados, initialState: { pageIndex: 0, pageSize } },
        usePagination
    );

    const handlePageSizeChange = (event) => {
        const newPageSize = Number(event.target.value);
        setPageSize(newPageSize);
        setPageSizeReactTable(newPageSize);
    };

    const cardStyle = {
        marginTop: '25px',
        marginLeft: '0px',
        marginRight: '0px',
        borderRadius: '20px', // Bordes redondeados
    };

    const contenedor = {
        marginLeft:'30px',
        marginRight:'30px',
        height:'100%',
        marginBottom:'80px'
    };

    return (
        <div style={contenedor}>
            <div className="row justify-content-end mb-3">
                <div className="col-auto">
                    <TextField
                        label="Buscar"
                        variant="outlined"
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    />
                </div>
            </div>
            <Card style={cardStyle}>
                <CardContent>
                 
                    <table {...getTableProps()} className="table">
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <div>
                            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                Anterior
                            </Button>
                            <Button onClick={() => nextPage()} disabled={!canNextPage}>
                                Siguiente
                            </Button>
                        </div>
                        <Typography>
                            Página {pageIndex + 1} de {Math.ceil(datosFiltrados.length / pageSize)}
                        </Typography>
                        <FormControl variant="outlined" style={{ width: 'auto' }}>
                            <InputLabel id="page-size-label">Filas por página</InputLabel>
                            <Select
                                labelId="page-size-label"
                                label="Filas por página"
                                value={pageSize}
                                onChange={handlePageSizeChange}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <MenuItem key={pageSize} value={pageSize}>
                                        {pageSize}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TablaUsuarios;
