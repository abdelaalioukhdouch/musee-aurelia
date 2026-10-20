import { resolveImage } from "../../services/imageService";
// Remplace <img> : reçoit un nom de fichier (ex. "jarre.jpg") au lieu d'une URL.
export default function SmartImage({ name, alt = "", ...props }) {
  return <img src={resolveImage(name)} alt={alt} {...props} />;
}
