import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from '@mui/material'
// layouts
import DashboardLayout from 'src/layouts/dashboard'
// hooks
import useSettings from 'src/hooks/useSettings'
// components
import Page from 'src/components/Page'
import AccountsCard from 'src/components/dashboard/AccountAnalytics'
import useAuthAdmin from 'src/utils/authMiddleware'
import dynamic from 'next/dynamic'
const ChartPie = dynamic(() => import('src/components/chart/ChartPie'), {
  ssr: false,
})
const ChartLine = dynamic(() => import('src/components/chart/ChartLine'), {
  ssr: false,
})
const ChartArea = dynamic(() => import('src/components/chart/ChartArea'), {
  ssr: false,
})

// ----------------------------------------------------------------------

const PageOne = () => {
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
                  <ChartArea />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </DashboardLayout>
  )
}

export default useAuthAdmin(PageOne)
