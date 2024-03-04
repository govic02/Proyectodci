import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useVisibility } from '../context/VisibilityContext';
import { useActions } from '../context/ActionContext';
import axios from 'axios';

const customStyles = {
    multiValue: (base) => ({
        ...base,
        backgroundColor: '#DA291C',
        color: 'white',
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: 'white',
    }),
};

const menuStyles = {
    menuPortal: base => ({ ...base, zIndex: 9999 }),
    overflowY: 'hidden'
};

const TabComponent = ({ urnBuscada }) => {
    const { filtrar, cleanModel, datosFiltro1,datosFiltro2, pesoTotal, largoTotal, totalBarras,updatePesoTotal,updateLargoTotal,updateTotalBarras  } = useActions();
    const { isVisible } = useVisibility();
    const [activeKey, setActiveKey] = useState('filtrosVisuales');
    const [selectedParticionHA, setSelectedParticionHA] = useState([]);
    const [selectedPiso, setSelectedPiso] = useState([]);
    const [opcionesParticionHA, setOpcionesParticionHA] = useState([]);
    const [opcionesPiso, setOpcionesPiso] = useState([]);

    const handleApplyFilterClick = () => {
        if (filtrar) {

           
            let idsFiltradosParticionHA = [];
            let idsFiltradosPiso = [];

            // Recolectar dbIds para selectedParticionHA
            selectedParticionHA.forEach(option => {
                if (datosFiltro1 && datosFiltro1[option.value]) {
                    idsFiltradosParticionHA = idsFiltradosParticionHA.concat(datosFiltro1[option.value].dbIds);
                }
            });

            // Recolectar dbIds para selectedPiso
            selectedPiso.forEach(option => {
                if (datosFiltro2 && datosFiltro2[option.value]) {
                    idsFiltradosPiso = idsFiltradosPiso.concat(datosFiltro2[option.value].dbIds);
                }
            });

            // Mostrar por consola los idsFiltrados separados por categoría
            console.log("dbIds filtrados por ParticionHA:", idsFiltradosParticionHA);
            console.log("dbIds filtrados por Piso:", idsFiltradosPiso);
            if( idsFiltradosPiso.length ==0 && idsFiltradosParticionHA.length>0){
                filtrar(idsFiltradosParticionHA);
            }
            if( idsFiltradosPiso.length >0 && idsFiltradosParticionHA.length==0){
                filtrar(idsFiltradosPiso);
            }
            if(idsFiltradosPiso.length >0 && idsFiltradosParticionHA.length>0){
                 // Encuentra los dbIds que se repiten en ambos arrays
                let idsRepetidos = idsFiltradosParticionHA.filter(id => idsFiltradosPiso.includes(id));

                // Mostrar por consola los ids que se repiten en ambos
                console.log("dbIds repetidos en ambos:", idsRepetidos);

                // Si necesitas utilizar la función filtrar para aplicar estos filtros visualmente, hazlo aquí:
                // Por ejemplo, podrías querer filtrar visualmente solo los ids que se repiten
                filtrar(idsRepetidos);
            }
           

           // filtrar(selectedParticionHA, selectedPiso);
        } else {
            console.error('La función filtrar no está disponible');
        }
    };
    useEffect(() => {
        console.log(`Peso Total Desde Tab: ${pesoTotal}, Largo Total: ${largoTotal}, Total Barras: ${totalBarras}`);
    }, [pesoTotal, largoTotal, totalBarras]); // Dependencias para reaccionar a sus cambios
    const handCleanClick = () => {
        cleanModel();
        setSelectedParticionHA([]);
        setSelectedPiso([]);
        updatePesoTotal(0);
        updateLargoTotal(0);
        updateTotalBarras(0);
    }

    useEffect(() => {
        if (datosFiltro1) {
               console.log("Datos Filtro1 desde Tabs:", datosFiltro1);
             const opciones1 = Object.keys(datosFiltro1).map(key => ({
                value: key,
                label: key,
                isFixed: false
            }));
            setOpcionesParticionHA(opciones1);
        }
        if (datosFiltro2) {
            console.log("Datos Filtro2 desde Tabs:", datosFiltro2);
          const opciones2 = Object.keys(datosFiltro2).map(key => ({
             value: key,
             label: key,
             isFixed: false
         }));
         setOpcionesPiso(opciones2);
     }

      }, [datosFiltro1]);

    useEffect(() => {
        const fetchFiltros = async () => {
            try {
                console.log("URN BUSCADA 12");
                console.log(urnBuscada);
                if (urnBuscada) {
                    const response = await axios.get(`http://localhost:3001/api/filtrosPorUrn/${urnBuscada}`);
                    console.log("Respuesta Filtros");
                    console.log(response.data);
                    const filtros = response.data;
                    if (filtros.length >= 2) {
                        const opciones1 = Object.keys(filtros[1].filtros).map(key => ({
                            value: key,
                            label: key,
                            isFixed: false
                        }));
                        const opciones2 = Object.keys(filtros[0].filtros).map(key => ({
                            value: key,
                            label: key,
                            isFixed: false
                        }));
                        setOpcionesParticionHA(opciones1);
                        setOpcionesPiso(opciones2);
                    }
                }
            } catch (error) {
                console.error('Error al obtener los filtros:', error);
            }
        };

        fetchFiltros();
    }, [urnBuscada]);

    useEffect(() => {
        setActiveKey('filtrosVisuales');
    }, []);

    const onSelect = (k) => {
        setActiveKey(k);
    };

    const getTabIcon = (key) => {
        if (key === 'filtrosVisuales') {
            return activeKey === 'filtrosVisuales' ? 'images/eyered.svg' : 'images/eyewhite.svg';
        } else if (key === 'barrasPedidos') {
            return activeKey === 'barrasPedidos' ? 'images/barrasred.svg' : 'images/barraswhite.svg';
        }
    };

    const tabStyle = {
        position: 'fixed',
        top: '40%',
        right: '50px',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        width: '450px',
        height: '385px',
        overflow: 'auto',
        paddingBottom: '520px',
        overflowY: 'hidden'
    };

    const tabContentStyle = {
        backgroundColor: 'white',
        borderRadius: '0 20px 20px 20px',
        padding: '15px',
        height: '100%',
        overflowY: 'hidden'
    };

    const tabHeaderStyle = {
        borderRadius: '30px 30px 0 0',
    };

    const filasContenido = {
        marginTop: '15px'
    };

    const botonFiltroStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    };

    const labelStyle = {
        marginBottom: '10px'
    };

    return isVisible ? (
        <div style={tabStyle}>
            <Tabs defaultActiveKey="filtrosVisuales" id="tab-component" onSelect={onSelect} style={tabHeaderStyle}>
                <Tab eventKey="filtrosVisuales" title={<span><img src={getTabIcon('filtrosVisuales')} alt="Icono Filtros Visuales" /> Filtros visuales</span>}>
                    <div style={tabContentStyle}>
                        <div className="filasContenido" style={filasContenido}>
                            <label htmlFor="particionHA" style={labelStyle}>Valores para AEC partición HA</label>
                            <Select
                                isMulti
                                options={opcionesParticionHA}
                                value={selectedParticionHA}
                                onChange={setSelectedParticionHA}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                styles={{ ...customStyles, ...menuStyles }}
                                menuPortalTarget={document.body}
                            />
                        </div>
                        <div className="filasContenido" style={filasContenido}>
                            <label htmlFor="piso" style={labelStyle}>Valores para AEC Piso</label>
                            <Select
                                isMulti
                                options={opcionesPiso}
                                value={selectedPiso}
                                onChange={setSelectedPiso}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                styles={{ ...customStyles, ...menuStyles }}
                                menuPortalTarget={document.body}
                            />
                        </div>
                        <div className="filasContenido boton-filtro" style={botonFiltroStyle}>
                            <Button onClick={handleApplyFilterClick} variant="contained" style={{ backgroundColor: '#DA291C', color: 'white' }}>
                                <img src='images/btnfiltrored.svg' alt="Icono Filtros Visuales" />
                                Filtrar
                            </Button>&nbsp;&nbsp;
                            <Button onClick={handCleanClick} variant="contained" style={{ backgroundColor: '#DA291C', color: 'white' }}>
                                <img src='images/btnfiltrored.svg' alt="Icono Filtros Visuales" />
                                Limpiar
                            </Button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="barrasPedidos" title={<span><img src={getTabIcon('barrasPedidos')} alt="Icono Barras y Pedidos" /> Barras & Pedidos</span>}>
                    <div style={tabContentStyle}>
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
            {/* Columna 1 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <div>Peso Total</div>
                <div style={{  color: '#DA291C' }}><strong>{pesoTotal.toFixed(1)} kg</strong></div> {/* Ejemplo de número, aquí iría el valor real */}
                <hr style={{ backgroundColor: 'black', height: '2px' }} />
            </div>
            {/* Columna 2 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <div>Largo Total</div>
                <div style={{  color: '#DA291C' }}><strong>{largoTotal.toFixed(1)} Mts</strong></div> {/* Ejemplo de número, aquí iría el valor real */}
                <hr style={{ backgroundColor: 'black', height: '2px' }} />
            </div>
            {/* Columna 3 */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <div>Total Barras</div>
                <div style={{  color: '#DA291C' }}><strong>{totalBarras}</strong></div> {/* Ejemplo de número, aquí iría el valor real */}
                <hr style={{ backgroundColor: 'black', height: '2px' }} />
            </div>
            {/* Columna 4 con botón */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <Button variant="contained" style={{ backgroundColor: '#DA291C', color: 'white' }}>
                    Nuevo Pedido
                </Button>
            </div>
        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    ) : null;
};

export default TabComponent;
