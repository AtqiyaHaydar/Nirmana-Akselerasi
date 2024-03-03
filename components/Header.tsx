import Image from 'next/image'
import Ken from '@/public/Ken.png'

const Header = () => {
  return (
    <header className='w-full flex flex-col items-center justify-center '>
      {/* Roket */}
      <video
        autoPlay
        muted
        loop
        className="h-[75px] w-[75px] md:h-[125px] md:w-[125px] object-cover absolute right-4 lg:right-[200px] top-8 lg:top-4"
      >
        <source src="/10.webm" type="video/webm" />
      </video>
      <div className='space-y-2 lg:space-y-4 text-center text-white'>
        <h1 className='font-source-code-pro text-3xl md:text-5xl lg:text-7xl'>
          Nirmana Akselerasi
        </h1>
        <h2 className='font-source-code-pro text-xl md:text-2xl lg:text-3xl text-primaryOrange'>Reformasi Mencari Jati Diri</h2>
      </div>
    </header>
  )
}

export default Header