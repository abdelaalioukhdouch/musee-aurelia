import { FOCUS } from "../../config/theme";
// Ajouter une variante = ajouter une entrée ici.
const VARIANTS = {
  solid: "bg-[#9C7549] text-white hover:bg-[#85613A]",
  ghost: "border border-white/70 text-white hover:bg-white/10",
  dark: "bg-[#23292E] text-[#F6F1E7] hover:bg-black",
};
export default function Button({ href = "#", variant = "solid", children, ...props }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors ${VARIANTS[variant]} ${FOCUS}`} {...props}>
      {children}
    </a>
  );
}
