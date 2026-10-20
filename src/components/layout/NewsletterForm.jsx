import { useState } from "react";
import { Check } from "lucide-react";
import { SERIF, FOCUS } from "../../config/theme";

// Le traitement de l'inscription est injecté (onSubscribe) : brancher votre API sans toucher au composant.
export default function NewsletterForm({ onSubscribe = () => {} }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); onSubscribe(email); setSent(true); };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newsletter" className={`${SERIF} text-2xl font-semibold text-white`}>Recevoir l'agenda du musée</label>
      {sent ? (
        <p role="status" className="mt-4 flex items-center gap-2 text-[#D5B48A]"><Check size={18} aria-hidden /> Merci, vous êtes inscrit(e).</p>
      ) : (
        <div className="mt-4 flex">
          <input id="newsletter" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.fr"
            className={`w-full bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ${FOCUS}`} />
          <button type="submit" className={`bg-[#9C7549] px-5 text-white hover:bg-[#85613A] ${FOCUS}`}>S'inscrire</button>
        </div>
      )}
    </form>
  );
}
