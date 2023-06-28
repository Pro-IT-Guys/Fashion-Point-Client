import { Container, Typography } from "@mui/material";
// layouts
import DashboardLayout from "src/layouts/dashboard";
// hooks
import useSettings from "src/hooks/useSettings";
// components
import Page from "src/components/Page";

// ----------------------------------------------------------------------

export default function AllProducts() {
  const { themeStretch } = useSettings();

  return (
    <DashboardLayout>
      <Page title="Page Four | Minimal-UI">
        <Container maxWidth={themeStretch ? false : "xl"}>
          <Typography variant="h3" component="h1" paragraph>
            Review Product Page
          </Typography>
          <Typography gutterBottom>
            Curabitur turpis. Vestibulum facilisis, purus nec pulvinar iaculis,
            ligula mi congue nunc, vitae euismod ligula urna in dolor. Nam quam
            nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Phasellus
            blandit leo ut odio. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Fusce id purus. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. In
            consectetuer turpis ut velit. Aenean posuere, tortor sed cursus
            feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
            sagittis lacus. Vestibulum suscipit nulla quis orci. Nam commodo
            suscipit quam. Sed a libero.
          </Typography>
          <Typography>
            Praesent ac sem eget est egestas volutpat. Phasellus viverra nulla
            ut metus varius laoreet. Curabitur ullamcorper ultricies nisi. Ut
            non enim eleifend felis pretium feugiat. Donec mi odio, faucibus at,
            scelerisque quis, convallis in, nisi. Fusce vel dui. Quisque libero
            metus, condimentum nec, tempor a, commodo mollis, magna. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Cras
            dapibus.
          </Typography>
        </Container>
      </Page>
    </DashboardLayout>
  );
}