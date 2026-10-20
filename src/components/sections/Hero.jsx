import { Clock, Ticket } from "lucide-react";
import Button from "../ui/Button";
import SmartImage from "../ui/SmartImage";
import { SERIF } from "../../config/theme";

// Bandeau d'horaires rapides, en surimpression sous la bannière.
function HoursStrip({ hours }) {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-5 lg:px-8">
      <dl className="grid gap-px bg-[#E4DCCB] shadow-xl sm:grid-cols-3">
        {hours.map((h) => (
          <div key={h.days} className="flex items-center gap-4 bg-[#F6F1E7] p-5">
            <Clock className="shrink-0 text-[#9C7549]" aria-hidden />
            <div>
              <dt className="text-sm text-[#23292E]/70">{h.days}</dt>
              <dd className={`${SERIF} text-2xl font-semibold text-[#23292E]`}>{h.hours}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Bannière immersive : titre, sous-titre, deux boutons d'action.
export default function Hero({ museum, hours }) {
  return (
    <section id="top" className="relative">
      <div className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#23292E]">
        <SmartImage name={museum.heroImage} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23292E] via-[#23292E]/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-32 pt-32 lg:px-8">
          <h1 className={`${SERIF} max-w-3xl whitespace-pre-line text-5xl font-medium leading-[1.05] text-white sm:text-7xl`}>{museum.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{museum.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#expositions">Découvrir les expositions</Button>
            <Button href="#billetterie" variant="ghost"><Ticket size={18} aria-hidden /> Acheter un billet</Button>
          </div>
        </div>
      </div>
      <HoursStrip hours={hours} />
    </section>
  );
}
