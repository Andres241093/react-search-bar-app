import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Definir un Web Component, para que Angular (container-app) lo reconozca como tal
class ReactSearchElement extends HTMLElement {
  connectedCallback() {
    // Crear un shadow DOM opcionalmente (si lo necesitas)
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    ReactDOM.render(<App />, mountPoint);
  }
}

// Registrar el Web Component
customElements.define("react-search-bar", ReactSearchElement);

/*
EXPLICACION:

- connectedCallback() se ejecuta cuando el elemento se inserta en el DOM.
- Se crea un <div> dentro del Web Component y se renderiza App allí.
- Ahora se puede usar <react-search-bar></react-search-bar> en cualquier parte, incluso en Angular.
*/
