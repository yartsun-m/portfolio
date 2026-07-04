const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const CUSTOM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_URL;

export function getFormspreeEndpoint() {
  if (FORMSPREE_ID) {
    return `https://formspree.io/f/${FORMSPREE_ID}`;
  }
  return CUSTOM_ENDPOINT || null;
}

export function isFormspreeEnabled() {
  return Boolean(getFormspreeEndpoint());
}

/**
 * Submit contact form via Formspree (JSON API).
 * @see https://formspree.io/f/YOUR_FORM_ID
 */
export async function submitToFormspree(formData, honeypot = '') {
  const endpoint = getFormspreeEndpoint();
  if (!endpoint) {
    throw new Error('Formspree is not configured');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _replyto: formData.email,
      _subject: `Portfolio contact from ${formData.name}`,
      _gotcha: honeypot,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      typeof data.error === 'string'
        ? data.error
        : data.errors?.map((e) => e.message).join(', ') || 'Submission failed';
    throw new Error(message);
  }

  return data;
}

export function openMailtoFallback(formData, recipientEmail) {
  const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
  const body = encodeURIComponent(
    `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
