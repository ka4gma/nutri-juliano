import { useEffect, useRef, useState } from 'react';
import { NAV, PRO } from '../data/content';
import { Wa } from './ui';

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a className="brand" href="#inicio" onClick={onClick}>
      <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M5 24h22M5 11v13M27 11v13M16 17v7M10.5 20v4M21.5 20v4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">{PRO.nome}</span>
        <span className="brand__sub">Nutrição esportiva · {PRO.crn}</span>
      </span>
    </a>
  );
}

export function Header({ hidden, scrolled, active }: { hidden: boolean; scrolled: boolean; active: string }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => href === `#${active}`;

  return (
    <header className={`header ${hidden && !open ? 'is-hidden' : ''} ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="wrap header__bar">
        <Brand onClick={close} />
        <nav className="header__nav" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={isActive(n.href) ? 'is-active' : ''}
              aria-current={isActive(n.href) ? 'true' : undefined}
              {...('externo' in n ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <Wa className="btn btn--primary btn--sm header__cta" where="header">
          Agendar no WhatsApp
        </Wa>
        <button
          ref={btn}
          type="button"
          className="header__menu"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="header__menu-t">{open ? 'Fechar' : 'Menu'}</span>
          <span className="header__menu-i" aria-hidden="true" />
        </button>
      </div>
      <div id="menu-mobile" className={`menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav className="wrap menu__nav" aria-label="Menu mobile">
          {NAV.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              onClick={close}
              {...('externo' in n ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="menu__i">{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </a>
          ))}
          <Wa className="btn btn--primary btn--block" where="menu">
            Agendar no WhatsApp
          </Wa>
        </nav>
      </div>
    </header>
  );
}
