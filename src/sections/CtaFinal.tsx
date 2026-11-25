import type { CSSProperties } from 'react';
import { CTA_FINAL as C } from '../data/content';
import { Mark, Wa } from '../components/ui';

export function CtaFinal() {
  return (
    <section id="contato" className="sec cta" aria-labelledby="cta-h">
      <div className="cta__ruler ruler-h" aria-hidden="true" />
      <div className="wrap">
        <Mark />
        <h2 id="cta-h" className="cta__h">
          <span className="mask" data-rv>
            <span className="mask__in">{C.titulo}</span>
          </span>{' '}
          <span className="mask cta__h2" data-rv style={{ '--i': 1 } as CSSProperties}>
            <span className="mask__in">{C.complemento}</span>
          </span>
        </h2>
        <div className="cta__row" data-rv>
          <Wa className="btn btn--dark btn--lg" where="cta-final">
            {C.cta}
          </Wa>
          <p className="cta__nota">{C.nota}</p>
        </div>
      </div>
    </section>
  );
}
