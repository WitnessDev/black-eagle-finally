# Black Eagle website update notes

- Kept the existing design and the local `/videos/hero.mp4` hero background video.
- Hero CTAs now read “Explore Our Safaris” and “Plan the Journey”.
- Removed the decorative Footprints background overlay.
- The booking/enquiry form remains connected to the existing itinerary options and date field, with a clearer planning introduction and a date minimum.
- Added day-by-day image assets extracted from the corresponding owner itinerary PDFs and placed each day image below its description in the itinerary detail timeline.
- Copied the owner-supplied JPEG/PNG photographs into `public/images/owner-supplied/`.

Note: The supplied website ZIP appears to omit several files imported by `src/App.tsx` (including `src/translations.ts`, `Reveal.tsx`, `BookModal.tsx`, `PricingCard.tsx`, and `LuxuryCard.tsx`) and has no original `public/images` folder. As a result, a full production build cannot be verified from this ZIP alone; those missing source files should be restored from the complete project repository.
- Navigation is now ordered: Home, About Us, Packages, Destinations, Stories (desktop and mobile).
- Added a Destinations section for Tarangire, Ngorongoro, Serengeti, Ndutu, Zanzibar and Lake Manyara, with concise descriptions and links into the journey enquiry form.
- Enlarged the navigation logo and loading-screen logo for better visibility.
- Destination cards use local image assets from the supplied asset set, including owner-supplied photographs where available.
