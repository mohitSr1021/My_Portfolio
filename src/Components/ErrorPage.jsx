import PageNotFound from "../assets/Page_Not_Found.gif";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${PageNotFound})`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          width: "100%",
          height:"fit-content",
          textAlign:"center",
          marginTop: "300px",
          padding: "2.5rem",
          color: "inherit",
          filter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.5))",
        }}
      >
        Looks like you took a wrong turn and ended up in the land of lost pages!
      </p>
    </div>
  );
};

export default ErrorPage;
