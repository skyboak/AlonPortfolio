/* eslint-disable tailwindcss/classnames-order */
import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 8]);
  return (
    <Section>
      <div ref={ref} className="relative animate-hero-pop">
        <div
          // eslint-disable-next-line tailwindcss/classnames-order
          className="absolute -inset-8 rounded-[3rem] pointer-events-none animate-hero-glow"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.32), transparent 60%), radial-gradient(circle at 70% 70%, rgba(217,70,239,0.32), transparent 65%)',
            filter: 'blur(22px)',
          }}
          aria-hidden="true"
        />
        <HeroAvatar
          title={
            <>
              Hi there, I'm <GradientText>Alon Barak</GradientText> 👋
            </>
          }
          description={
            <>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-400/40">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open for work
                </span>
              </div>
              <p className="text-lg font-semibold tracking-tight text-slate-100">
                Software Engineer · React Native & Full-Stack
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
                Bringing ideas to life through clean, user-focused web and
                mobile experiences.
                <br />
                Efficient at building stable, maintainable applications with
                curiosity.
                <br />
                Discover the work I’m proud to share.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:AlonBarak@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-md bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Email me
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href="/assets/AlonBarak_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-cyan-400/50 bg-white/10 px-5 py-2 text-sm font-medium text-slate-100 backdrop-blur-sm transition-colors hover:border-cyan-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                >
                  Download Resume
                </a>
              </div>
              <div className="mt-4 ">
                <p className="text-sm text-slate-400">
                  Make sure to check out my{' '}
                  <a
                    href="/games/"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                  >
                    games collection
                  </a>{' '}
                </p>
              </div>
            </>
          }
          avatar={
            <motion.img
              style={{ y }}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="h-73 w-80 origin-center animate-hero-ambient transition-transform duration-700 will-change-transform hover:scale-110"
              src="/assets/images/AlonAvatar.png"
              alt="Avatar image"
              loading="lazy"
            />
          }
          socialButtons={
            <>
              <a
                href="https://www.linkedin.com/in/alon-barak13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/linkedin-icon.png"
                  alt="LinkedIn icon"
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain transition-opacity duration-300 hover:opacity-80"
                />
              </a>
              <a
                href="https://github.com/skyboak"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/githubIcon.png"
                  alt="GitHub icon"
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain transition-opacity duration-300 hover:opacity-80"
                />
              </a>
            </>
          }
        />
      </div>
    </Section>
  );
};

export { Hero };
