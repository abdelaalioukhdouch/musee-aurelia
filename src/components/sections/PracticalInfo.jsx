import { MapPin, Ticket, Compass } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { SERVICE_ICONS } from "../../config/icons";
import { SERIF } from "../../config/theme";

// Enveloppe commune des trois colonnes (titre + filet bronze).
function Column({ title, icon: Icon, id, children }) {
  return (
    <div id={id} className="border-t-2 border-[#9C7549] pt-6">
      <h3 className={`${SERIF} mb-4 flex items-center gap-2 text-2xl font-semibold`}>
        {Icon && <Icon size={20} className="text-[#9C7549]" aria-hidden />} {title}
      </h3>
      {children}
    </div>
  );
}

const AccessColumn = ({ access }) => (
  <Column title="Horaires & accès" icon={MapPin}>
    <p className="font-medium">{access.address}</p>
    <ul className="mt-3 space-y-1 text-[#23292E]/75">{access.lines.map((l) => <li key={l}>{l}</li>)}</ul>
    <p className="mt-4 flex gap-2 text-[#23292E]/75"><Compass size={18} className="mt-1 shrink-0" aria-hidden /> {access.transport}</p>
  </Column>
);

const PricesColumn = ({ prices }) => (
  <Column title="Tarifs" icon={Ticket} id="billetterie">
    <ul className="divide-y divide-[#E4DCCB]">
      {prices.map((p) => <li key={p.label} className="flex justify-between gap-4 py-3"><span className="text-[#23292E]/75">{p.label}</span><span className="font-semibold">{p.price}</span></li>)}
    </ul>
    <div className="mt-6"><Button variant="dark" href="#billetterie">Réserver un billet</Button></div>
  </Column>
);

const ServicesColumn = ({ services }) => (
  <Column title="Services">
    <ul className="space-y-5">
      {services.map(({ icon, label, text }) => {
        const Icon = SERVICE_ICONS[icon];
        return (
          <li key={label} className="flex gap-3">
            {Icon && <Icon size={22} className="mt-0.5 shrink-0 text-[#9C7549]" aria-hidden />}
            <div><p className="font-medium">{label}</p><p className="text-[#23292E]/75">{text}</p></div>
          </li>
        );
      })}
    </ul>
  </Column>
);

export default function PracticalInfo({ info }) {
  return (
    <section id="infos" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-24 lg:px-8">
      <SectionHeading title="Préparer votre visite" />
      <div className="grid gap-12 md:grid-cols-3">
        <AccessColumn access={info.access} />
        <PricesColumn prices={info.prices} />
        <ServicesColumn services={info.services} />
      </div>
    </section>
  );
}
