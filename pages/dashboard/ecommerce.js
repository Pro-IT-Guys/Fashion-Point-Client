import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material'
// layouts
import DashboardLayout from 'src/layouts/dashboard'
// hooks
import useSettings from 'src/hooks/useSettings'
// components
import Page from 'src/components/Page'
import AccountsCard from 'src/components/dashboard/AccountAnalytics'
import ChartPie from 'src/components/chart/ChartPie'
import ChartLine from 'src/components/chart/ChartLine'
import ChartBar from 'src/components/chart/ChartBar'

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings()

  return (
    <DashboardLayout>
      <Page title="AYMi | Analytics">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12}>
              <AccountsCard />
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: {
                    xs: 'auto',
                    md: '482px',
                  },
                }}
              >
                <CardHeader
                  title="Product Analysis"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      marginTop: '-25px',
                    },
                  }}
                />
                <CardContent>
                  <ChartPie />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  height: {
                    xs: 'auto',
                    md: '482px',
                  },
                }}
              >
                <CardHeader
                  title="Order Analysis"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      marginTop: '-25px',
                    },
                  }}
                />
                <CardContent>
                  <ChartLine />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 3,
                  height: {
                    xs: 'auto',
                    md: '482px',
                  },
                }}
              >
                <CardHeader
                  title="Order Analysis"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      marginTop: '-25px',
                    },
                  }}
                />
                <CardContent>
                  <ChartBar />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
