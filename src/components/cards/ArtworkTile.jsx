import SmartImage from "../ui/SmartImage";
import { SERIF, FOCUS } from "../../config/theme";

// Vignette d'une pièce : l'overlay (origine + époque) apparaît au survol ET au focus clavier.
export default function ArtworkTile({ artwork, onSelect }) {
  const { title, artist, year, image } = artwork;
  return (
    <button onClick={() => onSelect(artwork)} aria-label={`${title}, ${artist}, ${year} : voir le détail`} className={`group relative h-full w-full overflow-hidden ${FOCUS}`}>
      <SmartImage name={image} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className={`${SERIF} text-2xl font-semibold text-white`}>{artist}</span>
        <span className="text-sm text-[#D5B48A]">{title}, {year}</span>
      </span>
    </button>
  );
}
