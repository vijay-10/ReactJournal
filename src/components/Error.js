import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops! something went wrong</h1>
            <p>This is a custom error page</p>
            <p>Error {err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error;