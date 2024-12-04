import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// komponenterne
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import LinkedInSection from "./components/LinkedInSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import CaseSection from "./components/CaseSection";
import ContactForm from "./components/ContactForm";
import FabButton from "./components/FabButton"; 

//siderne
import Temagrupper from "./pages/Temagrupper";
import MetodeudviklingOgInnovation from "./pages/Metodeudvikling_og_innovation";
import Materialer from "./pages/Materialer"; 
import OmOs from "./pages/Om_os/Om_os"; 

//om os undersider
import Medlemskab from "./pages/Om_os/Medlemskab";
import Organisation from "./pages/Om_os/Organisation";
import Samarbejdspartnere from "./pages/Om_os/Samarbejdspartnere";
import Strategi20212030 from "./pages/Om_os/Strategi_2021_2030";
import Vedtaegter from "./pages/Om_os/Vedtægter";
import WHOHealthyCrisis from "./pages/Om_os/WHO_healthy_crisis";

// Projekter
import ABCForMentalSundhed from "./pages/Metodeudvikling_og_innovation/ABC_for_mental_sundhed";
import Alkoholkursus from "./pages/Metodeudvikling_og_innovation/Alkoholkursus_om_tidlig_opsporing";
import ByensRum from "./pages/Metodeudvikling_og_innovation/Byens_rum_livet_mellem_husene_2018_2020";
import Hybridseminar from "./pages/Metodeudvikling_og_innovation/Hybridseminar_og_mental_sundhed";
import KropOgBevaegelse from "./pages/Metodeudvikling_og_innovation/Krop_og_bevaegelse_i_naturens_rige";
import KulturensRige from "./pages/Metodeudvikling_og_innovation/Kulturens_rige";
import LAKS from "./pages/Metodeudvikling_og_innovation/LAKS";
import NaturensRige from "./pages/Metodeudvikling_og_innovation/Naturens_rige";
import NaturfriskeFaellesskaber from "./pages/Metodeudvikling_og_innovation/Naturfriske_faellesskaber";
import NetvaerkForFaellesskabsagenter from "./pages/Metodeudvikling_og_innovation/Netvaerk_for_faellesskabsagenter";
import NetvaerkForInnovationsagenter from "./pages/Metodeudvikling_og_innovation/Netvaerk_for_innovationsagenter";
import NuErAnsvaretDit from "./pages/Metodeudvikling_og_innovation/Nu_er_ansvaret_dit";
import OvervaegtOgAfstigmatisering from "./pages/Metodeudvikling_og_innovation/Overvaegt_og_afstigmatisering_en_formidlingsguide";
import RekrutteringTilEvidensbaseretRygestop from "./pages/Metodeudvikling_og_innovation/Rekruttering_til_evidensbaseret_rygestop";
import RygestopPaaDitSprog from "./pages/Metodeudvikling_og_innovation/Rygestop_paa_dit_sprog";
import SocioOekonomi from "./pages/Metodeudvikling_og_innovation/Socio_oekonomi";
import SundeBorgere from "./pages/Metodeudvikling_og_innovation/Sunde_borgere_fra_kommune_til_kommune";
import SundhedsKonsekvensvurdering from "./pages/Metodeudvikling_og_innovation/Sundheds_konsekvensvurdering";
import SundhedsfremmePaaErhvervsOgProduktionsskoler from "./pages/Metodeudvikling_og_innovation/Sundhedsfremme_paa_erhvervs_og_produktionsskoler";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/bachelor/wp-json/wp/v2/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <Router>
      <Header />
      <div>
        <Routes>

          {/* stierne til forsides komponenter */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <LinkedInSection />
                <Testimonials />
                <CaseSection />
                <Newsletter />
                <ContactForm />
              </>
            }
          />

          {/* stierne til navigationsbaren */}
          <Route path="/temagrupper" element={<Temagrupper />} />
          <Route path="/metodeudvikling-og-innovation" element={<MetodeudviklingOgInnovation />} />
          <Route path="/materialer" element={<Materialer />} />
          <Route path="/Om_os/Om_os" element={<OmOs />} />

          {/* stierne til om os dropdown */}
          <Route path="/om-os" element={<OmOs />} />
          <Route path="/om-os/organisation" element={<Organisation />} />
          <Route path="/om-os/medlemskab" element={<Medlemskab />} />
          <Route path="/om-os/samarbejdspartnere" element={<Samarbejdspartnere />} />
          <Route path="/om-os/strategi-2021-2030" element={<Strategi20212030 />} />
          <Route path="/om-os/vedtaegter" element={<Vedtaegter />} />
          <Route path="/om-os/who-healthy-crisis" element={<WHOHealthyCrisis />} />


          {/* Routes for individual project pages */}
          <Route path="/Metodeudvikling_og_innovation/ABC_for_mental_sundhed" element={<ABCForMentalSundhed />} />
          <Route path="/Metodeudvikling_og_innovation/Alkoholkursus_om_tidlig_opsporing" element={<Alkoholkursus />} />
          <Route path="/Metodeudvikling_og_innovation/Byens_rum_livet_mellem_husene_2018_2020" element={<ByensRum />} />
          <Route path="/Metodeudvikling_og_innovation/Hybridseminar_og_mental_sundhed" element={<Hybridseminar />} />
          <Route path="/Metodeudvikling_og_innovation/Krop_og_bevaegelse_i_naturens_rige" element={<KropOgBevaegelse />} />
          <Route path="/Metodeudvikling_og_innovation/Kulturens_rige" element={<KulturensRige />} />
          <Route path="/Metodeudvikling_og_innovation/LAKS" element={<LAKS />} />
          <Route path="/Metodeudvikling_og_innovation/Naturens_rige" element={<NaturensRige />} />
          <Route path="/Metodeudvikling_og_innovation/Naturfriske_faellesskaber" element={<NaturfriskeFaellesskaber />} />
          <Route path="/Metodeudvikling_og_innovation/Netvaerk_for_faellesskabsagenter" element={<NetvaerkForFaellesskabsagenter />} />
          <Route path="/Metodeudvikling_og_innovation/Netvaerk_for_innovationsagenter" element={<NetvaerkForInnovationsagenter />} />
          <Route path="/Metodeudvikling_og_innovation/Nu_er_ansvaret_dit" element={<NuErAnsvaretDit />} />
          <Route path="/Metodeudvikling_og_innovation/Overvaegt_og_afstigmatisering_en_formidlingsguide" element={<OvervaegtOgAfstigmatisering />} />
          <Route path="/Metodeudvikling_og_innovation/Rekruttering_til_evidensbaseret_rygestop" element={<RekrutteringTilEvidensbaseretRygestop />} />
          <Route path="/Metodeudvikling_og_innovation/Rygestop_paa_dit_sprog" element={<RygestopPaaDitSprog />} />
          <Route path="/Metodeudvikling_og_innovation/Socio_oekonomi" element={<SocioOekonomi />} />
          <Route path="/Metodeudvikling_og_innovation/Sunde_borgere_fra_kommune_til_kommune" element={<SundeBorgere />} />
          <Route path="/Metodeudvikling_og_innovation/Sundheds_konsekvensvurdering" element={<SundhedsKonsekvensvurdering />} />
          <Route path="/Metodeudvikling_og_innovation/Sundhedsfremme_paa_erhvervs_og_produktionsskoler" element={<SundhedsfremmePaaErhvervsOgProduktionsskoler />} />
        </Routes>
      </div>
      <Footer />
      <FabButton />
    </Router>
  );
}

export default App;
