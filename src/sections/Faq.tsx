import { FAQ as F } from '../data/content';
import { Mark } from '../components/ui';

export function Faq() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: F.itens.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <section id="duvidas" className="sec sec--dark faq" aria-labelledby="faq-h">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="wrap faq__grid">
        <div className="faq__head">
          <Mark />
          <h2 id="faq-h" className="h2 faq__h">
            <span className="mask" data-rv>
              <span className="mask__in">{F.titulo}</span>
            </span>
          </h2>
        </div>

        <div className="faq__list" data-rv>
          {F.itens.map((it, i) => (
            <details key={it.q} className="faq__item" name="faq" open={i === 0}>
              <summary className="faq__q">
                <span className="faq__qt">{it.q}</span>
                <span className="faq__x" aria-hidden="true" />
              </summary>
              <p className="faq__a">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
