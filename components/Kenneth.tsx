import Image from 'next/image'
import Ken from '@/public/Ken.png'

const Kenneth = () => {
  return (
    <div className='flex flex-row justify-between items-center border-2 border-white rounded-xl w-full max-w-4xl h-[325px] bg-white/5 backdrop-blur  font-source-code-pro text-white px-8'>
      <div>
        <p>Mari Berkenalan Dengan</p>
        <div className='my-8'>
          <h3 className='text-4xl'>Ken</h3>
          <p className='text-[12px]'>(Kenneth Ezekiel Supratoni)</p>
        </div>
        <p className='max-w-[500px] text-[14px]'>
          Sebagai seorang yang memiliki kepribadian <span className='text-primaryOrange'>ENFJ-A</span>, atau yang dikenal sebagai <span className='text-primaryOrange'>"The Prontagonist"</span>, Kenneth memiliki kemampuan untuk mempengaruhi orang lain dan memimpin dengan inspiratif. Selain itu, dia juga dikenal sebagai sosok yang ramah, peduli, dan selalu siap membantu orang lain.
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