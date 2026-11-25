# 02 · Direção de arte — SOB MEDIDA

Conceito: **Sob Medida** · linguagem: *Editorial de Precisão*. Marcação: **[F]** fato observado · **[H]** hipótese · **[R]** decisão/recomendação.

## 1. Origem do conceito

- [F] A fotografia principal do Juliano (`hero-854.webp`) tem um objeto que nenhuma referência de nutrição tem: **um adipômetro** (paquímetro de dobras cutâneas) na mão dele, ao lado do bordado dourado "Nutricionista".
- [F] O método do site começa por medir: "Avaliação antropométrica completa — percentual de gordura e composição corporal" e "Avaliação de exames laboratoriais".
- [F] O argumento do site é "sem modelo pronto" / "não é apenas um cardápio".
- [R] Conceito: **nutrição esportiva não é dieta pronta; é medida individual.** Primeiro mede, depois decide. O adipômetro vira o símbolo e a **régua / linha de cota** (convenção de desenho técnico) vira a linguagem gráfica. O visitante entende "ciência e estratégia" sem que eu precise afirmar nada novo.
- [R] Isso afasta o projeto dos clichês do segmento (proteína, halteres, silhuetas, verde-saúde) e dos dois heros de referência (preto + vermelho; preto + amarelo).

## 2. Estudo das duas referências (Behance, abertas em 2026-11-25)

| | Ref. 01 · Página de Vendas Nutricionista (euluisdesign) | Ref. 02 · Landing Treinador e Nutricionista (euluisdesign) |
|---|---|---|
| [F] Hero | Fotografia em sangria, profissional à direita, texto à esquerda sobre a zona escura; luz âmbar do ambiente liga foto e marca | Profissional recortado à direita em fundo preto/vermelho; selos "+1000 / +25 anos" flutuando |
| [F] Tipografia | Grotesca de peso médio; frase de 2 cores (branco + dourado); rótulos em mono espaçado ("COMO FUNCIONA") | Grotesca em caixa mista; palavras-chave em vermelho; itálico em algumas |
| [F] Ritmo | Alterna painel escuro e claro; faixa em loop entre hero e conteúdo | Escuro contínuo; faixa vermelha em loop |
| [F] Serviços | 4 cartões fotográficos horizontais com numeração "G—01" | 3 cartões vermelhos com ícone |
| [F] Prova | Antes/depois de alunos | Antes/depois + campeonatos |
| [H] Ponto forte | A luz da fotografia já é a cor da marca: foto e identidade se fundem | Impacto imediato do hero |
| [H] Ponto fraco | Cartões arredondados repetidos; CTA amarelo vira "botão de template" | Excesso de vermelho, cartões e selos; leitura cansa |

**Princípios extraídos (nenhum layout copiado):**

1. **A cor da marca nasce da fotografia**, não de um catálogo. Aqui: o teal-grafite do fundo e o latão do bordado/adipômetro.
2. **Texto sobre a zona escura da foto**, profissional ocupando a altura toda do hero.
3. **Alternância escuro/claro marca capítulos** (ref. 01).
4. **Rótulo de seção em mono espaçado** como camada técnica sobre o título (ref. 01).
5. **Numeração como estrutura** da apresentação do método.
6. Evitado de propósito: cartões arredondados, selos flutuantes, frase bicolor, faixa em loop, antes/depois, ícones genéricos.

Referência isolada não vira regra; os cinco princípios acima só valem juntos com a evidência do projeto (foto + método do Juliano).

## 3. Paleta (derivada de pixels da fotografia)

Amostras de `hero-854.webp`: parede esquerda `#343837`, teto `#293435`, canto superior `#141c1b`, parede direita `#7d755d`, prateleira `#6e5e43`.

| Token | Valor | Uso | Evidência |
|---|---|---|---|
| `--ardosia` | `#0E1413` | fundo escuro principal | `#141c1b` da foto, 1 passo mais escuro para fundir o retrato |
| `--ardosia-2` | `#161E1D` | superfície no escuro | |
| `--ardosia-3` | `#212C2A` | linhas, ticks, hover no escuro | |
| `--papel` | `#EDE8DC` | fundo claro, texto no escuro | parede `#727169`/`#7d755d` clareada e aquecida (papel de prancheta clínica) |
| `--papel-2` | `#E1DBCB` | superfície no claro | |
| `--tinta` | `#111715` | texto no claro | |
| `--nevoa` | `#A8B0A8` | texto secundário no escuro | |
| `--nevoa-esc` | `#4E554F` | texto secundário no claro | |
| `--latao` | `#C9A45C` | **único acento**: CTA, cotas, marca ativa | bordado dourado e adipômetro da foto |
| `--latao-esc` | `#7A5A1E` | acento em texto sobre `--papel` | |

**Contrastes calculados (WCAG):** `papel/ardosia` 15,2:1 · `nevoa/ardosia` 8,4:1 · `latao/ardosia` 7,9:1 (CTA: texto `ardosia` sobre `latao` 7,9:1) · `tinta/papel` 14,8:1 · `nevoa-esc/papel` 6,3:1 · `latao-esc/papel` 5,2:1 · `latao-esc/papel-2` 4,6:1 (só ≥ 18,66 px bold ou ≥ 24 px). `linha` `#3A4745` sobre ardósia (1,9:1) é só decorativa, nunca texto. Proporção: ~62% ardósia · ~30% papel · latão só em CTA, cotas, marca ativa e no bloco de fechamento (CTA final).

Regra de uso: **uma cor saturada só (latão)**, nunca duas palavras de cor num título, sem gradiente colorido.

## 4. Tipografia

| Papel | Família | Por quê |
|---|---|---|
| Display | **Bricolage Grotesque** (variável: wght 200–800, wdth 75–100, opsz) | Grotesca com caráter, eixo de largura permite compor títulos largos ou condensados sem trocar de fonte. Distinta de Fraunces (site atual) e de Archivo (outro projeto do portfólio) |
| Texto | **Instrument Sans** (variável) | Muito legível, neutra, boa em 16–18 px, cobre acentos do português |
| Técnica | **DM Mono** 400/500 | Rótulos, numeração, cotas, CRN: a camada de "dado" |

Auto-hospedadas via `@fontsource` (licença OFL), sem requisição ao Google Fonts. Escala fluida (`clamp`): display 52→168 px; H2 36→88; H3 22→34; corpo 17–19; mono 12–13 com tracking 0,14em.

## 5. Linguagem gráfica — Régua e cota

- **Régua**: trilha de ticks (a cada 8 px, a cada 5º maior) usada como divisor de seção, como borda do retrato na hero e como trilha de progresso lateral. Só tick, **sem números inventados**.
- **Linha de cota** `|—— texto ——|`: marca dimensões como no desenho técnico. Usada onde existe um dado real: "60 a 90 min" (duração da consulta), "30 dias" (suporte), "15 dias" (retorno). Não é decorativa.
- **Índices 01–05** em mono; seções numeradas "§ 01 / 07".
- **Sem raio** nos blocos (0 px). Botão com 2 px. Bordas hairline de 1 px. Sombras: nenhuma.
- **Sem ícones** de biblioteca. O vocabulário é tipografia, linha e fotografia.

## 6. Fotografia

- Retrato em pé protagonista da hero, ancorado embaixo, borda esquerda dissolvida na ardósia por máscara; a régua vertical fica no limite do retrato.
- Foto da palestra (URCAMP) no Sobre, com grade de cor próxima da paleta (dessaturação leve, sombras frias). **Sem retoque do profissional.** Sem upscale.
- Faltam fotos (ver pendências): consultório, avaliação em andamento, detalhe do adipômetro. Onde elas entrariam não há imagem de banco: o layout se sustenta só com tipografia + as duas fotos reais.

## 7. Sistema de espaçamento, grid e tokens

- Base 4 px; escala `4 8 12 16 24 32 48 64 96 128 192`.
- Largura de conteúdo: `1280 px` (útil) com gutter `clamp(20px, 5vw, 80px)`; texto corrido em `60ch`.
- Grid de 12 colunas, gap 24 px (16 px no mobile).
- Breakpoints: 480, 768, 1024, 1280, 1440.
- Raios: `0`; botão `2px`. Bordas `1px`. Sombras: nenhuma.
- Transições: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`; durações `180ms` (micro), `600ms` (revelação), `1000ms` (hero).

## 8. Botões e interface

- **CTA primário**: bloco `--latao`, texto `--ardosia` em Instrument Sans 600 16 px (legibilidade), seta `→` em linha. Hover: fundo clareia 6%, seta avança 4 px. Foco: contorno 2 px `--papel` com offset 3 px.
- **CTA secundário** (formato): link sublinhado em mono com seta.
- **Formato presencial/online**: controle segmentado de dois botões 1:1 (cada um com a mensagem de WhatsApp original).
- **FAQ**: `<details>` nativo estilizado, sem ícone de biblioteca; marcador `+`/`−` tipográfico.
- Header: lockup tipográfico + 4 links + CTA; esconde ao rolar para baixo.

## 9. Animação

Princípio: **a página monta como um desenho técnico sendo cotado.**

| Momento | Movimento | Gatilho | Propriedades |
|---|---|---|---|
| Hero | retrato revela por `clip` de baixo para cima (900 ms), título sobe por máscara em 2 linhas (stagger 80 ms), régua desenha ticks de cima para baixo | carga | `transform`, `opacity`, `clip-path` |
| Linhas de cota | traço cresce de 0 a 100% | entra na viewport (1×) | `transform: scaleX` |
| Títulos de seção | sobem por máscara | entra na viewport (1×) | `transform` |
| Etapas do método | cada marca acende ao ser alcançada; linha de régua preenche com a rolagem | scroll | `transform`, `opacity` |
| Parallax do retrato | 4% de deslocamento | scroll | `transform` |
| Botões | seta +4 px, fundo +6% | hover/focus | `transform`, `background-color` |
| Trilha lateral | indica seção atual | scroll | `transform` |

`prefers-reduced-motion: reduce`: tudo começa no estado final, sem parallax, sem clip. Sem loops infinitos. Sem smooth-scroll por biblioteca.

## 10. Arquitetura da página (jornada comercial)

| # | Seção | Fundo | Conteúdo real usado | Gráfico |
|---|---|---|---|---|
| 0 | Header | ardósia | lockup, 4 links, CTA | — |
| 1 | **Hero** | ardósia | H1 original, apoio original, "ficha": +600 pacientes / Bagé/RS + online / 30 dias; CTA presencial e online | retrato + régua vertical |
| 2 | **Posicionamento** "Sem modelo pronto" | papel | "Não é apenas um cardápio. É organização alimentar aplicada à sua vida real." + "Plano individualizado… sem modelo pronto" + "baseado em ciência e prática" | frase gigante + cota |
| 3 | **Sobre Juliano** | ardósia | foto da palestra URCAMP; "Atualização constante, prática clínica e vivência com mais de 600 pacientes…"; CRN 19753 | foto + legenda |
| 4 | **Acompanhamento** (o que recebe + para quem + como começar) | papel | 5 itens "o que você recebe" em tabela editorial; 6 públicos em lista tipográfica; aviso IMPORTANTE; formato presencial/online + endereço | cotas "30 dias", "15 dias" |
| 5 | **Metodologia** | ardósia | 5 etapas da consulta; "60 a 90 minutos" | régua com 5 marcas |
| 6 | **Conexão** (avaliações) | papel | 6 avaliações do Google, texto integral, nome, "Ver no Google" | citação tipográfica |
| 7 | **FAQ** | ardósia | 7 perguntas originais | — |
| 8 | **CTA final** | latão sobre ardósia | "Sua melhor versão começa com uma decisão…" | cota gigante |
| 9 | Footer | papel | CRN, endereço, telefone, Instagram, Google, © | régua |

[R] Alternância escuro (1) → claro (2) → escuro (3) → claro (4) → escuro (5) → claro (6) → escuro (7–8) → claro (9).

## 11. Decisões documentadas

1. Reconstrução em projeto novo (sem código-fonte do site atual), mesma stack (Vite + React), TypeScript.
2. Sem biblioteca de animação: CSS + `IntersectionObserver` + um único `requestAnimationFrame` de scroll. Zero dependências de runtime além de React.
3. Logo JB azul não reaproveitado: lockup tipográfico próprio; decisão pendente do cliente.
4. Fotos de perfil das avaliações não reaproveitadas (terceiros).
5. Números "+600" e "30 dias" mantidos porque estão no site em produção; nenhum número novo foi criado.
6. Seção de blog (`/artigos`) fora do escopo; link mantido para a URL atual.

## 12. Ajustes feitos na validação visual (2026-11-25)

1. Tracking dos títulos 800 reduzido de −0,04/−0,045 em para −0,015/−0,018 em: com `opsz` automático (96) e `wdth` 80, o tracking negativo fazia "Juliano" colidir. Medido por captura, não por suposição.
2. Marca (glifo): a primeira versão `|—|` lia-se como "H". Trocada por régua (linha-base + marcas de 3 alturas).
3. Hero: título reduzido de 11,4 vw para 9,7 vw para que CTA e ficha caibam na primeira dobra em 1440×900.
4. Foto da palestra: o `tint` do sharp a deixou monocromática; removido. Grade final: saturação 0,6 e brilho 0,95.
5. Mobile (≤ 600 px): retrato com zoom de 1,34× para o rosto não ficar pequeno; o texto começa abaixo do queixo.
6. LCP: o parágrafo de apoio da hero aparecia por fade e virava o LCP (≈ 2,9 s). Passou a nascer visível; LCP local caiu para ≈ 1,3 s.
7. Trilha lateral: o `mix-blend-mode: difference` tingia de azul sobre o latão. Trocado por cor por tema de seção (`data-tema`).
8. Texto removido por não estar sustentado: "com resultados" do título do Sobre.

## 13. Ajustes feitos na auditoria (Lighthouse + axe, 2026-11-25)

1. `.mbar` (barra mobile) estava `aria-hidden` com link focável: trocado por `inert` quando escondida (axe `aria-hidden-focus`).
2. Palavra decorativa do rodapé reprovava contraste (1,29:1): passou a ser conteúdo CSS (`::before`) num `div aria-hidden`, fora da árvore de texto.
3. `aria-label` do logo não continha o texto visível (`label-content-name-mismatch`): removido; o nome vem do texto.
4. SEO: faltavam `robots.txt` e `sitemap.xml` no build novo (o site antigo tinha). Adicionados.
5. Build agora **pré-renderiza** o HTML (`react-dom/server` + `hydrateRoot`): todo o texto fica no HTML estático e o FCP caiu de ≈ 1,6 s para ≈ 0,9 s (simulado).
6. Revelação da foto da hero por zoom em vez de `clip-path`; a foto fica sempre pintada. `decoding="async"` e `will-change` removidos da imagem LCP.
7. Primeiro cálculo de scroll movido para `requestAnimationFrame` (menos reflow forçado no carregamento).

## 14. Crítica com Impeccable (2026-11-25): A (revisão) + B (detector) + craft floor

Carregados: `impeccable` (critique + craft-floor), `motion-art-direction`, `design:design-critique`. Dois sub-agentes isolados (A: revisão de design; B: detector). Aplicado:

1. **Eyebrows e rótulos `§ 01 — TÍTULO` removidos** (ban do craft floor: o título carrega o peso). Viraram `Mark`: trecho de régua sem texto. Numeração decorativa removida (cards, FAQ, "01 / 02"); só o método mantém 01–05, porque é sequência real.
2. **Ritmo de capítulos** corrigido: "Como iniciar" deixou de ser painel escuro dentro do papel. Agora papel (recebe) → ardósia (para quem) → papel (como iniciar) → ardósia (método) → papel (avaliações) → ardósia (FAQ) → latão.
3. **Seção Posicionamento:** os três itens eram título + texto repetido; viraram as três frases originais, alinhadas no topo. Rótulos derivados que eu havia inventado, removidos.
4. **Hero mobile:** o recorte agora mostra rosto e adipômetro (`object-position 50% 64%`, sem zoom); CTA continua na primeira dobra em 390×844. A barra fixa de WhatsApp aparece após 30% da altura da viewport.
5. **Glifos Unicode** (→, ↗) trocados por seta SVG desenhada (traço 1.75).
6. **Callout "Importante":** `border-left` de 3 px (banido) trocado por filete superior de 2 px.
7. **Mono só para medida/dado** (cotas, ficha, numerais do método). Rótulos de rodapé, legenda, papel do profissional e "Ver no Google" passaram para a fonte de texto.
8. **Motion:** revelações de corpo só com opacidade (600 ms); a subida por máscara fica nos títulos. Antes, tudo entrava com o mesmo movimento.
9. **Superfícies do navegador:** `scrollbar-color`, `accent-color`, `tabular-nums` em números.
10. **Detector:** `brand__sub` 10→11 px, `text-wrap: pretty` nos textos, `CRN 19753` com espaço não separável, tracking do aviso de valor removido. Falsos positivos (`cramped-padding`, `tight-leading` em display, `wide-tracking` em metadado) mantidos. `codex-grid-background` (advisory) é a régua, aceita como dispositivo de marca.
11. **Avaliações:** metadados "Local Guide" não renderizados; citação principal ocupa a coluna inteira.

Não feito (decisão do cliente ou fora do conceito): prova social acima da dobra seguinte; o adipômetro só existe na foto (ilustrá-lo seria inventar arte).

Resultado: e2e 57/57; axe 0 violações; Lighthouse A11y/BP/SEO 100; desempenho mobile 94, desktop 76 (simulado).

## 15. Segunda rodada (feedback do cliente: "seções genéricas, com cara de IA")

Diagnóstico: depois da hero, tudo era título + subtítulo + linhas separadas por filete: o esqueleto não dizia nada sem o texto, e a hero ainda usava o molde "número grande + rótulo". Mudança de estrutura, não de enfeite, usando só régua, cota e escala tipográfica:

1. **Hero:** selos de número removidos; os três fatos originais viram uma linha de texto.
2. **Posicionamento:** frase-cartaz; a palavra "cardápio" é medida por uma garra de paquímetro (cota) com a legenda "sem modelo pronto".
3. **O que você recebe:** vira desenho. O que acontece na consulta (3 itens) e uma régua de 30 dias com duas cotas reais: retorno em até 15 dias e suporte por 30 dias.
4. **Para quem é:** os cinco públicos em escala tipográfica de degraus (cada linha avança um passo, como leituras numa escala); hover esmaece as outras. O aviso médico fica em caixa de 1 px.
5. **Como iniciar:** "Presencial" e "Online" em escala de cartaz, separados por uma régua vertical.
6. **Sobre:** foto da palestra em sangria total à esquerda; os 4 fatos originais viram linhas com marca de régua.
7. **Avaliações:** mural. Uma citação em escala de cartaz e as demais em texto corrido, sem caixas.
8. Detector: só `codex-grid-background` (a régua, intencional). Cotas passaram a vir depois do título para não serem lidas como kicker.

Limite honesto: com só duas fotos reais, o peso visual vem de tipografia e régua. Fotos novas (consultório, avaliação em andamento, detalhe do adipômetro) elevariam as seções 3–5 mais do que qualquer ajuste de CSS.
