// All business details live here. Edit this file to update the website.

export const siteConfig = {
  name: 'Isafab Engineering',
  shortName: 'Isafab',
  tagline: 'Welding, Fabrication & Steel Fixing',
  // TODO: replace with the real domain once it is purchased.
  url: 'https://isafabengineering.co.ke',

  phoneDisplay: '0745 144 475',
  phoneIntl: '+254745144475',
  whatsappNumber: '254745144475', // international format, no "+"
  email: '', // add when available, e.g. 'info@isafabengineering.co.ke'

  location: {
    area: 'Kiganjo',
    town: 'Thika',
    county: 'Kiambu',
    country: 'KE',
  },
  // Areas shown on the site. Add the places he is willing to travel to.
  serviceAreas: ['Kiganjo', 'Thika Town', 'Surrounding areas'],

  // TODO: confirm working hours.
  hours: 'Mon – Sat, 8:00am – 6:00pm',

  // Set to a number (e.g. 6) to show "6+ years experience" on the site.
  yearsExperience: null,

  social: {
    // TODO: confirm these links open the correct accounts.
    facebook: 'https://www.facebook.com/isanga',
    tiktok: 'https://www.tiktok.com/@isanga',
    instagram: 'https://www.instagram.com/isanga_99',
  },
}

export const whatsappLink = (text = `Hello ${siteConfig.name}, I would like to get a quote.`) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`

export const telLink = `tel:${siteConfig.phoneIntl}`
