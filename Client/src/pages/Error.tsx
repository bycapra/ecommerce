import { Button, Container } from "@mui/material";
import requests from "../api/requests";

function ErrorPage() {
  return (
    <Container>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        onClick={() => requests.Errors.get400Error().catch(error => console.log("Erro Log: " + JSON.stringify(error)))}
      >
        Get 400 Error
      </Button>
    </Container>
  );
}
export default ErrorPage;
