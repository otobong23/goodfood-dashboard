import React from 'react'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'

const mostOrderedFood = [
  {
    image: image1,
    food: 'Fresh Salad Bowl',
    price: 'IDR 45.000'
  },
  {
    image: image2,
    food: 'Chicken Noodles',
    price: 'IDR 75.000'
  },
  {
    image: image3,
    food: 'Smoothie Fruits',
    price: 'IDR 45.000'
  },
  {
    image: image4,
    food: 'Hot Chicken Wings',
    price: 'IDR 45.000'
  }
]

export default function Grid4() {
  return (
    <div>
      <div className="div">
        <h5 className='text-[15px] font-normal pb-2'>Most Ordered Food</h5>
        <p className='text-xs text-[#737B8B]'>Adipiscing elit, sed do eiusmod tempor</p>
      </div>
      <div className="mostOrderedFood mt-[50px]">
        {mostOrderedFood.map((item, index) => (
          <div className="flex items-center justify-start w-full gap-3 pb-4 mb-4 item" key={index}>
            <div className="image">
              <div className="relative overflow-hidden rounded-full itemImage">
                <img src={item.image} alt="" />
              </div>
            </div>
            <h3 className="itemFood text-[#273240] text-xs">{item.food}</h3>
            <h3 className="itemPrice justify-self-end ml-auto text-[#273240b5] text-xs">{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
