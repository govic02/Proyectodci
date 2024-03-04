import React, { useState } from 'react';
import { Tabs, Tab, Form } from 'react-bootstrap';

const TabConfiguracion = () => {
    const [activeKey, setActiveKey] = useState('filtrosVisuales');
    const [filtroVisual01, setFiltroVisual01] = useState('');
    const [filtroVisual02, setFiltroVisual02] = useState('');
    const [parametroBarras, setParametroBarras] = useState('');

    const onSelect = (k) => {
        setActiveKey(k);
    };

    const getTabImage = (key) => {
        if (key === 'filtrosVisuales') {
            return activeKey === 'filtrosVisuales' ? 'images/filtroVisualIcn.svg' : 'images/filtroVisualIcn.svg';
        } else if (key === 'variablesTiempo') {
            return activeKey === 'variablesTiempo' ? 'images/variableTiempoIcn.svg' : 'images/variableTiempoIcn.svg';
        }
    };

    const tabStyle = {
        marginTop: '50px',
        marginLeft: '30px',
        marginRight: '30px',
        height: '385px',
        overflow: 'auto'
    };

    const tabContentStyle = {
        backgroundColor: 'white',
        borderRadius: '0 20px 20px 20px',
        padding: '15px',
        height: '100%',
        overflowY: 'auto',
        fontWeight: 'bold'
    };

    const tabHeaderStyle = {
        borderRadius: '30px 30px 0 0',
    };

    return (
        <div style={tabStyle}>
            <Tabs defaultActiveKey="filtrosVisuales" id="tab-configuracion" onSelect={onSelect} style={tabHeaderStyle}>
                <Tab eventKey="filtrosVisuales" title={<span><img src={getTabImage('filtrosVisuales')} alt="Filtros Visuales" /> Filtros Visuales</span>}>
                    <div style={tabContentStyle}>
                        <Form.Group className="mb-3">
                            <Form.Label>Filtro Visual 01</Form.Label>
                            <Form.Control type="text" value={filtroVisual01} onChange={(e) => setFiltroVisual01(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Filtro Visual 02</Form.Label>
                            <Form.Control type="text" value={filtroVisual02} onChange={(e) => setFiltroVisual02(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Parámetro Barras</Form.Label>
                            <Form.Control type="text" value={parametroBarras} onChange={(e) => setParametroBarras(e.target.value)} />
                        </Form.Group>
                    </div>
                </Tab>
                <Tab eventKey="variablesTiempo" title={<span><img src={getTabImage('variablesTiempo')}  /> Variables de Tiempo</span>}>
                    <div style={tabContentStyle}>
                    <Form.Group className="mb-3">
                            <Form.Label>Variable de Tiempo</Form.Label>
                            <Form.Control type="text" value={filtroVisual01} onChange={(e) => setFiltroVisual01(e.target.value)} />
                        </Form.Group>
                        {/* Aquí puedes agregar el contenido de la pestaña "Variables de Tiempo" */}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default TabConfiguracion;
