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
    href: '',
  },
  {
    label: 'Features',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Anti-Whale mechanism',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/anti-whale',
      },
      {
        label: 'Anti-Bot',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/bot-vanquisher-protocol',
      },
      {
        label: 'Automated Emission Reduction',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/automated-emission-reduction',
      },
      {
        label: 'Automated Burn',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/automated-burn',
      },
      {
        label: 'Automated Liquidity',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/automated-liquidity'
      },
      {
        label: 'Peroiodic Buybacks and Burns',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/features/periodic-buyback-and-burns',
      },
    
    ]
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@simulationswap123/s/simulation-swap/tokenomics/sim-token',
      },
    ],
  },
]

export default config
