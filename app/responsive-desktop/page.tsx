// components/ResponsiveComponent.js
export default function ResponsiveDesktop() {
  return (
    <div>
      {/* Tampilan Desktop */}
      <div className="hidden md:block">
        <p className="text-center text-blue-500">Ini adalah tampilan desktop</p>
      </div>
    </div>
  );
}
