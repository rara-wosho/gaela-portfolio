function SectionTitle({ title, icon }) {
  return (
    <div className="inline-flex items-center justify-center border border-red-500 gap-2">
      <div className="secton-title-icon text-white inline-flex items-center justify-center p-1.5 bg-gray-700 rounded-full">
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{title}</p>
    </div>
  );
}

export default SectionTitle;
