function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center border border-gray-500">
      <div className="secton-title-icon me-1">{icon}</div>
      <p className="text-2xl font-semibold text-gray-800">{title}</p>
    </div>
  );
}

export default SectionTitle;
