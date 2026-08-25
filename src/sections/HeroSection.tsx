import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import portraitImage from '../assets/jack-portrait.png'

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col justify-between"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="relative flex flex-1 flex-col justify-center">
        <div className="relative">
          <div className="overflow-hidden">
            <FadeIn delay={0.15} y={40}>
              <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[14vw] md:-mt-5 md:text-[15vw] lg:text-[16.2vw]">
                Hi, i&apos;m Chien
              </h1>
            </FadeIn>
          </div>

          <Magnet
            padding={80}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="absolute left-1/2 top-full z-10 w-[186px] -translate-x-1/2 -translate-y-3/4 sm:w-[240px] md:w-[294px] lg:w-[346px]"
          >
            <FadeIn delay={0.6} y={30}>
              <img
                src={portraitImage}
                alt="Chien portrait"
                className="w-full select-none"
                draggable={false}
              />
            </FadeIn>
          </Magnet>
        </div>

        <div className="mt-10 flex items-end justify-between px-6 pb-7 sm:mt-14 sm:pb-8 md:mt-16 md:px-10 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="max-w-[160px] font-light uppercase tracking-wide leading-snug text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Providing comprehensive marketing solutions for individuals and businesses.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
