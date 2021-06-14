import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Hunting Grounds',
    icon: 'FarmIcon',
    href: '/farms',
  },
   {
    label: "Wolves' Den",
     icon: 'PoolIcon',
     href: '/nests',
   },
   {
     label: 'Audit by RugDoc',
     icon: 'AuditIcon',  // for now
     href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
   },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
   },
  // {
   //  label: 'Pools',
   // icon: 'PoolIcon',
   //  href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Road Map',
    icon: 'RoadmapIcon',
    href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
  },
  {
    label: 'Features',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Anti-Whale mechanism',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
      {
        label: 'Automatic Emission Reduction',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
      {
        label: 'Automatic Burn mechanism',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
      {
        label: 'Migrator code',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
      {
        label: 'Timelock',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
    ]
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Github',
        href: 'https://github.com/BlackMagicFinance/', // ask yangcheng
      }, */
      {
        label: 'Docs',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/',
      },
      
     /* {
        label: 'Blog',
        href: 'https://squirtle-finance.medium.com/'
      }, */
    ],
  },
]

export default config
