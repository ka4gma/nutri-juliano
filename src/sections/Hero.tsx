import { useEffect, useState } from 'react';
import { HERO } from '../data/content';
import { Wa } from '../components/ui';

const B = import.meta.env.BASE_URL;
const SIZES = '(max-width: 900px) 100vw, 54vw';
const set = (ext: string, ws: number[]) => ws.map((w) => `${B}images/juliano-retrato-${w}.${ext} ${w}w`).join(', ');

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(id);
  }, []);
  const h = HERO.h1;

  return (
    <section id="inicio" className={`hero ${ready ? 'is-ready' : ''}`} aria-labelledby="h1">
      <div className="hero__figure">
        <div className="hero__photo">
          <picture>
            <source
              type="image/avif"
              sizes={SIZES}
              srcSet={set('avif', [480, 720, 854])}
            />
            <img
              src={`${B}images/juliano-retrato-854.webp`}
              srcSet={set('webp', [480, 720, 854])}
              sizes={SIZES}
              width={854}
              height={1280}
              alt="Juliano Barcelos, nutricionista esportivo CRN 19753, sorrindo e segurando um adipômetro"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="hero__ruler ruler-v" aria-hidden="true" />
      </div>

      <div className="wrap hero__grid">
        <h1 id="h1" className="hero__title">
          <span className="hero__big mask">
            <span className="mask__in">{h.a}</span>
          </span>{' '}
          <span className="hero__big mask">
            <span className="mask__in">{h.b}</span>
          </span>{' '}
          <span className="hero__small mask">
            <span className="mask__in">{h.c}</span>
          </span>{' '}
          <span className="hero__small mask">
            <span className="mask__in">{h.d}</span>
          </span>
        </h1>

        <p className="hero__lead">{HERO.apoio}</p>

        <div className="hero__cta">
          <Wa where="hero">Agendar no WhatsApp</Wa>
        </div>

        <ul className="hero__facts">
          {HERO.ficha.map((f) => (
            <li key={f.rotulo}>
              <strong>{f.valor}</strong> {f.rotulo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
