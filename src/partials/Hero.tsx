import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Alon Barak</GradientText> 👋
        </>
      }
      description={
        <>
          Welcome to my software engineering portfolio! I'm a student with a
          strong interest in programming. This website is a collection of my
          projects, where you can explore the applications I've built and the
          technologies I've used. Dive in and see what I've been working on!
        </>
      }
      avatar={
        <img
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="h-73 w-80"
          src="..\assets\images\AlonAvatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/alon-barak13/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/skyboak" target="_blank">
            <HeroSocial src="/assets/images/githubIcon.png" alt="github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
