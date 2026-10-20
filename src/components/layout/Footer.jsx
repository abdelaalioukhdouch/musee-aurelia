import { Instagram, Facebook, Youtube } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { SERIF, FOCUS } from "../../config/theme";

const SOCIALS = [{ Icon: Instagram, name: "Instagram" }, { Icon: Facebook, name: "Facebook" }, { Icon: Youtube, name: "YouTube" }];
const link = `hover:text-[#D5B48A] ${FOCUS}`;

// Pied de page : identité, réseaux, liens rapides, newsletter, mentions légales.
export default function Footer({ museum, links, legalLinks, onSubscribe }) {
  return (
    <footer className="bg-[#1A1F23] text-[#F6F1E7]/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className={`${SERIF} text-3xl font-semibold text-white`}>{museum.name}</p>
          <p className="mt-2">{museum.tagline}</p>
          <div className="mt-6 flex gap-4">
            {SOCIALS.map(({ Icon, name }) => <a key={name} href="#" aria-label={name} className={`p-2 ${link}`}><Icon size={22} /></a>)}
          </div>
        </div>
        <nav aria-label="Liens rapides">
          <ul className="grid grid-cols-2 gap-3">{links.map((l) => <li key={l}><a href="#" className={link}>{l}</a></li>)}</ul>
        </nav>
        <NewsletterForm onSubscribe={onSubscribe} />
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-sm">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2">
          <li>© {new Date().getFullYear()} {museum.name}</li>
          {legalLinks.map((l) => <li key={l}><a href="#" className={link}>{l}</a></li>)}
        </ul>
      </div>
    </footer>
  );
}
