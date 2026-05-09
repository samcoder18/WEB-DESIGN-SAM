import { Fragment, useEffect, useMemo, useState, type CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

type RevealGlyph = {
  id: string;
  index: number;
  value: string;
};

type RevealWord = {
  glyphs: RevealGlyph[];
  id: string;
};

type RevealModel = {
  totalGlyphs: number;
  words: RevealWord[];
};

type HorizontalCharacterRevealProps = {
  className?: string;
  progress: MotionValue<number>;
  text: string;
};

function buildRevealModel(text: string): RevealModel {
  let glyphIndex = 0;

  const words = text
    .trim()
    .split(/\s+/)
    .map((word, wordIndex) => ({
      id: `${wordIndex}-${word}`,
      glyphs: Array.from(word).map((value, characterIndex) => ({
        id: `${wordIndex}-${characterIndex}-${value}`,
        index: glyphIndex++,
        value,
      })),
    }));

  return {
    totalGlyphs: glyphIndex,
    words,
  };
}

export function HorizontalCharacterReveal({
  className,
  progress,
  text,
}: HorizontalCharacterRevealProps) {
  const model = useMemo(() => buildRevealModel(text), [text]);
  const [activeGlyphCount, setActiveGlyphCount] = useState(0);

  useEffect(() => {
    const syncReveal = (latest: number) => {
      const nextCount = Math.max(0, Math.min(model.totalGlyphs, Math.floor(latest * model.totalGlyphs)));

      setActiveGlyphCount((currentCount) => (currentCount === nextCount ? currentCount : nextCount));
    };

    syncReveal(progress.get());

    const unsubscribe = progress.on('change', syncReveal);
    return unsubscribe;
  }, [model.totalGlyphs, progress]);

  return (
    <p className={className} aria-label={text}>
      {model.words.map((word, wordIndex) => (
        <Fragment key={word.id}>
          <span className="about-manifesto-word">
            {word.glyphs.map((glyph) => (
              <span
                key={glyph.id}
                aria-hidden="true"
                className={`about-manifesto-glyph${glyph.index < activeGlyphCount ? ' is-active' : ''}`}
                style={{ '--reveal-index': glyph.index } as CSSProperties}
              >
                {glyph.value}
              </span>
            ))}
          </span>
          {wordIndex < model.words.length - 1 ? (
            <span className="about-manifesto-space" aria-hidden="true">
              {' '}
            </span>
          ) : null}
        </Fragment>
      ))}
    </p>
  );
}
