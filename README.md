# KCIN Editoria — Site

Site institucional + catálogo de obras de **Kcinom Nilpoj**.
Stack: Astro 4 + CSS puro + Decap CMS.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:4321`.

## Build pra produção

```bash
npm run build
npm run preview
```

---

# 🎯 Configurar Painel Admin (Decap CMS)

Aqui é onde você ganha autonomia: vai poder editar links Amazon, capas, sinopses 
e criar livros novos **sem mexer no código**. Tudo via interface visual.

## Passo a passo (40 minutos)

### 1. Criar repositório no GitHub

1. Vai no [github.com](https://github.com), loga com sua conta **Kcinom**
2. Clica no `+` no canto superior direito → **New repository**
3. Preenche:
   - **Repository name**: `kcin-editoria`
   - **Description**: `Site institucional KCIN Editoria`
   - **Public** ou **Private** (sua escolha — privado esconde o código)
   - **NÃO** marca "Add a README"
4. Clica **Create repository**

### 2. Subir o projeto pro GitHub

No terminal, dentro da pasta `kcin-site`:

```bash
git init
git add .
git commit -m "Site v3 KCIN Editoria"
git branch -M main
git remote add origin https://github.com/Kcinom/kcin-editoria.git
git push -u origin main
```

Se pedir login: usa seu user **Kcinom** + token de acesso (não senha — github tirou senha em 2021).

Pra criar token: github.com → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token. Marca permissões "repo". Copia o token e usa como senha.

### 3. Conectar ao Vercel (deploy automático e grátis)

1. Vai no [vercel.com](https://vercel.com), clica **Sign up** → **Continue with GitHub**
2. Autoriza Vercel ler seus repositórios
3. No dashboard → **Add New → Project**
4. Escolhe `kcin-editoria` da lista
5. Configurações:
   - **Framework Preset**: Astro (detecta automático)
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `dist` (padrão)
6. Clica **Deploy**

Em 1-2 minutos site tá no ar em `kcin-editoria-xxxx.vercel.app`.

### 4. Conectar domínio próprio (opcional)

Quando você comprar `kcineditoria.com.br` no Registro.br:

1. No Vercel: **Settings → Domains → Add**
2. Cola `kcineditoria.com.br`
3. Vercel mostra registros DNS (tipo A e CNAME) que você precisa configurar
4. Vai no Registro.br → seu domínio → DNS → adiciona os registros que o Vercel mostrou
5. Aguarda 1-24h pra propagar
6. Pronto: site no ar em `kcineditoria.com.br`

### 5. Configurar Decap CMS — Netlify Identity (autenticação)

⚠️ **Atenção**: Decap precisa de OAuth. Mais fácil é usar Netlify Identity 
mesmo que o site esteja hospedado no Vercel.

1. Cria conta grátis em [netlify.com](https://netlify.com) com seu GitHub Kcinom
2. **Add new site → Import an existing project → Deploy with GitHub**
3. Autoriza Netlify e escolhe `kcin-editoria`
4. **NÃO precisa deploy real** — só estamos usando Netlify pra OAuth
5. Depois de criar o site Netlify:
   - **Site Settings → Identity → Enable Identity**
   - **Identity → Registration preferences → Invite only** (só você acessa)
   - **Identity → Services → Git Gateway → Enable Git Gateway**

### 6. Convidar seu próprio usuário pro admin

1. No Netlify Identity → **Invite users**
2. Cola seu email (use o mesmo do GitHub Kcinom)
3. Vai chegar email com link de convite
4. Clica no link, define senha pro admin

### 7. Acessar o painel

Agora acessa `seu-site.vercel.app/admin` (ou `kcineditoria.com.br/admin` quando domínio estiver no ar).

1. Aparece tela de login Netlify Identity
2. Loga com email + senha que definiu
3. Painel KCIN abre com lista de livros, configurações, etc.

🎉 **Pronto. Você nunca mais precisa mexer em código.**

---

## 📚 Como usar o admin

### Adicionar livro novo

1. Painel admin → **📚 Livros** → **New Livro** (botão azul)
2. Preenche os campos:
   - **Título**: nome do livro
   - **Subtítulo**: opcional (Ex: "A Princesa")
   - **Slug**: URL amigável (Ex: `meu-livro-novo`)
   - **Capa**: arrasta o arquivo JPG/PNG
   - **Gênero**: escolhe do dropdown
   - **Série/Volume**: se for parte de saga
   - **Sinopse**: pode usar markdown (negrito, itálico, listas)
   - **Link Amazon**: cole quando publicar
   - **Status**: vigente, standalone, completa, descontinuada, em produção
3. **Publish** → em 30s o site atualiza sozinho

### Editar livro existente

1. **📚 Livros** → clica no livro
2. Muda o que quiser
3. **Publish**

### Adicionar link Amazon depois

1. **📚 Livros** → escolhe o livro
2. Campo **Link Amazon** → cola URL
3. **Publish**
4. Card no site agora vai direto pra Amazon

### Editar textos do site (Sobre, Home, Contato)

1. **⚙️ Configurações** → escolhe a seção
2. Edita
3. **Publish**

### Adicionar fanservice (futuro)

Quando quiser começar a montar páginas de universos/personagens:

1. **🌍 Universos** → New Universo → preenche
2. **👤 Personagens** → New Personagem → preenche

Eu deixei a estrutura preparada. As páginas do site que exibem isso ainda 
precisam ser construídas — quando você quiser, peço ajuda de novo.

---

## 🎨 Cores e identidade visual

Editáveis em `src/styles/global.css`:
- Dourado champagne: `#D4A574`
- Roxo profundo: `#4A2E5F` (romantasy)
- Verde-musgo: `#1E3A2F` (fantasy)
- Azul-tinta: `#1B2845` (sci-fi)
- Bronze: `#8B4513` (steampunk)
- Rosa-poeira: `#8B5A6B` (romance)
- Sépia: `#A0826D` (não-ficção)

---

## 📞 Suporte

Se algo quebrar, abre uma issue no GitHub ou me chama no WhatsApp.
