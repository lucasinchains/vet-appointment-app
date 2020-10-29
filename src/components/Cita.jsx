import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Mascota: <span>{cita.mascota}</span>
      <br></br>
      Propietario: <span>{cita.propietario}</span>
      <br></br>
      Fecha: <span>{cita.fecha}</span>
      <br></br>
      Hora: <span>{cita.hora}</span>
      <br></br>
      Sintomas: <span>{cita.sintomas}</span>
    </p>

    <button className="button eliminar u-full-width" onClick={eliminarCita}>
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default Cita;
