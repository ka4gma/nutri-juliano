import { POSICIONAMENTO as P } from '../data/content';
import { Mark } from '../components/ui';

/** Frase-cartaz. A palavra "cardápio" é medida por uma garra de paquímetro (cota) com a legenda "sem modelo pronto". */
export function Posicionamento() {
  const inicio = P.frase[0].replace(' cardápio.', '');
  return (
    <section id="posicionamento" className="sec sec--paper pos" aria-labelledby="pos-h">
      <div className="wrap">
        <Mark />

        <h2 id="pos-h" className="pos__h">
          <span className="pos__a" data-rv>
            {inicio} <span className="jaw">cardápio<span className="jaw__l" aria-hidden="true">{P.cota}</span></span>.
          </span>
          <span className="pos__b mask" data-rv>
            <span className="mask__in">{P.frase[1]}</span>
          </span>
        </h2>

        <div className="pos__list">
          {P.pontos.map((p) => (
            <p key={p} className="pos__t" data-rv>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
