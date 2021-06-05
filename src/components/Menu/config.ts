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
     icon: 'AuditIcon',  // for now
     href: 'https://finance.gitbook.io/swap/'
   },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/'
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
    label: 'More',
    icon: 'MoreIcon',
    items: [
      /* {
        label: 'Github',
        href: 'https://github.com/WolvesDenDefi/', // ask yangcheng
      }, */
      {
        label: 'Docs',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/',
      },
     /* {
        label: 'Blog',
        href: 'https://squirtle-finance.medium.com/'
      }, */
    ],
  },
]

export default config
