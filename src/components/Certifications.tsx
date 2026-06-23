'use client';

const certifications = [
  {
    name: 'IFS',
    imageSrc: '/images/IFS-logo.jpg',
    imageClassName: 'h-[84%] w-[92%]',
  },
  {
    name: 'BRCGS',
    imageSrc: '/images/BRC-Logo-Large.jpg',
    imageClassName: 'h-[82%] w-[94%]',
  },
  {
    name: 'BIO Hellas',
    imageSrc: '/images/biohellas-logo.png',
    imageClassName: 'h-[88%] w-[92%]',
  },
  {
    name: 'Agrocert',
    imageSrc: '/images/agrocert-logo.png',
    imageClassName: 'h-[90%] w-[90%]',
  },
  {
    name: 'Halal Certification',
    imageSrc: '/images/Halal-logo.svg.png',
    imageClassName: 'h-[90%] w-[90%]',
  },
  {
    name: 'Kosher Certification',
    imageSrc: '/images/kosher-logo.jpg',
    imageClassName: 'h-[90%] w-[90%]',
  },
] as const;

const Certifications = () => {
  return (
    <section className="bg-white border-y border-foreground/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 opacity-40 grayscale transition-all duration-700 hover:grayscale-0 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map(({name, imageSrc, imageClassName}) => (
            <div
              key={name}
              className="flex min-h-[180px] items-center justify-center rounded-2xl border border-foreground/10 bg-white/80 p-6"
            >
              <div className="flex h-36 w-full items-center justify-center">
                <img
                  src={imageSrc}
                  alt={name}
                  className={`object-contain ${imageClassName}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
