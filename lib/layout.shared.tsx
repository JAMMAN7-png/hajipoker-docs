import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'JAMMAN7-png',
  repo: 'hajipoker-docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'HajiPoker Help Center',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
