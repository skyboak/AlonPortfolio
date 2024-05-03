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
          Building the future of interactive experiences, one line of code at a
          time. I'm Alon Barak, a collaborative software engineering student
          with a hunger for knowledge and a knack for creative problem-solving.
          Whether you're looking for a skilled coding partner or just want to
          see what fuels my passion, step into my portfolio and let's explore
          the possibilities together.
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
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial src="/assets/images/githubIcon.png" alt="github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
