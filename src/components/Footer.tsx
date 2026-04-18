export function Footer() {
  return (
    <footer className="mt-24 pb-12 text-center">
      <div className="rule-triple mx-auto mb-5 w-32 opacity-60" />
      <p className="font-hand text-sm font-semibold uppercase tracking-[0.12em] text-brown">
        made with ♥ from mile high by{" "}
        <a
          href="https://mattwoods.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine transition-colors hover:text-forest"
        >
          Matt Woods
        </a>
      </p>
    </footer>
  );
}
