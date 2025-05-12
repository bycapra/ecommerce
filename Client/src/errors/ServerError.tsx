import { Container, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router";

function ServerError() {
  const {state} = useLocation(); //Route ile gelen state verisini almak için kulanılır
  return(
    <Container>
        {
            state?.error ? (
                <>
                <Typography variant="h3" gutterBottom>{state.error.title} - {state.status}</Typography>
                <Divider/>
                <Typography variant="body2">{state.error.detail || "Bilinmeyen hata"}</Typography>
                </>
            ) : (
                <Typography variant="h4">Unknown server error. Please check details</Typography>
            )
        }
    </Container>
  )
}

export default ServerError;
