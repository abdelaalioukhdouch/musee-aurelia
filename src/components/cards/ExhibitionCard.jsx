import SmartImage from "../ui/SmartImage";
import { SERIF } from "../../config/theme";
const BADGE = { current: "bg-[#9C7549] text-white", upcoming: "bg-[#F6F1E7] text-[#23292E]" };

// Carte d'une exposition : image, badge de statut, titre, dates, description.
export default function ExhibitionCard({ exhibition, statusLabel }) {
  const { title, dates, status, image, description } = exhibition;
  return (
    <article className="group bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage name={image} alt={`Visuel de l'exposition ${title}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className={`absolute left-4 top-4 px-3 py-1 text-xs font-medium ${BADGE[status]}`}>{statusLabel}</span>
      </div>
      <div className="p-6">
        <h3 className={`${SERIF} text-3xl font-semibold text-[#23292E]`}>{title}</h3>
        <p className="mt-1 text-sm font-medium text-[#9C7549]">{dates}</p>
        <p className="mt-3 leading-relaxed text-[#23292E]/75">{description}</p>
      </div>
    </article>
  );
}
