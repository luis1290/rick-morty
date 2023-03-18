import { useState, useEffect } from "react";
import axios from "axios";

const Location = ({ infoLocation }) => {

 

  return (
    <>
      <div className="location">
        <div className="name">
          <h3>Nombre:</h3>
          <span>{infoLocation.name}</span>
        </div>
        <div className="type">
          <h3>Tipo:</h3>
          <span>{infoLocation.type}</span>
        </div>
        <div className="dimension">
          <h3>Dimencion:</h3>
          <span>{infoLocation.dimension}</span>
        </div>
        <div className="population">
          <h3>Poblacion:</h3>
          <span>{infoLocation.residents?.length}</span>
        </div>
      </div>
    </>
  );
};

export default Location;
