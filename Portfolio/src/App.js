import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(currentScrollTop > lastScrollTop){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          {isVisible ? <></> : <Header />}
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
