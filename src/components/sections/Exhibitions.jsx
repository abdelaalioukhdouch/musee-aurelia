import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ExhibitionCard from "../cards/ExhibitionCard";
import { FOCUS } from "../../config/theme";

// Barre de filtres : ne connaît que la liste de filtres et la sélection courante.
function FilterBar({ filters, value, onChange }) {
  return (
    <div className="mb-10 flex gap-2" role="group" aria-label="Filtrer les expositions">
      {filters.map((f) => (
        <button key={f.id} onClick={() => onChange(f.id)} aria-pressed={value === f.id}
          className={`border px-5 py-2 text-sm transition-colors ${FOCUS} ${value === f.id ? "border-[#23292E] bg-[#23292E] text-[#F6F1E7]" : "border-[#23292E]/30 text-[#23292E] hover:border-[#23292E]"}`}>
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default function Exhibitions({ exhibitions, filters, statusLabels }) {
  const [filter, setFilter] = useState("all");
  const visible = exhibitions.filter((e) => filter === "all" || e.status === filter);
  return (
    <section id="expositions" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-24 lg:px-8">
      <SectionHeading title="Expositions" intro="Deux expositions à voir dès maintenant, deux autres annoncées pour la saison prochaine." />
      <FilterBar filters={filters} value={filter} onChange={setFilter} />
      <div className="grid gap-8 md:grid-cols-2">
        {visible.map((e) => <ExhibitionCard key={e.id} exhibition={e} statusLabel={statusLabels[e.status]} />)}
      </div>
    </section>
  );
}
