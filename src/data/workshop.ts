export const workshop = {
  name: 'VORTEX Workshop',
  expansion: 'Versatile Open Representations and Token Exchange for Fluid Simulations',
  subtitle: 'Towards interoperable, physics-aware data representations for HPC-AI',
  date: '14 December 2026',
  fullDate: 'Monday, 14 December 2026',
  dateISO: '2026-12-14',
  venue: 'Maison de la Simulation',
}

export const links = {
  exaDI: 'https://numpex.org/exadi-development-and-integration/',
  numpex: 'https://numpex.org/',
  france2030: 'https://anr.fr/fr/france-2030/programmes-et-equipements-prioritaires-de-recherche-pepr/numerique-pour-lexascale-numpex/',
  scienceFace: 'https://scienceface.ai/',
  access: 'https://mdls.fr/how-to-come/',
  map: 'https://www.google.com/maps/search/?api=1&query=Maison+de+la+Simulation%2C+Digiteo%2C+CEA+Saclay',
}

export const contacts = [
  { name: 'Pascal Tremblin', email: 'pascal.tremblin@cea.fr' },
  { name: 'Mathieu Lobet', email: 'mathieu.lobet@cea.fr' },
]

export const topics = [
  {
    title: 'Data interoperability and standardization',
    description: 'Common representations for physical variables, geometries, structured and unstructured meshes, adaptive mesh refinement, boundary conditions, and physical metadata.',
  },
  {
    title: 'Physics-aware tokenization',
    description: 'Strategies for encoding multiscale, spatiotemporal fluid data into reusable representations while preserving physical structures, conservation properties, and relevant dynamics.',
  },
  {
    title: 'Multiphysics and multiple flow regimes',
    description: 'Representations for compressible, incompressible, turbulent, multiphase, and magnetohydrodynamic flows, across different levels of physical modeling and scale closure.',
  },
  {
    title: 'Scalable HPC–AI workflows',
    description: 'Integration with HPC simulation codes, in situ data processing, distributed training, scientific data formats, and AI foundation models.',
  },
  {
    title: 'Reliability and reproducibility',
    description: 'Quantifying representation and tokenization errors, assessing physical consistency, and tracking data provenance across datasets and AI workflows.',
  },
]

export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${path}`
}
