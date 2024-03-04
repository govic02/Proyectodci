import React from 'react';
import PropTypes from 'prop-types';
import '../../extensions/FiltrosVisuales.js';  
import '../../extensions/HandleSelectionExtension.js';
import { buscaKeys, transformJsonToArray, printConsola, consulta_filtro2 } from '../../utils/ViewerUtils';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Autodesk } = window;

class ViewerProyectos extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.viewer = null;
        this.runtime = {
            options: null,
            ready: null
        };
    }

    componentDidMount() {
        this.getForgeToken()
            .then(token => {
                return this.initializeViewerRuntime(token);
            })
            .then(() => {
                this.setupViewer();
            })
            .catch(err => console.error(err));
    }

    getForgeToken = () => {
        return fetch('http://localhost:3001/api/gettoken')
            .then(res => res.json())
            .then(data => {
                return data.token;
            });
    }

    initializeViewerRuntime = (token) => {
        if (!this.runtime.ready) {
            this.runtime.options = { 
                ...this.props.runtime,
                getAccessToken: (callback) => callback(token, 3600)
            };
            this.runtime.ready = new Promise((resolve) => Autodesk.Viewing.Initializer(this.runtime.options, resolve));
        }
        return this.runtime.ready;
    }

    setupViewer = () => {
        this.viewer = new Autodesk.Viewing.GuiViewer3D(this.container.current);
        this.viewer.start();
   
        this.viewer.loadExtension('HandleSelectionExtension');
        this.viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, this.onModelLoaded);
        this.viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onViewerCameraChange);
        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onViewerSelectionChange);
        this.updateViewerState({});
    }

    componentWillUnmount() {
        if (this.viewer) {
            this.viewer.removeEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, this.onModelLoaded);
            this.viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT, this.onViewerCameraChange);
            this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onViewerSelectionChange);
            this.viewer.finish();
            this.viewer = null;
        }
    }
    
    componentDidUpdate(prevProps) {
        console.log("nueva urn a cargar");
        console.log(this.props.urn);
        if (this.viewer && (this.props.urn !== prevProps.urn || this.props.idUsuario !== prevProps.idUsuario || this.props.proyectoKey !== prevProps.proyectoKey)) {
            Autodesk.Viewing.Document.load(
                'urn:' + this.props.urn,
                (doc) => this.viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()),
                (code, message, errors) =>{ 
                    console.log("no se pudo cargar debe traducir");
                    toast.info('No se pudo abrir, proceso de traducción del archivo iniciado'); // Duración en milisegundos
                    console.error(code, message, errors);}
            );
        }
    }

    updateViewerState = (prevProps) => {
        if (this.props.urn && this.props.urn !== prevProps.urn) {
            Autodesk.Viewing.Document.load(
                'urn:' + this.props.urn,
                (doc) => this.viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()),
                (code, message, errors) => console.error(code, message, errors)
            );
        }
    };

    onModelLoaded = () => {
      //  this.fetchAndProcessFiltros();
    };

    onViewerCameraChange = (event) => {
        // Manejar el cambio de la cámara del visor aquí si es necesario
    };

    onViewerSelectionChange = (event) => {
        // Manejar el cambio de la selección del visor aquí si es necesario
    };

    render() {
        return <div ref={this.container} style={{ position: 'relative', marginLeft: '5px', marginTop: '27px', width: '100%', height: '380px' }} />;
    }
}

ViewerProyectos.propTypes = {
    urn: PropTypes.string.isRequired,
    idUsuario: PropTypes.string.isRequired, // Nueva prop idUsuario
    proyectoKey: PropTypes.string.isRequired, // Nueva prop proyectoKey
    runtime: PropTypes.object
    
};

export default ViewerProyectos;
