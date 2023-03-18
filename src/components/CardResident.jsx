import { useState, useEffect } from "react";
import axios from "axios";

const CardResident = ({ resident }) => {
  console.log(resident);

  const [residentInfo, setResident] = useState({});

  useEffect(() => {
    axios
      .get(resident)
      .then((resp) => {
        setResident(resp.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cardResident">
      <div
        className="image"
        style={{ backgroundImage: "url(" + residentInfo?.image + ")" }}
      >
        <div className="alive">
          <div
            className="circule"
            style={{
              backgroundColor: residentInfo.status === "Dead" ? "red" : "green",
            }}
          ></div>
          <span>{residentInfo.status}</span>
        </div>
      </div>
      <div className="InfoResident">
        <span>Nombre:{residentInfo.name}</span>
        <span>Estatus:{residentInfo.status}</span>
        <span>Origen:{residentInfo.location?.name}</span>
        <span>Episodios:{residentInfo.episode?.length}</span>
      </div>
    </div>
  );
};

export default CardResident;
