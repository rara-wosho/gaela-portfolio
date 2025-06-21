function Avatar() {
    return (
        <div className="inline-flex justify-center items-end rounded-full w-48 mb-4 aspect-square absolute -bottom-[90px] left-20 p-1.5 dark:bg-neutral-950 bg-white">
            <img
                src="/images/pic.jfif"
                alt="avatar"
                className="rounded-full w-full aspect-square object-cover"
            />
        </div>
    );
}

export default Avatar;
