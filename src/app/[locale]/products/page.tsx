import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowRight, Package } from 'lucide-react';
import { MotionDiv } from '@/components/ClientMotion';

type Locale = 'en' | 'gr' | 'fr' | 'it' | 'es';

type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  packaging: string[];
};

type ProductPageContent = {
  heroTitle: string;
  heroDescription: string;
  packagingTitle: string;
  products: ProductItem[];
};

const productContent: Record<Locale, ProductPageContent> = {
  en: {
    heroTitle: 'Our Product Range',
    heroDescription:
      'Discover our official SIMOS dairy catalogue, structured around authentic Mediterranean cheese and yogurt families for European retail and food service.',
    packagingTitle: 'Export Packaging',
    products: [
      {
        id: 'fetaPdo',
        title: 'Feta PDO',
        description:
          'Authentic Greek Feta PDO produced from sheep and goat milk, offering the classic taste, texture and regulatory protection expected by international dairy buyers.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacuum', '200g Vacuum', '400g Brine', '1kg Brine', '15kg Tin'],
      },
      {
        id: 'barrelAgedFetaPdo',
        title: 'Barrel Aged Feta PDO',
        description:
          'Traditional barrel aged Feta PDO with deeper flavor development and a premium artisanal profile suited to specialty retail and food service menus.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacuum', '400g Brine', '1kg Brine', '15kg Tin'],
      },
      {
        id: 'organicFetaPdo',
        title: 'Organic Feta PDO',
        description:
          'Certified organic Feta PDO for buyers seeking authentic Greek origin with an organic positioning for premium retail and private label programs.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacuum', '200g Vacuum', '400g Brine', '1kg Brine'],
      },
      {
        id: 'manouriPdo',
        title: 'Manouri PDO',
        description:
          'A mild and creamy Greek whey cheese with PDO status, positioned for delicatessen counters, premium retail assortments and Mediterranean menu applications.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacuum', '400g Vacuum', '1kg Food Service Pack'],
      },
      {
        id: 'halloumiPdo',
        title: 'Halloumi PDO',
        description:
          'Halloumi PDO with the firm texture and grilling performance demanded by retail, Horeca and international Mediterranean food programs.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacuum', '225g Vacuum', '250g Vacuum', '500g Catering Pack'],
      },
      {
        id: 'grillCheese',
        title: 'Grill Cheese',
        description:
          'A grill-ready cheese solution designed for food service versatility, golden browning and dependable performance across salads, sandwiches and hot dishes.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacuum', '250g Vacuum', '500g Catering Pack'],
      },
      {
        id: 'greekSaladCheese',
        title: 'Greek Salad Cheese',
        description:
          'A white brined cheese developed for salads and cold applications, offering Mediterranean character and practical versatility for B2B buyers.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacuum', '200g Vacuum', '400g Brine', '1kg Brine'],
      },
      {
        id: 'greekYogurt',
        title: 'Greek Yogurt',
        description:
          'Thick, creamy and authentic Greek yogurt with a traditional straining profile, ideal for retail shelves, breakfast concepts and professional kitchens.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Cup', '200g Cup', '500g Tub', '1kg Tub', '5kg Catering Tub'],
      },
    ],
  },
  gr: {
    heroTitle: 'Η Γκάμα Προϊόντων μας',
    heroDescription:
      'Ανακαλύψτε τον επίσημο γαλακτοκομικό κατάλογο της SIMOS, δομημένο γύρω από αυθεντικές μεσογειακές οικογένειες τυριών και γιαουρτιού για λιανική και εστίαση στην Ευρώπη.',
    packagingTitle: 'Συσκευασίες Εξαγωγής',
    products: [
      {
        id: 'fetaPdo',
        title: 'Φέτα ΠΟΠ',
        description:
          'Αυθεντική ελληνική Φέτα ΠΟΠ από πρόβειο και γίδινο γάλα, με τη γεύση, την υφή και την προστατευόμενη ταυτότητα που αναζητούν οι διεθνείς αγοραστές γαλακτοκομικών.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150γρ Vacuum', '200γρ Vacuum', '400γρ Άλμη', '1κιλό Άλμη', '15κιλά Τενεκές'],
      },
      {
        id: 'barrelAgedFetaPdo',
        title: 'Βαρελίσια Φέτα ΠΟΠ',
        description:
          'Παραδοσιακή βαρελίσια Φέτα ΠΟΠ με πιο σύνθετο γευστικό προφίλ και premium artisanal χαρακτήρα για delicatessen, λιανική και εστίαση.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200γρ Vacuum', '400γρ Άλμη', '1κιλό Άλμη', '15κιλά Τενεκές'],
      },
      {
        id: 'organicFetaPdo',
        title: 'Βιολογική Φέτα ΠΟΠ',
        description:
          'Βιολογική Φέτα ΠΟΠ για αγοραστές που αναζητούν αυθεντική ελληνική προέλευση με οργανική τοποθέτηση για premium λιανική και private label.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150γρ Vacuum', '200γρ Vacuum', '400γρ Άλμη', '1κιλό Άλμη'],
      },
      {
        id: 'manouriPdo',
        title: 'Μανούρι ΠΟΠ',
        description:
          'Ήπιο και κρεμώδες ελληνικό τυρί τυρογάλακτος με καθεστώς ΠΟΠ, κατάλληλο για premium λιανική, delicatessen και μεσογειακές εφαρμογές εστίασης.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200γρ Vacuum', '400γρ Vacuum', '1κιλό Συσκευασία Food Service'],
      },
      {
        id: 'halloumiPdo',
        title: 'Χαλούμι ΠΟΠ',
        description:
          'Χαλούμι ΠΟΠ με σταθερή υφή και εξαιρετική συμπεριφορά στο ψήσιμο, ιδανικό για λιανική, Horeca και διεθνή μεσογειακά concept.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200γρ Vacuum', '225γρ Vacuum', '250γρ Vacuum', '500γρ Συσκευασία Catering'],
      },
      {
        id: 'grillCheese',
        title: 'Τυρί Ψησίματος',
        description:
          'Λύση τυριού για σχάρα με ευελιξία στο food service, σωστό ρόδισμα και σταθερή απόδοση σε σαλάτες, sandwiches και ζεστά πιάτα.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200γρ Vacuum', '250γρ Vacuum', '500γρ Συσκευασία Catering'],
      },
      {
        id: 'greekSaladCheese',
        title: 'Ελληνικό Τυρί Σαλάτας',
        description:
          'Λευκό τυρί άλμης για σαλάτες και κρύες εφαρμογές, με μεσογειακό χαρακτήρα και πρακτική ευελιξία για επαγγελματίες αγοραστές.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150γρ Vacuum', '200γρ Vacuum', '400γρ Άλμη', '1κιλό Άλμη'],
      },
      {
        id: 'greekYogurt',
        title: 'Ελληνικό Γιαούρτι',
        description:
          'Πηχτό, κρεμώδες και αυθεντικό ελληνικό γιαούρτι με παραδοσιακή στράγγιση, κατάλληλο για λιανική, πρωινά concepts και επαγγελματικές κουζίνες.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150γρ Κύπελλο', '200γρ Κύπελλο', '500γρ Δοχείο', '1κιλό Δοχείο', '5κιλά Catering Tub'],
      },
    ],
  },
  fr: {
    heroTitle: 'Notre Gamme de Produits',
    heroDescription:
      'Decouvrez le catalogue laitier officiel de SIMOS, structure autour de familles authentiques de fromages mediterraneens et de yaourt grec pour le retail et la restauration en Europe.',
    packagingTitle: "Formats d'export",
    products: [
      {
        id: 'fetaPdo',
        title: 'Feta AOP',
        description:
          'Authentique Feta AOP grecque au lait de brebis et de chevre, avec le gout, la texture et la protection d origine attendus par les acheteurs internationaux.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sous vide', '200g Sous vide', '400g Saumure', '1kg Saumure', '15kg Boite metal'],
      },
      {
        id: 'barrelAgedFetaPdo',
        title: 'Feta AOP Affinee en Baril',
        description:
          'Feta AOP traditionnelle affinee en baril, avec un profil gustatif plus profond et un positionnement premium pour epiceries fines, retail et restauration.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sous vide', '400g Saumure', '1kg Saumure', '15kg Boite metal'],
      },
      {
        id: 'organicFetaPdo',
        title: 'Feta AOP Biologique',
        description:
          'Feta AOP biologique pour les acheteurs recherchant une origine grecque authentique avec un positionnement organique pour retail premium et private label.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sous vide', '200g Sous vide', '400g Saumure', '1kg Saumure'],
      },
      {
        id: 'manouriPdo',
        title: 'Manouri AOP',
        description:
          'Fromage grec doux et cremeux a base de lactoserum avec AOP, adapte aux comptoirs premium, au retail specialise et aux usages mediterraneens en restauration.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sous vide', '400g Sous vide', '1kg Pack Food Service'],
      },
      {
        id: 'halloumiPdo',
        title: 'Halloumi AOP',
        description:
          'Halloumi AOP avec la texture ferme et la tenue a la cuisson recherchees par le retail, le Horeca et les programmes mediterraneens internationaux.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sous vide', '225g Sous vide', '250g Sous vide', '500g Pack Catering'],
      },
      {
        id: 'grillCheese',
        title: 'Fromage a Griller',
        description:
          'Solution de fromage pour grillade offrant polyvalence en food service, belle coloration et performance reguliere pour salades, sandwiches et plats chauds.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sous vide', '250g Sous vide', '500g Pack Catering'],
      },
      {
        id: 'greekSaladCheese',
        title: 'Fromage Grec pour Salade',
        description:
          'Fromage blanc en saumure developpe pour salades et applications froides, avec caractere mediterraneen et bonne polyvalence pour les acheteurs B2B.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sous vide', '200g Sous vide', '400g Saumure', '1kg Saumure'],
      },
      {
        id: 'greekYogurt',
        title: 'Yaourt Grec',
        description:
          'Yaourt grec epais, cremeux et authentique avec profil de fabrication traditionnelle, ideal pour les rayons retail, les concepts petit-dejeuner et les cuisines professionnelles.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Pot', '200g Pot', '500g Bac', '1kg Bac', '5kg Bac Catering'],
      },
    ],
  },
  it: {
    heroTitle: 'La Nostra Gamma Prodotti',
    heroDescription:
      'Scopri il catalogo lattiero-caseario ufficiale SIMOS, strutturato attorno a famiglie autentiche di formaggi mediterranei e yogurt greco per retail e food service in Europa.',
    packagingTitle: 'Formati Export',
    products: [
      {
        id: 'fetaPdo',
        title: 'Feta DOP',
        description:
          'Autentica Feta DOP greca da latte ovino e caprino, con gusto, consistenza e protezione di origine richiesti dai buyer internazionali.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sottovuoto', '200g Sottovuoto', '400g Salamoia', '1kg Salamoia', '15kg Latta'],
      },
      {
        id: 'barrelAgedFetaPdo',
        title: 'Feta DOP Stagionata in Botte',
        description:
          'Feta DOP tradizionale stagionata in botte, con profilo aromatico piu complesso e posizionamento premium per retail specializzato e food service.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sottovuoto', '400g Salamoia', '1kg Salamoia', '15kg Latta'],
      },
      {
        id: 'organicFetaPdo',
        title: 'Feta DOP Biologica',
        description:
          'Feta DOP biologica per buyer che cercano autentica origine greca con posizionamento organic per retail premium e private label.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sottovuoto', '200g Sottovuoto', '400g Salamoia', '1kg Salamoia'],
      },
      {
        id: 'manouriPdo',
        title: 'Manouri DOP',
        description:
          'Formaggio greco delicato e cremoso a base di siero con DOP, adatto a retail premium, banchi gastronomia e applicazioni mediterranee nel food service.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sottovuoto', '400g Sottovuoto', '1kg Pack Food Service'],
      },
      {
        id: 'halloumiPdo',
        title: 'Halloumi DOP',
        description:
          'Halloumi DOP con texture compatta e performance di cottura ideali per retail, Horeca e programmi mediterranei internazionali.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sottovuoto', '225g Sottovuoto', '250g Sottovuoto', '500g Pack Catering'],
      },
      {
        id: 'grillCheese',
        title: 'Formaggio da Griglia',
        description:
          'Soluzione grill-ready che offre versatilita nel food service, doratura uniforme e performance affidabile in insalate, sandwich e piatti caldi.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Sottovuoto', '250g Sottovuoto', '500g Pack Catering'],
      },
      {
        id: 'greekSaladCheese',
        title: 'Greek Salad Cheese',
        description:
          'Formaggio bianco in salamoia pensato per insalate e applicazioni fredde, con carattere mediterraneo e praticita per buyer B2B.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Sottovuoto', '200g Sottovuoto', '400g Salamoia', '1kg Salamoia'],
      },
      {
        id: 'greekYogurt',
        title: 'Yogurt Greco',
        description:
          'Yogurt greco denso, cremoso e autentico con profilo di lavorazione tradizionale, ideale per scaffale retail, colazioni e cucine professionali.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vasetto', '200g Vasetto', '500g Vaschetta', '1kg Vaschetta', '5kg Catering Tub'],
      },
    ],
  },
  es: {
    heroTitle: 'Nuestra Gama de Productos',
    heroDescription:
      'Descubra el catalogo lacteo oficial de SIMOS, estructurado en torno a familias autenticas de quesos mediterraneos y yogur griego para retail y food service en Europa.',
    packagingTitle: 'Formatos de Exportacion',
    products: [
      {
        id: 'fetaPdo',
        title: 'Feta DOP',
        description:
          'Autentico Feta DOP griego elaborado con leche de oveja y cabra, con el sabor, la textura y la proteccion de origen que buscan los compradores internacionales.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacio', '200g Vacio', '400g Salmuera', '1kg Salmuera', '15kg Lata'],
      },
      {
        id: 'barrelAgedFetaPdo',
        title: 'Feta DOP Curado en Barrica',
        description:
          'Feta DOP tradicional curado en barrica, con perfil de sabor mas profundo y posicionamiento premium para retail especializado y food service.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacio', '400g Salmuera', '1kg Salmuera', '15kg Lata'],
      },
      {
        id: 'organicFetaPdo',
        title: 'Feta DOP Organico',
        description:
          'Feta DOP organico para compradores que buscan autentico origen griego con posicionamiento organic para retail premium y programas de marca privada.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacio', '200g Vacio', '400g Salmuera', '1kg Salmuera'],
      },
      {
        id: 'manouriPdo',
        title: 'Manouri DOP',
        description:
          'Queso griego suave y cremoso de suero con DOP, adecuado para retail premium, delicatessen y aplicaciones mediterraneas en restauracion.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacio', '400g Vacio', '1kg Pack Food Service'],
      },
      {
        id: 'halloumiPdo',
        title: 'Halloumi DOP',
        description:
          'Halloumi DOP con textura firme y gran rendimiento a la plancha, ideal para retail, Horeca y programas mediterraneos internacionales.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacio', '225g Vacio', '250g Vacio', '500g Pack Catering'],
      },
      {
        id: 'grillCheese',
        title: 'Queso para Parrilla',
        description:
          'Solucion de queso para plancha que ofrece versatilidad en food service, buen dorado y rendimiento consistente en ensaladas, sandwiches y platos calientes.',
        image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
        packaging: ['200g Vacio', '250g Vacio', '500g Pack Catering'],
      },
      {
        id: 'greekSaladCheese',
        title: 'Queso Griego para Ensalada',
        description:
          'Queso blanco en salmuera desarrollado para ensaladas y aplicaciones frias, con caracter mediterraneo y versatilidad practica para compradores B2B.',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vacio', '200g Vacio', '400g Salmuera', '1kg Salmuera'],
      },
      {
        id: 'greekYogurt',
        title: 'Yogur Griego',
        description:
          'Yogur griego espeso, cremoso y autentico con perfil de colado tradicional, ideal para retail, conceptos de desayuno y cocinas profesionales.',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
        packaging: ['150g Vaso', '200g Vaso', '500g Tarrina', '1kg Tarrina', '5kg Catering Tub'],
      },
    ],
  },
};

export default function ProductsPage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  const commonT = useTranslations('Common');
  const pageContent = productContent[(locale as Locale)] ?? productContent.en;

  return (
    <div className="pt-20">
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">{pageContent.heroTitle}</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            {pageContent.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          {pageContent.products.map((product, index) => (
            <div key={product.id} id={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <MotionDiv 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </MotionDiv>

              <MotionDiv 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground">{product.title}</h2>
                  <p className="text-lg text-foreground/70 font-light leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-primary">
                    <Package size={24} />
                    <h4 className="font-serif text-xl">{pageContent.packagingTitle}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.packaging.map((pkg) => (
                      <span key={pkg} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80">
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-primary-light transition-all flex items-center space-x-2"
                  >
                    <span>{commonT('requestQuotation')}</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </MotionDiv>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
