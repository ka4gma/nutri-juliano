---
name: Juliano Barcelos, Nutricao (Sob Medida)
description: Editorial de Precisao. Linguagem de regua e linha de cota sobre ardosia e papel, um unico acento latao.
colors:
  ardosia: "#0e1413"
  ardosia-2: "#161e1d"
  ardosia-3: "#212c2a"
  linha-esc: "#3a4745"
  papel: "#ede8dc"
  tinta: "#111715"
  nevoa: "#a8b0a8"
  nevoa-esc: "#4e554f"
  latao: "#c9a45c"
  latao-hover: "#d8b673"
  latao-esc: "#7a5a1e"
  cta-muted: "#2b2412"
  linha-claro: "rgba(17, 23, 21, 0.22)"
typography:
  hero:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.9rem, 9.7vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.018em"
  hero-light:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.7vw, 2.6rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.15rem, 4.9vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.014em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Instrument Sans Variable, Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Instrument Sans Variable, Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.1
  measure:
    fontFamily: "DM Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  btn: "2px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-6: "24px"
  s-8: "32px"
  s-12: "48px"
  s-16: "64px"
  s-24: "96px"
  s-32: "128px"
  gutter: "clamp(20px, 5vw, 80px)"
  section-y: "clamp(80px, 11vw, 168px)"
  max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.latao}"
    textColor: "{colors.ardosia}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "1.1rem 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.latao-hover}"
  button-dark:
    backgroundColor: "{colors.ardosia}"
    textColor: "{colors.papel}"
    rounded: "{rounded.btn}"
  button-dark-hover:
    backgroundColor: "{colors.ardosia-3}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "inherit"
    rounded: "{rounded.btn}"
  button-sm:
    padding: "0.75rem 1.1rem"
    height: "44px"
  button-lg:
    padding: "1.4rem 2.2rem"
  cota:
    textColor: "{colors.latao}"
    typography: "{typography.measure}"
  section-dark:
    backgroundColor: "{colors.ardosia}"
    textColor: "{colors.papel}"
  section-paper:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
  section-cta:
    backgroundColor: "{colors.latao}"
    textColor: "{colors.ardosia}"
---

# Design System: Juliano Barcelos, Nutricao

## Overview

**Creative North Star: "Sob Medida"** (Editorial de Precisao)

O sistema vem do retrato do cliente com o adipometro: a ferramenta de medir vira a linguagem visual. Regua (marcas de 8px e 40px) e linha de cota (traco com tampas e rotulo mono) medem o conteudo, nunca enfeitam. Superficies sao ardosia verde-escura e papel quente alternados; um unico acento, o latao, aparece como metal de instrumento.

Tipografia e a voz principal: display condensado e pesado (Bricolage Grotesque, eixo de largura 78-92%) contra pesos finos (300) na mesma familia, em escala exagerada. Densidade editorial: secoes largas (80-168px de respiro vertical), colunas de 12, filetes de 1px no lugar de caixas. Sem sombras, sem cantos arredondados grandes, sem cartoes.

**Key Characteristics:**
- Dois temas de secao alternados (escuro e papel), fechando em faixa latao.
- Filete de 1px e a unica divisoria; hierarquia vem de escala e peso, nao de containers.
- Movimento so revela: mascara de linha, fade, linha de cota que se desenha. Tudo com `prefers-reduced-motion` desligado.
- Mono (DM Mono) reservada a medida: cota, numeracao, chaves da ficha.

## Colors

Paleta de ardosia e papel com um metal. Valores do retrato; latao e o unico acento.

### Primary
- **Latao** (`latao`): fundo do botao primario, a faixa CTA final, filetes ativos, marca da regua em fundo escuro, numeracao do metodo, rotulos de cota em escuro.
- **Latao Escuro** (`latao-esc`): o mesmo acento quando e texto ou regua sobre papel (5,2:1). Chega via `--accent` do tema `sec--paper`.

### Neutral
- **Ardosia / Ardosia 2 / Ardosia 3** (`ardosia`, `ardosia-2`, `ardosia-3`): fundo base, fundo do banner de consentimento e da imagem, hover e filetes sutis em escuro.
- **Papel** (`papel`): fundo de secoes claras e texto sobre escuro.
- **Tinta** (`tinta`): texto sobre papel.
- **Nevoa** (`nevoa`): texto secundario no escuro (8,4:1). **Nevoa Escura** (`nevoa-esc`): secundario no papel (6,3:1).
- **Linha Escura** (`linha-esc`): filetes e marcas de regua em escuro. Decorativa, nunca texto.
- **Linha Clara** (`linha-claro`): filete em papel, via `--line`.

### Named Rules
**The One Brass Rule.** Latao e o unico acento. Sobre papel ele vira `latao-esc` para texto e filete; latao puro sobre papel so como fundo cheio (botao, faixa).
**The Theme Variable Rule.** Cor de texto secundario, filete e acento vem de `--muted`, `--line`, `--rule`, `--accent`, `--focus`, definidas por `sec--dark`, `sec--paper` e `.cta`. Componentes leem as variaveis, nao hexes.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback Helvetica Neue, Arial)
**Body Font:** Instrument Sans Variable (fallback Helvetica Neue, Arial)
**Label/Mono Font:** DM Mono, somente medida

**Character:** Grotesca de largura variavel espremida (`font-stretch` 78-92%) para titulos que parecem escala impressa; sans neutra para leitura; mono apenas para o que e dimensao.

### Hierarchy
- **Hero** (800, `clamp(3.9rem, 9.7vw, 9.5rem)`, 0.86, stretch 80%): duas linhas do hero. Segunda camada `hero-light` em 300, stretch 100%.
- **Display de secao** (800, stretch 80-85%, ate 7.4-9rem, linha 0.9-0.92): Sobre, Posicionamento, CTA final, formatos. Pareia com linha em peso 300 (`pos__b`, `sobre__lead`, `cta__h2`, `aval__q`).
- **H2** (700, stretch 88%, `clamp(2.15rem, 4.9vw, 4.7rem)`, 1): titulo padrao de secao, `text-wrap: balance`.
- **Title** (600-700, stretch 90-92%, 1.3-2.05rem, 1.05-1.2): itens de lista, FAQ, metodo.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)`, 1.6): medida 38-64ch, `text-wrap: pretty`.
- **Measure** (DM Mono 500, 0.75rem, 0.14em, caixa alta, `tabular-nums`): cota, `ficha__k`, `metodo__n`.

### Named Rules
**The Measure-Only Mono Rule.** DM Mono aparece so onde ha dimensao ou indice. Nunca como rotulo decorativo acima de titulo.
**The Stretch Pairing Rule.** Titulo pesado e condensado ao lado de linha leve em largura normal; o contraste de peso e largura faz a hierarquia.

## Layout

Grade de 12 colunas, `column-gap: 24px`, container `--max: 1280px` mais `--gutter` (`clamp(20px, 5vw, 80px)`) nas laterais. Secoes com `padding-block: --sec-y` (`clamp(80px, 11vw, 168px)`). Espacamento em base 4 (4 a 128px) e `clamp()` fluido nos intervalos entre blocos. Cabecalhos de secao: titulo em 8 colunas, lide em 9 a 12, alinhados embaixo. Blocos de texto usam colunas assimetricas (5 + 6, 7 + 4). Hero ocupa `max(100svh, 760px)` com foto ancorada a direita (58vw ate 940px) e texto em 9 colunas.

Breakpoints usados: 480, 600, 767, 900, 1100, 1360 (rail). Em 900px a grade colapsa em bloco, hero empilha foto sobre texto, metodo vira vertical com a regua rotacionada para o eixo Y. Em 1100px a navegacao vira botao Menu. O rail lateral de posicao so existe a partir de 1360px. Barra mobile fixa de CTA e banner de consentimento ao pe em 900px ou menos.

## Elevation & Depth

Plano. Nenhuma sombra em `box-shadow`. Profundidade vem de troca de tema (ardosia, papel, latao), filetes de 1px e uma mascara em gradiente sobre a foto do hero. Cabecalho fixo ganha fundo `rgba(14,20,19,0.97)` e filete ao rolar, e se esconde ao descer.

### Named Rules
**The Flat Rule.** Superficies ficam planas. Estado e mostrado por cor, filete ou deslocamento, nunca por sombra.

## Shapes

Geometria reta de instrumento. Botoes com raio de 2px (`--r-btn`); filete padrao de 1px (`--hair`); bordas de 2px so em acentos (`quem__aviso`, sublinhado ativo do menu). Nao ha cartoes nem contornos de caixa: listas sao linhas separadas por filetes. Setas sao SVG de traco unico 1.75, ponta quadrada.

## Components

### Buttons
- **Shape:** quase reto (2px), altura minima 52px, texto 1rem peso 600, seta SVG a direita que desliza 5px no hover/foco.
- **Primary (`btn--primary`):** fundo latao, texto ardosia; hover clareia para `latao-hover`. CTA do WhatsApp usa este.
- **Dark (`btn--dark`):** ardosia com texto papel; hover `ardosia-3`. Uso sobre papel e sobre a faixa latao.
- **Ghost (`btn--ghost`):** transparente, borda e texto `currentColor`; hover fundo papel a 10%.
- **Tamanhos:** `--sm` (44px), `--lg` (padding 1.4rem 2.2rem, fonte fluida), `--block` (largura total). `:active` desloca 1px.
- **Foco:** `outline: 2px solid var(--focus)`, offset 3px; `--focus` e papel em escuro e tinta em papel e latao.

### Navigation
Cabecalho fixo, altura 84px (68px a 900px). Marca: icone 32px em latao, nome em display 700 e sublinha mono caixa alta em `nevoa` (some a 900px). Links em 0.92rem peso 500 com sublinhado de 2px em latao que se desenha da esquerda. Menu mobile em tela cheia, links em display 2.1rem com numeracao latao.

### Cota (linha de dimensao)
Marca de medida: tampa de 1px por 18px, linha de 1px, rotulo mono centralizado, linha, tampa. As linhas se desenham de `scaleX(0)` a 1 em 1200ms com 200ms de atraso ao entrar na viewport. Cor via `--accent`. So marca dimensao que existe no conteudo (duracao do metodo, cota de valor por linha de "recebe").

### Mark e regua
`Mark`: trecho de regua de 96px, sem texto, abre cada capitulo, cor via `--accent`. `ruler-h` e `ruler-v`: duas camadas de gradiente, marca menor a cada 8px e maior a cada 40px, 18px de espessura. Instancias: regua vertical no hero (latao, 60%), regua horizontal no topo da faixa CTA (ardosia, 60%), trilho do metodo cujo preenchimento latao avanca com a rolagem (`--mp`).

### Section themes
`sec--dark` (ardosia e papel), `sec--paper` (papel e tinta), `.cta` (faixa latao com texto ardosia, `--muted: #2b2412`). Alternancia observada: Hero (escuro), Posicionamento (papel), Sobre (escuro), Acompanhamento (papel), Para quem (escuro), Formatos (papel), Metodo (escuro), Avaliacoes (papel), FAQ (escuro), CTA (latao), Rodape (escuro).

### Lists e linhas
Itens de lista sao uma linha (`border-top: 1px solid var(--rule)`) mais titulo display e texto. FAQ: `details` com cruz de 14px feita de dois filetes. Ficha do hero: tres colunas separadas por filete, valor display tabular e chave mono.

### Reveal
`data-rv` faz fade 600ms; `Lines` sobe cada linha por mascara (1000ms, atraso de 100ms por linha). Easing unico `cubic-bezier(0.22, 1, 0.36, 1)`. Micro-interacoes 180ms.

## Do's and Don'ts

### Do:
- **Do** usar latao como unico acento e `latao-esc` para texto sobre papel.
- **Do** ler cor secundaria, filete e acento das variaveis do tema da secao.
- **Do** abrir cada capitulo com `Mark` e usar `Cota` apenas para dimensao real do conteudo.
- **Do** separar por filete de 1px, nao por caixa ou sombra.
- **Do** parear display pesado e condensado com linha em peso 300.
- **Do** manter botoes com min 52px (44px no `--sm`) e raio 2px.
- **Do** respeitar `prefers-reduced-motion`: tudo que revela precisa de estado final sem transicao.

### Don't:
- **Don't** usar `linha-esc` como cor de texto (decorativa).
- **Don't** usar DM Mono fora de medida e indice.
- **Don't** adicionar sombras, cantos grandes, cartoes ou gradientes decorativos.
- **Don't** usar glifos Unicode como icone; setas e cruzes sao SVG ou filete.
- **Don't** criar uma segunda cor de acento.
- **Don't** colocar cota onde nao ha numero ou medida a marcar.

### Defeitos nao canonizados


## Notas de fechamento

- Rótulos `§ 01` e eyebrows foram removidos (ban do craft floor); `.mark` (trecho de régua, sem texto) é o marcador de capítulo.
- Mono só para medida/dado: cota, ficha, numerais do método.
- Reduced motion: todo estado final sem clip, sem parallax.
