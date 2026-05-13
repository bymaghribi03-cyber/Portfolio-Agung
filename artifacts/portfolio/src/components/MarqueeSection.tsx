export function MarqueeSection() {
  const items = [
    "App Design", "Website Design", "Dashboard", "Wireframe",
    "Motion Graphics", "Video Editing", "Brand Identity", "UI/UX",
    "App Design", "Website Design", "Dashboard", "Wireframe",
    "Motion Graphics", "Video Editing", "Brand Identity", "UI/UX",
  ];

  return (
    <div className="bg-dark-green py-6 overflow-hidden" data-testid="marquee-section">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-gold font-heading text-xl font-semibold px-4">{item}</span>
            <span className="text-gold/40 text-2xl px-2">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
