import { SOBRE as S } from '../data/content';
import { Mark } from '../components/ui';

const B = import.meta.env.BASE_URL;
const set = (ext: string) => [480, 720, 960].map((w) => `${B}images/juliano-palestra-${w}.${ext} ${w}w`).join(', ');

/** Foto em sangria à esquerda, texto à direita. Os quatro fatos originais viram linhas com marca de régua. */
export function Sobre() {
  return (
    <section id="sobre" className="sec sec--dark sobre" aria-labelledby="sobre-h">
      <div className="sobre__grid">
        <figure className="sobre__fig">
          <div className="sobre__img">
            <picture>
              <source
                type="image/avif"
                sizes="(max-width: 900px) 100vw, 50vw"
                srcSet={set('avif')}
              />
              <img
                src={`${B}images/juliano-palestra-720.webp`}
                srcSet={set('webp')}
                sizes="(max-width: 900px) 100vw, 50vw"
                width={960}
                height={1280}
                alt={S.altFoto}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <figcaption className="sobre__cap">{S.legendaFoto}</figcaption>
        </figure>

        <div className="sobre__txt">
          <Mark />
          <h2 id="sobre-h" className="sobre__h">
            <span className="mask" data-rv>
              <span className="mask__in">{S.nome}</span>
            </span>
          </h2>
          <p className="sobre__role" data-rv>
            {S.funcao}
          </p>
          <p className="sobre__lead" data-rv>
            {S.titulo}
          </p>
          <p className="sobre__p" data-rv>
            {S.texto}
          </p>

          <ul className="reg" data-rv>
            {S.registro.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
