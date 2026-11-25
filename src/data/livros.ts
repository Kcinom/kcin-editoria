// Acervo KCIN — fonte única dos livros (usada no Acervo e no Início)
// No site, exibimos apenas "Kcinom Nilpoj" (pseudônimo) pra todas as obras.
// Para adicionar sinopse a um livro: inclua  synopsis: 'texto...'
export interface Livro {
  title: string; subtitle?: string; cover: string; slug: string; genre: string;
  series?: string; volume?: number; authors: string[];
  isWattpad?: boolean; wattpadLink?: string; amazonLink?: string; synopsis?: string;
  /** história ainda em rascunho no Wattpad (link não abre pro público) */
  rascunho?: boolean;
}

export const livros: Livro[] = [
  // ===== Sussurro do Dragão (5 vol) =====
  { title: 'O Sussurro do Dragão', cover: '/capas/sussurro-i.jpg', slug: 'sussurro-do-dragao-i', rascunho: true, genre: 'romantasy', series: 'Sussurro do Dragão', volume: 1, authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/403318755-a-princesa-e-o-drag%C3%A3o' },
  { title: 'O Silêncio do Dragão', cover: '/capas/sussurro-ii.jpg', slug: 'sussurro-do-dragao-ii', genre: 'romantasy', series: 'Sussurro do Dragão', volume: 2, authors: ['Kcinom Nilpoj'] },
  { title: 'A Fúria do Dragão', cover: '/capas/sussurro-iii.jpg', slug: 'sussurro-do-dragao-iii', genre: 'romantasy', series: 'Sussurro do Dragão', volume: 3, authors: ['Kcinom Nilpoj'] },
  { title: 'O Rugido do Dragão', cover: '/capas/sussurro-iv.jpg', slug: 'sussurro-do-dragao-iv', genre: 'romantasy', series: 'Sussurro do Dragão', volume: 4, authors: ['Kcinom Nilpoj'] },
  { title: 'O Trono do Dragão', cover: '/capas/sussurro-v.jpg', slug: 'sussurro-do-dragao-v', genre: 'romantasy', series: 'Sussurro do Dragão', volume: 5, authors: ['Kcinom Nilpoj'] },
  
  // ===== Crônicas de Etéria (6 vol) =====
  { title: 'Mikaela', subtitle: 'A Princesa', cover: '/capas/mikaela-1.jpg', slug: 'mikaela-princesa', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 1, authors: ['Kcinom Nilpoj'] },
  { title: 'Mikaela', subtitle: 'A Criminosa', cover: '/capas/mikaela-2.jpg', slug: 'mikaela-criminosa', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 2, authors: ['Kcinom Nilpoj'] },
  { title: 'Mathews', subtitle: 'O Explorador', cover: '/capas/mathews-1.jpg', slug: 'mathews-explorador', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 3, authors: ['Kcinom Nilpoj'] },
  { title: 'Mathews', subtitle: 'O Fugitivo', cover: '/capas/mathews-2.jpg', slug: 'mathews-fugitivo', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 4, authors: ['Kcinom Nilpoj'] },
  { title: 'David', subtitle: 'O Sacrifício', cover: '/capas/david-1.jpg', slug: 'david-sacrificio', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 5, authors: ['Kcinom Nilpoj'] },
  { title: 'David', subtitle: 'O Governante', cover: '/capas/david-2.jpg', slug: 'david-governante', genre: 'romantasy', series: 'Crônicas de Etéria', volume: 6, authors: ['Kcinom Nilpoj'] },
  
  // ===== Universo Miraa (Miraa de no Hansha 1-5, Ruraas, Florestas de Kagami 1-4) =====
  { title: 'Miraa de no Hansha', subtitle: 'A Decisão de Amar', cover: '/capas/miraa.jpg', slug: 'miraa-1', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 1, authors: ['Kcinom Nilpoj'] },
  { title: 'Ruraas', subtitle: 'A Origem', cover: '/capas/ruraa.jpg', slug: 'ruraas', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 6, authors: ['Kcinom Nilpoj'] },
  { title: 'Florestas de Kagami', subtitle: 'Sussurrante', cover: '/capas/kagami-1.jpg', slug: 'kagami-i', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 7, authors: ['Kcinom Nilpoj'] },
  { title: 'Florestas de Kagami', subtitle: 'Silêncio da Morte', cover: '/capas/kagami-2.jpg', slug: 'kagami-ii', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 8, authors: ['Kcinom Nilpoj'] },
  { title: 'Florestas de Kagami', subtitle: 'Árvores Dançantes', cover: '/capas/kagami-3.jpg', slug: 'kagami-iii', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 9, authors: ['Kcinom Nilpoj'] },
  { title: 'Florestas de Kagami', subtitle: 'Floresta Negra', cover: '/capas/kagami-4.jpg', slug: 'kagami-iv', genre: 'fantasy-eastern', series: 'Universo Miraa', volume: 10, authors: ['Kcinom Nilpoj'] },
  
  // ===== Fanfics =====
  { title: 'Akiko', subtitle: 'A Bijuu Esquecida', cover: '/capas/akiko.jpg', slug: 'akiko', genre: 'fanfic', authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/296533758-akiko-a-bijuu-esquecida' },
  
  // ===== Sci-fi =====
  { title: 'Reflex', cover: '/capas/reflex.jpg', slug: 'reflex', genre: 'scifi', authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/287421520-reflex-o-destino' },
  { title: 'Memórias que Trazem a Guerra', cover: '/capas/memorias.jpg', slug: 'memorias', genre: 'scifi', authors: ['Kcinom Nilpoj'] },
  { title: 'Fantastic War', cover: '/capas/fantastic-war.jpg', slug: 'fantastic-war', genre: 'fanfic', authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/297075593-the-fantastic-war' },
  
  // ===== Steampunk =====
  { title: 'Ilha do Nunca', subtitle: 'Código Cronos', cover: '/capas/ilha-do-nunca.jpg', slug: 'ilha-do-nunca', genre: 'steampunk', authors: ['Kcinom Nilpoj'] },
  { title: 'Margaretty Aiken', subtitle: 'Estagnados no tempo', cover: '/capas/margaretty.jpg', slug: 'margaretty-aiken', genre: 'steampunk', authors: ['Kcinom Nilpoj'] },
  
  // ===== Romance =====
  { title: 'Like a Dream', cover: '/capas/like-a-dream.jpg', slug: 'like-a-dream', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'Last Love', cover: '/capas/last-love.jpg', slug: 'last-love', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'A Princesa Jamais se Casará', cover: '/capas/princess.jpg', slug: 'a-princesa-jamais-se-casara', genre: 'romance', series: 'A Princesa Jamais se Casará', volume: 1, authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/413181310-a-princesa-jamais-se-casar%C3%A1' },
  { title: 'O Príncipe Nunca Existiu', cover: '/capas/principe.jpg', slug: 'o-principe-nunca-existiu', genre: 'romance', series: 'A Princesa Jamais se Casará', volume: 2, authors: ['Kcinom Nilpoj'], isWattpad: true, wattpadLink: 'https://www.wattpad.com/story/413184837-o-principe-nunca-existiu' },
  { title: 'Giselle', subtitle: 'Entre amor e sangue', cover: '/capas/giselle.jpg', slug: 'giselle', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'Never Say Good Bye!', cover: '/capas/never-say-goodbye.jpg', slug: 'never-say-good-bye', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'Amélia', cover: '/capas/amelia.jpg', slug: 'amelia', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'Love Greater Than All', cover: '/capas/love-greater.jpg', slug: 'love-greater-than-all', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  { title: 'My Lord', cover: '/capas/my-lord.jpg', slug: 'my-lord', genre: 'romance', authors: ['Kcinom Nilpoj'] },
  
  // ===== Não-ficção =====
  { title: 'Explicando o Amor para Idiotas', cover: '/capas/explicando-amor.jpg', slug: 'explicando-o-amor', genre: 'nonfiction', authors: ['Kcinom Nilpoj'] },
  { title: 'Eu não gosto dessa personagem!', subtitle: 'Minhas experiências na escrita de fantasia', cover: '/capas/personagem.jpg', slug: 'eu-nao-gosto-dessa-personagem', genre: 'nonfiction', authors: ['Kcinom Nilpoj'] },
];

export const generos: Record<string, string> = {
  romantasy: 'Dark Romantasy',
  'fantasy-eastern': 'Fantasia Oriental',
  scifi: 'Ficção Científica',
  steampunk: 'Steampunk',
  romance: 'Romance',
  nonfiction: 'Não-ficção',
  fanfic: 'Fanfics',
};

/** Fileiras: primeiro as séries, depois os livros soltos por gênero */
export function fileiras() {
  const out: { title: string; books: Livro[] }[] = [];
  const series = [...new Set(livros.filter(l => l.series).map(l => l.series as string))];
  for (const s of series) {
    out.push({ title: s, books: livros.filter(l => l.series === s).sort((x, y) => (x.volume ?? 0) - (y.volume ?? 0)) });
  }
  for (const [id, label] of Object.entries(generos)) {
    const books = livros.filter(l => !l.series && l.genre === id);
    if (books.length) out.push({ title: label, books });
  }
  return out;
}

/**
 * Leituras no Wattpad (atualize de vez em quando copiando do perfil).
 * Última atualização: 23/11/2026.
 */
export const leituras: Record<string, number> = {
  'fantastic-war': 470,
  'akiko': 74,
  'a-princesa-jamais-se-casara': 72,
  'reflex': 32,
  'o-principe-nunca-existiu': 11,
};

/** Número da história no Wattpad: quanto maior, mais recente. */
const ordemWattpad = (l: Livro) => Number(l.wattpadLink?.match(/story\/(\d+)/)?.[1] ?? 0);

/** Livros que dá pra ler agora (link público) */
export const paraLer = () => livros.filter(l => l.wattpadLink && !l.rascunho);
/** Do mais recente pro mais antigo */
export const lancamentos = () => [...paraLer()].sort((a, b) => ordemWattpad(b) - ordemWattpad(a));
/** Do mais lido pro menos lido */
export const maisLidos = () => [...paraLer()].sort((a, b) => (leituras[b.slug] ?? 0) - (leituras[a.slug] ?? 0));
/** Destaque: o lançamento mais recente (se for vol. 2+, mostra o vol. 1 da série) */
export function destaque() {
  const novo = lancamentos()[0];
  if (novo?.series && (novo.volume ?? 1) > 1) {
    const v1 = paraLer().find(l => l.series === novo.series && l.volume === 1);
    if (v1) return v1;
  }
  return novo ?? livros[0];
}
