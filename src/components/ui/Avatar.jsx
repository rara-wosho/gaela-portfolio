function Avatar() {
  return (
    <div className="inline-flex justify-center items-end rounded-full w-44 mb-4 aspect-square absolute -bottom-24 left-16 p-1.5 dark:bg-neutral-950 bg-white">
      <img
        src="https://i.pinimg.com/736x/5c/da/42/5cda4203f9cac788dc2b72f9c0cbeaba.jpg"
        alt="avatar"
        className="rounded-full w-full aspect-square object-cover"
      />
    </div>
  );
}

export default Avatar;
