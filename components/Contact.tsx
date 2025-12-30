
export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-zinc-200">
      <h2 className="text-3xl font-black mb-6">Contact</h2>
      <p className="text-lg text-zinc-700 mb-6">
        Open to opportunities and conversations.
      </p>

      <a
        href="mailto:aryan@email.com"
        className="inline-block rounded-full bg-zinc-900 text-white px-8 py-4 font-semibold hover:bg-zinc-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}
