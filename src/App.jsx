// App.jsx : composition uniquement. Les données sont injectées dans les sections par props.
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Exhibitions from "./components/sections/Exhibitions";
import Collection from "./components/sections/Collection";
import PracticalInfo from "./components/sections/PracticalInfo";
import * as data from "./data/museumData";

export default function App() {
  return (
    <div className="bg-[#F6F1E7] font-['Inter',system-ui,sans-serif] text-[#23292E] antialiased">
      <a href="#expositions" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Aller au contenu</a>
      <Navbar brand={data.MUSEUM.name} links={data.NAV_LINKS} />
      <main>
        <Hero museum={data.MUSEUM} hours={data.QUICK_HOURS} />
        <Exhibitions exhibitions={data.EXHIBITIONS} filters={data.EXHIBITION_FILTERS} statusLabels={data.STATUS_LABELS} />
        <Collection artworks={data.MASTERPIECES} />
        <PracticalInfo info={data.PRACTICAL_INFO} />
      </main>
      <Footer museum={data.MUSEUM} links={data.FOOTER_LINKS} legalLinks={data.LEGAL_LINKS} />
    </div>
  );
}
