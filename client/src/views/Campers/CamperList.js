import CamperTable from "../../components/Campers/CamperTable";
import Header from "../../components/Header";

const CamperList = _props => {
    return(
        <div>
            <Header camperList/>
            <CamperTable />
        </div>
    )
};
export default CamperList;