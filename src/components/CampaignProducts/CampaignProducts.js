import { BASE_URL } from 'apis/url'
import React, { useEffect, useState } from 'react'

export default function CampaignProducts({ handleSelectedProducts ,selectedProducts}) {
  const [products, setProducts] = useState([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    fetch(`${BASE_URL}/product?searchTerm=${filterName}`)
      .then(res => res.json())
      .then(data => setProducts(data?.data))
  }, [filterName])

  return (
    <>
      <div className="bg-white p-5 rounded shadow border mt-5 py-10">
        <h1 className="mb-5 text-xl font-semibold ">Select Offer Product</h1>
        <div className="h-[500px] overflow-y-scroll border-t pt-5">
          {products?.map(product => (
            <div
              onClick={() =>
                handleSelectedProducts(product._id)
              }
              key={product._id}
              className="flex items-center justify-between border-b border-gray-200 py-2  hover:bg-[#e9e9e9] cursor-pointer rounded p-2 duration-200"
            >
              <div className="flex items-center">
                <img
                  src={product?.frontImage}
                  alt=""
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="ml-3">
                  <h1 className="font-semibold">{product?.name}</h1>
                  <h1 className="text-xs text-gray-500">{product?.category}</h1>
                </div>
              </div>
              <div className="flex items-center mr-5">
                <input 
                checked={selectedProducts?.includes(product._id)}
                className="h-5 w-5 cursor-pointer" type="checkbox" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
