// Atualiza as fileiras na hora com os livros do painel (sem precisar publicar o site de novo).
import { SUPABASE_URL, SUPABASE_KEY } from '../lib/atelier-config.js';

const GEN: Record<string, string> = {
  romantasy: 'Dark Romantasy', 'fantasy-eastern': 'Fantasia Oriental', scifi: 'Ficção Científica',
  steampunk: 'Steampunk', romance: 'Romance', nonfiction: 'Não-ficção', fanfic: 'Fanfics',
};
const svg = (d: string, s = 18) => `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  read: svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', 14),
  pen: svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>', 13),
  left: svg('<path d="m15 6-6 6 6 6"/>'),
  right: svg('<path d="m9 6 6 6-6 6"/>'),
};
const esc = (v: unknown) => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export type L = {
  title: string; subtitle?: string; cover: string; slug: string; genre: string; series?: string; volume?: number;
  wattpadLink?: string; amazonLink?: string; synopsis?: string; status?: string; leituras?: number; lancadoEm?: string;
};
const doBanco = (r: any): L => ({
  title: r.title, subtitle: r.subtitle ?? undefined, cover: r.cover, slug: r.slug, genre: r.genre,
  series: r.series ?? undefined, volume: r.volume ?? undefined, wattpadLink: r.wattpad_link ?? undefined,
  amazonLink: r.amazon_link ?? undefined, synopsis: r.synopsis ?? undefined,
  status: r.status === 'revisao' ? 'revisao' : 'publicado', leituras: r.leituras ?? 0, lancadoEm: r.lancado_em ?? undefined,
});
export const assinatura = (ls: L[]) => JSON.stringify(ls.map(l => [l.slug, l.title, l.subtitle, l.cover, l.genre, l.series, l.volume,
  l.wattpadLink, l.amazonLink, l.synopsis, l.status ?? 'publicado', l.leituras ?? 0, l.lancadoEm]));

const ordemW = (l: L) => Number(l.wattpadLink?.match(/story\/(\d+)/)?.[1] ?? 0);
const dataL = (l: L) => (l.lancadoEm ? Date.parse(l.lancadoEm) : 0);
const paraLer = (ls: L[]) => ls.filter(l => l.wattpadLink && l.status !== 'revisao');

export function fileiras(ls: L[]) {
  const out: { title: string; books: L[]; big?: boolean }[] = [];
  out.push({ title: 'Novos para ler', big: true, books: [...paraLer(ls)].sort((a, b) => (dataL(b) - dataL(a)) || (ordemW(b) - ordemW(a))) });
  out.push({ title: 'Mais lidos', big: true, books: [...paraLer(ls)].sort((a, b) => (b.leituras ?? 0) - (a.leituras ?? 0)) });
  out.push({ title: 'Em breve · em revisão', books: ls.filter(l => l.status === 'revisao') });
  const series = [...new Set(ls.filter(l => l.series).map(l => l.series!))];
  for (const s of series) out.push({ title: s, books: ls.filter(l => l.series === s).sort((x, y) => (x.volume ?? 0) - (y.volume ?? 0)) });
  for (const [id, label] of Object.entries(GEN)) {
    const b = ls.filter(l => !l.series && l.genre === id);
    if (b.length) out.push({ title: label, books: b });
  }
  return out.filter(r => r.books.length);
}
export function destaque(ls: L[]) {
  const novos = fileiras(ls)[0].books;
  const novo = novos[0];
  if (novo?.series && (novo.volume ?? 1) > 1) {
    const v1 = paraLer(ls).find(l => l.series === novo.series && l.volume === 1);
    if (v1) return v1;
  }
  return novo ?? ls[0];
}

export function poster(l: L) {
  const nome = (l.subtitle ? `${l.title} – ${l.subtitle}` : l.title) + (l.status === 'revisao' ? ' (em revisão)' : '');
  return `<button class="poster" type="button" data-slug="${esc(l.slug)}" data-title="${esc(`${l.title} ${l.subtitle ?? ''} ${l.series ?? ''}`.toLowerCase())}" data-genre="${esc(l.genre)}" title="${esc(nome)}" aria-label="${esc(nome)}">`
    + `<img src="${esc(l.cover)}" alt="" loading="lazy" decoding="async" />`
    + (l.volume ? `<span class="poster-vol" aria-hidden="true">${l.volume}</span>` : '')
    + (l.status === 'revisao' ? `<span class="poster-status" aria-hidden="true" title="Em revisão">${I.pen}</span>` : '')
    + (l.wattpadLink && l.status !== 'revisao' ? `<span class="poster-read" aria-hidden="true">${I.read}</span>` : '')
    + `</button>`;
}
export function fileira(r: { title: string; books: L[]; big?: boolean }) {
  return `<section class="row${r.big ? ' row-big' : ''}" aria-label="${esc(r.title)}"><div class="row-head"><h2 class="row-title">${esc(r.title)}</h2>`
    + `<div class="row-arrows"><button type="button" class="row-arrow" data-dir="-1" aria-label="Voltar">${I.left}</button><button type="button" class="row-arrow" data-dir="1" aria-label="Avançar">${I.right}</button></div></div>`
    + `<div class="row-track">${r.books.map(poster).join('')}</div></section>`;
}

/** Busca os livros do painel; se mudaram desde a publicação, redesenha a página */
export async function atualizar(aplicar: (ls: L[]) => void) {
  try {
    const embutido: L[] = JSON.parse(document.getElementById('livros-data')?.textContent || '[]');
    const r = await fetch(`${SUPABASE_URL}/rest/v1/livros?select=*&status=neq.oculto&order=ordem.asc`, { headers: { apikey: SUPABASE_KEY }, cache: 'no-store' });
    if (!r.ok) return;
    const ls: L[] = (await r.json()).map(doBanco);
    if (!ls.length || assinatura(ls) === assinatura(embutido)) return;
    (window as any).kcinSetLivros?.(ls.map(l => ({ ...l, genreLabel: GEN[l.genre] ?? '' })));
    aplicar(ls);
  } catch { /* sem internet: fica com o que já está na página */ }
}
