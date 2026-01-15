export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      <div className="orb orb-red-1" />
      <div className="orb orb-red-2" />
      <div className="noise" />
    </div>
  );
}
