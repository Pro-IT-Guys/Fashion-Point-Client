import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import closeFill from '@iconify/icons-eva/close-fill'
import roundClearAll from '@iconify/icons-ic/round-clear-all'
import roundFilterList from '@iconify/icons-ic/round-filter-list'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined'
import NextLink from 'next/link'
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Divider,
  Typography,
  Slider,
} from '@mui/material'
import {
  CATEGORY_OPTION_ARRAY,
  TYPE_OPTION,
} from 'constant/product'
import { MIconButton } from 'src/components/@material-extend'
import { useContext, useState } from 'react'
import Scrollbar from '../common/Scrollbar'
import { ContextData } from 'context/dataProviderContext'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

// ----------------------------------------------------------------------

// ProductFilterDrawer.propTypes = {
//   isOpenFilter: PropTypes.bool,
//   onResetFilter: PropTypes.func,
//   onOpenFilter: PropTypes.func,
//   onCloseFilter: PropTypes.func,
// };

export default function ProductFilterDrawer({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
}) {
  const [color, setColor] = useState([])
  const {
    searchTerm,
    category,
    type,
    setType,
    value,
    setValue,
    setCategory,
    toCurrency,
    colorValue,
    setColorValue,
    handleClearFilter,
  } = useContext(ContextData)

  const handleSelectFilterOption = (e, callback) => {
    const { value } = e.target
    callback(value)
  }

  const handlePriceRange = (event, newValue) => {
    setValue(newValue)
  }

  const router = useRouter()
  const params = router.query.id

  console.log(router.pathname === '/category/[id]' && true);

  const handleChecked = selectedColor => {
    if (Array.isArray(color)) {
      return color.indexOf(selectedColor) !== -1
    }
    return false
  }

  const handleSelectCategory = id => {
    if (category?.includes(id)) {
      setCategory(prev => prev.filter(item => item !== id))
    } else {
      setCategory(prev => [...prev, id])
    }
  }
  const handleSelectType = id => {
    if (type?.includes(id)) {
      setType(prev => prev.filter(item => item !== id))
    } else {
      setType(prev => [...prev, id])
    }
  }
  const handleChangeColor = id => {
    if (colorValue?.includes(id)) {
      setColorValue(prev => prev.filter(item => item !== id))
    } else {
      setColorValue(prev => [...prev, id])
    }
  }

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Icon icon={roundFilterList} />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <MIconButton onClick={onCloseFilter}>
            <Icon icon={closeFill} width={20} height={20} />
          </MIconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <div className='bg-info px-4 h-[93vh] py-4'>
            <div className="space-y-4 ">
              <div className="bg-white shadow rounded">
                <div className=" py-2 px-3 border-b">
                  <h1 className="font-semibold ">
                    {' '}
                    Filter by Price ({toCurrency})
                  </h1>
                </div>
                <div className=" py-3 px-3 bg-white ">
                  <Box>
                    <Slider
                      size="medium"
                      getAriaLabel={() => 'Price range'}
                      value={value}
                      onChange={handlePriceRange}
                      min={0}
                      max={10000}
                      valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    />
                  </Box>

                  <div className="flex justify-between items-center">
                    <div className="border px-3 rounded shadow-sm">
                      <p>{value[0]}</p>
                    </div>
                    <div className="border px-3 rounded shadow-sm">
                      <p>{value[1]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded">
                <div className="  py-2 px-3 border-b">
                  <h1 className="font-semibold "> Filter by Category</h1>
                </div>
                <div className=" py-3 pl-4 pr-3 space-y-3">

                  {CATEGORY_OPTION_ARRAY?.map(item =>
                    <>
                      {
                        router.pathname === '/category/[id]' ? (
                          <div
                            onClick={() => handleSelectCategory(item)}
                            className='flex gap-2 items-center cursor-pointer'>
                            <div className="flex items-center">
                              <input
                                checked={category?.includes(item)}
                                className="h-4 w-4 cursor-pointer"
                                type="checkbox"
                              />
                            </div>
                            <h1 className='text-sm font-semibold'>{item}</h1>
                          </div>
                        ) : (
                          <NextLink key={item} href={`/category/${item}`}>
                            <div
                              onClick={() => handleSelectCategory(item)}
                              className='flex gap-2 items-center cursor-pointer'>
                              <div className="flex items-center">
                                <input
                                  checked={category?.includes(item)}
                                  className="h-4 w-4 cursor-pointer"
                                  type="checkbox"
                                />
                              </div>
                              <h1 className='text-sm font-semibold'>{item}</h1>
                            </div>
                          </NextLink>
                        )
                      }
                    </>
                  )}
                </div>
              </div>


              <div className="bg-white shadow rounded">
                <div className="  py-2 px-3 border-b">
                  <h1 className="font-semibold "> Filter by Gender</h1>
                </div>
                <div className=" py-3 pl-4 pr-3 space-y-3">
                  {TYPE_OPTION?.map(item =>
                    <>
                      {
                        router.pathname === '/category/[id]' ? (

                          <div
                            onClick={() => handleSelectType(item)}
                            className='flex gap-2 items-center cursor-pointer'>
                            <div className="flex items-center">
                              <input
                                checked={type?.includes(item)}
                                className="h-4 w-4 cursor-pointer"
                                type="checkbox"
                              />
                            </div>
                            <h1 className='text-sm font-semibold'>{item}</h1>
                          </div>
                        ) : (
                          <NextLink key={item} href={`/category/${item}`}>
                            <div
                              onClick={() => handleSelectType(item)}
                              className='flex gap-2 items-center cursor-pointer'>
                              <div className="flex items-center">
                                <input
                                  checked={type?.includes(item)}
                                  className="h-4 w-4 cursor-pointer"
                                  type="checkbox"
                                />
                              </div>
                              <h1 className='text-sm font-semibold'>{item}</h1>
                            </div>
                          </NextLink>
                        )
                      }
                    </>
                  )}
                </div>
              </div>

              {(category?.length ||
                type?.length ||
                value[0] !== 0 ||
                value[1] !== 10000) && (
                  <div
                    onClick={handleClearFilter}
                    className="text-sm flex items-center justify-center gap-1 cursor-pointer bg-orange-600 text-white py-2 px-3 mx-3 rounded-full"
                  >
                    <DeleteSweepOutlinedIcon /> Clear Filter
                  </div>
                )}
            </div>
          </div>
        </Scrollbar>
      </Drawer>
    </>
  )
}
