// import { ScrollworkBorder } from "./ornaments";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-[480px]">
        {/* Unicorn crest */}
        <div className="text-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/unicorn-dark.png"
            alt="Jeffersonian crest"
            className="inline-block w-[100px] h-auto dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/unicorn-white.png"
            alt="Jeffersonian crest"
            className="hidden w-[100px] h-auto dark:inline-block"
          />
        </div>

        {/* Ornamental border */}
        {/* <div className="mb-8">
          <ScrollworkBorder />
        </div> */}

        {/* Title */}
        <h1
          className="text-center text-[22px] mb-10"
          style={{
            fontFamily: 'var(--font-eb-garamond), serif',
            fontVariant: 'small-caps',
          }}
        >
          <span className="">J</span>effersonian
        </h1>

        {/* Body */}
        <div
          className="space-y-5 text-[13.5px] leading-[1.85] text-[var(--text)] text-justify"
          style={{ fontFamily: 'var(--font-eb-garamond), serif' }}
        >
          <p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/j-dropcap.svg"
              alt="J"
              className="float-left w-[75px] h-[65px] mr-3 mt-[5px] dark:invert"
            />
            EFFERSONIAN is a private intellectual and social institution in New
            York City that convenes a small number of outlier thinkers and
            builders for conversation and community. It draws on three
            precedents: the Jeffersonian dinner, the 1920s Viennese coffee
            house, and the contemporary peer network of Prod. Together, these
            influences shape an institution that combines structured salons
            built around consequential questions with a broader culture of
            dynamism and pragmatic synthesis.
          </p>

          <p>
            Through intentional discussion, cross-disciplinary exposure, and a
            culture that values candor, rigor, and mutual respect, Jeffersonian
            revives a tradition that once played a quiet but critical role in
            intellectual and civic life — small groups of committed individuals
            meeting regularly to sharpen ideas, challenge assumptions, and
            better understand the world and their place in it. The atmosphere is
            deliberately anachronistic: intimate, composed, and intellectually
            alive, rewarding depth, independence of mind, and seriousness of
            purpose.
          </p>

          <p>
            New York has no shortage of private clubs. But most function as
            hedonistic signaling environments — beautiful spaces optimized for
            &ldquo;status&rdquo; and debauchery, rather than sustained
            intellectual life. There exists an inefficiency: many outlier
            curious and intellectually serious people have no physical place in
            the city designed specifically for them. Jeffersonian exists to fill
            that space — an institution organized around conversation, ideas,
            and those exceptional people drawn to them.
          </p>
        </div>

        {/* Epigraph */}
        <p
          className="text-center text-[12.5px] italic text-[var(--text)] tracking-wide mt-12"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          Deus ventum praebet, homo vela tolli debet.
        </p>

        <p
          className="text-center text-[10px] tracking-[0.3em] text-[var(--text)] uppercase mt-10"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          New York
        </p>
      </div>
    </main>
  );
}
