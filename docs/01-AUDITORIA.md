# 01 · Auditoria — Juliano Barcelos | Nutrição Esportiva

Data da auditoria: 2026-11-25. Fonte de verdade do conteúdo: o site em produção (`https://nutrijuliano.vercel.app/`). Marcação: **[F]** fato observado · **[H]** hipótese · **[R]** recomendação.

## 1. Projeto e stack

- [F] Não existe código-fonte local nem projeto na conta Vercel do usuário (busca por "juliano" em `contatokaudesigner-2892` retornou zero projetos). O site foi feito por terceiros ("Desenvolvido por Nodix").
- [F] Stack inferida do bundle publicado: SPA **Vite + React + Tailwind**, um único `assets/index-*.js` (317 KB), fontes do Google (Fraunces 700–900 + Plus Jakarta Sans 400–800), `lang="pt-BR"`, JSON-LD (`MedicalBusiness` + `FAQPage`), `robots.txt` e `sitemap.xml` presentes.
- [F] Rotas: `/` e `/artigos` (8 artigos, 25/07 a 27/09/2026). A listagem de artigos está **fora do escopo** deste rebranding (a landing é o escopo).
- [F] Marcação de analytics: banner de consentimento grava `localStorage["nutrijuliano_analytics_consent"]` e só então empurra eventos para `dataLayer` / `gtag` / `fbq`. Nenhum ID de GTM, GA ou Pixel está no HTML nem no bundle.
- [R] Preservar a stack (Vite + React), em TypeScript, em projeto novo em `C:\Projetos\nutri-juliano`. Sem framework novo: a LP é estática, sem necessidade de SSR.

## 2. Conteúdo existente (preservar)

Extraído do DOM em produção, sem redigitar. Cópia integral dos textos em `docs/audit/conteudo-original.txt`.

| Bloco | Conteúdo factual |
|---|---|
| Identidade | Juliano Barcelos · Nutricionista esportivo · **CRN 19753** |
| Atuação | Presencial na **Clínica Nutrivida**, Rua Silvio da Silva Tavares, 601, Bagé/RS · consulta online |
| H1 | "Nutrição esportiva personalizada para performance, saúde e estética." |
| Números do site | "+600 pacientes atendidos" · "30 dias de suporte" |
| Consulta (5 etapas) | Conversa aprofundada · Avaliação de exames laboratoriais · Avaliação antropométrica completa (percentual de gordura e composição corporal) · Análise metabólica e comportamental · Construção da estratégia alimentar personalizada |
| Para quem é | Musculação · Jiu-jitsu e padel · Estética e energia · Condições clínicas (SII, SOP, endometriose, lipedema e outras) · Rotina e comportamento · Uso de hormônios e canetas emagrecedoras |
| Aviso obrigatório | "O acompanhamento nutricional não substitui a avaliação médica nem envolve prescrição ou ajuste de medicamentos." |
| O que você recebe | Avaliação completa · Plano individualizado · Ajustes pós-consulta · Suporte por 30 dias (WhatsApp) · Retorno gratuito em até 15 dias (presencial ou online) |
| FAQ (7) | Valor (informado no WhatsApp) · presencial/online · exames · duração (60–90 min) · quem não pratica esporte · hormônios/canetas · suporte WhatsApp |
| Avaliações | 6 avaliações públicas do Google, com nome do autor, e link "Ver no Google" |
| Contato | WhatsApp **+55 53 9900-2023** (`wa.me/555399002023`) · Instagram `@nutrijuliano` · Google Maps `cid=14884821701238897751` |
| Mensagens do WhatsApp | Presencial: "Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta presencial em Bagé/RS." · Online: "Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta online." |

## 3. Assets

| Arquivo | Dimensão | Avaliação |
|---|---|---|
| `hero-854.webp` (= `hero.jpg`) | 854×1280 | **Retrato profissional bom.** Fundo teal-grafite escuro, jaqueta preta com bordado dourado "Juliano Barcelos · Nutricionista", adipômetro (paquímetro de dobras) na mão. Suficiente para a hero em 1× e aceitável em 2× até ~430 px de largura CSS. |
| `palestrante-urcamp.webp` | 960×1280 | Foto real de palestra na URCAMP (Bagé/RS), legenda existe no `alt` do site. Cor mais clara e quente; precisa de grade para conviver com a paleta. |
| `juliano-logo-transparent-white-400.webp` | 400×113 | Logo antigo: monograma **JB em azul** com figura de fisiculturista no "B" e texto branco. **Não conversa com a nova identidade.** |
| `google-review-*.webp` (6) | 180×180 | Fotos de perfil de terceiros. Não reaproveitadas (ver pendências). |
| `nodix-icon.png` | 256×256 | Crédito do desenvolvedor anterior. Removido. |

Originais baixados em `docs/audit/assets-original/`.

## 4. Diagnóstico do site atual

- [F] Aparência de template: azul-marinho + azul elétrico, Fraunces em azul para palavras-chave, cards arredondados em todas as seções, ícones genéricos de biblioteca, três "chips" de métricas no hero.
- [F] "Como funciona": 5 etapas em linha, texto de 12 px sobre fundo branco, cartão único com a citação — hierarquia fraca, o título "Como funciona a consulta nutricional" fica coberto pelo banner de cookies no primeiro acesso.
- [F] A fotografia é boa, mas fica relegada a fundo escuro da hero; o retrato mais forte (adipômetro) é cortado.
- [F] O argumento central ("não é apenas um cardápio") vive numa citação pequena, no fim de um cartão.
- [F] A seção de avaliações usa a identidade do Google, não a do profissional.
- [R] Oportunidade: a fotografia **já contém o conceito** — o adipômetro na mão do profissional. Medir é o primeiro passo do método.

## 5. Divergências e informações que NÃO podem entrar sem validação

- [F] Foto da palestra: o slide projetado mostra um texto parcialmente cortado ("graduado pela URCAMP … de 2024", "8 anos no Exército Brasileiro", "jovens praticantes de musculação"). Isso **não está no site**. Fica fora do texto até o Juliano confirmar.
- [F] Nenhum depoimento ou resultado de paciente com imagem existe no site. Não há "antes e depois" — as duas referências usam; aqui **não usamos**.
- [F] Valor da consulta não é público (FAQ: "informado diretamente pelo WhatsApp"). Mantido.
- [F] Não há especialização, pós-graduação, certificação ou prêmio listados. Nada foi acrescentado.

## 6. Pendências de conteúdo e fotografia (para o Juliano)

1. Confirmar autorização para exibir **nome** dos autores das avaliações do Google. As **fotos de perfil** deles não foram reaproveitadas.
2. Texto de formação (graduação, ano, trajetória) para a seção Sobre. O site atual só afirma "formação sólida e atualização contínua".
3. Retrato em maior resolução (≥ 1800 px de largura) e **mais 3–4 fotografias**: consultório (Clínica Nutrivida), avaliação antropométrica em andamento, detalhe do adipômetro, atendimento online.
4. Decisão sobre o **logo**: o monograma JB azul não foi usado. A nova identidade usa lockup tipográfico. Se o monograma for mantido, precisa de versão monocromática.
5. Página `/artigos`: fora do escopo; o link "Artigos" aponta para a URL de produção atual.
6. IDs de analytics (GTM/GA/Pixel): não existem no site publicado; a LP preserva o consentimento e os eventos em `dataLayer`, prontos para receber o ID.
7. Crédito "Desenvolvido por Nodix" removido do rodapé. Confirmar se o Juliano quer manter algum crédito.
8. Mensagem neutra do WhatsApp (sem formato) é nova: "Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta." Derivada das duas originais.
