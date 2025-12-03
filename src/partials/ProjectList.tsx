import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeLift: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 0.8, 0.32, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-14">
      <FadeLift>
        <Project
          name="Rabbit: Pet-Powered Habit Tracker"
          description="A gamified habit-tracking mobile application where users nurture a virtual pet that evolves based on their habit completion. Built with React Native, Expo, and Firebase for a seamless cross-platform experience."
          link="/posts/Rabbit/"
          img={{
            src: '/assets/images/rabbitLogo.png',
            alt: 'Rabbit App Logo',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React Native</Tags>
              <Tags color={ColorTags.LIME}>Expo</Tags>
              <Tags color={ColorTags.RED}>Firebase</Tags>
              <Tags color={ColorTags.BLUE}>Context API</Tags>
              <Tags color={ColorTags.EMERALD}>Independent</Tags>
            </>
          }
          links={[
            {
              url: 'https://github.com/skyboak/rabbit-app',
              name: 'GitHub Repository',
            },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/posts/Rabbit/"
            className="inline-block rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            More Info
          </a>
          <span className="group inline-flex items-center">
            <button
              type="button"
              disabled
              className="inline-block cursor-not-allowed rounded-md border border-dashed border-slate-400 px-4 py-2 text-sm font-semibold text-slate-400"
              aria-disabled="true"
            >
              GitHub Repo
            </button>
            <span className="pointer-events-none -translate-y-8 translate-x-2 scale-95 opacity-0 transition-all group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <span className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-200 shadow-lg ring-1 ring-slate-700/50">
                Coming soon
              </span>
            </span>
          </span>
        </div>
      </FadeLift>
      <FadeLift delay={0.05}>
        <Project
          name="BrainBuddy: ADHD Task Scheduler"
          description="An intelligent mobile application that uses complex algorithms to optimize daily task scheduling based on personal productivity patterns. Features adaptive scheduling, smart notifications, and a built-in focus timer."
          link="/posts/BrainBuddy/"
          img={{
            src: '/assets/images/brainbuddyLogo.png',
            alt: 'BrainBuddy App Logo',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>React Native</Tags>
              <Tags color={ColorTags.ORANGE}>TypeScript</Tags>
              <Tags color={ColorTags.LIME}>Expo</Tags>
              <Tags color={ColorTags.RED}>Firebase</Tags>
              <Tags color={ColorTags.INDIGO}>Academic</Tags>
            </>
          }
          links={[
            {
              url: 'https://github.com/skyboak/BrainBuddy',
              name: 'GitHub Repository',
            },
            {
              url: '/assets/BrainBuddy.apk',
              name: 'Download APK',
            },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/assets/BrainBuddy.apk"
            className="inline-block rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            download
          >
            Download APK
          </a>
          <a
            href="https://github.com/skyboak/BrainBuddy"
            className="inline-block rounded-md border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="/posts/BrainBuddy/"
            className="inline-block rounded-md border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            More Info
          </a>
        </div>
      </FadeLift>
      <FadeLift delay={0.1}>
        <Project
          name="GoNature Academic Project"
          description="A Full Stack application for managing a nature reserve, including an application for visitors and park workers. Developed with Java, JavaFx, MySql, and OCSF."
          link="/posts/GoNature/"
          img={{ src: '/assets/images/GoNatureLogo.png', alt: 'GoNature' }}
          category={
            <>
              <Tags color={ColorTags.VIOLET}>Java</Tags>
              <Tags color={ColorTags.YELLOW}>JavaFx</Tags>
              <Tags color={ColorTags.SKY}>MySql</Tags>
              <Tags color={ColorTags.GREEN}>OCSF</Tags>
              <Tags color={ColorTags.INDIGO}>Academic</Tags>
            </>
          }
          links={[
            {
              url: 'https://github.com/reemyha/GoNatureProject',
              name: 'GitHub Repository',
            },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/posts/GoNature/"
            className="inline-block rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            More Info
          </a>
          <a
            href="https://github.com/reemyha/GoNatureProject"
            className="inline-block rounded-md border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </FadeLift>
      <FadeLift delay={0.15}>
        <Project
          name="Daily Puzzles Opener Chrome Extension"
          description="A Chrome extension that opens the daily puzzles of the most popular puzzle websites or user entered websites everyday when opening the browser. Developed with JavaScript, HTML, CSS, and Chrome Extension API."
          link="/posts/ChromeExtension/"
          img={{
            src: '/assets/images/chromeExtensionIcon.png',
            alt: 'chromeExtension',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>JavaScript</Tags>
              <Tags color={ColorTags.INDIGO}>HTML</Tags>
              <Tags color={ColorTags.ROSE}>CSS</Tags>
              <Tags color={ColorTags.GREEN}>Chrome API</Tags>
              <Tags color={ColorTags.EMERALD}>Independent</Tags>
            </>
          }
          links={[
            {
              url: 'https://github.com/skyboak/DailyPuzzleOpener_ChromeExtension',
              name: 'GitHub Repository',
            },
            {
              url: 'https://chromewebstore.google.com/detail/my-daily-puzzle-opener/nkjinednhefadooeaekmlcnhgffeaokj',
              name: 'Chrome Web Store',
            },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://chromewebstore.google.com/detail/my-daily-puzzle-opener/nkjinednhefadooeaekmlcnhgffeaokj"
            className="inline-block rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Store
          </a>
          <a
            href="https://github.com/skyboak/DailyPuzzleOpener_ChromeExtension"
            className="inline-block rounded-md border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="/posts/ChromeExtension/"
            className="inline-block rounded-md border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            More Info
          </a>
        </div>
      </FadeLift>
      {/* <div>
        <Project
          name="Mobile Idle Space Exploration Game (WIP)"
          description="Created in Unity using C#, A space exploration game with Clicker Idle game mechanics. including Turrets, Different spaceships and a planet exploration system."
          link="/"
          img={{
            src: '/assets/images/spaceIcon.png',
            alt: 'Project Space Explore',
          }}
          category={
            <>
              <Tags color={ColorTags.FUCHSIA}>C#</Tags>
              <Tags color={ColorTags.LIME}>Unity</Tags>
              <Tags color={ColorTags.EMERALD}>Independent</Tags>
            </>
          }
          links={[
            { url: 'https://example.com', name: 'Example Link 1' },
            { url: 'https://another-example.com', name: 'Example Link 2' },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/"
            className="inline-block rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Overview
          </a>
          <span className="inline-block rounded-md border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-400">
            WIP
          </span>
        </div>
      </div> */}
    </div>
  </Section>
);

export { ProjectList };
