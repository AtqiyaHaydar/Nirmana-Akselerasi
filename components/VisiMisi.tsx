import React from 'react'

const VisiMisi = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-8 justify-between w-full max-w-4xl'>

      <div className='border-2 border-white rounded-xl w-[20rem] md:w-[27rem] md:h-[375px] bg-white/5 backdrop-blur text-center text-white font-source-code-pro p-8 space-y-8'>
        <h3 className='text-2xl'>Visi</h3>
        <p className=''>Mewujudkan Nirmana Akselerasi Potensi HMIF</p>
      </div>

      <div className='border-2 border-white rounded-xl w-[20rem] md:w-[27rem] md:h-[375px] bg-white/5 backdrop-blur text-center text-white font-source-code-pro p-8 space-y-8'>
        <h3 className='text-2xl'>Misi</h3>
        <p className='text-left'>
          1. HMIF ITB dapat menjadi rumah belajar yang nyaman bagi setiap anggotanya <br/>
          2. HMIF ITB dapat menjadi wahana setiap anggota untuk lebih dekat dengan potensi keprofesiannya <br/>
          3. HMIF ITB dapat memanfaatkan berbagai potensinya untuk menunjukkan eksistensi jati dirinya di berbagai struktur sosial
        </p>
      </div>
    </div>
  )
}

export default VisiMisi