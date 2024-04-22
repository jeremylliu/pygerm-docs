import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    // 'intro',
    'install',
    'getting-started',
    {
      type: 'category',
      label: 'Game',
      items: ['game-api/game', "game-api/game-config", "game-api/rendering-config"],
    },
    {
      type: 'category',
      label: 'Scene',
      items: ["scene-api/scene", "scene-api/scene-api"],
    },
    {
      type: 'category',
      label: 'Actor',
      items: ["actor-api/actor", "actor-api/actor-api"],
    },
    {
      type: 'category',
      label: 'Component',
      items: ["component-api/getting-started", "component-api/component"],
    },
    {
      type: 'category',
      label: 'Provided Components',
      items: ["prebuilt-components/rigidbody"],
    },
    'input',
    'camera',
    'text',
    'image',
    'audio',
    {
      type: 'category',
      label: 'Utility Types',
      items: ["util-types/color"],
    }
  ],
};

export default sidebars;
