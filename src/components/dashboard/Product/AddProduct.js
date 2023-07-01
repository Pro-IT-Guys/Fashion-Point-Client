import styled from '@emotion/styled'
import {
  Autocomplete,
  Card,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  BRAND_OPTION,
  CATEGORY_OPTION,
  STYLE_OPTION,
  FABRIC_OPTION,
  TAG_OPTION,
  TYPE_OPTION,
  COLOR_OPTION,
  SIZE_OPTION,
} from '../../../../constant/product'

export default function AddProductForm() {
  const [typeValue, setTypeValue] = useState([])
  const [tagValue, setTagValue] = useState([])
  const [colorValue, setColorValue] = useState([])
  const [sizeValue, setSizeValue] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = data => {
    console.log(data, typeValue)
  }

  return (
    <div className="flex justify-center bg-white rounded-xl shadow mt-5">
      <div className="w-full  sm:p-10 px-3 py-5">
        <div className=" rounded-lg w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label="Product Name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Product Name is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      label="Category"
                      native
                      {...register('category', {
                        required: {
                          value: true,
                          message: 'Category is Required',
                        },
                      })}
                    >
                      {CATEGORY_OPTION.map(category => (
                        <optgroup key={category.group} label={category.group}>
                          {category.classify.map(classify => (
                            <option key={classify} value={classify}>
                              {classify}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <InputLabel>Brand</InputLabel>
                    <Select
                      label="Brand"
                      native
                      {...register('brand', {
                        required: {
                          value: true,
                          message: 'Brand is Required',
                        },
                      })}
                    >
                      {BRAND_OPTION.map(brand => (
                        <optgroup key={brand.group} label={brand.group}>
                          {brand.classify.map(classify => (
                            <option key={classify} value={classify}>
                              {classify}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Select>
                    <label className="label">
                      {errors.brand?.type === 'required' && (
                        <span className="pl-2 text-xs mt-1 text-red-500">
                          {errors.brand.message}
                        </span>
                      )}
                    </label>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <InputLabel>Style</InputLabel>
                    <Select
                      label="Style"
                      native
                      {...register('style', {
                        required: {
                          value: true,
                          message: 'Style is Required',
                        },
                      })}
                    >
                      {STYLE_OPTION.map(style => (
                        <optgroup key={style.group} label={style.group}>
                          {style.classify.map(classify => (
                            <option key={classify} value={classify}>
                              {classify}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Select>
                    <label className="label">
                      {errors.style?.type === 'required' && (
                        <span className="pl-2 text-xs mt-1 text-red-500">
                          {errors.style.message}
                        </span>
                      )}
                    </label>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <InputLabel>Fabric</InputLabel>
                    <Select
                      label="fabric"
                      native
                      {...register('fabric', {
                        required: {
                          value: true,
                          message: 'Fabric is Required',
                        },
                      })}
                    >
                      {FABRIC_OPTION.map(fabric => (
                        <optgroup key={fabric.group} label={fabric.group}>
                          {fabric.classify.map(classify => (
                            <option key={classify} value={classify}>
                              {classify}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </Select>
                    <label className="label">
                      {errors.style?.type === 'required' && (
                        <span className="pl-2 text-xs mt-1 text-red-500">
                          {errors.style.message}
                        </span>
                      )}
                    </label>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <Autocomplete
                      className="w-full"
                      multiple
                      freeSolo
                      value={typeValue}
                      onChange={(event, newValue) => {
                        setTypeValue(newValue)
                      }}
                      options={TYPE_OPTION}
                      getOptionLabel={option => option}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={params => (
                        <TextField label="Type" {...params} />
                      )}
                    ></Autocomplete>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <Autocomplete
                      className="w-full"
                      multiple
                      freeSolo
                      value={colorValue}
                      onChange={(event, newValue) => {
                        setColorValue(newValue)
                      }}
                      options={COLOR_OPTION}
                      getOptionLabel={option => option}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={params => (
                        <TextField label="Color" {...params} />
                      )}
                    ></Autocomplete>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <Autocomplete
                      className="w-full"
                      multiple
                      freeSolo
                      value={tagValue}
                      onChange={(event, newValue) => {
                        setTagValue(newValue)
                      }}
                      options={TAG_OPTION}
                      getOptionLabel={option => option}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={params => (
                        <TextField label="Tags" {...params} />
                      )}
                    ></Autocomplete>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <FormControl fullWidth>
                    <Autocomplete
                      className="w-full"
                      multiple
                      freeSolo
                      value={sizeValue}
                      onChange={(event, newValue) => {
                        setSizeValue(newValue)
                      }}
                      options={SIZE_OPTION}
                      getOptionLabel={option => option}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip key={option} size="small" label={option} />
                        ))
                      }
                      renderInput={params => (
                        <TextField label="Sizes" {...params} />
                      )}
                    ></Autocomplete>
                  </FormControl>
                </div>
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label=" Stock Quantity"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Pcs</InputAdornment>
                      ),
                      type: 'number',
                    }}
                    {...register('quantity', {
                      required: {
                        value: true,
                        message: 'Quantity is Required',
                      },
                    })}
                  />
                  <label className="quantity">
                    {errors.quantity?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.quantity.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label="Buying Price"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      type: 'number',
                    }}
                    {...register('buyingPrice', {
                      required: {
                        value: true,
                        message: 'Buying Price is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.buyingPrice?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.buyingPrice.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label="Selling Price"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      type: 'number',
                    }}
                    {...register('sellingPrice', {
                      required: {
                        value: true,
                        message: 'Selling Price is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.sellingPrice?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.sellingPrice.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="relative mt-2">
                <button
                  type="submit"
                  className=" py-2 px-5 rounded bg-primary text-white "
                >
                  Publish Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
