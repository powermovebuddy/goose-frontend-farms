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
     href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/audits'
   },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/coming-soon/lottery'
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
    href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/roadmap',
  },
  {
    label: 'Features',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Anti-Whale mechanism',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/features/anti-whale-mechanism',
      },
      {
        label: 'Automatic Emission Reduction',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/features/automatic-emission-reduction',
      },
      {
        label: 'Automatic Burn mechanism',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/features/automatic-burn-mechanism',
      },
      {
        label: 'Migrator code',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/features/removal-of-migrator-code',
      },
      {
        label: 'Timelock',
        href: 'https://wolvesdendefi-1.gitbook.io/wolvesdendefi/features/timelock',
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
