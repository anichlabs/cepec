export const SITE = {
  title: 'CEPEC SpA',
  description: 'Centro de Estudios, Proyectos y Construcción. Ingeniería, construcción y soluciones integrales para el desarrollo de proyectos en Chile.',
  url: 'https://cepec.cl',
  author: 'CEPEC SpA',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Nuestra Empresa', href: '/empresa' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Unidad de Estudios', href: '/estudios' },
  { name: 'Alianzas', href: '/alianzas' },
  { name: 'Contáctanos', href: '/contacto' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/cepec',
  twitter: 'https://twitter.com/cepec',
  facebook: 'https://facebook.com/cepec',
} as const;

export const CONTACT = {
  address: 'Valle del Huinganal, Parcela 182, Limache, Región de Valparaíso',
  phones: ['+56 9 9265 5772', '+56 9 4118 8033'],
  emails: ['gerencia@cepec.cl', 'administracion@cepec.cl'],
  maps: 'https://maps.google.com/?q=Valle+del+Huinganal+Parcela+182+Limache+Valparaiso',
} as const;

export const COMPANY = {
  name: 'CEPEC SpA',
  fullName: 'Centro de Estudios, Proyectos y Construcción',
  tagline: 'Del estudio técnico a la ejecución.',
  founded: '2014',
  region: 'Región de Valparaíso, Chile',
} as const;
