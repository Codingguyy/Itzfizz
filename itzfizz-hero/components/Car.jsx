function Wheel({ cx }) {
  return (
    <g>
      <circle cx={cx} cy="108" r="30" fill="#0a0c10" />
      <g data-wheel style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}>
        <circle cx={cx} cy="112" r="25" fill="#16191f" />
        <circle cx={cx} cy="112" r="15" fill="url(#rim)" />
        {[0, 60, 120].map((a) => (
          <rect key={a} x={cx - 1.5} y="98" width="3" height="28" fill="#5b616c" transform={`rotate(${a} ${cx} 112)`} />
        ))}
        <circle cx={cx} cy="112" r="4" fill="#0a0c10" />
      </g>
    </g>
  );
}

export default function Car() {
  return (
    <svg
      data-car
      viewBox="0 0 700 150"
      role="img"
      aria-label="A red car driving along the road"
      className="absolute bottom-[13vh] left-0 w-[min(80vw,680px)] will-change-transform"
    >
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8a5c" />
          <stop offset="0.55" stopColor="#ff5a36" />
          <stop offset="1" stopColor="#c8321a" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e4f3fb" />
          <stop offset="1" stopColor="#6f93aa" />
        </linearGradient>
        <radialGradient id="rim" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e6e9ee" />
          <stop offset="1" stopColor="#7d8491" />
        </radialGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe9a8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="270" cy="142" rx="215" ry="6" fill="#000" opacity="0.45" />

      {/* speed lines (fade in with scroll) */}
      <g data-speed opacity="0" stroke="#f2efe8" strokeWidth="2" strokeLinecap="round">
        <line x1="4" y1="70" x2="58" y2="70" />
        <line x1="14" y1="88" x2="64" y2="88" />
        <line x1="2" y1="106" x2="50" y2="106" />
      </g>

      <g transform="translate(70 0)"><g data-body>
        {/* headlight beam */}
        <polygon data-beam opacity="0" points="384,82 630,36 630,128" fill="url(#beam)" />

        {/* body */}
        <path
          d="M20 100 L40 70 Q50 55 75 52 L135 48 Q165 18 215 18 L270 20 Q305 30 322 58 L360 66 Q384 72 384 96 L384 112 L20 112 Z"
          fill="url(#body)"
        />
        {/* window + pillar */}
        <path d="M150 50 Q172 28 212 28 L262 30 Q288 38 302 58 L150 58 Z" fill="url(#glass)" />
        <rect x="212" y="28" width="6" height="30" fill="#c8321a" />
        {/* door line, handle, lights */}
        <path d="M205 60 L205 108" stroke="#a82a15" strokeWidth="2" />
        <rect x="222" y="72" width="22" height="4" rx="2" fill="#a82a15" />
        <rect x="370" y="76" width="14" height="9" rx="3" fill="#fff3c4" />
        <rect x="20" y="78" width="10" height="9" rx="2" fill="#ff2a2a" />

        <Wheel cx={95} />
        <Wheel cx={305} />
        </g>
      </g>
    </svg>
  );
}
