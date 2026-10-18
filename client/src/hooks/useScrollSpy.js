import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Returns the id of the section currently in view (used to highlight navbar links on the home page).
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const { pathname } = useLocation();

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return active;
}
