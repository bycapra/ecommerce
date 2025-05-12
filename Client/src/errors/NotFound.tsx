import { Button, Card, Container, Divider, Typography } from "@mui/material";


function NotFound() {
  return (
    <Container component={Card} sx={{p:3}} >
      <Typography variant="h5" gutterBottom>Not Found</Typography>
      <Divider/>
      <Button variant="contained"  href="/catalog" sx={{mt:3}}>Alışverişe devam et</Button>
    </Container>
  );
}
export default NotFound;
