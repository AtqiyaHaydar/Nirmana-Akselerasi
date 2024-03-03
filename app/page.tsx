import Header from "@/components/Header";
import Kenneth from "@/components/Kenneth";
import ProgramKerja from "@/components/ProgramKerja";
import VisiMisi from "@/components/VisiMisi";

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

    </main>
  );
}
