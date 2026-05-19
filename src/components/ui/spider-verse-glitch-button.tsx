import { Link } from 'react-router-dom';

type SpiderVerseGlitchButtonProps = {
  className?: string;
  label?: string;
  to?: string;
};

export const Component = ({
  className = '',
  label = 'CLICK ME',
  to,
}: SpiderVerseGlitchButtonProps) => {
  const content = (
    <>
      <span className="relative z-10">{label}</span>

      <span className="glitch-layers pointer-events-none absolute left-0 top-0 h-full w-full">
        <span className="glitch-layer layer-1 absolute left-0 top-0 flex h-full w-full origin-center items-center justify-center rounded-full bg-[#05070c] text-cyan-300 opacity-0 transition-all duration-150">
          {label}
        </span>
        <span className="glitch-layer layer-2 absolute left-0 top-0 flex h-full w-full origin-center items-center justify-center rounded-full bg-[#05070c] text-fuchsia-400 opacity-0 transition-all duration-150">
          {label}
        </span>
      </span>

      <span className="noise pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] opacity-0 transition-opacity duration-300" />
      <span className="glitch-slice pointer-events-none absolute h-[5px] w-[120%] bg-cyan-300 opacity-0" />
    </>
  );

  return (
    <div className={`button-wrapper group relative isolate inline-flex transform-gpu transition-transform duration-200 ease-out ${className}`}>
      {to ? (
        <Link
          className="spiderverse-button relative inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-transparent bg-[#05070c] px-7 py-4 font-sans text-[clamp(0.8rem,1vw,1.05rem)] font-black uppercase tracking-[0.08em] text-white no-underline shadow-[0_0_0_1px_rgba(217,70,239,0.28),0_0_24px_rgba(34,211,238,0.16)] transform-gpu transition-all duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost sm:px-8"
          to={to}
          aria-label={label}
        >
          {content}
        </Link>
      ) : (
        <button
          className="spiderverse-button relative inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full border-2 border-transparent bg-[#05070c] px-7 py-4 font-sans text-[clamp(0.8rem,1vw,1.05rem)] font-black uppercase tracking-[0.08em] text-white shadow-[0_0_0_1px_rgba(217,70,239,0.28),0_0_24px_rgba(34,211,238,0.16)] transform-gpu transition-all duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost sm:px-8"
          type="button"
          aria-label={label}
        >
          {content}
        </button>
      )}

      <style>{`
        .spiderverse-button {
          background:
            radial-gradient(circle at 18% 50%, rgba(34, 211, 238, 0.38), transparent 28%),
            radial-gradient(circle at 78% 45%, rgba(217, 70, 239, 0.42), transparent 30%),
            linear-gradient(110deg, rgba(0, 255, 255, 0.24), rgba(88, 80, 255, 0.18), rgba(255, 43, 214, 0.28), rgba(255, 220, 72, 0.16), rgba(0, 255, 255, 0.24)) padding-box,
            linear-gradient(105deg, #22d3ee, #7c3aed, #f0abfc, #facc15, #22d3ee) border-box;
          background-size: 180% 140%, 190% 150%, 320% 100%, 300% 100%;
          background-position: 0% 50%, 100% 50%, 0% 50%, 0% 50%;
          animation: gradientFlow 6s linear infinite;
          -webkit-text-stroke: 0.35px rgba(255, 255, 255, 0.72);
          text-shadow:
            0 0 1px rgba(255, 255, 255, 0.9),
            0 0 10px rgba(255, 255, 255, 0.42),
            0 0 18px rgba(34, 211, 238, 0.28);
        }

        .button-wrapper.hero-spiderverse-cta .spiderverse-button {
          min-height: clamp(3.45rem, 4.7vw, 4.15rem);
          padding: clamp(0.94rem, 1.24vw, 1.12rem) clamp(2.4rem, 4.1vw, 3.7rem);
          font-size: clamp(0.9rem, 1.14vw, 1.22rem);
          letter-spacing: 0.088em;
        }

        .button-wrapper.about-spiderverse-cta .spiderverse-button {
          min-height: clamp(3.35rem, 4vw, 3.8rem);
          padding: clamp(0.9rem, 1.05vw, 1rem) clamp(2.15rem, 3.6vw, 3rem);
          font-size: clamp(0.84rem, 1vw, 1.02rem);
        }

        .noise {
          background: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            rgba(255, 255, 255, 0.12) 1px,
            transparent 2px
          );
          animation: noise 0.2s steps(2) infinite;
        }

        .glitch-slice {
          animation: slice 3s linear infinite;
        }

        .button-wrapper:hover .layer-1 {
          opacity: 1;
          animation: glitchLayer1 0.4s steps(2) infinite;
        }

        .button-wrapper:hover .layer-2 {
          opacity: 1;
          animation: glitchLayer2 0.4s steps(2) infinite;
        }

        .button-wrapper:hover .spiderverse-button {
          animation:
            buttonGlitch 0.3s steps(2) infinite,
            gradientFlow 2.8s linear infinite;
          box-shadow:
            0 0 0 1px rgba(34, 211, 238, 0.82),
            0 0 20px rgba(34, 211, 238, 0.45),
            0 0 34px rgba(217, 70, 239, 0.42);
        }

        .button-wrapper:hover .noise {
          opacity: 1;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%, 100% 50%, 0% 50%, 0% 50%;
          }
          50% {
            background-position: 100% 50%, 0% 50%, 160% 50%, 150% 50%;
          }
          100% {
            background-position: 0% 50%, 100% 50%, 320% 50%, 300% 50%;
          }
        }

        @keyframes buttonGlitch {
          0% { transform: translate(0) scale(1.025); }
          25% { transform: translate(-3px, 2px) scale(1.035) skew(-1.5deg); }
          50% { transform: translate(3px, -2px) scale(1.025) skew(1.5deg); }
          75% { transform: translate(-4px, -1px) scale(1.02) skew(-1deg); }
          100% { transform: translate(0) scale(1.025); }
        }

        @keyframes glitchLayer1 {
          0% {
            transform: translate(-6px, -3px) scale(1.025) skew(-3deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
          25% {
            transform: translate(6px, 3px) scale(1.04) skew(3deg);
            clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
          }
          50% {
            transform: translate(-4px, 2px) scale(0.99) skew(-2deg);
            clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
          }
          75% {
            transform: translate(4px, -2px) scale(1.045) skew(2deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          100% {
            transform: translate(-6px, -3px) scale(1.025) skew(-3deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
        }

        @keyframes glitchLayer2 {
          0% {
            transform: translate(6px, 3px) scale(1.025) skew(3deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
          25% {
            transform: translate(-6px, -3px) scale(1.04) skew(-3deg);
            clip-path: polygon(0 60%, 100% 60%, 100% 90%, 0 90%);
          }
          50% {
            transform: translate(4px, -2px) scale(0.99) skew(2deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          75% {
            transform: translate(-4px, 2px) scale(1.045) skew(-2deg);
            clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
          }
          100% {
            transform: translate(6px, 3px) scale(1.025) skew(3deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
        }

        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(10%, 5%); }
          30% { transform: translate(-5%, 10%); }
          40% { transform: translate(15%, -5%); }
          50% { transform: translate(-10%, 15%); }
          60% { transform: translate(5%, -10%); }
          70% { transform: translate(-15%, 5%); }
          80% { transform: translate(10%, 10%); }
          90% { transform: translate(-5%, 15%); }
          100% { transform: translate(0, 0); }
        }

        @keyframes slice {
          0% { top: -10%; opacity: 0; }
          1% { opacity: 0.5; }
          3% { opacity: 0; }
          50% { top: 110%; }
          100% { top: 110%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .noise,
          .glitch-slice,
          .button-wrapper:hover .layer-1,
          .button-wrapper:hover .layer-2,
          .button-wrapper:hover .spiderverse-button {
            animation: none;
          }

          .spiderverse-button {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
