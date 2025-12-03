import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';
import { useEffect, useState } from 'react';

// Sticky behavior: shrink padding and apply backdrop after scroll
const StickyWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/70 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/60'
          : 'bg-transparent'
      }`}
    >
      {children}
    </div>
  );
};

const Navbar = () => (
  <StickyWrapper>
    <Section>
      <div className="py-3 md:py-4">
        <NavbarTwoColumns>
          <a href="/">
            <Logo
              icon={
                <img
                  className="mr-3 h-10 w-10 stroke-cyan-600"
                  src="\assets\images\siteIcon.png"
                  alt="Website Logo S"
                />
              }
              name="Alon Barak"
            />
          </a>

          <NavMenu>
            {/* Mobile Games link */}
            <a
              href="/games/"
              className="rounded-md border border-cyan-500 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:hidden"
            >
              Games
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a
                href="/games/"
                className="hidden rounded-md border border-cyan-500 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:inline-block"
              >
                Games
              </a>
              {/* <a
                href="mailto:AlonBarak@gmail.com"
                className="rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Email
              </a> */}
              <a
                href="/assets/AlonBarak_Resume.pdf"
                download
                className="rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Resume
              </a>
            </div>
          </NavMenu>
        </NavbarTwoColumns>
      </div>
    </Section>
  </StickyWrapper>
);

export { Navbar };
