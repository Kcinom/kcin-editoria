# CONTEXTO DO PROJETO — KCIN Editoria

> Cole este arquivo no início de qualquer conversa nova com IA sobre o projeto KCIN.
> A IA não tem memória entre conversas — este arquivo é o que dá contexto a ela.
> Mantenha atualizado conforme o projeto evolui.

---

## QUEM

- **Pessoa**: programadora, escritora, capista e diagramadora. CLT em outra área (isto é bico/extra).
- **Pseudônimo público**: **Kcinom Nilpoj** (objetivo: privacidade. É o nick dela em jogos e no GitHub).
- **Nome real**: NÃO usar no site nem em material público. Só aparece em nota fiscal, se houver.
- **GitHub username**: Kcinom
- **Localização**: Sinop, Mato Grosso, Brasil.
- **Nível técnico**: lê e entende código, mas "mexer sozinha trava" — precisa que a IA escreva o código e ela integra/testa.

## O QUE É O KCIN

Selo editorial indie multigênero. Duas frentes:
1. **Autoral**: publica os livros da Kcinom (catálogo de ~20 obras)
2. **Atelier**: presta serviço de capa + diagramação pra outros autores indie

## STACK DO SITE

- **Astro 4** + CSS puro (sem framework CSS)
- Google Fonts: Cinzel, Cormorant, Italianno, Lora
- Deploy: **Vercel**
- Formulário: **Formspree** (precisa trocar YOUR_FORM_ID pelo ID real)
- Admin de conteúdo: **Decap CMS** (pasta /admin) — pra editar livros/capas/textos
- Versão atual do site: **v5**

## DECISÕES JÁ TOMADAS (não reabrir sem motivo)

- Identidade visual: preto-tinta + dourado champagne (#D4A574). Paleta canônica por gênero.
- Logo SVG real integrada (public/logo-kcin.svg), recolorida via filter CSS.
- Menu do site: Acervo · Atelier · Sobre · Contato
- Página /autoras foi REMOVIDA. Não promover as co-autoras (Jeskes) — elas pararam de escrever.
- Co-autoria: crédito mantido nos livros reais, mas no SITE todas as obras exibem só "Kcinom Nilpoj".
- Catálogo: 20 obras. NÃO incluir: Nysera (virou Love Greater Than All), Like a Dream MJS, The Criminal Mikaela MJS.
- Fanfics (Akiko, Fantastic War): aparecem no acervo, sem botão comprar, link pro Wattpad.
- MJS Entertainment: era clube informal de autoras, sem contrato. Só 2 livros publicados sob MJS (Memórias, Miraa). Não mencionar MJS no site.
- Atelier: tom SELETIVO, "sem pressa", "lista de espera". SEM contato direto com cliente: tudo pelo site + e-mail.
- Atelier tem ORÇAMENTO AUTOMÁTICO no site (faixa mín–máx calculada pela tabela, em src/pages/servicos.astro → const PRECOS). Valor final confirmado por e-mail na análise da ficha.
- Pagamento do Atelier: 50% de sinal por link de pagamento após aceitar o projeto + 50% por link antes da entrega dos arquivos finais.
- Preço NÃO aparece nos livros (quem clica vai pra Amazon).

## TABELA DE PREÇO (usada pelo orçamento automático do site)

Valores de partida (nível sênior começando a cobrar):
- Capa ebook: R$ 700–900
- Capa wrap: R$ 1.100–1.400
- Diagramação até 200 pág: R$ 800–1.000
- Diagramação 200–400 pág: R$ 1.000–1.400
- Diagramação 400+ pág: R$ 1.400–1.800
- Livro completo: soma com ~15% desconto
- Série editorial: preço × volumes, −25% progressivo
- Série no site: cada volume extra tem +5% de desconto, até no máximo 25%
- Modificadores: urgência +25% (no site); cliente exigente +20% (só interno, não aparece no site)

## ARQUITETURA DECIDIDA (caminho híbrido)

- **Acervo de livros** → Decap CMS (não quebra, sem manutenção)
- **Sistema de fichas do Atelier** → Supabase, projeto próprio **kcin-atelier** (ref qnlbwleegtscjmqzqmfp, São Paulo), separado do projeto do escritório
  - Tabela `public.atelier_fichas`: o site (anon) só pode INSERIR, e só os campos do cliente; ninguém de fora lê
  - Estimativa (estimativa_min/max) é recalculada pelo banco (gatilho + função `private.atelier_preco`), não confia no navegador
  - Admins em `public.atelier_admins` (user_id do Supabase Auth). Só admins leem/editam fichas
  - Painel em `/painel` (login com e-mail e senha): status, valor final, links de pagamento, sinal/final pagos, "cliente exigente +20%", notas e modelos de e-mail (aceite, recusa, pagamento final)
  - Formulário do site salva no Supabase e, se o Formspree estiver configurado, também avisa por e-mail
  - Chaves públicas em `src/lib/atelier-config.js` (nunca colocar a service_role/secret no site)

## FASES

- **FASE 1** (em andamento): site v5 no ar com Decap + ficha do Atelier com orçamento automático via Formspree. ← AQUI
- **FASE 2** (feita, falta testar no ar): sistema de fichas do Atelier em Supabase + painel /painel.
- **FASE 3** (futuro): fanservice — páginas de universos e personagens (estrutura já preparada no Decap).

## PENDÊNCIAS DA KCINOM (fora do código)

- [ ] Refazer as capas no Canva trocando o nome real por "Kcinom Nilpoj"
- [ ] Criar repo GitHub "Kcinom/kcin-editoria" e fazer deploy (passo a passo no README.md)
- [ ] Configurar Netlify Identity pro Decap (passo a passo no README.md)
- [ ] Trocar YOUR_FORM_ID pelo ID real do Formspree (em src/lib/atelier-config.js)
- [ ] Criar a conta de admin no Supabase (Authentication → Users → Add user) e liberar como admin
- [ ] Desligar cadastro público no Supabase (Authentication → Sign In / Providers → Allow new users to sign up)
- [ ] Comprar domínio kcineditoria.com.br no Registro.br (com proteção WHOIS)
- [ ] Avaliar abrir MEI se for cobrar pelos serviços do Atelier
- [ ] Conversar com as Jeskes sobre uso do nome nos créditos (recomendado)

## CATÁLOGO ATUAL (20 obras)

Sussurro do Dragão (5 vol) · Crônicas de Etéria (6 vol) · Florestas de Kagami (4 vol) ·
Ruraas · Miraa de no Hansha · Akiko [fanfic] · Reflex · Memórias que Trazem a Guerra ·
Fantastic War [fanfic] · Ilha do Nunca · Margaretty Aiken · Like a Dream · Last Love ·
A Princesa Jamais se Casará · O Príncipe Nunca Existiu · Giselle · Never Say Good Bye! · Amélia · Love Greater Than All · My Lord ·
Explicando o Amor para Idiotas · Eu não gosto dessa personagem!

---

_Última atualização: site v5 + Atelier com orçamento automático (nov/2026). Atualize este arquivo quando algo mudar._
