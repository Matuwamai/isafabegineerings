// Real photos of our work, shown in the Gallery, on the Home page and on the matching service pages.
// To add a photo: put it in public/images/work/ and add a line here.
// `service` links the photo to a service page (ids from services.js); leave it out for general site photos.
// `width`/`height` are the photo's pixel size, so the page doesn't jump while photos load.

export const workPhotos = [
  // Gates & fencing
  { file: 'ornamental-steel-gate.jpg', width: 720, height: 1600, category: 'Gates & Fencing', service: 'gates-security', caption: 'Ornamental steel gate, installed' },
  { file: 'curved-top-steel-gate.jpg', width: 1600, height: 720, category: 'Gates & Fencing', service: 'gates-security', caption: 'Steel gate with a curved top, painted and ready to hang' },
  { file: 'steel-fence-installation.jpg', width: 960, height: 1280, category: 'Gates & Fencing', service: 'gates-security', caption: 'Installing tall steel fence panels' },
  { file: 'window-grill-panels.jpg', width: 720, height: 1600, category: 'Gates & Fencing', service: 'gates-security', caption: 'Window grill panels laid out for welding' },

  // Roofs & steel structures
  { file: 'steel-veranda-roof.jpg', width: 720, height: 1600, category: 'Roofs & Structures', service: 'roofing-structures', caption: 'Steel-framed veranda roof over a stone walkway' },
  { file: 'steel-roof-structure.jpg', width: 720, height: 1600, category: 'Roofs & Structures', service: 'roofing-structures', caption: 'Steel roof structure: columns, rafters and purlins' },
  { file: 'circular-steel-roof-frame.jpg', width: 1600, height: 720, category: 'Roofs & Structures', service: 'roofing-structures', caption: 'Circular steel roof frame, welded on site' },
  { file: 'steel-columns-and-roof-frame.jpg', width: 720, height: 1600, category: 'Roofs & Structures', service: 'roofing-structures', caption: 'Steel columns and roof frame going up' },
  { file: 'light-steel-structure.jpg', width: 720, height: 1600, category: 'Roofs & Structures', service: 'roofing-structures', caption: 'Light steel structure on a concrete base' },
  { file: 'steel-enclosure-frame.jpg', width: 720, height: 1600, category: 'Roofs & Structures', caption: 'Steel-framed enclosure with mesh panels' },

  // Railings
  { file: 'cable-balustrade.jpg', width: 1280, height: 576, category: 'Railings', service: 'railings-access', caption: 'Steel posts with a cable balustrade' },

  // Beds, furniture & decor
  { file: 'painted-steel-bunk-beds.jpg', width: 1600, height: 720, category: 'Beds & Furniture', service: 'custom-metal-products', caption: 'Painted steel bunk beds, ready for delivery' },
  { file: 'steel-bunk-beds.jpg', width: 1600, height: 720, category: 'Beds & Furniture', service: 'custom-metal-products', caption: 'Steel bunk beds and bed frames' },
  { file: 'steel-bed-frame.jpg', width: 720, height: 1600, category: 'Beds & Furniture', service: 'custom-metal-products', caption: 'Steel bed frame before painting' },
  { file: 'decorative-metal-rooster.jpg', width: 720, height: 1600, category: 'Beds & Furniture', service: 'custom-metal-products', caption: 'Decorative metalwork: a steel rooster' },

  // On site
  { file: 'erecting-steel-frame.jpg', width: 1200, height: 1600, category: 'On Site', caption: 'Erecting a steel frame on site' },
  { file: 'welding-roof-framework.jpg', width: 1296, height: 972, category: 'On Site', caption: 'Fabricating steel roof framework on site' },
  { file: 'fabricator-on-site.jpg', width: 972, height: 1296, category: 'On Site', caption: 'Our founder on site' },
  { file: 'steel-delivered-to-site.jpg', width: 720, height: 1600, category: 'On Site', caption: 'Steel sections delivered to site' },
  { file: 'pump-house-site-visit.jpg', width: 972, height: 1296, category: 'On Site', caption: 'On site at a pump house' },
].map((p) => ({ ...p, src: `/images/work/${p.file}` }))

export const workCategories = [...new Set(workPhotos.map((p) => p.category))]

export const photosForService = (serviceId) => workPhotos.filter((p) => p.service === serviceId)

// The strongest finished-work photos, shown on the Home page.
export const featuredWork = ['ornamental-steel-gate.jpg', 'painted-steel-bunk-beds.jpg', 'steel-veranda-roof.jpg', 'steel-fence-installation.jpg'].map(
  (f) => workPhotos.find((p) => p.file === f),
)
