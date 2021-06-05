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
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
   {
    label: 'Nests',
     icon: 'PoolIcon',
     href: '/nests',
   },
   {
     label: 'Audits',
     icon: 'PoolIcon',  // for now
     href: 'https://pretzelfinance.gitbook.io/pretzelswap/'
   },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: 'https://pretzelfinance.gitbook.io/pretzelswap/'
   }
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
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Github',
        href: 'https://github.com/WolvesDenDefi/', // ask yangcheng
      }, */
      {
        label: 'Docs',
        href: 'https://pretzelfinance.gitbook.io/pretzelswap/',
      },
     /* {
        label: 'Blog',
        href: 'https://squirtle-finance.medium.com/'
      }, */
    ],
  },
]

export default config
