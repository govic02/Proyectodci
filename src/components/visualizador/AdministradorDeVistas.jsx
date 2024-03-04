import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useVisibility } from '../../context/VisibilityContext';
import { useActions } from '../../context/ActionContext'; 
import Modal from 'react-modal';
import axios from 'axios';
const AdministradorDeVistas = ({ tabsRef,identificadoresActual,refViewer2 }) => {
    const { isVisible } = useVisibility();
    const [vistaSeleccionada, setVistaSeleccionada] = useState(null);
    const [topPosition, setTopPosition] = useState('45%');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nombreVista, setNombreVista] = useState('');
    const [opcionesDeVistas, setOpcionesDeVistas] = useState([]);
    const abrirModal = () => setModalIsOpen(true);
    const cerrarModal = () => setModalIsOpen(false);
    const { despliegaSavedVista } = useActions();
    const urn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cDJfcHJveWVjdG9zL1BfUnZ0XzIwMjQucnZ0';
    
    const guardarVista = async () => {
        try {
            // Crear el objeto de datos de la vista
            console.log('Nombre de la vista:', nombreVista);
            console.log(identificadoresActual);

            if(identificadoresActual.length >0){
                const nuevaVista = {
                    nombre: nombreVista,
                    ids: identificadoresActual,
                    urn: urn
                };
        
                // Realizar la solicitud HTTP para guardar la vista
                const response = await axios.post('http://localhost:3001/api/vistasGuardadas', nuevaVista);
                if (response.status === 201) {
                    console.log('Vista guardada exitosamente:', response.data);
                    // Aquí puedes realizar cualquier acción adicional después de guardar la vista, como cerrar el modal
                    cerrarModal(); // Cerrar el modal después de guardar
                } else {
                    console.error('Error al guardar la vista:', response.data);
                    // Aquí puedes manejar el caso de que ocurra un error al guardar la vista
                }
            }
            
    
            // Comprobar si la vista se guardó correctamente
            
        } catch (error) {
            console.error('Error al guardar la vista:', error);
            // Aquí puedes manejar el caso de que ocurra un error al realizar la solicitud HTTP
        }
    };
    const handleSelectChange = (selectedOption) => {
        // Elimina esta línea: const { handleSelectChange } = this.props;
        despliegaSavedVista(selectedOption.ids);
        identificadoresActual = selectedOption.ids;
        setVistaSeleccionada(selectedOption);
    };
    useEffect(() => {

        const cargarVistasGuardadas = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/vistasGuardadasPorUrn/${urn}`);
                console.log("respuestaVistas");
                console.log(response);
                const vistas = response.data.map(vista => ({
                    value: vista._id, // Asumiendo que cada vista tiene un ID único
                    label: vista.nombre,
                    ids:vista.ids
                }));
                console.log("vistas");
                console.log(vistas);
                setOpcionesDeVistas(vistas);
            } catch (error) {
                console.error('Error al cargar las vistas guardadas:', error);
            }
        };
        if (urn) cargarVistasGuardadas();
        
        const updatePosition = () => {
            if (tabsRef.current) {
                const tabsHeight = tabsRef.current.offsetHeight;
                const newPosition = `calc(35% + ${tabsHeight}px + 150px)`;
                setTopPosition(newPosition);
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);

        return () => window.removeEventListener('resize', updatePosition);
    }, [tabsRef]);

    const estiloDelComponente = {
        width: '450px',
        zIndex: 1000,
        position: 'fixed',
        top: topPosition,
        right: '50px',
        backgroundColor: '#DA291C',
        padding: '10px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        color: 'white'
    };

    const estiloCabecera = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        marginLeft: '8px', // Agrega un margen a la izquierda del texto
    };
    const estiloSelect = {
        marginLeft: '10px', // Agrega un margen a la izquierda del select
    };
    const estiloBoton = {
        border: '2px solid white', // Borde blanco
        borderRadius: '20px', // Hacerlo redondeado
        backgroundColor: '#DA291C', // Color de fondo rojo
        color: 'white', // Letras blancas
        cursor: 'pointer',
        padding: '5px 10px', // Agrega un poco de relleno para que se vea mejor
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const modalStyle = {
        content: {
          position: 'fixed',
          top: '35%',
          left: '35%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          width: '450px',
          height: '200px',
          overflow: 'auto',
          paddingBottom: '250px',
          overflowY: 'hidden',
          border: '1px solid #ccc',
          background: '#fff',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          border: '2px solid white', // Agrega un borde blanco
          borderRadius: '10px', // Redondea los bordes del select
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
      };

    const customSelectStyles = {
        option: (provided) => ({
            ...provided,
            color: 'black', // Color del texto negro
        }),
      
        control: (provided) => ({
            ...provided,
            border: '2px solid white', // Agrega un borde blanco
            borderRadius: '10px', // Redondea los bordes del select
            borderColor: '#DA291C', // Color del borde
           
            color: '#DA291C', // Color del texto,
            height: '50px', // Establecer el alto del control
            minHeight: '50px' // Establecer la altura mínima para asegurar que no sea menor
        }),
        valueContainer: (provided) => ({
            ...provided,
            color: 'white', // Texto blanco siempre
        }),
 
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: 'white', // Icono del indicador blanco siempre
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            borderRadius: '0 10px 10px 0', // Redondea los bordes de la zona de indicadores
            backgroundColor: '#DA291C', // Fondo rojo
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: '#DA291C', // Color del separador de indicadores
        }),
        // Puedes agregar más estilos personalizados según sea necesario
    };

    const estiloImagenBoton = {
        marginRight: '15px', // Espacio entre el icono y el texto,
        color: 'white'
    };

    
    return isVisible ?(
        <div style={estiloDelComponente}>
            <div style={estiloCabecera}>
                <span>Administrador de Vistas</span>
                <button  onClick={abrirModal} style={estiloBoton}>
                    <img src="images/masVista.svg" alt="Nueva Vista"   style={estiloImagenBoton}/> Guardar Vista
                </button>
            </div>
            <Select
                options={opcionesDeVistas}
                value={vistaSeleccionada}
                onChange={handleSelectChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: 'rgba(255, 255, 255, 0.25)',
                        primary: 'white',
                    },
                })} styles={customSelectStyles}
            />  
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={cerrarModal}
              style={modalStyle}
              contentLabel="Nueva Vista"
              appElement={document.getElementById('root')}
            >
              <h2>Nueva Vista</h2>
              <div style={{ margin: '20px 0' }}>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={nombreVista}
                  onChange={(e) => setNombreVista(e.target.value)}
                  style={{ display: 'block', width: '100%', padding: '10px', marginTop: '10px' }}
                />
              </div>
              <div style={{ display: 'flex', marginLeft:'25%', marginTop: '20px' }}>
                <button
                  onClick={guardarVista}
                  style={{ backgroundColor: '#DA291C', color: 'white', border: 'none',  borderRadius: '15px',padding: '10px 20px', cursor: 'pointer' }}
                >
                  Guardar
                </button>
                <button
                  onClick={cerrarModal}
                  style={{ backgroundColor: '#DA291C', color: 'white', marginLeft:'20px', borderRadius: '15px',border: 'none', padding: '10px 20px', cursor: 'pointer' }}
                >
                  Cerrar
                </button>
              </div>
            </Modal>
            <div style={{ height: '35px' }}></div>

            
        </div>
    ):null;
};

export default AdministradorDeVistas;