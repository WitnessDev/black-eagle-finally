import { useEffect } from "react";
import { X } from "lucide-react";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  labels: {
    title: string;
    description: string;
    action: string;
    close: string;
  };
}

export function BookModal({ isOpen, onClose, labels }: BookModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="booking-dialog-title"
        aria-modal="true"
        className="relative w-full max-w-lg rounded-3xl bg-[#232B25] p-8 text-white shadow-2xl md:p-12"
        role="dialog"
      >
        <button
          aria-label={labels.close}
          className="absolute right-5 top-5 rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D46F4D]">
          Black Eagle Tours &amp; Safaris
        </p>
        <h2
          className="mb-4 font-playfair text-3xl md:text-4xl"
          id="booking-dialog-title"
        >
          {labels.title}
        </h2>
        <p className="mb-8 leading-relaxed text-white/70">
          {labels.description}
        </p>
        <a
          className="inline-flex rounded-full bg-[#D46F4D] px-7 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-white hover:text-[#232B25]"
          href="#booking"
          onClick={onClose}
        >
          {labels.action}
        </a>
      </section>
    </div>
  );
}
