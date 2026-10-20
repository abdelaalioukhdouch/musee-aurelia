import { useEffect, useRef } from "react";
// Comportement d'une modale accessible : focus initial, fermeture par Échap, scroll de fond bloqué.
export default function useDialog(onClose) {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return focusRef;
}
