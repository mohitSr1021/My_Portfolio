import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../styles/AlertBox.css";

function AlertBox() {
  return (
    <>
      <Stack className="_alertBox" spacing={2}>
        <Alert variant="filled" severity="success">
          Thank you! Your message has been sent.!!!
        </Alert>
      </Stack>
    </>
  );
}

export default AlertBox;
