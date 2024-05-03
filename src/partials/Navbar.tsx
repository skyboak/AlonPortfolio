import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-3 h-10 w-10 stroke-cyan-600"
              src="\assets\images\supermanIcon.png"
              alt="Website Logo S"
            />
          }
          name="Alon's Portfolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">DevLog</NavMenuItem>
        <a
          href="/public/assets/AlonBarak_Resume.pdf"
          download
          style={{ color: 'lightBlue' }}
        >
          Download Resume
        </a>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
