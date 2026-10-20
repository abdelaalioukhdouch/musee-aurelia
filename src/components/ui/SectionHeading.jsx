import { SERIF } from "../../config/theme";
const TONES = { light: ["text-[#23292E]", "text-[#23292E]/75"], dark: ["text-[#F6F1E7]", "text-[#F6F1E7]/75"] };
export default function SectionHeading({ title, intro, tone = "light" }) {
  const [titleColor, introColor] = TONES[tone];
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className={`${SERIF} text-4xl font-medium sm:text-5xl ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
}
