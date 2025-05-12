import { Button, Container } from "@mui/material";
import requests from "../api/requests";

function ErrorPage() {
  return (
    <Container>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        onClick={() => requests.Errors.get400Error().catch(error => console.log("400 Error Log: " + JSON.stringify(error)))}
      >
        Get 400 Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        onClick={() => requests.Errors.get500Error().catch(error => console.log("500 Error Log: " + JSON.stringify(error)))}
      >
        Get Validation Errors
      </Button>
       <Button
        sx={{ mr: 2 }}
        variant="contained"
        onClick={() => requests.Errors.getValidationError().catch(error => console.log("Validation Error Log: " + JSON.stringify(error)))}
      >
        Get 500 Error
      </Button>
    </Container>
  );
}
export default ErrorPage;
