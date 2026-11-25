import { FORMATOS as F, PARA_QUEM as Q, RECEBE as R } from '../data/content';
import { Cota, Mark, Wa } from '../components/ui';

/**
 * Três capítulos: papel (o que recebe, desenhado como linha do tempo em dias), ardósia (para quem é), papel (como iniciar).
 * A linha do tempo usa só durações que existem no conteúdo: consulta, retorno em até 15 dias, suporte por 30 dias.
 */
export function Acompanhamento() {
  const naConsulta = R.itens.slice(0, 3);
  const suporte = R.itens[3];
  const retorno = R.itens[4];

  return (
    <>
      <section id="acompanhamento" className="sec sec--paper acomp" aria-labelledby="acomp-h">
        <div className="wrap">
          <div className="acomp__top">
            <div>
              <Mark />
              <h2 id="acomp-h" className="h2 acomp__h">
                <span className="mask" data-rv>
                  <span className="mask__in">{R.titulo}</span>
                </span>
              </h2>
            </div>
            <p className="acomp__lead" data-rv>
              {R.lead}
            </p>
          </div>

          <ul className="dia0">
            {naConsulta.map((it) => (
              <li key={it.titulo} className="dia0__item" data-rv>
                <h3 className="dia0__t">{it.titulo}</h3>
                <p className="dia0__p">{it.texto}</p>
              </li>
            ))}
          </ul>

          <div className="dias">
            <div className="dias__scale ruler-h" aria-hidden="true" data-rv />
            <div className="dias__axis" aria-hidden="true">
              <span>Consulta</span>
              <span>Dia 15</span>
              <span>Dia 30</span>
            </div>

            <div className="dias__row dias__row--15">
              <h3 className="dias__t">{retorno.titulo}</h3>
              <p className="dias__p">{retorno.texto}</p>
              <Cota>{'cota' in retorno ? retorno.cota : ''}</Cota>
            </div>
            <div className="dias__row dias__row--30">
              <h3 className="dias__t">{suporte.titulo}</h3>
              <p className="dias__p">{suporte.texto}</p>
              <Cota>{'cota' in suporte ? suporte.cota : ''}</Cota>
            </div>
          </div>
        </div>
      </section>

      <section id="para-quem" className="sec sec--dark quem" aria-labelledby="quem-h">
        <div className="wrap">
          <div className="quem__head">
            <Mark />
            <h2 id="quem-h" className="h2 quem__h">
              <span className="mask" data-rv>
                <span className="mask__in">{Q.titulo}</span>
              </span>
            </h2>
            <p className="quem__lead" data-rv>
              {Q.lead}
            </p>
          </div>

          <ul className="quem__list">
            {Q.itens.map((it, i) => (
              <li key={it.titulo} className="quem__item" data-rv style={{ '--k': i } as React.CSSProperties}>
                <h3 className="quem__t">{it.titulo}</h3>
                <p className="quem__p">{it.texto}</p>
              </li>
            ))}
          </ul>

          <div className="horm" data-rv>
            <h3 className="horm__t">{Q.hormonios.titulo}</h3>
            <p className="horm__p">{Q.hormonios.texto}</p>
            <p className="horm__aviso" role="note">
              <strong className="horm__k">Importante</strong>
              {Q.hormonios.aviso}
            </p>
          </div>
        </div>
      </section>

      <section id="como-iniciar" className="sec sec--paper fmt" aria-labelledby="fmt-h">
        <div className="wrap">
          <div className="fmt__head">
            <Mark />
            <h2 id="fmt-h" className="h2 fmt__h">
              <span className="mask" data-rv>
                <span className="mask__in">{F.titulo}</span>
              </span>
            </h2>
            <p className="fmt__lead" data-rv>
              {F.lead}
            </p>
          </div>

          <div className="fmt__grid">
            <article className="fmt__col" data-rv>
              <h3 className="fmt__t">{F.presencial.nome}</h3>
              <ul className="fmt__l">
                {F.presencial.linhas.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <Wa formato="presencial" className="btn btn--dark" where="formato-presencial">
                {F.presencial.cta}
              </Wa>
            </article>

            <div className="fmt__ruler ruler-v" aria-hidden="true" />

            <article className="fmt__col" data-rv>
              <h3 className="fmt__t">{F.online.nome}</h3>
              <ul className="fmt__l">
                {F.online.linhas.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <Wa formato="online" className="btn btn--dark" where="formato-online">
                {F.online.cta}
              </Wa>
            </article>
          </div>
          <p className="fmt__valor" data-rv>
            {F.valor}
          </p>
        </div>
      </section>
    </>
  );
}
