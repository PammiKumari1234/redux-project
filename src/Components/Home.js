import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='add-to-cart'>
            <img src="https://cdn-icons-png.flaticon.com/512/70/70021.png" alt="" />
        </div>
      <h1>Home</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile4/P36096/heroimage/144646-v4-apple-iphone-14-pro-mobile-phone-large-1.jpg" alt="" />
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>Price: $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>
            
        </div>
    </div>
  )
}

export default Home
