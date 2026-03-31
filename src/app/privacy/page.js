export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for Himachal Temples.',
};

export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Himachal Temples collects minimal personal data. If you contact us by email, we only use your message details to respond and improve content accuracy.
      </p>
      <p className="mt-3 max-w-3xl text-slate-700">
        We do not sell personal data. Basic analytics may be used to understand site usage and improve performance.
      </p>
      <p className="mt-3 max-w-3xl text-slate-700">
        For privacy concerns, contact: <a className="font-semibold text-blue-700 hover:underline" href="mailto:hello@himachaltemples.in">hello@himachaltemples.in</a>.
      </p>
    </section>
  );
}
