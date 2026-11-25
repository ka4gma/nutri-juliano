import { useEffect, useState } from 'react';
import { readConsent, saveConsent } from '../lib/analytics';

export function Consent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (readConsent() !== null) return;
    const t = window.setTimeout(() => setShow(true), 1400);
    return () => window.clearTimeout(t);
  }, []);

  if (!show) return null;
  const choose = (v: 'accepted' | 'rejected') => {
    saveConsent(v);
    setShow(false);
  };

  return (
    <aside className="consent" role="region" aria-label="Privacidade e cookies">
      <p className="consent__t">
        <strong>Privacidade e cookies.</strong> Usamos cookies para melhorar sua experiência e medir resultados de campanhas. Você pode
        aceitar ou rejeitar analytics.
      </p>
      <div className="consent__a">
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => choose('rejected')}>
          Rejeitar
        </button>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => choose('accepted')}>
          Aceitar
        </button>
      </div>
    </aside>
  );
}
