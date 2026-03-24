import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.locoScroll) {
      window.locoScroll.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
      window.locoScroll.update();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
