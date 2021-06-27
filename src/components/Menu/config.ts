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
        href: '',
      },
      {
        label: 'Anti-Bot',
        href: '',
      },
      {
        label: 'Automated Emission Reduction',
        href: '',
      },
      {
        label: 'Automated Burn',
        href: '',
      },
      {
        label: 'Automated Liquidity',
        href: ''
      },
      {
        label: 'Peroiodic Buybacks and Burns',
        href: '',
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
