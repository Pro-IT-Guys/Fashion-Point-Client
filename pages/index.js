// layouts
import MainLayout from 'src/layouts/main'
// material
import { styled } from '@mui/material/styles'
// components
import Page from 'src/components/Page'
import Banner from 'src/components/Home/Banner/Banner'
import Products from 'src/components/Home/Products/Products'
import CategoryNav from 'src/layouts/main/CategoryNav'
import { useEffect, useState } from 'react'
import CustomLoadingScreen from 'src/components/CustomLoadingScreen'
import CategorySection from 'src/components/Home/Category/Category'
import MensFashion from 'src/components/Home/MensFashion/MensFashion'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <CustomLoadingScreen />
      ) : (
        <MainLayout>
          <RootStyle title="AYMi" id="move_top">
            <div className="bg-[#f7f7ff9c] ">
              <Banner />
              <CategorySection />
              <MensFashion/>
            </div>
          </RootStyle>
        </MainLayout>
      )}
    </>
  )
}
