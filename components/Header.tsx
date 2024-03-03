import Image from 'next/image'
import Ken from '@/public/Ken.png'

const Header = () => {
  return (
    <header className='w-full flex flex-row items-center justify-center mt-[150px] '>
      <div className='space-y-4 text-center text-white'>
        <h1 className='font-the-seasons text-7xl'>Nirmasa Akselerasi</h1>
        <h2 className='font-the-seasons text-3xl'>Reformasi Mencari Jati Diri</h2>
      </div>
    </header>
  )
}

export default Header