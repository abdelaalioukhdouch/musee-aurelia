// Service d'images : charge tout src/images (jpg, jpeg, jpe, png) et les retrouve par nom de fichier.
// La recherche ignore la casse. Image introuvable => placeholder (le site ne casse jamais).
const files = import.meta.glob("../images/*.{jpg,jpeg,jpe,png,JPG,JPEG,JPE,PNG}", {
  eager: true,
  import: "default",
});

const registry = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().toLowerCase(), url])
);

export const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'><rect width='4' height='3' fill='#CFC4AE'/></svg>");

export const resolveImage = (name) => registry[String(name ?? "").toLowerCase()] ?? PLACEHOLDER;
