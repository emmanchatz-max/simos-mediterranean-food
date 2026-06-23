'use client';

const certifications = [
  {
    name: 'IFS',
    imageSrc: '/images/IFS-logo.jpg',
    imageClassName: 'max-h-[54%] max-w-[68%]',
  },
  {
    name: 'BRCGS',
    imageSrc: '/images/BRC-Logo-Large.jpg',
    imageClassName: 'max-h-[52%] max-w-[74%]',
  },
  {
    name: 'BIO Hellas',
    imageSrc: '/images/biohellas-logo.png',
    imageClassName: 'max-h-[56%] max-w-[72%]',
  },
  {
    name: 'Agrocert',
    imageSrc: '/images/agrocert-logo.png',
    imageClassName: 'max-h-[58%] max-w-[58%]',
  },
  {
    name: 'Halal Certification',
    imageSrc: '/images/Halal-logo.svg.png',
    imageClassName: 'max-h-[58%] max-w-[58%]',
  },
  {
    name: 'Kosher Certification',
    imageSrc: '/images/kosher-logo.jpg',
    imageClassName: 'max-h-[58%] max-w-[58%]',
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
                  className={`h-auto w-auto object-contain ${imageClassName}`}
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
