# PRD — Letícia que Faz · Beauty Academy (Landing Page)

## Problem Statement (original)
Landing page de luxo focada em conversão, portfólio e agendamentos para a "Letícia que Faz - Beauty Academy" (Leiria, PT). Dark feminine agressivo/elegante (Fenty/NARS), Montserrat only, antracite + rosa + borgonha, SEM PREÇOS, CTAs para WhatsApp 915 668 325, mobile-first, foto 2 da profissional em destaque no Hero, foto 5 como logomarca, card rotativo "Olá, Maravilhosas! ❤️" no meio do site.

## Arquitetura
- Frontend-only: React 19 + Tailwind CSS + framer-motion + lenis (smooth scroll). Nenhum backend necessário.
- Assets das clientes servidos localmente em `/app/frontend/public/assets/` (logo_dark.png = logo invertido p/ fundo escuro, leticia.jpg, nails.jpg, browlamination.jpg, browdesign.jpg).
- WhatsApp: https://wa.me/351915668325 | Maps: link "Como chegar" (Google Maps query).

## User Personas
- Cliente final (mulher, 18-45) querendo agendar unhas/sobrancelhas/cílios em Leiria.
- A profissional Letícia (dona da marca) — precisa de presença premium sem tabela de preços.

## Core Requirements (static)
1. Hero com foto da profissional, headline "A MANIFESTAÇÃO DA SUA MELHOR VERSÃO.", métricas (+1.200 / 100% / 5.0), CTA WhatsApp.
2. Card animado "Olá, Maravilhosas! ❤️" no meio da página.
3. 4 cards de especialidades sem preços.
4. Galeria/portfólio com botão "Quero este resultado" + frase "A combinação perfeita entre você, a sua beleza e o seu momento."
5. Localização com botão "Como chegar".
6. Chamada final + rodapé minimalista.

## Implementado (2026-08-12)
- Hero com reveal cinético linha-a-linha (masked), foto emoldurada com cantos rosa + parallax sutil, métricas em grid técnico com bordas 1px.
- Navbar fixa com logo (versão branca recortada do upload) + CTA Agendar.
- 2 marquees editoriais lentos (outline e borgonha invertido).
- 4 cards de especialidades numerados (01–04) com hover de zoom e link WhatsApp.
- Card 3D rotativo "Olá, Maravilhosas!" com pausa frontal (rotateY keyframes).
- Galeria bento assimétrica com 5 itens (3 uploads + 2 stock) e CTA "Quero este resultado" em cada.
- Seção Localização (endereço completo + botão Como chegar → Google Maps).
- CTA final em borgonha com tipografia gigante de fundo + telefone 915 668 325.
- Rodapé minimalista com endereço, WhatsApp e copyright.
- Lenis smooth scroll, noise overlay matte, respeito a prefers-reduced-motion.
- Verificado: desktop 1920px e mobile 390px via screenshots; CTAs apontam para wa.me/351915668325.

## Atualizações (2026-08-12, iteração 2)
- Hero: foto substituída pelo novo retrato da Letícia (leticia_new.png) com moldura circular elegante (borda rosa + anel externo).
- Card 04 Lash Lifting: imagem substituída pela nova foto real (lashlift.jpg).
- Menu: removidos os itens "Portfólio"/"Galeria de Trabalhos" do header (restam Serviços e Localização); a seção de portfólio na página foi mantida.

## Atualizações (2026-08-12, iteração 3)
- Menu do header: apenas Início (#hero), Serviços (#servicos), Localização (#localizacao), com smooth scroll via Lenis.
- Seção Portfólio/Galeria REMOVIDA por completo (componente, dados e referências).
- Título do Hero alterado para "SUA BELEZA. SEU MOMENTO. A SUA MELHOR VERSÃO."
- Responsividade revalidada em 390px e 1920px (cards empilham, botões full-width no mobile).

## Atualizações (2026-08-12, iteração 4)
- Ícone oficial do WhatsApp (SVG) nos CTAs: botão principal do Hero, botão Agendar do header, CTA final e link de contacto do rodapé.
- Rodapé: ícone Instagram → https://www.instagram.com/leticiaquefaz/ (target _blank), empilhado sob o telefone.
- Sub-footer: crédito "Desenvolvido por Carlos Fernandes" em cinza suave (#A0A0A0/#777777) — nome é link clicável para https://wa.me/351910228253 (target _blank, rel noopener noreferrer).

## Atualizações (2026-08-12, iteração 5)
- Card promocional "Oferta de Boas-Vindas" no topo de Serviços: Design de Sobrancelhas por 10€, cantos rounded-3xl, fundo #1E1C1C com borda borgonha, badge vinho, preço em destaque e CTA com ícone WhatsApp → wa.me com mensagem pré-preenchida da promoção.

## Atualizações (2026-08-12, iteração 6)
- Badge "Oferta de Boas-Vindas": ícone de presente (lucide Gift) ao lado da frase, centralizado, piscando a cada 2s (animação CSS promo-blink, respeita prefers-reduced-motion).

## Atualizações (2026-08-12, iteração 7)
- Badge "Oferta de Boas-Vindas" voltou alinhado à esquerda (ícone de presente + piscar mantidos).
- Contagem regressiva discreta no card da promoção: "Válido até fim do mês — termina em Xd Xh Xm Xs" (ao vivo, até o último dia do mês corrente).
- Link "Como chegar" alterado para https://share.google/EGThnXxKSbpRpWB4s
- Foto principal da Letícia agora 100% estática: removidos paralaxe, animação de entrada e zoom (sem qualquer reação a scroll ou hover).

## Atualizações (2026-08-12, iteração 8 — repaginação da paleta)
- Nova paleta Palette 13: fundo escuro #0F0E17, cards #161521, texto lavanda #A7A9BE, CTA laranja #FF8906 (texto grafite), accent rosa #E53170, coral #F25F4C (tags dos cards), dourado #FFC700 (badge).
- Ritmo claro/escuro: Serviços e Localização com fundo claro (#F8F9FA/#FFFFFF) e cards escuros; marquee invertido agora laranja.
- Card de Oferta em degradê from-[#FF8906] to-[#E53170], badge dourado, CTA preto grafite com hover:scale-105. Estrutura, textos, imagens e links inalterados.
- Bugfix mobile: removido min-h-screen do wrapper raiz, html/body com height:auto, padding inferior do rodapé reduzido (pb-8 mobile) — página termina exatamente no copyright (gap medido = 0px).
- Bugfix mobile 2: padding-top do Hero ampliado (pt-28/md:pt-32) para livrar o título do header fixo; html/body com overflow-x hidden + max-width 100% (sem scroll horizontal); título do Hero em text-3xl no mobile.
- Bugfix mobile 3: texto de fundo "AGENDE AGORA" reduzido (text-4xl/sm:6xl/md:8xl), centralizado e contido (max-w-full, overflow-hidden, nowrap); main com overflow-x-hidden; rodapé mobile com pb-6; card "Olá, Maravilhosas!" agora gira a cada 3s (pausa 3s entre giros).

## Atualizações (2026-08-12, iteração 9)
- Menu hambúrguer mobile no header: abre painel com Início, Serviços e Localização (smooth scroll via Lenis, fecha ao tocar), ícone vira X ao abrir; desktop mantém links inline.

## Atualizações (2026-08-13, iteração 10 — performance Lighthouse)
- Imagens convertidas para WebP otimizado: leticia_new (920px, 60KB), lashlift (73KB), browdesign (81KB), nails (15KB), browlamination (21KB) — total ~250KB (antes ~2,4MB+).
- Hero (LCP): fetchpriority="high", decoding="async", width/height explícitos + <link rel="preload"> no index.html; demais imagens (cards, logo rodapé) com loading="lazy".
- Fontes: @import removido do CSS; Google Fonts agora via <link> com preconnect (fonts.googleapis/gstatic) e display=swap. Nenhum script bloqueante no <head>.
- Contraste WCAG AA: rótulos fracos reforçados (ivory/40-50 → /60-70), crédito #777 → #A0A0A0, copyright /40 → /60.
- Arquivos: index.html, index.css, data.js, Hero.jsx, Specialties.jsx, Location.jsx, Footer.jsx, public/assets/*.webp.
- Banner de cookies RGPD em HTML/CSS/JS nativo no index.html: barra inferior discreta (#161521), botões "Aceitar" (laranja) e "Apenas essenciais", preferência em localStorage (chave lqf-cookie-consent), script não bloqueante no fim do body.

## Backlog priorizado
- P0: nenhum bloqueante.
- P1: Instagram link/feed real no rodapé; mais fotos reais do portfólio da Letícia; mensagem pré-preenchida por serviço no wa.me (?text=).
- P2: SEO/OG tags com foto da profissional; FAQ; depoimentos de clientes; versão EN.

## Próximas tarefas
1. Adicionar mensagens pré-preenchidas de WhatsApp por serviço.
2. Colocar link do Instagram oficial.
3. Substituir fotos stock por trabalhos reais adicionais quando enviados.
