import { Construction, Droplets, Factory, Fence, GripHorizontal, Sofa, Warehouse } from 'lucide-react'

// Each service is a category with one or more item lists (a list title is optional).
// Images are expected in /public/images. See IMAGE_PROMPTS.md for how to create them.
export const serviceGroups = [
  {
    id: 'welding-fabrication',
    title: 'Welding & Fabrication',
    intro: 'Steel products for homes and businesses, measured, cut, welded, painted and installed to fit your space.',
    services: [
      {
        id: 'gates-security',
        name: 'Gates & Security',
        icon: Fence,
        image: '/images/modern-gates.jpg',
        summary: 'Modern gates, steel doors, grills and fencing that keep your home or business secure and looking sharp.',
        lists: [
          {
            items: [
              'Sliding gates',
              'Swing gates',
              'Double-leaf gates',
              'Automated / electric gates',
              'Pedestrian gates',
              'Security gates',
              'Steel doors',
              'Burglar-proof doors',
              'Steel windows',
              'Window grills',
              'Security grills',
              'Perimeter fencing',
              'Steel barriers',
            ],
          },
        ],
      },
      {
        id: 'railings-access',
        name: 'Railings & Access',
        icon: GripHorizontal,
        image: '/images/railing.jpg',
        summary: 'Safe, good-looking railings and steel staircases for homes, offices and industrial sites.',
        lists: [
          {
            items: [
              'Staircase railings',
              'Balcony railings',
              'Veranda railings',
              'Handrails',
              'Safety railings',
              'Industrial guardrails',
              'Walkway railings',
              'Steel staircases',
              'Fire-escape stairs',
            ],
          },
        ],
      },
      {
        id: 'roofing-structures',
        name: 'Roofing & Light Steel Structures',
        icon: Warehouse,
        image: '/images/roofing.jpg',
        summary: 'Steel roof trusses, carports, canopies and sheds, from a single carport to a warehouse roof.',
        lists: [
          {
            items: [
              'Roof trusses',
              'Steel roofing frames',
              'Carports',
              'Garages',
              'Canopies',
              'Shade structures',
              'Steel sheds',
              'Light-steel structures',
              'Warehouse roofing structures',
            ],
          },
        ],
      },
      {
        id: 'custom-metal-products',
        name: 'Custom Metal Products',
        icon: Sofa,
        image: '/images/steel-beds.jpg',
        summary: 'Furniture, shelving, counters and stands made to your design, for your home or your shop.',
        lists: [
          {
            title: 'For homes',
            items: [
              'Steel beds',
              'Metal tables',
              'Metal chairs',
              'Steel wardrobes',
              'Shoe racks',
              'Kitchen frames',
              'Laundry frames',
              'Outdoor furniture',
              'Steel pergolas',
              'Decorative metalwork',
            ],
          },
          {
            title: 'For businesses',
            items: [
              'Steel shelves',
              'Storage racks',
              'Display stands',
              'Shop counters',
              'Equipment stands',
              'Metal cabinets',
              'Work benches',
              'Industrial tables',
              'Trolleys',
              'Steel & storage cages',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'steel-fixing',
    title: 'Steel Fixing',
    intro:
      'Reinforcement steel for construction. We cut, bend, tie and fix rebar to your structural drawings, for homeowners, contractors and construction sites.',
    services: [
      {
        id: 'reinforcement-steel-fixing',
        name: 'Reinforcement Steel Fixing',
        icon: Construction,
        image: '/images/steel-fixing.jpg',
        summary: 'Accurate rebar cutting, bending and fixing for foundations, columns, beams, slabs and walls.',
        lists: [
          {
            title: 'Rebar work',
            items: [
              'Reinforcement bar cutting',
              'Rebar bending',
              'Rebar fixing & tying',
              'Mesh reinforcement',
              'Reinforcement cage fabrication',
            ],
          },
          {
            title: 'Structural elements',
            items: [
              'Footing & foundation reinforcement',
              'Column reinforcement',
              'Beam reinforcement',
              'Ground-beam reinforcement',
              'Ring-beam reinforcement',
              'Slab reinforcement',
              'Staircase reinforcement',
              'Retaining-wall reinforcement',
              'Shear-wall reinforcement',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'industrial-utility',
    title: 'Industrial & Utility',
    intro: 'Heavy-duty steel work for factories, warehouses, farms, water and power installations.',
    services: [
      {
        id: 'industrial-fabrication',
        name: 'Industrial Fabrication',
        icon: Factory,
        image: '/images/industrial.jpg',
        summary: 'Machine frames, platforms, guards and racking built strong enough for daily industrial use.',
        lists: [
          {
            items: [
              'Machine frames',
              'Equipment platforms',
              'Maintenance & access platforms',
              'Industrial stairs',
              'Conveyor frames',
              'Machine guards',
              'Safety barriers',
              'Industrial enclosures',
              'Control-panel enclosures',
              'Steel cabinets',
              'Pipe & equipment supports',
              'Factory partitions',
              'Warehouse racking',
              'Heavy-duty steel structures',
            ],
          },
        ],
      },
      {
        id: 'water-utility',
        name: 'Water & Utility Structures',
        icon: Droplets,
        image: '/images/water-utility.jpg',
        summary: 'Tank towers, generator cages and solar mounts, built to carry heavy loads safely for years.',
        lists: [
          {
            items: [
              'Steel water-tank towers',
              'Elevated tank stands',
              'Tank support structures',
              'Steel pipe supports',
              'Generator platforms',
              'Generator cages',
              'Pump-house structures',
              'Utility equipment frames',
              'Solar-panel mounting structures',
              'Solar equipment stands',
            ],
          },
        ],
      },
    ],
  },
]

export const allServices = serviceGroups.flatMap((g) => g.services.map((s) => ({ ...s, group: g.title })))

export const allItems = allServices.flatMap((s) => s.lists.flatMap((l) => l.items))
