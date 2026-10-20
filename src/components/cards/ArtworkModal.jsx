import { X } from "lucide-react";
import SmartImage from "../ui/SmartImage";
import useDialog from "../../hooks/useDialog";
import { SERIF, FOCUS } from "../../config/theme";

// Modale de détail d'une pièce (comportement accessible délégué au hook useDialog).
export default function ArtworkModal({ artwork, onClose }) {
  const closeRef = useDialog(onClose);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="work-title" onClick={(e) => e.stopPropagation()} className="grid max-h-[90vh] w-full max-w-4xl overflow-auto bg-[#F6F1E7] md:grid-cols-2">
        <SmartImage name={artwork.image} alt={`${artwork.title}, ${artwork.artist}`} className="h-full max-h-[60vh] w-full object-cover md:max-h-none" />
        <div className="relative p-8">
          <button ref={closeRef} onClick={onClose} aria-label="Fermer" className={`absolute right-4 top-4 p-2 ${FOCUS}`}><X /></button>
          <h3 id="work-title" className={`${SERIF} mt-6 text-4xl font-semibold text-[#23292E]`}>{artwork.title}</h3>
          <p className="mt-2 text-lg text-[#9C7549]">{artwork.artist}, {artwork.year}</p>
          <p className="mt-6 text-[#23292E]/75">{artwork.technique}</p>
          <p className="mt-4 leading-relaxed text-[#23292E]/75">Demandez à l'accueil les salles où cette pièce est présentée.</p>
        </div>
      </div>
    </div>
  );
}
