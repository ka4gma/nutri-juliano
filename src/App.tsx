import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Consent } from './components/Consent';
import { Wa } from './components/ui';
import { Hero } from './sections/Hero';
import { Posicionamento } from './sections/Posicionamento';
import { Sobre } from './sections/Sobre';
import { Acompanhamento } from './sections/Acompanhamento';
import { Metodo } from './sections/Metodo';
import { Avaliacoes } from './sections/Avaliacoes';
import { Faq } from './sections/Faq';
import { CtaFinal } from './sections/CtaFinal';
import { SECOES } from './data/content';
import { useReveal, useScrollEffects } from './hooks/useScrollEffects';

export default function App() {
  const s = useScrollEffects();
  useReveal();
  const idx = Math.max(0, SECOES.findIndex((x) => x.id === s.active));

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header hidden={s.headerHidden} scrolled={s.scrolled} active={s.active} />

      <nav className="rail" data-tema={SECOES[idx].tema} aria-hidden="true">
        {SECOES.map((x, i) => (
          <span key={x.id} className={`rail__t ${i === idx ? 'is-on' : ''} ${i < idx ? 'is-past' : ''}`} />
        ))}
      </nav>

      <main id="conteudo">
        <Hero />
        <Posicionamento />
        <Sobre />
        <Acompanhamento />
        <Metodo />
        <Avaliacoes />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />

      <div className={`mbar ${s.showBar ? 'is-on' : ''}`} inert={!s.showBar}>
        <Wa className="btn btn--primary btn--block" where="barra-mobile">
          Agendar no WhatsApp
        </Wa>
      </div>

      <Consent />
    </>
  );
}
