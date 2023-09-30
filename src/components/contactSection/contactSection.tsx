import ContactContent from "./contactContent";
import CodeContent from "./codeContent";

export default function ContactSection() {
  return (
    <section
      className="bg-cyan-950 pb-24 pt-12 text-center font-semibold text-slate-50"
      id="contact"
    >
      <div className="mx-10 flex flex-wrap justify-around gap-20 text-3xl">
        <ContactContent />
        <CodeContent />
      </div>
    </section>
  );
}
