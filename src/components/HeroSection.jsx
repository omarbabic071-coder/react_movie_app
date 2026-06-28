function HeroSection({
  src = "https://placehold.co/600x400",
  title = "",
  desc = "",
}) {
  return (
    <div className="w-dvw mb-10 mt-20">
      <img src={src}></img>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
}

export default HeroSection;
