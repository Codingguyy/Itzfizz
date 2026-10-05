"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsoLayoutEffect } from "../lib/useIsoLayoutEffect";
import Backdrop from "./Backdrop";
import Car from "./Car";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "WELCOME ITZFIZZ";

const STATS = [
  { value: 58, label: "Increase in pick up point use" },
  { value: 23, label: "Decrease in customer phone calls" },
  { value: 27, label: "Increase in pick up point use" },
  { value: 40, label: "Decrease in customer phone calls" },
];

export default function Hero() {
  const root = useRef(null);

  useIsoLayoutEffect(() => {
    const q = (sel) => root.current.querySelector(sel);
    const qa = (sel) => root.current.querySelectorAll(sel);

    
    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const car = q("[data-car]");
      const carW = () => car.getBoundingClientRect().width;
      const startX = () => -carW() * 0.12;
      const endX = () => window.innerWidth - carW() * 0.62;

      qa("[data-count]").forEach((el) => (el.textContent = "0"));
      gsap.set(car, { x: startX, force3D: true });
      gsap.set(root.current, { autoAlpha: 1 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from("[data-letter]", { y: 48, opacity: 0, duration: 1, stagger: 0.05 })
        .from("[data-stat]", { y: 28, opacity: 0, duration: 0.8, stagger: 0.25 }, "-=0.25")
        .from("[data-car]", { opacity: 0, duration: 0.9 }, 0.3)
        .from("[data-hint]", { opacity: 0, duration: 0.8 }, ">-0.3");

      qa("[data-count]").forEach((el, i) => {
        const counter = { v: 0 };
        intro.to(
          counter,
          {
            v: Number(el.dataset.count),
            duration: 1.3,
            ease: "power2.out",
            onUpdate: () => (el.textContent = Math.round(counter.v)),
          },
          1.15 + i * 0.25
        );
      });

      gsap.to("[data-body]", { y: -1.5, duration: 0.18, ease: "sine.inOut", yoyo: true, repeat: -1 });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=220%",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })
        .to(car, { x: endX, duration: 1 }, 0)
        .to("[data-wheel]", { rotation: 1440, duration: 1 }, 0)
        .to("[data-road]", { backgroundPositionX: "-1200px", duration: 1 }, 0)
        .to("[data-sky-near]", { x: "-30%", duration: 1 }, 0)
        .to("[data-sky-far]", { x: "-14%", duration: 1 }, 0)
        .to("[data-stars]", { x: -60, duration: 1 }, 0)
        .to("[data-beam]", { opacity: 1, duration: 0.35 }, 0.05)
        .to("[data-speed]", { opacity: 0.8, duration: 0.3 }, 0.1)
        .to(car, { scale: 1.12, duration: 0.5, ease: "power1.inOut", yoyo: true, repeat: 1 }, 0)
        .to("[data-title]", { y: -36, opacity: 0.3, duration: 1 }, 0)
        .to("[data-stats]", { y: -24, duration: 1 }, 0)
        .to("[data-hint]", { opacity: 0, duration: 0.1 }, 0)
        .to("[data-progress]", { scaleX: 1, duration: 1 }, 0);
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(root.current, { autoAlpha: 1 });
      gsap.set("[data-car]", { x: () => window.innerWidth * 0.3 });
      gsap.set("[data-beam]", { opacity: 1 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      data-hero
      className="relative flex h-screen min-h-[560px] flex-col items-center overflow-hidden px-6"
    >
      <Backdrop />

      <div
        data-progress
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 h-[3px] w-full origin-left scale-x-0 bg-accent"
      />

      <h1
        data-title
        aria-label="Welcome Itzfizz"
        className="relative z-10 mt-[11vh] text-center text-[clamp(1.25rem,5vw,4rem)] font-light leading-tight tracking-[0.35em]"
      >
        {HEADLINE.split("").map((ch, i) =>
          ch === " " ? (
            <span key={i} aria-hidden="true" className="inline-block w-[1.4ch]" />
          ) : (
            <span key={i} data-letter aria-hidden="true" className="inline-block will-change-transform">
              {ch}
            </span>
          )
        )}
      </h1>

      <ul
        data-stats
        className="relative z-10 mt-8 grid max-w-4xl list-none grid-cols-2 gap-x-8 gap-y-5 p-0 text-center md:mt-10 md:grid-cols-4 md:gap-x-10"
      >
        {STATS.map((s, i) => (
          <li key={i} data-stat>
            <p className="text-3xl font-bold text-accent md:text-5xl">
              <span data-count={s.value}>{s.value}</span>%
            </p>
            <p className="mt-1 text-xs text-muted md:text-sm">{s.label}</p>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[1] h-[34vh] bg-road">
        <div
          data-road
          className="absolute inset-x-0 top-1/2 h-[3px] opacity-60"
          style={{ background: "repeating-linear-gradient(90deg,#f2efe8 0 40px,transparent 40px 90px)" }}
        />
      </div>

      <div className="contents [&_svg]:z-[2]">
        <Car />
      </div>

      <p data-hint className="absolute bottom-4 z-10 text-xs tracking-[0.3em] text-muted">
        SCROLL
      </p>
    </section>
  );
}
