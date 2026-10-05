import { seeded } from "../lib/seeded";

function buildings(seed, count, minH, maxH, fill) {
  const rnd = seeded(seed);
  let x = 0;
  const rects = [];
  for (let i = 0; i < count; i++) {
    const w = 50 + Math.floor(rnd() * 70);
    const h = minH + Math.floor(rnd() * (maxH - minH));
    rects.push(<rect key={i} x={x} y={220 - h} width={w} height={h} fill={fill} />);
    x += w + Math.floor(rnd() * 8);
  }
  return rects;
}

function Skyline({ seed, minH, maxH, fill, dataKey, className }) {
  return (
    <svg
      {...{ [dataKey]: "" }}
      aria-hidden="true"
      viewBox="0 0 2400 220"
      preserveAspectRatio="none"
      className={`absolute bottom-[34vh] left-0 w-[200%] will-change-transform ${className}`}
    >
      {buildings(seed, 34, minH, maxH, fill)}
    </svg>
  );
}

function Stars() {
  const rnd = seeded(7);
  return (
    <div data-stars aria-hidden="true" className="absolute inset-0">
      {Array.from({ length: 40 }, (_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-ink"
          style={{
            left: `${(rnd() * 100).toFixed(2)}%`,
            top: `${(rnd() * 55).toFixed(2)}%`,
            width: 2,
            height: 2,
            opacity: (0.25 + rnd() * 0.5).toFixed(2),
          }}
        />
      ))}
    </div>
  );
}

export default function Backdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 80% at 50% 100%, #2a1a1f 0%, #14171e 45%, #0e1116 100%)" }}
      />
      <Stars />
      <Skyline seed={3} minH={60} maxH={140} fill="#171b23" dataKey="data-sky-far" className="h-[22vh]" />
      <Skyline seed={11} minH={30} maxH={90} fill="#1f242e" dataKey="data-sky-near" className="h-[14vh]" />
    </>
  );
}
