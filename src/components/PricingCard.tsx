import { ArrowRight, MapPin } from "lucide-react";

interface PricingCardProps {
  image: string;
  days: string;
  title: string;
  location: string;
  price: string;
  startingFromLabel: string;
  exploreLabel: string;
  onBook: () => void;
}

export function PricingCard({
  image,
  days,
  title,
  location,
  price,
  startingFromLabel,
  exploreLabel,
  onBook,
}: PricingCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-200">
        <img
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
          src={image}
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800">
          {days}
        </span>
      </div>
      <div className="p-7">
        <h3 className="mb-3 font-playfair text-2xl text-slate-900">{title}</h3>
        <p className="mb-6 flex items-start gap-2 text-sm leading-relaxed text-slate-500">
          <MapPin className="mt-0.5 shrink-0 text-[#D46F4D]" size={16} />
          {location}
        </p>
        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
          <p className="text-xs text-slate-500">
            {startingFromLabel}
            <span className="mt-1 block font-playfair text-2xl text-slate-900">
              {price}
            </span>
          </p>
          <button
            className="inline-flex items-center gap-2 rounded-full bg-[#232B25] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#D46F4D]"
            onClick={onBook}
            type="button"
          >
            {exploreLabel} <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
