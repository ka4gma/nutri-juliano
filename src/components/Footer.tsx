import { FOOTER as F, PRO, whatsappUrl } from '../data/content';
import { Brand } from './Header';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Brand />
            <p className="footer__txt">{F.texto}</p>
          </div>

          <nav className="footer__col" aria-label="Rodapé">
            <p className="footer__k">Navegar</p>
            <a href="#como-funciona">Como funciona</a>
            <a href="#para-quem">Para quem é</a>
            <a href="#duvidas">Dúvidas comuns</a>
            <a href={PRO.artigosUrl} target="_blank" rel="noopener noreferrer">
              Artigos sobre nutrição
            </a>
          </nav>

          <address className="footer__col">
            <p className="footer__k">Contato</p>
            <a href={whatsappUrl('geral')} target="_blank" rel="noopener noreferrer">
              {PRO.telefone}
            </a>
            <a href={PRO.instagramUrl} target="_blank" rel="noopener noreferrer">
              {PRO.instagram}
            </a>
            <a href={PRO.maps} target="_blank" rel="noopener noreferrer">
              {PRO.clinica}
            </a>
            <span>
              {PRO.endereco}
              <br />
              {PRO.cidade} · Online
            </span>
          </address>
        </div>

        <div className="footer__word" aria-hidden="true" />

        <div className="footer__base">
          <span>© 2026 Juliano Barcelos · {PRO.crn}. Todos os direitos reservados.</span>
          <span>{F.local}</span>
        </div>
      </div>
    </footer>
  );
}
