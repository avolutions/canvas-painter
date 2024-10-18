import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    {
      type: 'doc',
      id: 'Index', // Points to 'api-docs/index.md'
      label: 'Table of Contents',
    },
    {
      type: 'category',
      label: 'Enumerations', // Display the 'enumerations' folder with uppercase label
      items: [
        {
          type: 'autogenerated',
          dirName: 'enumerations', // Points to the 'enumerations' folder
        },
      ],
    },
    {
      type: 'category',
      label: 'Classes', // Display the 'classes' folder with uppercase label
      items: [
        {
          type: 'autogenerated',
          dirName: 'classes', // Points to the 'classes' folder
        },
      ],
    },
    {
      type: 'category',
      label: 'Interfaces', // Display the 'interfaces' folder with uppercase label
      items: [
        {
          type: 'autogenerated',
          dirName: 'interfaces', // Points to the 'interfaces' folder
        },
      ],
    },
  ],
};

export default sidebars;
