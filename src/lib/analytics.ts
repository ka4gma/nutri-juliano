/**
 * Consentimento e eventos. Preserva o comportamento do site original:
 * a escolha fica em localStorage e os eventos só vão para dataLayer/gtag/fbq se o visitante aceitou.
 * Nenhum ID de GTM/GA/Pixel existe no site publicado: ao receber um, basta carregá-lo depois do aceite.
 */
export const CONSENT_KEY = 'nutrijuliano_analytics_consent';
export type Consent = 'accepted' | 'rejected';

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'rejected' ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* armazenamento bloqueado: segue sem persistir */
  }
}

type Win = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || readConsent() !== 'accepted') return;
  const w = window as Win;
  const payload = { event_category: 'engagement', page_path: window.location.pathname, ...params };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
  w.gtag?.('event', event, payload);
  if (event === 'whatsapp_click') w.fbq?.('track', 'Contact');
}
