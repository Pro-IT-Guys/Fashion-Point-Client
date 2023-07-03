import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { BASE_URL } from 'apis/url'
import countries from 'constant/countries'
import { ContextData } from 'context/dataProviderContext'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UploadAvatar } from 'src/components/upload'
import DashboardLayout from 'src/layouts/dashboard'
import { fData } from 'src/utils/formatNumber'

export default function MyProfile() {
  const [image, setImage] = useState([])
  const [imgPath, setImgPath] = useState()
  const { currentlyLoggedIn } = useContext(ContextData)
  const { _id, name } = currentlyLoggedIn || {}
  const [country, setCountry] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/fee/all`)
      .then(res => res.json())
      .then(data => {
        setCountry(data.data)
      })
  }, [])

  // console.log(state)

  const handleCountryChange = e => {
    const countryId = e.target.value
    setSelectedCountry(countryId)
  }

  const handleStateChange = e => {
    if (!selectedCountry) return

    const stateId = e.target.value
    setSelectedState(stateId)
  }

  console.log(country)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handleDrop = useCallback(
    acceptedFiles => {
      setImgPath(acceptedFiles[0])
      const file = acceptedFiles[0]
      if (file) {
        setImage({
          ...file,
          preview: URL.createObjectURL(file),
        })
      }
    },
    [image]
  )

  const onSubmit = data => {
    const userData = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      image: image.preview,
      phone: data.phoneNumber,
      shippingAddress: {
        country: data.country,
        state: data.state,
        city: data.city,
        street: data.street,
        zipCode: data.zipCode,
      },
      address: data.shippingAddress,
    }

    fetch(`${BASE_URL}/users/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <DashboardLayout>
      <Container maxWidth="lg">
        <h1 className="font-bold text-2xl">My Profile</h1>
        <div className="flex gap-2 text-sm mt-3 text-[#636262]">
          <p>Dashboard - </p>
          <p>Profile - </p>
          <p>Update </p>
        </div>
        <div className="flex justify-center bg-white rounded-xl shadow mt-5">
          <div className="w-full  sm:p-10 px-3 py-5">
            <div className=" rounded-lg w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                  <div className="w-[30%]">
                    <Box sx={{ mb: 5 }}>
                      <UploadAvatar
                        accept="image/*"
                        file={image}
                        maxSize={3145728}
                        onDrop={handleDrop}
                        caption={
                          <Typography
                            variant="caption"
                            sx={{
                              mt: 2,
                              mx: 'auto',
                              display: 'block',
                              textAlign: 'center',
                              color: 'text.secondary',
                            }}
                          >
                            Allowed *.jpeg, *.jpg, *.png, *.gif
                            <br /> max size of {fData(3145728)}
                          </Typography>
                        }
                      />
                    </Box>
                  </div>
                  <div className=" w-[70%]">
                    <div className="grid grid-cols-2 sm:gap-5 gap-3 mb-5">
                      <div className="flex flex-col items-start">
                        <TextField
                          fullWidth
                          label="First Name"
                          {...register('firstName')}
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <TextField
                          fullWidth
                          label="Last Name"
                          {...register('lastName')}
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <TextField
                          fullWidth
                          label="Email"
                          {...register('email')}
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <TextField
                          fullWidth
                          label="Phone Number"
                          {...register('phoneNumber')}
                        />
                      </div>
                    </div>
                    <h1 className="font-semibold">Shipping Address :</h1>
                    <div className="grid grid-cols-2 sm:gap-5 gap-3 mt-3">
                      <div className="flex flex-col items-start">
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Country
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCountry || ''}
                            label="Country"
                            onChange={e => handleCountryChange(e)}
                          >
                            {country?.map(option => (
                              <MenuItem
                                key={option.country_code}
                                value={option?.country}
                              >
                                <Typography
                                  onClick={() => setState(option?.states)}
                                >
                                  {option?.country}
                                </Typography>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      {selectedCountry && (
                        <div>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              State
                            </InputLabel>
                            <Select
                              // disabled={!selectedCountry}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={selectedState || ''}
                              label="Country"
                              onChange={e => handleStateChange(e)}
                            >
                              {state?.map(option => (
                                <MenuItem
                                  key={option.state_code}
                                  value={option?.state_code}
                                >
                                  <Typography
                                    onClick={() => setCity(option?.cities)}
                                  >
                                    {option?.state_name}
                                  </Typography>
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      )}
                      {selectedState && (
                        <div className="flex flex-col items-start">
                          <TextField
                            select
                            fullWidth
                            label="City"
                            placeholder="City"
                            SelectProps={{ native: true }}
                            {...register('city')}
                          >
                            <option value="" />
                            {city?.map(option => (
                              <option
                                key={option.city_name}
                                value={option?.city_name}
                              >
                                {option?.city_name}
                              </option>
                            ))}
                          </TextField>
                        </div>
                      )}

                      <div className="flex flex-col items-start">
                        <TextField
                          fullWidth
                          label="Zip Code"
                          {...register('zipCode')}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start mt-4">
                      <h1 className="text-sm mb-1">Address Line</h1>
                      <textarea
                        placeholder="Azadi Bazar, Dharmapur, Fatikcchari, Chittagong, Bangladesh 4351"
                        className="border w-full h-20 p-2 text-sm rounded-md"
                      ></textarea>
                    </div>
                    <div className="relative mt-5">
                      <button
                        type="submit"
                        className=" py-2 px-5 rounded bg-primary text-white "
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  )
}
