export interface CiudadData {
  slug:       string
  label:      string
  provincia:  string
  gentilicio: string // plural neutro: "profesionales de Madrid"
}

export const CIUDADES: CiudadData[] = [
  { slug: 'madrid',     label: 'Madrid',     provincia: 'Madrid',          gentilicio: 'Madrid' },
  { slug: 'barcelona',  label: 'Barcelona',  provincia: 'Barcelona',       gentilicio: 'Barcelona' },
  { slug: 'valencia',   label: 'Valencia',   provincia: 'Valencia',        gentilicio: 'Valencia' },
  { slug: 'sevilla',    label: 'Sevilla',    provincia: 'Sevilla',         gentilicio: 'Sevilla' },
  { slug: 'zaragoza',   label: 'Zaragoza',   provincia: 'Zaragoza',        gentilicio: 'Zaragoza' },
  { slug: 'malaga',     label: 'Málaga',     provincia: 'Málaga',          gentilicio: 'Málaga' },
  { slug: 'murcia',     label: 'Murcia',     provincia: 'Murcia',          gentilicio: 'Murcia' },
  { slug: 'palma',      label: 'Palma',      provincia: 'Illes Balears',   gentilicio: 'Palma' },
  { slug: 'bilbao',     label: 'Bilbao',     provincia: 'Vizcaya',         gentilicio: 'Bilbao' },
  { slug: 'alicante',   label: 'Alicante',   provincia: 'Alicante',        gentilicio: 'Alicante' },
  { slug: 'valladolid', label: 'Valladolid', provincia: 'Valladolid',      gentilicio: 'Valladolid' },
  { slug: 'granada',    label: 'Granada',    provincia: 'Granada',         gentilicio: 'Granada' },
]

export const CIUDAD_MAP = Object.fromEntries(CIUDADES.map(c => [c.slug, c]))
export const CIUDAD_SLUGS = CIUDADES.map(c => c.slug)
