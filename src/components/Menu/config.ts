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
    label: 'Red Pill',
    icon: 'PoolIcon',
    href: '/farms',
  },
   {
    label: "Blue Pill",
     icon: 'PoolIcon',
     href: '/nests',
   },
   {
     label: 'Audit/Reviews',
     icon: 'AuditIcon',  // for now
     href: '',
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
    href: 'https://simulationswap123.gitbook.io/sim/roadmap',
  },
  {
    label: 'Features',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Anti-Whale mechanism',
        href: 'https://simulationswap123.gitbook.io/sim/features/anti-whale',
      },
      {
        label: 'Anti-Bot',
        href: 'https://simulationswap123.gitbook.io/sim/features/bot-vanquisher-protocol',
      },
      {
        label: 'Deposit Shield',
        href: 'https://simulationswap123.gitbook.io/sim/features/deposit-shield'
      },
      {
        label: 'Automated Emission Reduction',
        href: 'https://simulationswap123.gitbook.io/sim/features/automated-emission-reduction',
      },
      {
        label: 'Automated Burn',
        href: 'https://simulationswap123.gitbook.io/sim/features/automated-burn',
      },
      {
        label: 'Automated Liquidity',
        href: 'https://simulationswap123.gitbook.io/sim/features/automated-liquidity'
      },
      {
        label: 'Peroiodic Buybacks and Burns',
        href: 'https://simulationswap123.gitbook.io/sim/features/periodic-buyback-and-burns',
      },
    
    ]
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     
      {
        label: 'Docs',
        href: 'https://simulationswap123.gitbook.io/simulation-swap/',
      },
    ],
  },
]

export default config
