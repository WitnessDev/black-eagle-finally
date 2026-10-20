interface LuxuryCardProps {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
}

export function LuxuryCard({
  image,
  title,
  subtitle,
  desc,
}: LuxuryCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[#F4F0E6]">
      <div className="h-72 overflow-hidden bg-slate-200">
        <img
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          src={image}
        />
      </div>
      <div className="p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B95F40]">
          {subtitle}
        </p>
        <h3 className="mb-4 font-playfair text-2xl text-slate-900">{title}</h3>
        <p className="leading-relaxed text-slate-600">{desc}</p>
      </div>
    </article>
  );
}
