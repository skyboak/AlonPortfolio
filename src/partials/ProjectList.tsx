import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
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
      <Project
        name="GoNature Academic Project"
        description="A Full Stack application for managing a nature reserve, including an application for visitors and park workers. Developed with Java, JavaFx, MySql, and OCSF."
        link="/"
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
          { url: 'https://example.com', name: 'Example Link 1' },
          { url: 'https://another-example.com', name: 'Example Link 2' },
        ]}
      />
      <Project
        name="Daily Puzzles Opener Chrome Extension"
        description="A Chrome extension that opens the daily puzzles of the most popular puzzle websites or user entered websites everyday when opening the browser. Developed with JavaScript, HTML, CSS, and Chrome Extension API."
        link="/posts/ChromeExtension"
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
          { url: 'https://example.com', name: 'Example Link 1' },
          { url: 'https://another-example.com', name: 'Example Link 2' },
        ]}
      />
    </div>
  </Section>
);

export { ProjectList };
