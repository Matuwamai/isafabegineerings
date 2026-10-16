// All business details live here. Edit this file to update the website.

export const siteConfig = {
  name: 'Isafab Engineering',
  shortName: 'Isafab',
  tagline: 'Welding, Fabrication & Steel Fixing',
  url: 'https://isafabengineering.co.ke',

  phoneDisplay: '0745 144 475',
  phoneIntl: '+254745144475',
  whatsappNumber: '254745144475', // international format, no "+"
  email: 'isafabegineering@gmail.com',

  location: {
    area: 'Kiganjo',
    town: 'Thika',
    county: 'Kiambu',
    country: 'KE',
  },
  // He works anywhere in Kenya. These towns are shown as examples on the site;
  // "and anywhere in Kenya" is always added after them.
  coverage: 'across Kenya',
  serviceAreas: [
    'Nairobi',
    'Thika',
    'Kiambu',
    'Ruiru',
    'Juja',
    "Murang'a",
    'Machakos',
    'Kajiado',
    'Nakuru',
    'Naivasha',
    'Nyeri',
    'Meru',
    'Embu',
    'Eldoret',
    'Kisumu',
    'Mombasa',
  ],

  // TODO: confirm working hours.
  hours: 'Mon – Sat, 8:00am – 6:00pm',

  // Set to a number (e.g. 6) to show "6+ years experience" on the site.
  yearsExperience: null,

  social: {
    // TODO: paste the Facebook page link (Facebook usernames can't contain "_", so it isn't facebook.com/isafab_ke).
    // The Facebook icon is hidden until this is filled in.
    facebook: '',
    tiktok: 'https://www.tiktok.com/@isafab_ke',
    instagram: 'https://www.instagram.com/isafab_ke',
  },
}

export const whatsappLink = (text = `Hello ${siteConfig.name}, I would like to get a quote.`) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`

export const telLink = `tel:${siteConfig.phoneIntl}`
