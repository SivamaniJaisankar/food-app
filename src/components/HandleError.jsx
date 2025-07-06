import { useRouteError } from "react-router-dom";

const HandleError = () => {

    const err = useRouteError();
    
    return (
        <div><h2>{err.status} - {err.statusText}</h2></div>
    )
}

export default HandleError;
