// next
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material'
import useCategorySetTop from 'src/hooks/useCategorySetTop'
import { CATEGORY_OPTION } from 'constant/product'
import CategoryIcon from '@mui/icons-material/Category'
import Searchbar from '../dashboard/Searchbar'

// ----------------------------------------------------------------------

export default function CategoryNav() {
  const { pathname } = useRouter()
  const isOffset = useCategorySetTop(130)
  return (
    <>
      <div className="bg-[#fbfbfd] py-2 text-black border-y-[1px] border-gray-200">
        <Container maxWidth="lg" className="text-black">
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-10">
              <div className="flex gap-1 items-center">
                <CategoryIcon />
                <h1 className="uppercase font-semibold text-sm">Category</h1>
              </div>
              <div className="flex gap-4 justify-center text-sm">
                {CATEGORY_OPTION.map((item, index) =>
                  item?.classify.map((category, index) => (
                    <NextLink key={index} href={`/category/${category}`}>
                      <a className="text-black hover:text-[#ff4d4f] hover:underline font-semibold">
                        {category}
                      </a>
                    </NextLink>
                  ))
                )}
              </div>
            </div>
            {/* <Searchbar /> */}
          </div>
        </Container>
      </div>
    </>
  )
}
