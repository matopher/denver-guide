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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          fill="currentColor"
          className="mx-auto mb-4 size-10 text-cream/70 sm:size-12"
          aria-hidden
        >
          <path d="M144,52a20,20,0,1,1,20,20A20,20,0,0,1,144,52Zm49.44,55.92a8,8,0,0,0-13.77,0l-33,55.75-21-35.67H50.35L8,200H248Z" opacity="0.2" />
          <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l33,56Zm150.57,0-16.66-28.28L186.55,112,234,192Z" />
        </svg>

        <h1 className="font-display text-5xl font-semibold tracking-[0.04em] text-cream uppercase text-balance sm:text-6xl">
          Hey, Denver!
        </h1>

        <div className="mx-auto mt-5 flex max-w-xl items-center gap-x-5 px-4">
          <span className="h-px flex-1 bg-cream/25" />
          <span className="shrink-0 font-hand text-sm font-medium uppercase tracking-[0.12em] text-cream/60 sm:text-base">
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
