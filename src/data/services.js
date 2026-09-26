import { DoorClosed, BedDouble, AppWindow, Fence, Warehouse, GripHorizontal } from 'lucide-react'

// Images are expected in /public/images. See IMAGE_PROMPTS.md for how to create them.
export const serviceGroups = [
  {
    id: 'welding-fabrication',
    title: 'Welding & Fabrication',
    intro: 'Custom steel products measured, cut, welded and finished to fit your space.',
    services: [
      {
        id: 'steel-doors',
        name: 'Steel Doors',
        icon: DoorClosed,
        image: '/images/steel-doors.jpg',
        summary: 'Strong, secure steel doors for homes, shops, stores and gates.',
        points: ['Main & back doors', 'Shop & store doors', 'Security grill doors', 'Custom designs & finishes'],
      },
      {
        id: 'steel-beds',
        name: 'Steel Beds',
        icon: BedDouble,
        image: '/images/steel-beds.jpg',
        summary: 'Durable metal beds and bunk beds for homes, schools and hostels.',
        points: ['Single, double & king size', 'Bunk / double-decker beds', 'School & hostel orders', 'Smooth, painted finish'],
      },
      {
        id: 'steel-windows',
        name: 'Steel Windows',
        icon: AppWindow,
        image: '/images/steel-windows.jpg',
        summary: 'Steel window frames and burglar-proofing made to your exact sizes.',
        points: ['Window frames', 'Burglar-proof grills', 'Modern & classic patterns', 'Ready for glazing'],
      },
      {
        id: 'modern-gates',
        name: 'Modern Gates',
        icon: Fence,
        image: '/images/modern-gates.jpg',
        summary: 'Stylish, solid gates that give your home or business a strong first impression.',
        points: ['Swing & sliding gates', 'Pedestrian gates', 'Modern sheet & bar designs', 'Painting & installation'],
      },
    ],
  },
  {
    id: 'steel-fixing',
    title: 'Steel Fixing',
    intro: 'On-site steel work for roofs, stairs, balconies and structures.',
    services: [
      {
        id: 'roofing',
        name: 'Roofing',
        icon: Warehouse,
        image: '/images/roofing.jpg',
        summary: 'Steel roof trusses, purlins and roofing for houses, shops and sheds.',
        points: ['Steel trusses & purlins', 'Roofing sheet fixing', 'Carports & sheds', 'Repairs & extensions'],
      },
      {
        id: 'railing',
        name: 'Railing',
        icon: GripHorizontal,
        image: '/images/railing.jpg',
        summary: 'Safe, good-looking railings for stairs, balconies and verandas.',
        points: ['Staircase railings', 'Balcony balustrades', 'Veranda & terrace rails', 'Hand rails'],
      },
    ],
  },
]

export const allServices = serviceGroups.flatMap((g) => g.services.map((s) => ({ ...s, group: g.title })))
