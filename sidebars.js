module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/start-here',
        'developers/create-as-web3api',
        'developers/create-js-dapp',
        'developers/create-js-plugin',
      ],
    },
    {
      type: 'category',
      label: 'Demos',
      items: ['demos/simplestorage-eth'],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: ['devtools/web3api-cli'],
    },
    {
      type: 'category',
      label: 'Uniswap v2 Web3API',
      items: [
        'uniswapv2/uniswapv2-web3api-intro',
        'uniswapv2/common-types',
        {
          type: 'category',
          label: 'Queries',
          // items: ['uniswapv2/queries/token', 'uniswapv2/queries/pair'],
          items: ['uniswapv2/queries/token'],
        },
        // {
        //   type: 'category',
        //   label: 'Mutations',
        //   items: ['uniswapv2/mutations/mutation-trade'],
        // },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/talks-and-videos',
        'resources/developer-tooling',
        'resources/the-web3api-technical-standard',
      ],
    },
  ],
};
