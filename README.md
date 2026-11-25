# Juliano Barcelos | Nutrição Esportiva — rebranding da landing page

Conceito: **Sob Medida** (Editorial de Precisão). Reconstrução completa de `https://nutrijuliano.vercel.app/`, em **Vite + React + TypeScript**, sem biblioteca de animação, sem framework novo.

> **Não publicado.** Nada foi enviado ao Vercel, o domínio original não foi tocado e não há deploy automático. O build final está em `dist/` e só vai ao ar por decisão explícita.

## Comandos

```powershell
npm install
npm run dev        # desenvolvimento em http://localhost:5173
npm run typecheck  # tsc -b
npm run build      # typecheck + vite build + prerender do HTML -> dist/
npm run preview    # serve o build em http://localhost:4173
npm run images     # regenera public/images a partir de docs/audit/assets-original
node scripts/e2e.mjs            # 57 testes de comportamento (precisa do preview rodando)
node scripts/audit.mjs          # Lighthouse (mobile e desktop) + axe-core
node scripts/lh-median.mjs http://localhost:4173/ 3   # mediana de 3 execuções do Lighthouse
node scripts/shots.mjs http://localhost:4173/ qa 1440,1280,1024,768,390,360   # capturas
```

Os scripts usam o Microsoft Edge instalado (`channel: 'msedge'`).

## Documentação

| Arquivo | Conteúdo |
|---|---|
| `docs/01-AUDITORIA.md` | stack do site atual, conteúdo preservado, assets, diagnóstico, divergências e pendências |
| `docs/02-DIRECAO-DE-ARTE.md` | conceito, estudo das referências, paleta com contrastes, tipografia, linguagem gráfica, motion, arquitetura |
| `docs/audit/conteudo-original.txt` | texto integral do site em produção (fonte de verdade do conteúdo) |
| `docs/audit/assets-original/` | imagens originais baixadas do site (só local, não versionado) |
| `docs/refs/` | capturas das duas referências do Behance, só para análise (só local, não versionado) |

## Estrutura

```
src/
  data/content.ts          todo o conteúdo factual (nada de texto solto nos componentes)
  styles/tokens.css        cor, tipografia, espaço, movimento
  styles/base.css          reset, temas de seção, botões, régua, cota, revelação
  styles/sections.css      header, hero, seções, footer, responsivo
  components/              Header, Footer, Consent, ui (Wa, Cota, Label)
  sections/                Hero, Posicionamento, Sobre, Acompanhamento, Metodo, Avaliacoes, Faq, CtaFinal
  hooks/useScrollEffects   um único listener de scroll (rAF) + revelação por IntersectionObserver
  lib/analytics.ts         consentimento + eventos (mesma chave de localStorage do site original)
scripts/                   imagens, capturas, e2e, assets de marca
```

## Mapeamento referência → projeto (princípios, nenhum layout copiado)

| Princípio das referências | Como aparece aqui |
|---|---|
| A cor da marca nasce da foto | paleta amostrada do retrato: ardósia (parede), papel (parede clareada), latão (bordado e adipômetro) |
| Profissional ocupa a altura da hero, texto na zona escura | retrato ancorado à direita, esquerda dissolvida por máscara; texto sobre a ardósia |
| Alternância escuro/claro marca capítulos | ardósia → papel → ardósia → papel → ardósia → papel → ardósia → latão |
| Rótulo de seção em mono espaçado | `§ 01 — POSICIONAMENTO` em DM Mono |
| Numeração como estrutura do método | régua com 5 marcas e índices 01–05 |
| **Evitado de propósito** | cartões arredondados, selos flutuantes, frase bicolor, faixa em loop, antes/depois, ícones genéricos |

## Interações

- Hero: retrato revela de baixo para cima, título sobe por máscara, régua desenha de cima para baixo.
- Linhas de cota crescem ao entrar na tela (uma vez). Títulos sobem por máscara (uma vez).
- Método: régua de 5 marcas preenchida pela rolagem; cada etapa acende ao ser alcançada. No mobile a régua é vertical.
- Parallax do retrato: 4,5% da rolagem, até 900 px.
- Header esconde ao rolar para baixo e volta ao rolar para cima; destaca a seção atual.
- Trilha lateral de posição (≥ 1360 px) muda de cor conforme o fundo da seção.
- Botões: seta avança 5 px no hover/foco. FAQ em `<details>` nativo (exclusivo).
- Barra fixa de WhatsApp no mobile, só depois da hero e some no CTA final.
- `prefers-reduced-motion: reduce`: tudo nasce no estado final, sem clip, sem parallax.

## Conversão

Todos os CTAs abrem `https://wa.me/555399002023` com as mensagens do site original (presencial, online). A mensagem neutra "Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta." é nova, derivada das duas.

## Resultado dos testes (2026-11-25)

- `tsc -b` sem erros; `vite build` + prerender ok. JS 252 kB (77,8 kB gzip), CSS 32 kB (7,1 kB gzip).
- E2E: 57/57 (conteúdo, h1 idêntico ao original, links `wa.me`, âncoras, imagens, FAQ, menu mobile, barra mobile, header, consentimento, reduced motion, overflow e console em 6 larguras, alvos de toque ≥ 40 px).
- Capturas revisadas em 1440, 1280, 1024, 768, 390 e 360 px: sem overflow horizontal.
- **Lighthouse (Edge, throttling simulado, build em localhost, execuções repetidas):** Acessibilidade 100, Boas práticas 100, SEO 100 nos dois perfis. **Desempenho varia muito entre execuções:** mobile 64–95 (mediana 86–95), desktop 48–79 (mediana 63–79). TBT 150–400 ms. O LCP "simulado" fica em ≈ 2,8 s; o **observado** (sem throttling) é ≈ 0,3 s desktop e ≈ 1,0 s mobile. CLS ≈ 0. Rodar de novo no site hospedado, com a máquina ociosa, antes de tratar o número como definitivo.
- **axe-core** (WCAG 2.0/2.1 A e AA + best-practice, 1440 e 390 px, FAQ aberto): 0 violações.
- Não rodou/aplicável: categoria "agentic-browsing" do Lighthouse (llms.txt etc., fora do escopo).
- **Não verificado:** Safari e Firefox, leitor de tela real, rede 4G real, Lighthouse contra o site já hospedado.

## Pendências

Ver `docs/01-AUDITORIA.md` §6. Resumo: fotos adicionais e retrato em maior resolução, texto de formação, autorização dos autores das avaliações, decisão sobre o logo antigo, política de privacidade (o banner do site original cita uma política, mas `/privacidade` e `/politica-de-privacidade` retornam 404 lá; não há página para linkar), página `/artigos`, IDs de analytics. O HTML é pré-renderizado no build.

## Fechamento

- `DESIGN.md` (raiz) e `.impeccable/design.json` documentam o sistema de design a partir do código. `docs/02` §14 registra a crítica do Impeccable (revisão + detector).
- Auditoria de motion: o MotionScore exige Motion+ (MCP `motion-plus` pede autenticação) e **não foi rodado**. No lugar, verificação manual: nenhuma animação infinita, nenhum `will-change`, um único easing (`cubic-bezier(0.22, 1, 0.36, 1)`), transições só de `opacity`, `transform`, `clip-path` e cor (a trilha lateral e o skip link, que animavam `width`/`top`, foram corrigidos), escrita de variáveis CSS depois das leituras de layout no handler de scroll.

## Publicação (pré-visualização no GitHub Pages)

Build de revisão, com `noindex` e `robots.txt` bloqueando buscadores. O domínio original não foi tocado.

```powershell
$env:BASE='/nutri-juliano/'; $env:VITE_ROBOTS='noindex,nofollow'; npm run build
```

O conteúdo de `dist/` vai para o branch `gh-pages`. Para a versão final (domínio próprio ou Vercel), buildar sem `BASE` e sem `VITE_ROBOTS`.
