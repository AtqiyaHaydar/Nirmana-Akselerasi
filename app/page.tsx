import Header from "@/components/Header";
import Kenneth from "@/components/Kenneth";
import ProgramKerja from "@/components/ProgramKerja";
import VisiMisi from "@/components/VisiMisi";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full wrapper space-y-4 flex flex-col items-center">
      <Header />
      
      {/* Earth */}
      <video
        autoPlay
        muted
        loop
        className="h-[375px] w-[375px] md:h-[500px] md:w-[500px] object cover"
      >
        <source src="/20.webm" type="video/webm" />
      </video>

      <Kenneth />
        
      {/* Quote */}
      <p className="px-4 max-w-4xl text-white text-center font-source-code-pro pt-20">
        "HMIF JADI WADAH YANG SESUAI, YANG BISA MEMENUHI KEBUTUHAN
        MAHASISWANYA DAN BISA BERDAMPAK BAGI MASYARAKAT!" <br/> <br/> - Kenneth
      </p>

      {/* Meteor */}
      <video
        autoPlay
        muted
        loop
        className="h-[75px] w-[75px] md:h-[150px] md:w-[150px] object cover"
      >
        <source src="/11.webm" type="video/webm" />
      </video>

      <div className="pb-20" />
      <VisiMisi />

      {/* Question */}
      <p className="px-4 max-w-4xl text-white text-center font-source-code-pro py-20">
        Lalu, Apa Saja Program Kerjanya?
      </p>

      <ProgramKerja />

      {/* Link To Draft */}
      <p className="px-4 text-white text-center font-source-code-pro pt-20 pb-4">
        Lihat Selengkapnya Di 
      </p>
      <div className="text-space font-source-code-pro bg-primaryOrange rounded-xl px-16 py-4 mb-8 cursor-pointer z-30 hover:bg-primaryOrange/75">
        <a target="_blank" href="https://drive.google.com/file/d/12UJR-MGnlqnHfBDVZ9oJTPR1malDLVBv/view">
          Draft Kenneth
        </a>
      </div>

      {/* Astronomy */}
      {/* Meteor */}
      <video
        autoPlay
        muted
        loop
        className=" h-[150px] w-[150px] md:h-[300px] md:w-[300px] object cover"
      >
        <source src="/9.webm" type="video/webm" />
      </video>
  
    </main>
  );
}
