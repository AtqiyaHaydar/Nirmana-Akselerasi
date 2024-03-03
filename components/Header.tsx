import Image from 'next/image'
import Ken from '@/public/Ken.png'

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center justify-center '>
      <div className='space-y-4 text-center text-white'>
        <h1 className='font-the-seasons text-7xl'>
          Nirmana Akselerasi
        </h1>
        <h2 className='font-the-seasons text-3xl text-primaryOrange'>Reformasi Mencari Jati Diri</h2>
      </div>
    </header>
  )
}

export default Header