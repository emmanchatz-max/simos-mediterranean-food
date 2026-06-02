'use client';

const Certifications = () => {
  return (
    <section className="py-16 bg-white border-y border-foreground/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Placeholder Certification Logos */}
          <div className="text-2xl font-serif font-bold tracking-tighter italic">ISO 22000</div>
          <div className="text-2xl font-serif font-bold tracking-tighter italic">HACCP</div>
          <div className="text-2xl font-serif font-bold tracking-tighter italic">IFS FOOD</div>
          <div className="text-2xl font-serif font-bold tracking-tighter italic">BIO HELLAS</div>
          <div className="text-2xl font-serif font-bold tracking-tighter italic">BRC GLOBAL</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
