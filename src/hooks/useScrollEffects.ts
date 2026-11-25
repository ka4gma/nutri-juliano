import { useEffect, useState } from 'react';
import { SECOES } from '../data/content';

export type ScrollState = {
  active: string;
  headerHidden: boolean;
  scrolled: boolean;
  showBar: boolean;
};

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Um único listener de scroll (rAF). Escreve variáveis CSS direto no DOM (sem re-render):
 *  --hp  deslocamento do parallax do retrato (px)
 *  --mp  progresso da régua do método (0 a 1)
 * E devolve apenas o estado que muda a interface: seção ativa, header, barra mobile.
 */
export function useScrollEffects(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    active: 'inicio',
    headerHidden: false,
    scrolled: false,
    showBar: false,
  });

  useEffect(() => {
    const root = document.documentElement;
    const noMotion = reduced();
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;

      // seção ativa: a última cujo topo passou de 40% da viewport
      let active: string = SECOES[0].id;
      for (const s of SECOES) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= vh * 0.4) active = s.id;
      }

      // progresso da régua do método
      const m = document.getElementById('como-funciona');
      if (m) {
        const r = m.getBoundingClientRect();
        const p = noMotion ? 1 : Math.max(0, Math.min(1, (vh * 0.75 - r.top) / (r.height * 0.7)));
        m.style.setProperty('--mp', p.toFixed(3));
      }

      const contato = document.getElementById('contato');
      const noContato = contato ? contato.getBoundingClientRect().top < vh * 0.9 : false;
      if (!noMotion) root.style.setProperty('--hp', `${Math.min(y, 900) * 0.045}px`);
      const dir = y - last;
      last = y;

      setState((prev) => {
        const next: ScrollState = {
          active,
          scrolled: y > 24,
          headerHidden: y > 160 && dir > 4 ? true : dir < -4 || y <= 160 ? false : prev.headerHidden,
          showBar: y > vh * 0.3 && !noContato,
        };
        return next.active === prev.active &&
          next.scrolled === prev.scrolled &&
          next.headerHidden === prev.headerHidden &&
          next.showBar === prev.showBar
          ? prev
          : next;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return state;
}

/** Revela elementos [data-rv] uma única vez ao entrarem na viewport. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));
    if (reduced() || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
