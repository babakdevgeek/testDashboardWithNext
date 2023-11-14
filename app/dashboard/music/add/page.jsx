import AddForm from "../../../ui/dashboard/music/AddForm";
import { Container } from "@mui/material";
export default function page() {
  return (
    <Container className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <AddForm />
    </Container>
  );
}
