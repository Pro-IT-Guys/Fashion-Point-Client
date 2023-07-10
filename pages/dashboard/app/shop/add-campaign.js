import { Container, InputAdornment, TextField } from '@mui/material'
import { BASE_URL } from 'apis/url'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import CampaignProducts from 'src/components/CampaignProducts/CampaignProducts'
import DashboardLayout from 'src/layouts/dashboard'

export default function AddBanner() {
  const [imageUrl, setImageUrl] = useState('')
  const [selectedProducts, setSelectedProducts] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const handleImageUpload = e => {
    console.log(e)
    const image = e.target.files[0]
    const formData = new FormData()
    formData.append('image', image)

    fetch(`${BASE_URL}/image/single-image-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setImageUrl(result?.url)
      })
      .catch(err => {
        setLoading(false)
        toast.error('Something went wrong! please try again later!')
      })
  }

  const onSubmit = async data => {
    console.log(data)
  }

  const handleSelectedProducts = id => {
    if (selectedProducts?.includes(id)) {
      setSelectedProducts(prev => prev.filter(item => item !== id))
    } else {
      setSelectedProducts(prev => [...prev, id])
    }
  }

  console.log(selectedProducts);
  return (
    <DashboardLayout>
      <Container maxWidth="lg">
        <h1 className="text-2xl font-semibold mb-8">Add Campaign</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-5 rounded shadow border py-10">
              <div className="grid grid-cols-2 sm:gap-5 gap-3 mb-5">
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label="Campaign Title"
                    {...register('title', {
                      required: {
                        value: true,
                        message: ' Title is Required',
                      },
                    })}
                  />
                  <label className="label">
                    {errors.title?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.title.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <TextField
                    fullWidth
                    label=" Discount Price"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Price</InputAdornment>
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
              </div>
              <div className="grid grid-cols-2 sm:gap-5 gap-3">
                <div className="flex flex-col items-start">
                  <h1 className="text-xs font-semibold mb-1">Start Date</h1>
                  <TextField
                    fullWidth
                    // label="Start Date"
                    InputProps={{
                      type: 'date',
                    }}
                    {...register('quantity', {
                      required: {
                        value: true,
                        message: 'Start Date is Required',
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
                  <h1 className="text-xs font-semibold mb-1">End Date</h1>
                  <TextField
                    fullWidth
                    // label="End Date"
                    InputProps={{
                      type: 'date',
                    }}
                    {...register('endDate', {
                      required: {
                        value: true,
                        message: 'End Date is Required',
                      },
                    })}
                  />
                  <label className="quantity">
                    {errors.endDate?.type === 'required' && (
                      <span className="pl-2 text-xs mt-1 text-red-500">
                        {errors.endDate.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:gap-5 gap-3 mt-5">
                <div>
                  <h1 className="ml-1 text-sm mb-2 ">Campaign Image</h1>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    // accept="image/*"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  {imageUrl && (
                    <img src={imageUrl} alt="" className="w-40 h-40 rounded" />
                  )}
                </div>
              </div>
            </div>
            <CampaignProducts handleSelectedProducts={handleSelectedProducts} selectedProducts={selectedProducts}/>
            <div className="flex justify-start mt-4 ml-3">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Container>
    </DashboardLayout>
  )
}
