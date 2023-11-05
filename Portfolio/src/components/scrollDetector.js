import React, { useEffect, useState } from "react";

const scrollDetector = (wrappedComponent) => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("");
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(currentScrollTop > lastScrollTop){
          setScrollDirection("down");
        }else{
          setScrollDirection("up")
        }
        setLastScrollTop(currentScrollTop);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollTop]);
    return <wrappedComponent {...props} maxHeight={scrollDirection === "down"? 0 : "1280px" }/>
};

export default scrollDetector;
