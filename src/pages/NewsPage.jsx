import React from 'react'

const NewsPage = () => {
  const mockupDate = new Date();
  return (
    <div className='md:pt-[450px] md:px-20 lg:px-40'>
      <h1 className='text-4xl font-bold pb-10'>News</h1>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <h1>Featured Post</h1>
          <div>
          <img className='w-full h-60' src="" alt="" />
          </div>
          <p className='text-sm p-2 font-light'>{mockupDate.toString()}</p>
          <p className='pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil itaque pariatur odio eius obcaecati minus nesciunt debitis quis nostrum libero harum qui omnis alias culpa nemo eveniet beatae voluptas, fugiat dolore! Autem eveniet labore quidem eius velit numquam distinctio corrupti deleniti facilis adipisci facere dolores doloribus cumque debitis tempora, perferendis sed dolorum totam. Assumenda, est itaque? Illo expedita dicta quos ipsum obcaecati molestias reiciendis neque, quibusdam repellendus, excepturi nulla!</p>
          <a className='text-red-800' href="#">Read More</a>
        </div>
        <div>
          <h1>New in the Shop!</h1>
        </div>
      </div>
    </div>
  )
}

export default NewsPage