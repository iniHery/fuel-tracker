// components/ResponsiveComponent.js
export default function ResponsiveComponent() {
  return (
    <div>
      {/* Tampilan Mobile */}
      <div className="block lg:hidden">
        <p className="text-center text-red-500">Ini adalah tampilan mobile</p>
      </div>

      {/* Tampilan Desktop */}
      <div className="hidden lg:block">
        <p className="text-center text-blue-500">Ini adalah tampilan desktop</p>
      </div>
    </div>
  );
}
