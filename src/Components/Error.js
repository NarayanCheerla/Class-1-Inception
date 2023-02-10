import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div>
      <h2>OOPS!, Some thing went wrong.</h2>
      <h2>
        {status} {" : "} {statusText}
      </h2>
    </div>
  );
};

export default Error;
