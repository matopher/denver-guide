export function Header() {
  return (
    <header className="contour-bg relative mb-14 overflow-hidden border-b border-forest/30 pt-10 pb-8 text-center sm:pt-14 sm:pb-10">
      <div className="rule-triple mx-auto mb-6 w-40 opacity-70" />

      <p className="font-hand text-base text-pine sm:text-lg">
        est. 2024 &middot; mile high &middot; co
      </p>

      <h1 className="mt-2 font-display text-5xl font-extrabold tracking-[0.08em] text-forest uppercase sm:text-6xl">
        The Denver Guide
      </h1>

      <div className="mx-auto mt-4 flex max-w-md items-center gap-x-4 px-6">
        <span className="h-px flex-1 bg-forest/30" />
        <span className="font-hand text-sm text-brown sm:text-base">
          a field companion to eat, drink &amp; wander
        </span>
        <span className="h-px flex-1 bg-forest/30" />
      </div>

      <div className="rule-triple mx-auto mt-8 w-40 opacity-70" />
    </header>
  );
}
