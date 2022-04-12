import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = _props => {
    const navigate = useNavigate();

    useEffect( () => navigate("/dashboard") );

    return <h1 style={{ textAlign: "center" }}>Redirecting to "/players/list"</h1>
}
export default Index;