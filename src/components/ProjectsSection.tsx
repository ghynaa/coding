import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: '🎬 Enchanto',
    description:
      'Mengisahkan keluarga Madrigal dengan kekuatan sihir unik di pegunungan Kolombia, kecuali Mirabel yang harus menyelamatkan keajaiban mereka.',
    image: '/Enchanto.jpg',
    color: 'from-emerald-400 via-green-500 to-lime-400',
  },
  {
    title: '❄️ Frozen',
    description:
      'Perjuangan Anna mencari Elsa yang kekuatannya membekukan Arendelle dalam musim dingin abadi. Sebuah kisah kasih sayang sejati.',
    image: '/FROZEN.jpg',
    color: 'from-cyan-300 via-emerald-300 to-teal-400',
  },
  {
    title: '👻 Insidious',
    description:
      'Sepasang suami istri berusaha menyelamatkan putra mereka yang jiwanya terjebak di dimensi roh jahat bernama "The Further".',
    image: '/Insidious.jpg',
    color: 'from-green-600 via-emerald-800 to-slate-900',
  },
  {
    title: '🩻 The Trauma Code',
    description:
      'Kisah Baek Kang-hyuk, dokter bedah jenius yang eksentrik, dalam memimpin pusat trauma di rumah sakit universitas.',
    image: '/The Trauma code Heroes on call.jpg',
    color: 'from-teal-400 via-green-400 to-emerald-500',
  },
  {
    title: '🌊🐚 Moana 2',
    description:
      'Moana kembali berlayar menjelajahi lautan luas dalam petualangan berani melintasi samudra yang penuh misteri.',
    image: '/moana.jpg',
    color: 'from-emerald-300 via-teal-500 to-cyan-500',
  },
  {
    title: '🔪 Mercy For None',
    description:
      'Seorang mantan gangster legendaris kembali ke dunia bawah tanah untuk membalas dendam atas kematian misterius adiknya.',
    image: '/Mercy For None poster.jpg',
    color: 'from-green-900 via-emerald-700 to-green-500',
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950 via-slate-950 to-black overflow-hidden relative"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm">Curated Collection</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-3 tracking-tight">
            My Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Watch</span> 🍿
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative group/carousel">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
            <div className="flex -ml-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/10 backdrop-blur-md overflow-hidden group"
                  >
                    {/* Inner Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                    <div className="relative">
                      {/* IMAGE CONTAINER */}
                      <div className={`relative p-[2px] rounded-2xl bg-gradient-to-b ${project.color} overflow-hidden shadow-2xl shadow-emerald-900/20`}>
                        <div className="aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-900">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {/* Play Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-emerald-500/50">
                              <Play fill="white" className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TEXT CONTENT */}
                      <div className="mt-6">
                        <h3 className="font-bold text-2xl text-emerald-50 text-shadow-sm">
                          {project.title}
                        </h3>
                        <p className="text-emerald-100/60 mt-3 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* DECORATIVE LINE */}
                      <div className={`h-1 w-12 mt-6 rounded-full bg-gradient-to-r ${project.color}`} />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="rounded-full border-emerald-500/30 bg-emerald-950/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="rounded-full border-emerald-500/30 bg-emerald-950/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}