import { AVALIACOES as A, GOOGLE_URL } from '../data/content';
import { Arrow, Mark } from '../components/ui';

function VerNoGoogle() {
  return (
    <a className="link-mono" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
      Ver no Google
      <Arrow className="link-mono__arrow" />
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

/** Mural: uma avaliação em escala de cartaz e as demais em texto corrido, sem caixas. */
export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="sec sec--paper aval" aria-labelledby="aval-h">
      <div className="wrap">
        <div className="aval__top">
          <div>
            <Mark />
            <h2 id="aval-h" className="h2 aval__h">
              <span className="mask" data-rv>
                <span className="mask__in">{A.titulo}</span>
              </span>
            </h2>
          </div>
          <p className="aval__lead" data-rv>
            Avaliações públicas de pacientes sobre o acompanhamento de Juliano Barcelos, CRN&nbsp;19753.
          </p>
        </div>

        <figure className="aval__main" data-rv>
          <blockquote className="aval__q">“{A.destaque.texto}”</blockquote>
          <figcaption className="aval__cap">{A.destaque.autor}</figcaption>
        </figure>

        <ul className="aval__wall">
          {A.itens.map((it) => (
            <li key={it.autor + it.texto.slice(0, 8)} data-rv>
              <figure>
                <blockquote className="aval__q2">“{it.texto}”</blockquote>
                <figcaption className="aval__cap aval__cap--sm">{it.autor}</figcaption>
              </figure>
            </li>
          ))}
          <li className="aval__src" data-rv>
            <p>{A.nota}</p>
            <VerNoGoogle />
          </li>
        </ul>
      </div>
    </section>
  );
}
