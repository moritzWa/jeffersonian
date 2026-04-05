export function ScrollworkBorder() {
  return (
    <div className="flex items-center justify-center gap-1">
      {/* Left half - flipped 180deg */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/divider.svg"
        alt=""
        className="w-[45%] h-auto rotate-180"
      />
      {/* Right half - flipped 180deg + mirrored horizontally */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/divider.svg"
        alt=""
        className="w-[45%] h-auto -scale-x-100 rotate-180"
      />
    </div>
  );
}

