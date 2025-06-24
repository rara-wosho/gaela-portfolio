function Avatar() {
  return (
    // <div className="inline-flex justify-center items-end rounded-full w-40 md:w-48 mb-4 aspect-square absolute top-8 md:top-12 left-1/2 md:left-[5%] p-0 md:p-1.5 dark:bg-neutral-950 bg-white md:translate-x-0 -translate-x-1/2">
    // </div>
    <div className="w-[90px] md:w-32 rounded-full">
      <img
        src="/images/pic.jfif"
        alt="avatar"
        className="rounded-full w-full aspect-square object-cover"
      />
    </div>
  );
}

export default Avatar;
