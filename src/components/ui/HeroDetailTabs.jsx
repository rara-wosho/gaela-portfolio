function HeroDetailTabs({ icon, label, value }) {
    return (
        <>
            <p className="font-semibold text-white text-sm flex items-center mt-6">
                {icon}
                {label}
            </p>
            <p className="text-gray-300 text-sm">{value}</p>
        </>
    );
}

export default HeroDetailTabs;
