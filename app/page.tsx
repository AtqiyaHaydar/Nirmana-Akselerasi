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
        className="h-[500px] w-[500px] object cover"
      >
        <source src="/20.webm" type="video/webm" />
      </video>

      <Kenneth />
        
      {/* Quote */}
      <p className="max-w-4xl text-white text-center font-source-code-pro py-20">
        "HMIF JADI WADAH YANG SESUAI, YANG BISA MEMENUHI KEBUTUHAN
        MAHASISWANYA DAN BISA BERDAMPAK BAGI MASYARAKAT!" <br/> <br/> - Kenneth
      </p>

      <VisiMisi />

      {/* Question */}
      <p className="max-w-4xl text-white text-center font-source-code-pro py-20">
        Lalu, Apa Saja Program Kerjanya?
      </p>

      <ProgramKerja />

      {/* Link To Draft */}
      <p className="text-white text-center font-source-code-pro pt-20 pb-4">
        Lihat Selengkapnya Di 
      </p>
      <div className="text-space font-source-code-pro bg-primaryOrange rounded-xl px-16 py-4 cursor-pointer z-30 hover:bg-primaryOrange/75">
        <a target="_blank" href="https://drive.google.com/file/d/12UJR-MGnlqnHfBDVZ9oJTPR1malDLVBv/view">
          Draft Kenneth
        </a>
      </div>
  
    </main>
  );
}
