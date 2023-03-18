import CardResident from "./CardResident";

const ResidentInfo = ({urls}) => {

    return (
        <div className="residentInfo">
            {urls?.map((resident) => (
                < CardResident key={resident} resident = {resident}/>
            ))}
            
        </div>
    );
};

export default ResidentInfo;