import Image from 'next/image'
import Ken from '@/public/Ken.png'

const Kenneth = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center border-2 mx-4 lg:mx-0 border-white rounded-xl w-full max-w-4xl h-[650px] lg:h-[325px] bg-white/5 backdrop-blur  font-source-code-pro text-white py-8 px-4 md:px-8 md:py-0'>
      <div className='text-center md:text-left'>
        <p>Mari Berkenalan Dengan</p>
        <div className='my-8'>
          <h3 className='text-4xl'>Ken</h3>
          <p className='text-[12px]'>(Kenneth Ezekiel Supratoni)</p>
        </div>
        <p className='max-w-[500px] text-[14px]'>
          Seorang yang memiliki kepribadian <span className='text-primaryOrange'>ENFJ-A</span>, atau yang dikenal sebagai <span className='text-primaryOrange'>"The Prontagonist"</span>, Kenneth memiliki kemampuan untuk mempengaruhi orang lain dan memimpin dengan inspiratif. Selain itu, dia juga dikenal sebagai sosok yang ramah, peduli, dan selalu siap membantu orang lain.
        </p>
      </div>
      <div>
        <Image 
          src={Ken} 
          alt='Kenneth' 
          className='w-[300px] h-[300px]'  
        />
      </div>
    </div>
  )
}

export default Kenneth