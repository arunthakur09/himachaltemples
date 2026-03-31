export const metadata = {
  title: 'Contact',
  description: 'Contact Himachal Temples for corrections, suggestions, or collaboration regarding temple information.',
};

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        If you want to suggest updates, report incorrect details, or share temple information for your district, reach out via email.
      </p>
      <p className="mt-4 text-slate-800">
        Email: <a className="font-semibold text-blue-700 hover:underline" href="mailto:hello@himachaltemples.in">hello@himachaltemples.in</a>
      </p>
    </section>
  );
}
  