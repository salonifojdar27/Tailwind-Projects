
import React from 'react'

const ColumnLayout = () => {
    return (

        <div>
            <nav className='sm:flex text-center md:flex gap-8 lg:flex justify-center p-3 lg:gap-x-12 bg-gray-200'>
                <a href="" className='text-sm/6 font-semibold text-gray-900'>HOME</a>
                <a href="" className='text-sm/6 font-semibold text-gray-900'>PRODUCT</a>
                <a href="" className='text-sm/6 font-semibold text-gray-900'>ABOUT</a>
                <a href="" className='text-sm/6 font-semibold text-gray-900'>BLOG</a>
                <a href="" className='text-sm/6 font-semibold text-gray-900'>CONTACT</a>
            </nav>
            <div className=' xl:columns-4 lg:columns-3 md:columns-2 columns-1 m-10 space-y-10 space-x-3'>
                {
                    Array.from({ length: 11 }).map((_, i) => <div className='bg-gray-100 p-3 rounded break-inside-avoid'>
                        <img src={"https://picsum.photos/300/200?random=" + i} alt="" className='rounded mb-3 w-full' />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius nisi molestias tempora quisquam odio optio, doloribus sint? Optio, doloribus </p>
                    </div>)
                }

            </div>
        </div>

    )
}

export default ColumnLayout

