"use client"

const programKerja = [
  {
    id: 1,
    name: "HMIF Superapp",
    description: "Sebuah aplikasi yang diperuntukkan internal HMIF, berisikan seluruh kebutuhan akademik HMIF, jadwal akademik, penyaluran informasi secara push interaction, jadwal program kerja kepengurusan, dan masih banyak pengembangan lainnya. Aplikasi ini dapat menjadi sebuah ekosistem warga dan juga sebuah platform yang dikembangkan dari tahun ke tahun, dapat dikembangkan untuk SPARTA maupun kolaborasi eksternal. bit.ly/AplikasiHMIF"
  },
  {
    id: 2,
    name: "Company Visit",
    description: "Program mengunjungi perusahaan-perusahaan untuk meningkatkan pemahaman kondisi profesional sekaligus berelasi dengan profesional-profesional pada bidangnya masing-masing. Program ini akan direncanakan dan dibuka pendaftaran secara adil dan juga terstruktur."
  },
  {
    id: 3,
    name: "HMIF Fundraising",
    description: "Program bendahara sebagai fundraising untuk meningkatkan kas HMIF dengan berbagai cara inovatif."
  },
  {
    id: 4,
    name: "Alumni Networking",
    description: "Program menjalin relasi yang akrab dengan alumni HMIF, dilakukan dengan berbagai metode seperti pendekatan langsung, keterlibatan aktif dalam acara IAIF, dst."
  },
  {
    id: 5,
    name: "Alumni Teaches", 
    description: "Sebuah program pencerdasan diri dalam berbagai bidang, dengan pembicara alumni dengan prestasi dan pemikiran yang inovatif."
  },
  {
    id: 6,
    name: "Career Mentoring",
    description: "Program untuk mencarikan anggota HMIF seorang mentor dalam bidang profesional yang diminati, dapat dari anggota HMIF, atau dapat juga dari alumni."
  },
  {
    id: 7,
    name: "Budaya Efektif Efisien",
    description: "Sebuah budaya yang menyusun sebuah struktur dan kebiasaan untuk melakukan alur komunikasi seperti MUMMU secara taktis. Dilakukan agar progress dapat di-track sekaligus menanamkan budaya efisien tersebut dalam warga."
  },
  {
    id: 8,
    name: "Internalisasi Digital",
    description: "Internalisasi yang dijembatani oleh platform digital seperti sosial media. Dilakukan dengan inklusivitas, seperti akun internal HMIF."
  },
  {
    id: 9,
    name: "Staff & Event Appreciation",
    description: "Sebuah program untuk mengapresiasi warga HMIF yang berprestasi dalam bidang apapun, dilakukan secara digital dan fisik."
  },
  {
    id: 10,
    name: "Bantuan Dana Finansial",
    description: "Program untuk menggalang dana dari berbagai sumber untuk memenuhi kebutuhan finansial warga HMIF yang belum terpenuhi."
  },
  {
    id: 11,
    name: "Akademik X Lab",
    description: "Sebuah program tutorial, yang akan dilakukan secara kerjasama dengan asisten dari suatu laboratorium untuk mengajar mata kuliah yang bersangkutan. Tutor dapat berasal dari angkatan yang sama ataupun angkatan atas."
  },
  {
    id: 12,
    name: "Makrab DE",
    description: "Acara internalisasi DE untuk memastikan alur komunikasi yang baik dan bonding untuk memastikan keberjalanan program kerja di masa kepengurusan. Dapat juga dilakukan pencerdasan dan pertumbuhan dalam acara tersebut."
  },
  {
    id: 13,
    name: "Makrab Warga",
    description: "Acara internalisasi massal HMIF, inisiasi acara kedekatan dan juga bonding, ajang saling mengenal dengan baik dan juga melepas penat untuk warga yang membutuhkan."
  },
  {
    id: 14,
    name: "Home Tournament",
    description: "Acara tahunan HMIF untuk pertandingan antar jurusan-angkatan untuk beberapa cabang olahraga, termasuk e-sports. Dapat dilakukan dalam satu hari, ataupun dengan sistem blok."
  },
  {
    id: 15,
    name: "Olahraga Rutin",
    description: "Program rutin Internal untuk mengadakan acara berolahraga berbagai macam olahraga."
  },
  {
    id: 16,
    name: "Internalisasi Ramean",
    description: "Mengikuti acara-acara dari KM atau ITB untuk meramaikan dan menginternalisasi, seperti suporteran Olimpiade KM atau TPB Cup, dan masih banyak acara lainnya."
  },
  {
    id: 17,
    name: "Bebersih Sekre!",
    description: "Ajang besar untuk memperbarui dan juga meningkatkan kualitas ruang sekretariat. Sehingga ruang sekretariat dapat lebih nyaman bagi seluruh warga HMIF, baik di kampus Ganesha maupun Jatinangor."
  },
  {
    id: 18,
    name: "Ngariung Maca HMIF!",
    description: 'Program Community Service di Desa "X" difokuskan pada peningkatan literasi anak-anak di sekolah. Kegiatan ini melibatkan baca rutin setiap minggu dengan sesi "Read Aloud" dan waktu untuk anak-anak bercerita. Selain itu, setelah membaca, mereka diajak untuk berkumpul dan membuat karya seni berdasarkan cerita yang telah dibaca. Program ini juga mencakup pemantauan perkembangan, pameran hasil karya, dan kolaborasi dengan pihak sekolah serta partisipasi komunitas. Dengan demikian, diharapkan program ini tidak hanya meningkatkan tingkat literasi anak-anak tetapi juga memupuk rasa kreativitas dan kebersamaan di Desa "X".'
  },
  {
    id: 19,
    name: "Susur Desa HMIF!",
    description: "Program Community Service ini bertujuan untuk memperkuat kepedulian anak-anak terhadap masyarakat sambil meningkatkan tingkat literasi mereka. Kegiatan ini melibatkan anak-anak dengan memberikan mereka kamera untuk menemani mereka menyusuri sepanjang desa. Setelah menjelajah, mereka akan diajak untuk berbagi pengalaman dan keseruan yang mereka temui. Untuk memberikan wadah bercerita, anak-anak akan ditempatkan dalam kelompok untuk menciptakan cerita berkelompok yang mencerminkan keunikan dan keindahan desa mereka. Dengan melibatkan anak-anak secara aktif dalam proses dokumentasi dan bercerita, diharapkan dapat mengembangkan kepekaan sosial mereka dan sekaligus meningkatkan keterampilan literasi. Program ini tidak hanya menciptakan kegiatan yang bermanfaat tetapi juga merangsang kreativitas anak-anak dan membangun kepedulian mereka terhadap lingkungan sekitar."
  }
]

import { Button } from "./ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "./ui/dialog"

const ProgramKerja = () => {
  return (
    <div className="max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-8 z-30 px-4 items-center justify-center w-full">
      {programKerja.map((program) => {
        return (
          <div key={program.id} className="w-[175px] md:w-[270px] h-[125px] text-center text-white font-source-code-pro bg-white/5 border-2 border-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all hover:text-primaryOrange">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"ghost"}>
                  <span className="text-[12px] md:text-[16px]">
                    {program.name}
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="border-2 border-white rounded-xl text-white p-8 bg-space/75 space-y-4">
                  <DialogHeader>
                    <div className="w-full text-center">
                      {program.name}
                    </div>
                  </DialogHeader>
                  <DialogDescription>
                    {program.description}
                  </DialogDescription>
                </div> 
              </DialogContent>
            </Dialog>
          </div>
        )
      })}
       

    </div>
  )
}

export default ProgramKerja