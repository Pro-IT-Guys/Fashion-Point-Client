import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import closeFill from '@iconify/icons-eva/close-fill'
import roundClearAll from '@iconify/icons-ic/round-clear-all'
import roundFilterList from '@iconify/icons-ic/round-filter-list'
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  Typography,
  RadioGroup,
  FormControlLabel,
  Slider,
} from '@mui/material'
import {
  BRAND_OPTION,
  CATEGORY_OPTION,
  COLOR_OPTION,
  FABRIC_OPTION,
  SIZE_OPTION,
  STYLE_OPTION,
  TYPE_OPTION,
} from 'constant/product'
import { MIconButton } from 'src/components/@material-extend'
import { useState } from 'react'
import ColorManyPicker from '../common/ColorManyPicker'
import Scrollbar from '../common/Scrollbar'

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

  const [value, setValue] = useState([0, 20000])

  const handlePriceRange = (event, newValue) => {
    setValue(newValue)
    console.log(newValue, 'newValue')
  }

  const handleChange = selectedColor => {
    setColor(selectedColor)
  }

  const handleChecked = selectedColor => {
    if (Array.isArray(color)) {
      return color.indexOf(selectedColor) !== -1
    }
    return false
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
        <div className="pt-5 space-y-5 shadow py-5 pl-5 pr-3 bg-white ">
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
            <RadioGroup className="text-xs">
              {CATEGORY_OPTION.map(item =>
                item?.classify?.map(item => (
                  <FormControlLabel
                    className="text-xs p-0 m-0"
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              )}
            </RadioGroup>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Price (AED)
            </Typography>
            <Box>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handlePriceRange}
                min={0}
                max={500}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </Box>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Brand
            </Typography>
            <RadioGroup>
              {BRAND_OPTION.map(item =>
                item?.classify?.map(item => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              )}
            </RadioGroup>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Fabric
            </Typography>
            <RadioGroup>
              {FABRIC_OPTION.map(item =>
                item?.classify?.map(item => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              )}
            </RadioGroup>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Style
            </Typography>
            <RadioGroup>
              {STYLE_OPTION.map(item =>
                item?.classify?.map(item => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))
              )}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Colour
            </Typography>
            <ColorManyPicker
              name="colors"
              colors={COLOR_OPTION}
              value={color}
              onChange={handleChange}
              onChecked={handleChecked}
              sx={{ maxWidth: 36 * 4 }}
            />
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Type
            </Typography>
            <RadioGroup className="text-xs">
              {TYPE_OPTION.map(item => (
                <FormControlLabel
                  className="text-xs p-0 m-0"
                  key={item}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Size
            </Typography>
            <RadioGroup className="text-xs">
              {SIZE_OPTION.map(item => (
                <FormControlLabel
                  className="text-xs p-0 m-0"
                  key={item}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
        </Scrollbar>
      </Drawer>
    </>
  )
}
