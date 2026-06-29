function HeroSection({ src = "", title = "", desc = "" }) {
  return (
    <div className="">
      <img src={src} alt={title} className="" />
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
}

export default HeroSection;
