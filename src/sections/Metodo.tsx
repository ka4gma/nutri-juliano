import type { CSSProperties } from 'react';
import { METODO as M } from '../data/content';
import { Cota, Mark } from '../components/ui';

export function Metodo() {
  return (
    <section id="como-funciona" className="sec sec--dark metodo" aria-labelledby="met-h">
      <div className="wrap">
        <div className="metodo__top">
          <div>
            <Mark />
            <h2 id="met-h" className="h2 metodo__h">
              <span className="mask" data-rv>
                <span className="mask__in">{M.titulo}</span>
              </span>
            </h2>
          </div>
          <p className="metodo__lead" data-rv>
            {M.lead}
          </p>
        </div>

        <Cota className="metodo__cota">{M.duracao}</Cota>

        <div className="metodo__track">
          <div className="metodo__rule ruler-h" aria-hidden="true" />
          <div className="metodo__fill ruler-h" aria-hidden="true" />
          <ol className="metodo__list">
            {M.etapas.map((e, i) => (
              <li key={e.titulo} className="metodo__item" data-rv style={{ '--i': i } as CSSProperties}>
                <span className="metodo__n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="metodo__t">{e.titulo}</h3>
                {e.texto ? <p className="metodo__p">{e.texto}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
