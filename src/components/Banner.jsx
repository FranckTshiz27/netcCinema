import Navbar from "./Navbar";
import CarrousselBanner from "./CarrousselBanner";
import InputFilter from "./InputFilter";
import { useEffect, useState } from "react";

function Banner(props) {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(props.visibility);
    console.log(" visibility " + props.visibility);
    return function () {
      setVisibility(false);
    };
  }, [visibility]);

  const ipFilter = visibility ? <InputFilter /> : "";

  return (
    <section className="banner-background">
      <section className="banner">
        <div className="banner__title">
          Bienvenue,
          <div className="banner__title__subTitle">
            Des millions de <em>films</em> ,<em>séries</em> télévisées et
            <em> acteurs</em> ...
          </div>
        </div>
        <InputFilter></InputFilter>
      </section>
    </section>
  );
}

export default Banner;
