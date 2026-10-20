import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ArtworkTile from "../cards/ArtworkTile";
import ArtworkModal from "../cards/ArtworkModal";

// Grille de pièces + modale de détail (l'état "pièce sélectionnée" vit ici).
export default function Collection({ artworks }) {
  const [selected, setSelected] = useState(null);
  return (
    <section id="collections" className="scroll-mt-16 bg-[#23292E] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading tone="dark" title="Pièces choisies de la collection" intro="Six poteries du Rif et du Pré-Rif, du XIXᵉ siècle à nos jours." />
        <ul className="grid auto-rows-[260px] grid-cols-2 gap-3 md:grid-cols-3">
          {artworks.map((a) => <li key={a.id} className={a.span}><ArtworkTile artwork={a} onSelect={setSelected} /></li>)}
        </ul>
      </div>
      {selected && <ArtworkModal artwork={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
