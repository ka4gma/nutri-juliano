import type { CSSProperties, ReactNode } from 'react';
import { track } from '../lib/analytics';
import { whatsappUrl, type Formato } from '../data/content';

/** Seta desenhada (traço único, 1.75). Substitui glifos Unicode. */
export function Arrow({ className = 'btn__arrow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}

type WaProps = {
  formato?: Formato;
  className?: string;
  where: string;
  children: ReactNode;
  label?: string;
};

/** Link para o WhatsApp com a mensagem original do site. Abre em nova aba. */
export function Wa({ formato = 'geral', className = 'btn btn--primary', where, children, label }: WaProps) {
  return (
    <a
      className={className}
      href={whatsappUrl(formato)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() => track('whatsapp_click', { formato, where })}
    >
      {children}
      <Arrow />
    </a>
  );
}

/** Linha de cota (convenção de desenho técnico): só marca uma dimensão que existe no conteúdo. */
export function Cota({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`cota ${className}`} data-rv>
      <i className="cota__cap" aria-hidden="true" />
      <i className="cota__line" aria-hidden="true" />
      <span className="cota__label">{children}</span>
      <i className="cota__line" aria-hidden="true" />
      <i className="cota__cap" aria-hidden="true" />
    </span>
  );
}

/** Marca de capítulo: trecho de régua, sem texto. O título carrega o significado. */
export function Mark() {
  return <span className="mark ruler-h" aria-hidden="true" data-rv />;
}

/** Título que sobe por máscara. Cada item vira uma linha. */
export function Lines({ lines, className = '' }: { lines: string[]; className?: string }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l} className={`mask ${className}`} data-rv style={{ '--i': i } as CSSProperties}>
          <span className="mask__in">{l}</span>
        </span>
      ))}
    </>
  );
}
