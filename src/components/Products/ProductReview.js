import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'

export default function ProductReview({ product }) {
  const { reviews, name } = product
  return (
    <div>
      <h1 className="font-semibold">Rating & Reviews of {name}</h1>

      <div className="mt-8 sm:flex items-center gap-20">
        <div className="space-y-1 mb-5 sm:mb-0">
          <h1 className="text-4xl font-bold">
            4.7<span className="text-[25px] text-[#8b8b8b]">/5</span>
          </h1>
          {/* <Rating name="size-large" readOnly value={5} size="large" /> */}
          <Rating
            name="text-feedback"
            value={5}
            readOnly
            precision={5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <p className="text-[#585858] text-sm">310 Ratings</p>
        </div>

        <div className="space-y-2">
          <div className="flex  items-center gap-3">
            <Rating readOnly value={5} size="small" />
            <div className="flex items-center">
              <div className="w-[160px] bg-warning p-[5px]"></div>
              <div className="w-[20px] bg-[#ddd]  p-[5px]"></div>
            </div>
            <p className="text-sm text-[#535353]">273</p>
          </div>
          <div className="flex  items-center gap-3">
            <Rating readOnly value={4} size="small" />
            <div className="flex items-center">
              <div className="w-[60px] bg-warning p-[5px]"></div>
              <div className="w-[120px] bg-[#ddd]  p-[5px]"></div>
            </div>
            <p className="text-sm text-[#535353]">160</p>
          </div>
          <div className="flex  items-center gap-3">
            <Rating readOnly value={3} size="small" />
            <div className="flex items-center">
              <div className="w-[30px] bg-warning p-[5px]"></div>
              <div className="w-[150px] bg-[#ddd]  p-[5px]"></div>
            </div>
            <p className="text-sm text-[#535353]">52</p>
          </div>
          <div className="flex  items-center gap-3">
            <Rating readOnly value={2} size="small" />
            <div className="flex items-center">
              <div className="w-[15px] bg-warning p-[5px]"></div>
              <div className="w-[165px] bg-[#ddd]  p-[5px]"></div>
            </div>
            <p className="text-sm text-[#535353]">23</p>
          </div>
          <div className="flex  items-center gap-3">
            <Rating readOnly value={1} size="small" />
            <div className="flex items-center">
              <div className="w-[10px] bg-warning p-[5px]"></div>
              <div className="w-[170px] bg-[#ddd]  p-[5px]"></div>
            </div>
            <p className="text-sm text-[#535353]">5</p>
          </div>
        </div>
      </div>
    </div>
  )
}
