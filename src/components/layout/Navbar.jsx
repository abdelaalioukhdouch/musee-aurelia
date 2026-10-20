import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import useScrolled from "../../hooks/useScrolled";
import { SERIF, FOCUS } from "../../config/theme";

// Barre de navigation fixe + menu burger mobile. Reçoit le nom et les liens en props.
export default function Navbar({ brand, links }) {
  const [open, setOpen] = useState(false);
  const solid = useScrolled(40) || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${solid ? "bg-[#23292E] shadow-lg" : "bg-gradient-to-b from-black/60 to-transparent"}`}>
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className={`${SERIF} text-2xl font-semibold tracking-wide text-white ${FOCUS}`}>{brand}</a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className={`text-sm text-white/85 transition-colors hover:text-[#D5B48A] ${FOCUS}`}>{l.label}</a></li>
          ))}
          <li><Button href="#billetterie">Réserver un billet</Button></li>
        </ul>
        <button className={`p-2 text-white lg:hidden ${FOCUS}`} onClick={() => setOpen(!open)}
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 px-5 pb-6 pt-3 lg:hidden">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className={`block py-3 text-lg text-white ${FOCUS}`}>{l.label}</a></li>
          ))}
          <li className="pt-3"><Button href="#billetterie">Réserver un billet</Button></li>
        </ul>
      )}
    </header>
  );
}
