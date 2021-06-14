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
    label: 'Spells',
    icon: 'SunIcon',
    href: '/farms',
  },
   {
    label: "Potions",
     icon: 'PoolIcon',
     href: '/nests',
   },
   {
     label: 'Audit/Reviews',
     icon: 'AuditIcon',  // for now
     href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/security/untitled',
   },
  {
     label: 'Giveaway',
     icon: 'TicketIcon',
     href: '',
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
    href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/roadmap',
  },
  {
    label: 'Features',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Anti-Whale mechanism',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/features/untitled',
      },
      {
        label: 'Anti-Bot',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/features/anti-bot',
      },
      {
        label: 'Automatic Emission Reduction',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/features/automatic-emission-reduction',
      },
      {
        label: 'Automatic Burn & Automatic Liquidity',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/features/automatic-burn-+-automatic-liquidity-adding',
      },
      {
        label: 'Buybacks and Burns',
        href: 'https://blackmagicfinance-1.gitbook.io/blackmagicfinance/features/buyback-and-burns',
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
