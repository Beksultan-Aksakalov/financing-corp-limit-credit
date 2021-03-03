import React from "react";
import { useTranslation } from "react-i18next";
import { animateScroll } from "react-scroll";
import {
  Banner,
  Benefits,
  Tabs,
  Form,
  Starbusiness,
  CallUs,
  Footer,
} from "./components";

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = React.useState(i18n.language ? i18n.language : "ru");
  const handleLangChange = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const formRef: any = React.useRef(null);
  const scrollToPostForm = () => {
    console.log(formRef);
    animateScroll.scrollTo(formRef.current.offsetTop);
  };

  return (
    <div>
      <Banner
        scrollToForm={scrollToPostForm}
        lang={lang}
        changeLang={handleLangChange}
      />
      <Benefits />
      <Tabs lang={lang} />
      <Form scrollToForm={scrollToPostForm} refProp={formRef} lang={lang} />
      <Starbusiness />
      <CallUs />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
