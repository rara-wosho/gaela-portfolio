function SectionTitle({ title, icon }) {
  return (
    <div className="inline-flex items-center justify-center gap-1 dark:text-gray-100 text-gray-900">
      {icon && (
        <div className="secton-title-icon inline-flex items-center justify-center rounded-full">
          {icon}
        </div>
      )}
      <p className="text-[18px] font-bold tracking-[6px]">{title}</p>
    </div>
  );
}

export default SectionTitle;
