// Simplified game model:
// - If a game has a `component`, it's rendered internally at /games/[slug]
// - If it has a `url`, it opens externally.
// Adding a game now only requires importing its component (if internal) and
// pushing a new object below. No type discriminator needed.

import type { ComponentType } from 'react';

// Gauntlet Match internal game (JSX based) lazy import wrapper
// Keep as plain JS/JSX component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions
// @ts-ignore - allow importing raw JSX file without type declarations
import GauntletMatch from './gauntletMatch/gauntletMatch';

export interface GameMeta {
  slug: string;
  title: string;
  description: string;
  // External games: provide a full URL
  url?: string;
  // Internal games: provide the React component (client loaded)
  component?: ComponentType<any>; // Internal React component
  image?: {
    src: string;
    alt: string;
  };
}

export const games: GameMeta[] = [
  {
    slug: 'gauntlet-match',
    title: 'Gauntlet Match',
    description:
      'Create a custom wrestler and battle a style-focused gauntlet in a card-based combat system.',
    component: GauntletMatch as any,
    image: {
      src: '/assets/images/gauntletMatchCover.png',
      alt: 'Gauntlet Match preview',
    },
  },
  {
    slug: 'MyPerfectPet',
    title: 'MyPerfectPet',
    description:
      'Virtual pet browser game: hatch, care, earn coins, and keep your companion happy with a modern Tamagotchi-style loop.',
    url: 'https://myperfectpet.vercel.app',
    image: {
      src: '/assets/images/myperfectpet-cover.png',
      alt: 'MyPerfectPet cover image',
    },
  },

  // {
  //   slug: 'click-counter',
  //   title: 'Click Counter',
  //   description: 'Simple stateful counter – baseline internal example.',
  //   component: ClickCounterGame,
  //   image: {
  //     src: '/assets/images/siteIcon.png',
  //     alt: 'Click Counter icon',
  //   },
  // },
  {
    slug: 'food2poop',
    title: 'Food2Poop',
    description:
      'Educational game about the digestive system. Follow food through your body and learn how digestion works!',
    url: 'https://food2poop.netlify.app/',
    image: {
      src: '/assets/images/food2poopLogo.jpg',
      alt: 'Food2Poop game preview',
    },
  },

  // {
  //   slug: 'space-invaders',
  //   title: 'Space Invaders Clone',
  //   description: 'External prototype hosted separately (placeholder).',
  //   url: 'https://example.com/space-invaders',
  //   image: {
  //     src: '/assets/images/spaceIcon.png',
  //     alt: 'Space Invaders preview',
  //   },
  // },
];

export const findGame = (slug: string) => games.find((g) => g.slug === slug);
