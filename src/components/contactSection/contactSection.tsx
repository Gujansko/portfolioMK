import ContactContent from "./contactContet";
import CodeContent from "./codeContent";

export default function ContactSection() {
  return (
    <div
      className="bg-slate-50 py-12 text-center font-bold text-slate-950"
      id="contact"
    >
      <div className="mx-10 flex flex-wrap justify-around gap-20 text-3xl">
        <ContactContent />
        <CodeContent />
      </div>
    </div>
  );
}
