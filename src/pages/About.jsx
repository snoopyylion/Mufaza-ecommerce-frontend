import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.logoo} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, optio illo, impedit accusamus inventore rem neque eligendi maiores quaerat nobis ullam rerum est ut magnam delectus, perferendis quidem ratione voluptate corporis odio eius et! Iusto, reprehenderit id. Mollitia, veritatis eligendi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo, saepe laudantium commodi ipsa molestiae aut totam dignissimos assumenda, reiciendis magnam dolore sit, repellendus qui tempore. Possimus perspiciatis eum in!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat itaque explicabo qui aliquam commodi molestias sed consequatur, magnam recusandae totam at ducimus. Assumenda eum fugiat alias consequuntur ad quo harum.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis ipsum ut, dolore nemo pariatur sapiente inventore consequatur, iure vel eaque deleniti quasi deserunt! Amet aspernatur a porro provident quasi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis ipsum ut, dolore nemo pariatur sapiente inventore consequatur, iure vel eaque deleniti quasi deserunt! Amet aspernatur a porro provident quasi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perferendis ipsum ut, dolore nemo pariatur sapiente inventore consequatur, iure vel eaque deleniti quasi deserunt! Amet aspernatur a porro provident quasi!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About