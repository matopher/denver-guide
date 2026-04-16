export function Header() {
  return (
    <header className="relative mb-14 overflow-visible bg-forest pt-10 pb-12 text-center sm:pt-14 sm:pb-14">
      {/* torn paper edge */}
      <svg
        className="absolute -bottom-px left-0 h-6 w-full text-parchment sm:h-8"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 32 L0 14 Q15 18 30 12 Q50 4 70 10 Q90 16 110 8 Q130 2 150 10 Q170 17 190 9 Q210 3 230 11 Q250 18 270 7 Q290 1 310 12 Q330 19 350 10 Q370 3 390 13 Q410 20 430 8 Q450 2 470 11 Q490 17 510 6 Q530 0 550 12 Q570 20 590 9 Q610 2 630 14 Q650 21 670 7 Q690 1 710 11 Q730 18 750 8 Q770 2 790 13 Q810 19 830 6 Q850 0 870 12 Q890 20 910 9 Q930 2 950 14 Q970 19 990 7 Q1010 1 1030 11 Q1050 18 1070 8 Q1090 2 1110 13 Q1130 20 1150 9 Q1170 3 1200 12 L1200 32 Z" />
      </svg>

      <div className="relative z-10">
        <div className="mx-auto mb-6 flex w-40 items-center gap-x-2">
          <span className="h-px flex-1 bg-cream/30" />
          <span className="size-1.5 rotate-45 bg-cream/40" />
          <span className="h-px flex-1 bg-cream/30" />
        </div>

        <p className="font-hand text-xs font-semibold uppercase tracking-[0.2em] text-cream/60 sm:text-sm">
          est. 2024 &middot; mile high &middot; co
        </p>

        <h1 className="mt-2 font-display text-5xl font-extrabold tracking-[0.08em] text-cream uppercase sm:text-6xl">
          Hey, Denver!
        </h1>

        <div className="mx-auto mt-4 flex max-w-md items-center gap-x-4 px-6">
          <span className="h-px flex-1 bg-cream/25" />
          <span className="font-hand text-xs font-medium uppercase tracking-[0.15em] text-cream/60 sm:text-sm">
            a field companion to eat, drink &amp; wander
          </span>
          <span className="h-px flex-1 bg-cream/25" />
        </div>

        <div className="mx-auto mt-8 flex w-40 items-center gap-x-2">
          <span className="h-px flex-1 bg-cream/30" />
          <span className="size-1.5 rotate-45 bg-cream/40" />
          <span className="h-px flex-1 bg-cream/30" />
        </div>
      </div>
    </header>
  );
}
