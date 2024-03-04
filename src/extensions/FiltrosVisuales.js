// src/extensions/FiltrosVisuales.js
class FiltrosVisuales extends Autodesk.Viewing.Extension {
    load() {
        // Aquí se añade la lógica para cargar la extensión, como agregar botones al toolbar.
        return true;
    }

    unload() {
        // Aquí se añade la lógica para descargar la extensión, como eliminar botones.
        return true;
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('FiltrosVisuales', FiltrosVisuales);
