import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Welcome To Progress Java',
  tagline: 'The open-source guide to modern Java fundamentals, clean examples, and updates with every JDK release.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://progressjava.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProgressJava', // Usually your GitHub org/user name.
  projectName: 'progressjava-site', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/progressjava',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Main docs at /docs
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'), // must resolve to an absolute path
        editUrl: 'https://github.com/progressjava/',
        sidebarCollapsible: true,
        sidebarCollapsed: false,
      },
    ],
    // Second docs at /aiwithjava
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aiwithjava',
        path: 'aiwithjava',
        routeBasePath: 'aiwithjava',
        sidebarPath: require.resolve('./sidebarsAiWithJava.js'),
        editUrl: 'https://github.com/progressjava/',
        sidebarCollapsible: true,
        sidebarCollapsed: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Progress Java',
      logo: {
        alt: 'Progress Java Logo',
        src: 'img/progressjava-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          docsPluginId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'aiwithjavaSidebar', // must match export key in sidebarsAiWithJava.js
          docsPluginId: 'aiwithjava',
          position: 'left',
          label: 'AI With Java',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {href: 'https://github.com/progressjava', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/progressjava',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Progress Java.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // Your Algolia credentials
      appId: 'GROS89QWRY',
      apiKey: '96778409f5927678b51bd1a1d1e0709c',
      indexName: 'progress_java_pages',
      askAi: 'YOUR_ALGOLIA_ASSISTANT_ID', // TODO: Replace with your Algolia Assistant ID
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      // Optional UI tweaks
      placeholder: 'Search Progress Java...',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
