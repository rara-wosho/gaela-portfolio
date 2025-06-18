function SectionTitle({ title, icon }) {
  return (
    <div className="inline-flex items-center justify-center gap-1 dark:text-white text-gray-900">
      <div className="secton-title-icon inline-flex items-center justify-center rounded-full">
        {icon}
      </div>
      <p className="text-[18px] font-bold">{title}</p>
    </div>
  );
}

export default SectionTitle;
