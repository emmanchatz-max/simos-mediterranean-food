import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Leaf,
  MapPinned,
  Microscope,
  ScanSearch,
  ShieldCheck,
  Truck,
} from 'lucide-react';

type PageProps = {
  params: {
    locale: string;
  };
};

const qualityContent = {
  en: {
    meta: {
      title: 'Quality & Certifications | SIMOS Mediterranean Food',
      description:
        'Discover SIMOS Mediterranean Food quality standards, traceability systems, certified production partnerships and dependable European dairy distribution.',
    },
    hero: {
      eyebrow: 'Quality & Certifications',
      title: 'Quality Without Compromise',
      subtitle:
        'From certified Mediterranean producers to reliable European distribution networks, SIMOS delivers authentic dairy products with complete traceability, rigorous quality standards and dependable service.',
      imageAlt: 'Mediterranean dairy sourcing and quality assurance presentation',
      cardImageAlt: 'Food quality verification and product control process',
      metrics: {
        traceabilityLabel: 'Traceability',
        traceabilityValue: 'A to Z Visibility',
        partnerLabel: 'Partner Network',
        partnerValue: 'Certified Producers',
      },
    },
    commitment: {
      eyebrow: 'Our Commitment to Quality',
      title: 'A Culture of Quality',
      description:
        'Quality at SIMOS is built through disciplined sourcing, documented controls and long-term producer relationships that protect product integrity from origin to final delivery.',
      items: {
        certifiedPartners: {
          title: 'Certified Production Partners',
          description:
            'We collaborate with producers operating under recognised food safety and quality frameworks aligned with international retail expectations.',
        },
        monitoredSupplyChain: {
          title: 'Monitored Supply Chain',
          description:
            'Product quality is reviewed throughout sourcing, processing, storage and export coordination to maintain consistency across every shipment.',
        },
        foodSafety: {
          title: 'Food Safety Focus',
          description:
            'Hygiene, specification compliance, batch control and product integrity remain central priorities in every dairy and Mediterranean category we handle.',
        },
        authenticSourcing: {
          title: 'Authentic Mediterranean Sourcing',
          description:
            'We protect the origin, identity and sensory profile of the products we represent, with a clear focus on authentic Mediterranean dairy specialities.',
        },
        longTermStandards: {
          title: 'Long-Term Product Stability',
          description:
            'Stable producer partnerships and clear quality expectations support repeatable standards, reliable supply and buyer confidence over time.',
        },
      },
    },
    control: {
      eyebrow: 'Quality Control Procedures',
      title: 'Quality Control at Every Stage',
      description:
        'Our process is designed to reduce sourcing risk, improve product transparency and maintain dependable performance across certified production and export logistics.',
      stages: {
        supplierVerification: {
          title: 'Supplier Verification',
          description:
            'Producer capabilities, documentation and category fit are reviewed before a product enters our sourcing portfolio.',
        },
        productionMonitoring: {
          title: 'Production Monitoring',
          description:
            'We stay close to production partners to confirm that specifications, packaging and agreed quality parameters remain aligned.',
        },
        productInspections: {
          title: 'Product Inspections',
          description:
            'Appearance, format, packaging integrity and key commercial specifications are checked before products move into export flow.',
        },
        batchControl: {
          title: 'Batch Control',
          description:
            'Every commercial batch is linked to production and shipment records so products can be tracked with speed and precision.',
        },
        continuousAssessment: {
          title: 'Continuous Assessment',
          description:
            'Performance is reviewed continuously so that quality, service level and customer expectations stay aligned over the long term.',
        },
      },
    },
    traceability: {
      eyebrow: 'Full Traceability',
      title: 'Complete Product Traceability',
      description:
        'SIMOS maintains documented visibility from producer selection to final customer delivery, helping buyers make informed sourcing decisions with confidence.',
      highlights: [
        'Traceability from A to Z across product flow, batch records and delivery coordination.',
        'Product transparency that supports retailer, importer and food service requirements.',
        'Supply chain visibility for origin, handling, packaging and shipment status.',
        'Regulatory compliance supported by clear documentation and auditable records.',
      ],
      steps: [
        {
          title: 'Producer',
          description:
            'Approved producers are selected according to category expertise, operational reliability and certification profile.',
        },
        {
          title: 'Processing',
          description:
            'Processing and packing data are linked to the product specification, format and commercial batch reference.',
        },
        {
          title: 'Quality Verification',
          description:
            'Quality checks and document review confirm alignment before the order moves into export execution.',
        },
        {
          title: 'Logistics',
          description:
            'Storage, dispatch and delivery coordination are tracked to protect product condition and service consistency.',
        },
        {
          title: 'Customer',
          description:
            'Buyers receive dependable product flow supported by documented visibility from origin to destination.',
        },
      ],
    },
    standards: {
      eyebrow: 'Trusted Standards',
      title: 'Trusted Standards',
      description:
        'Buyers expect documented, auditable quality systems. SIMOS works with certified production partners aligned with international retailer and food service requirements.',
      trustStatement:
        'SIMOS collaborates with certified production partners that comply with internationally recognised quality, food safety and traceability standards.',
      note:
        'Certification availability depends on the selected producer, product category and production site. SIMOS presents these standards as part of its certified sourcing network and partner capability profile.',
      cardLabel: 'Certification standard',
      officialSource: 'Official reference',
      cards: {
        ifs: 'IFS Food is widely used to assess food safety, product quality and operational consistency in food manufacturing and packing environments.',
        brcgs:
          'BRCGS standards are recognised by major retailers and importers for structured food safety systems, documented controls and product integrity.',
        bioHellas:
          'BIO Hellas supports certified organic control and verification for businesses operating in line with recognised organic production requirements.',
        agrocert:
          'Agrocert-related schemes support recognised agri-food quality frameworks connected with product identity, agricultural standards and market trust.',
        halal:
          'Halal certification is relevant for buyers requiring approved ingredients, controlled processes and documented compliance for Muslim consumer markets.',
        kosher:
          'Kosher certification supports access to markets where ingredient review, processing controls and religious compliance are commercial priorities.',
      },
    },
    logistics: {
      eyebrow: 'Quality Through Logistics',
      title: 'Reliable Delivery, Consistent Quality',
      description:
        'For international dairy and Mediterranean food distribution, logistics is part of quality assurance. Service precision, cold-chain discipline and delivery visibility protect the final buying experience.',
      imageAlt: 'European food distribution and warehouse logistics',
      points: [
        'Full EDI integration for efficient order processing and supply chain coordination.',
        'Delivery by carton to support flexible replenishment and mixed-order requirements.',
        'No minimum order quantity for buyers requiring agility across multiple SKUs.',
        'Distribution coverage across France, Spain, Belgium and Italy.',
        'Logistics execution supported through the Logifrio Madrid partnership.',
        'Daily deliveries except Sunday to maintain service continuity.',
        'High service-level performance focused on accuracy, responsiveness and dependable arrival windows.',
      ],
    },
    buyers: {
      eyebrow: 'Buyer Confidence',
      title: 'Why International Buyers Choose SIMOS',
      description:
        'Importers, distributors, wholesalers, retailers and Horeca buyers rely on SIMOS for structured sourcing, stable execution and professional market understanding.',
      cards: {
        certifiedProduction: {
          title: 'Certified Production',
          description:
            'We work with production partners selected for their quality systems, category know-how and export readiness.',
        },
        traceability: {
          title: 'Traceability',
          description:
            'Documented batch visibility supports accountability from origin through final delivery.',
        },
        foodSafety: {
          title: 'Food Safety',
          description:
            'Food safety expectations remain central in sourcing decisions, product checks and logistics coordination.',
        },
        europeanDistribution: {
          title: 'European Distribution',
          description:
            'Established distribution flows support dependable service across key European markets.',
        },
        privateLabel: {
          title: 'Private Label Expertise',
          description:
            'We support retail and food service customers with specification-led private label development and execution.',
        },
        flexibleOrdering: {
          title: 'Flexible Ordering',
          description:
            'Carton-level delivery, no MOQ flexibility and responsive coordination help buyers move faster.',
        },
      },
    },
    finalCta: {
      title: 'Looking for a Certified Mediterranean Dairy Partner?',
      description:
        'Speak with our team about sourcing solutions, private label opportunities and certified Mediterranean dairy products.',
      contact: 'Contact Us',
    },
  },
  gr: {
    meta: {
      title: 'Ποιότητα & Πιστοποιήσεις | SIMOS Mediterranean Food',
      description:
        'Ανακαλύψτε τα πρότυπα ποιότητας, την ιχνηλασιμότητα, το δίκτυο πιστοποιημένων συνεργατών παραγωγής και την αξιόπιστη ευρωπαϊκή διανομή της SIMOS Mediterranean Food.',
    },
    hero: {
      eyebrow: 'Ποιότητα & Πιστοποιήσεις',
      title: 'Ποιότητα Χωρίς Συμβιβασμούς',
      subtitle:
        'Από πιστοποιημένους μεσογειακούς παραγωγούς έως αξιόπιστα ευρωπαϊκά δίκτυα διανομής, η SIMOS προσφέρει αυθεντικά γαλακτοκομικά προϊόντα με πλήρη ιχνηλασιμότητα, αυστηρά πρότυπα ποιότητας και σταθερή εξυπηρέτηση.',
      imageAlt: 'Παρουσίαση ποιοτικής διασφάλισης και προμήθειας μεσογειακών γαλακτοκομικών',
      cardImageAlt: 'Διαδικασία ελέγχου ποιότητας και επαλήθευσης προϊόντων',
      metrics: {
        traceabilityLabel: 'Ιχνηλασιμότητα',
        traceabilityValue: 'Ορατότητα από το Α έως το Ω',
        partnerLabel: 'Δίκτυο Συνεργατών',
        partnerValue: 'Πιστοποιημένοι Παραγωγοί',
      },
    },
    commitment: {
      eyebrow: 'Η Δέσμευσή μας στην Ποιότητα',
      title: 'Μια Κουλτούρα Ποιότητας',
      description:
        'Η ποιότητα στη SIMOS βασίζεται σε πειθαρχημένη προμήθεια, τεκμηριωμένους ελέγχους και μακροχρόνιες συνεργασίες με παραγωγούς που προστατεύουν την ακεραιότητα του προϊόντος από την προέλευση έως την τελική παράδοση.',
      items: {
        certifiedPartners: {
          title: 'Πιστοποιημένοι Συνεργάτες Παραγωγής',
          description:
            'Συνεργαζόμαστε με παραγωγούς που λειτουργούν με αναγνωρισμένα πλαίσια ασφάλειας τροφίμων και ποιότητας, ευθυγραμμισμένα με τις απαιτήσεις της διεθνούς λιανικής.',
        },
        monitoredSupplyChain: {
          title: 'Παρακολουθούμενη Εφοδιαστική Αλυσίδα',
          description:
            'Η ποιότητα των προϊόντων ελέγχεται σε όλη τη διαδικασία προμήθειας, παραγωγής, αποθήκευσης και εξαγωγικού συντονισμού ώστε να διατηρείται η συνέπεια σε κάθε αποστολή.',
        },
        foodSafety: {
          title: 'Έμφαση στην Ασφάλεια Τροφίμων',
          description:
            'Η υγιεινή, η συμμόρφωση με τις προδιαγραφές, ο έλεγχος παρτίδων και η ακεραιότητα του προϊόντος αποτελούν βασικές προτεραιότητες σε κάθε γαλακτοκομική και μεσογειακή κατηγορία.',
        },
        authenticSourcing: {
          title: 'Αυθεντική Μεσογειακή Προέλευση',
          description:
            'Προστατεύουμε την προέλευση, την ταυτότητα και το γευστικό προφίλ των προϊόντων που εκπροσωπούμε, με σαφή εστίαση στις αυθεντικές μεσογειακές γαλακτοκομικές ειδικότητες.',
        },
        longTermStandards: {
          title: 'Μακροχρόνια Σταθερότητα Προϊόντος',
          description:
            'Οι σταθερές συνεργασίες με παραγωγούς και οι σαφείς ποιοτικές απαιτήσεις υποστηρίζουν επαναλαμβανόμενα πρότυπα, αξιόπιστη τροφοδοσία και εμπιστοσύνη των αγοραστών στο χρόνο.',
        },
      },
    },
    control: {
      eyebrow: 'Διαδικασίες Ποιοτικού Ελέγχου',
      title: 'Ποιοτικός Έλεγχος σε Κάθε Στάδιο',
      description:
        'Η διαδικασία μας έχει σχεδιαστεί ώστε να μειώνει τον κίνδυνο προμήθειας, να ενισχύει τη διαφάνεια του προϊόντος και να διατηρεί αξιόπιστη απόδοση σε πιστοποιημένη παραγωγή και εξαγωγικά logistics.',
      stages: {
        supplierVerification: {
          title: 'Επαλήθευση Προμηθευτών',
          description:
            'Οι δυνατότητες του παραγωγού, η τεκμηρίωση και η καταλληλότητα ανά κατηγορία εξετάζονται πριν ένα προϊόν ενταχθεί στο χαρτοφυλάκιο προμήθειάς μας.',
        },
        productionMonitoring: {
          title: 'Παρακολούθηση Παραγωγής',
          description:
            'Βρισκόμαστε κοντά στους συνεργάτες παραγωγής για να επιβεβαιώνουμε ότι οι προδιαγραφές, οι συσκευασίες και τα συμφωνημένα ποιοτικά κριτήρια παραμένουν ευθυγραμμισμένα.',
        },
        productInspections: {
          title: 'Έλεγχοι Προϊόντων',
          description:
            'Η εμφάνιση, η μορφή, η ακεραιότητα της συσκευασίας και οι βασικές εμπορικές προδιαγραφές ελέγχονται πριν τα προϊόντα περάσουν στη ροή εξαγωγής.',
        },
        batchControl: {
          title: 'Έλεγχος Παρτίδων',
          description:
            'Κάθε εμπορική παρτίδα συνδέεται με αρχεία παραγωγής και αποστολής ώστε τα προϊόντα να μπορούν να εντοπιστούν γρήγορα και με ακρίβεια.',
        },
        continuousAssessment: {
          title: 'Συνεχής Αξιολόγηση',
          description:
            'Η απόδοση αξιολογείται διαρκώς ώστε η ποιότητα, το επίπεδο εξυπηρέτησης και οι προσδοκίες των πελατών να παραμένουν ευθυγραμμισμένες μακροπρόθεσμα.',
        },
      },
    },
    traceability: {
      eyebrow: 'Πλήρης Ιχνηλασιμότητα',
      title: 'Ολοκληρωμένη Ιχνηλασιμότητα Προϊόντος',
      description:
        'Η SIMOS διατηρεί τεκμηριωμένη ορατότητα από την επιλογή του παραγωγού έως την τελική παράδοση στον πελάτη, βοηθώντας τους αγοραστές να λαμβάνουν τεκμηριωμένες αποφάσεις προμήθειας με σιγουριά.',
      highlights: [
        'Ιχνηλασιμότητα από το Α έως το Ω σε όλη τη ροή του προϊόντος, τα αρχεία παρτίδων και τον συντονισμό της παράδοσης.',
        'Διαφάνεια προϊόντος που υποστηρίζει τις απαιτήσεις λιανικής, εισαγωγέων και food service.',
        'Ορατότητα της εφοδιαστικής αλυσίδας για προέλευση, χειρισμό, συσκευασία και κατάσταση αποστολής.',
        'Κανονιστική συμμόρφωση με σαφή τεκμηρίωση και αρχεία που μπορούν να ελεγχθούν.',
      ],
      steps: [
        {
          title: 'Παραγωγός',
          description:
            'Οι εγκεκριμένοι παραγωγοί επιλέγονται βάσει εξειδίκευσης κατηγορίας, λειτουργικής αξιοπιστίας και προφίλ πιστοποίησης.',
        },
        {
          title: 'Επεξεργασία',
          description:
            'Τα δεδομένα επεξεργασίας και συσκευασίας συνδέονται με την προδιαγραφή του προϊόντος, τη μορφή του και την αναφορά της εμπορικής παρτίδας.',
        },
        {
          title: 'Ποιοτική Επαλήθευση',
          description:
            'Οι ποιοτικοί έλεγχοι και η ανασκόπηση εγγράφων επιβεβαιώνουν τη συμμόρφωση πριν η παραγγελία περάσει σε φάση εξαγωγής.',
        },
        {
          title: 'Logistics',
          description:
            'Η αποθήκευση, η αποστολή και ο συντονισμός της παράδοσης παρακολουθούνται ώστε να προστατεύεται η κατάσταση του προϊόντος και η συνέπεια της εξυπηρέτησης.',
        },
        {
          title: 'Πελάτης',
          description:
            'Οι αγοραστές λαμβάνουν αξιόπιστη ροή προϊόντος με τεκμηριωμένη ορατότητα από την προέλευση έως τον προορισμό.',
        },
      ],
    },
    standards: {
      eyebrow: 'Αξιόπιστα Πρότυπα',
      title: 'Αξιόπιστα Πρότυπα',
      description:
        'Οι αγοραστές απαιτούν τεκμηριωμένα και ελέγξιμα συστήματα ποιότητας. Η SIMOS συνεργάζεται με πιστοποιημένους παραγωγούς που ευθυγραμμίζονται με διεθνείς απαιτήσεις λιανικής και food service.',
      trustStatement:
        'Η SIMOS συνεργάζεται με πιστοποιημένους συνεργάτες παραγωγής που συμμορφώνονται με διεθνώς αναγνωρισμένα πρότυπα ποιότητας, ασφάλειας τροφίμων και ιχνηλασιμότητας.',
      note:
        'Η διαθεσιμότητα πιστοποίησης εξαρτάται από τον επιλεγμένο παραγωγό, την κατηγορία προϊόντος και τη μονάδα παραγωγής. Η SIMOS παρουσιάζει αυτά τα πρότυπα ως μέρος του πιστοποιημένου δικτύου προμήθειας και των δυνατοτήτων των συνεργατών της.',
      cardLabel: 'Αναγνωρισμένο πρότυπο',
      officialSource: 'Επίσημη πηγή',
      cards: {
        ifs:
          'Το IFS Food χρησιμοποιείται ευρέως για την αξιολόγηση της ασφάλειας τροφίμων, της ποιότητας προϊόντος και της λειτουργικής συνέπειας σε περιβάλλοντα παραγωγής και συσκευασίας τροφίμων.',
        brcgs:
          'Τα πρότυπα BRCGS αναγνωρίζονται από μεγάλες αλυσίδες λιανικής και εισαγωγείς για δομημένα συστήματα ασφάλειας τροφίμων, τεκμηριωμένους ελέγχους και ακεραιότητα προϊόντος.',
        bioHellas:
          'Η BIO Hellas υποστηρίζει πιστοποιημένο οργανικό έλεγχο και επαλήθευση για επιχειρήσεις που λειτουργούν σύμφωνα με αναγνωρισμένες απαιτήσεις βιολογικής παραγωγής.',
        agrocert:
          'Τα σχετικά σχήματα Agrocert υποστηρίζουν αναγνωρισμένα πλαίσια ποιότητας αγροδιατροφής που συνδέονται με την ταυτότητα προϊόντος, γεωργικά πρότυπα και εμπιστοσύνη της αγοράς.',
        halal:
          'Η πιστοποίηση Halal είναι σημαντική για αγοραστές που απαιτούν εγκεκριμένες πρώτες ύλες, ελεγχόμενες διαδικασίες και τεκμηριωμένη συμμόρφωση για μουσουλμανικές αγορές καταναλωτών.',
        kosher:
          'Η πιστοποίηση Kosher υποστηρίζει την πρόσβαση σε αγορές όπου η αξιολόγηση συστατικών, οι έλεγχοι παραγωγής και η θρησκευτική συμμόρφωση αποτελούν εμπορική προτεραιότητα.',
      },
    },
    logistics: {
      eyebrow: 'Ποιότητα μέσω Logistics',
      title: 'Αξιόπιστες Παραδόσεις, Σταθερή Ποιότητα',
      description:
        'Στη διεθνή διανομή γαλακτοκομικών και μεσογειακών τροφίμων, τα logistics αποτελούν μέρος της ποιοτικής διασφάλισης. Η ακρίβεια εξυπηρέτησης, η πειθαρχία στην ψυχρή αλυσίδα και η ορατότητα της παράδοσης προστατεύουν την τελική εμπειρία του αγοραστή.',
      imageAlt: 'Ευρωπαϊκή διανομή τροφίμων και αποθηκευτικά logistics',
      points: [
        'Πλήρης ενσωμάτωση EDI για αποδοτική διαχείριση παραγγελιών και συντονισμό της εφοδιαστικής αλυσίδας.',
        'Παράδοση ανά κιβώτιο για ευέλικτη αναπλήρωση και μικτές παραγγελίες.',
        'Χωρίς ελάχιστη ποσότητα παραγγελίας για αγοραστές που χρειάζονται ευελιξία σε πολλά SKU.',
        'Διανομή σε Γαλλία, Ισπανία, Βέλγιο και Ιταλία.',
        'Εκτέλεση logistics με την υποστήριξη της συνεργασίας Logifrio Madrid.',
        'Καθημερινές παραδόσεις εκτός Κυριακής για διατήρηση της συνέχειας εξυπηρέτησης.',
        'Υψηλό επίπεδο εξυπηρέτησης με έμφαση στην ακρίβεια, την ανταπόκριση και αξιόπιστα χρονικά παράθυρα παράδοσης.',
      ],
    },
    buyers: {
      eyebrow: 'Εμπιστοσύνη Αγοραστών',
      title: 'Γιατί οι Διεθνείς Αγοραστές Επιλέγουν τη SIMOS',
      description:
        'Εισαγωγείς, διανομείς, χονδρέμποροι, λιανέμποροι και αγοραστές Horeca βασίζονται στη SIMOS για δομημένη προμήθεια, σταθερή εκτέλεση και επαγγελματική γνώση της αγοράς.',
      cards: {
        certifiedProduction: {
          title: 'Πιστοποιημένη Παραγωγή',
          description:
            'Συνεργαζόμαστε με παραγωγικούς εταίρους που επιλέγονται για τα συστήματα ποιότητας, την τεχνογνωσία κατηγορίας και την εξαγωγική τους ετοιμότητα.',
        },
        traceability: {
          title: 'Ιχνηλασιμότητα',
          description:
            'Η τεκμηριωμένη ορατότητα παρτίδων υποστηρίζει την υπευθυνότητα από την προέλευση έως την τελική παράδοση.',
        },
        foodSafety: {
          title: 'Ασφάλεια Τροφίμων',
          description:
            'Οι απαιτήσεις ασφάλειας τροφίμων παραμένουν κεντρικές στις αποφάσεις προμήθειας, στους ελέγχους προϊόντων και στον συντονισμό των logistics.',
        },
        europeanDistribution: {
          title: 'Ευρωπαϊκή Διανομή',
          description:
            'Καθιερωμένες ροές διανομής υποστηρίζουν αξιόπιστη εξυπηρέτηση σε βασικές ευρωπαϊκές αγορές.',
        },
        privateLabel: {
          title: 'Εξειδίκευση στο Private Label',
          description:
            'Υποστηρίζουμε πελάτες λιανικής και food service με ανάπτυξη και υλοποίηση private label βάσει προδιαγραφών.',
        },
        flexibleOrdering: {
          title: 'Ευέλικτη Παραγγελιοληψία',
          description:
            'Η παράδοση σε επίπεδο κιβωτίου, η ευελιξία χωρίς MOQ και ο άμεσος συντονισμός βοηθούν τους αγοραστές να κινούνται ταχύτερα.',
        },
      },
    },
    finalCta: {
      title: 'Αναζητάτε Πιστοποιημένο Συνεργάτη Μεσογειακών Γαλακτοκομικών;',
      description:
        'Μιλήστε με την ομάδα μας για λύσεις προμήθειας, ευκαιρίες private label και πιστοποιημένα μεσογειακά γαλακτοκομικά προϊόντα.',
      contact: 'Επικοινωνήστε Μαζί μας',
    },
  },
  fr: {
    meta: {
      title: 'Qualite et Certifications | SIMOS Mediterranean Food',
      description:
        'Decouvrez les standards qualite, la tracabilite, le reseau de producteurs certifies et la distribution europeenne fiable de SIMOS Mediterranean Food.',
    },
    hero: {
      eyebrow: 'Qualite et Certifications',
      title: 'Une qualite sans compromis',
      subtitle:
        'Des producteurs mediterraneens certifies aux reseaux de distribution europeens fiables, SIMOS livre des produits laitiers authentiques avec une tracabilite complete, des standards qualite rigoureux et un service fiable.',
      imageAlt: 'Presentation de l assurance qualite et de l approvisionnement en produits laitiers mediterraneens',
      cardImageAlt: 'Processus de verification et de controle qualite des produits',
      metrics: {
        traceabilityLabel: 'Tracabilite',
        traceabilityValue: 'Visibilite de A a Z',
        partnerLabel: 'Reseau partenaire',
        partnerValue: 'Producteurs certifies',
      },
    },
    commitment: {
      eyebrow: 'Notre engagement qualite',
      title: 'Une culture de la qualite',
      description:
        'Chez SIMOS, la qualite repose sur un sourcing discipline, des controles documentes et des partenariats durables avec des producteurs qui protegent l integrite du produit depuis l origine jusqu a la livraison finale.',
      items: {
        certifiedPartners: {
          title: 'Partenaires de production certifies',
          description:
            'Nous collaborons avec des producteurs operant selon des cadres reconnus de securite alimentaire et de qualite, alignes sur les attentes du commerce international.',
        },
        monitoredSupplyChain: {
          title: 'Chaine d approvisionnement controlee',
          description:
            'La qualite produit est suivie tout au long du sourcing, de la production, du stockage et de la coordination export afin de garantir la constance de chaque expedition.',
        },
        foodSafety: {
          title: 'Priorite a la securite alimentaire',
          description:
            'Hygiene, conformite aux specifications, controle des lots et integrite produit restent des priorites centrales dans chaque categorie laitiere et mediterraneenne.',
        },
        authenticSourcing: {
          title: 'Origine mediterraneenne authentique',
          description:
            'Nous preservons l origine, l identite et le profil sensoriel des produits que nous representons, avec un accent clair sur les specialites laitieres mediterraneennes authentiques.',
        },
        longTermStandards: {
          title: 'Stabilite produit a long terme',
          description:
            'Des partenariats producteurs stables et des attentes qualite claires soutiennent des standards repetables, un approvisionnement fiable et la confiance des acheteurs dans la duree.',
        },
      },
    },
    control: {
      eyebrow: 'Procedures de controle qualite',
      title: 'Le controle qualite a chaque etape',
      description:
        'Notre processus est concu pour reduire le risque de sourcing, renforcer la transparence produit et maintenir une execution fiable sur la production certifiee et la logistique export.',
      stages: {
        supplierVerification: {
          title: 'Verification des fournisseurs',
          description:
            'Les capacites du producteur, la documentation et la pertinence de categorie sont evaluees avant qu un produit entre dans notre portefeuille sourcing.',
        },
        productionMonitoring: {
          title: 'Suivi de production',
          description:
            'Nous restons proches des partenaires de production afin de confirmer que les specifications, les emballages et les parametres qualite convenus restent alignes.',
        },
        productInspections: {
          title: 'Inspections produit',
          description:
            'L apparence, le format, l integrite de l emballage et les principales specifications commerciales sont verifiees avant l integration dans le flux export.',
        },
        batchControl: {
          title: 'Controle des lots',
          description:
            'Chaque lot commercial est relie aux enregistrements de production et d expedition afin que les produits puissent etre traces avec rapidite et precision.',
        },
        continuousAssessment: {
          title: 'Evaluation continue',
          description:
            'La performance est revue en continu afin que la qualite, le niveau de service et les attentes clients restent alignes sur le long terme.',
        },
      },
    },
    traceability: {
      eyebrow: 'Tracabilite complete',
      title: 'Une tracabilite produit complete',
      description:
        'SIMOS maintient une visibilite documentee depuis la selection du producteur jusqu a la livraison finale au client, afin d aider les acheteurs a prendre des decisions de sourcing en toute confiance.',
      highlights: [
        'Tracabilite de A a Z a travers le flux produit, les enregistrements de lots et la coordination des livraisons.',
        'Transparence produit au service des exigences du retail, des importateurs et de la restauration.',
        'Visibilite de la chaine d approvisionnement sur l origine, la manutention, l emballage et le statut d expedition.',
        'Conformite reglementaire soutenue par une documentation claire et des enregistrements auditables.',
      ],
      steps: [
        {
          title: 'Producteur',
          description:
            'Les producteurs approuves sont selectionnes selon leur expertise categorie, leur fiabilite operationnelle et leur profil de certification.',
        },
        {
          title: 'Transformation',
          description:
            'Les donnees de transformation et de conditionnement sont reliees a la specification produit, au format et a la reference du lot commercial.',
        },
        {
          title: 'Verification qualite',
          description:
            'Les controles qualite et la revue documentaire confirment l alignement avant le passage a l execution export.',
        },
        {
          title: 'Logistique',
          description:
            'Le stockage, l expedition et la coordination de livraison sont suivis afin de proteger l etat du produit et la constance du service.',
        },
        {
          title: 'Client',
          description:
            'Les acheteurs recoivent un flux produit fiable soutenu par une visibilite documentee de l origine a la destination.',
        },
      ],
    },
    standards: {
      eyebrow: 'Standards de confiance',
      title: 'Standards de confiance',
      description:
        'Les acheteurs attendent des systemes qualite documentes et auditables. SIMOS travaille avec des partenaires de production certifies alignes sur les exigences du retail et du food service.',
      trustStatement:
        'SIMOS collabore avec des partenaires de production certifies conformes a des standards internationalement reconnus de qualite, de securite alimentaire et de tracabilite.',
      note:
        'La disponibilite des certifications depend du producteur selectionne, de la categorie de produit et du site de production. SIMOS presente ces standards comme partie integrante de son reseau de sourcing certifie et des capacites de ses partenaires.',
      cardLabel: 'Standard reconnu',
      officialSource: 'Source officielle',
      cards: {
        ifs:
          'IFS Food est largement utilise pour evaluer la securite alimentaire, la qualite produit et la constance operationnelle dans les environnements de fabrication et de conditionnement alimentaires.',
        brcgs:
          'Les standards BRCGS sont reconnus par les grands distributeurs et importateurs pour leurs systemes structures de securite alimentaire, leurs controles documentes et l integrite produit.',
        bioHellas:
          'BIO Hellas soutient le controle et la verification biologiques certifies pour les entreprises operant selon des exigences reconnues de production biologique.',
        agrocert:
          'Les schemas lies a Agrocert soutiennent des cadres reconnus de qualite agroalimentaire relies a l identite produit, aux standards agricoles et a la confiance du marche.',
        halal:
          'La certification Halal est pertinente pour les acheteurs exigeant des ingredients approuves, des processus controles et une conformite documentee pour les marches de consommateurs musulmans.',
        kosher:
          'La certification Kosher facilite l acces aux marches ou la verification des ingredients, les controles de transformation et la conformite religieuse sont des priorites commerciales.',
      },
    },
    logistics: {
      eyebrow: 'La qualite par la logistique',
      title: 'Livraison fiable, qualite constante',
      description:
        'Dans la distribution internationale des produits laitiers et aliments mediterraneens, la logistique fait partie de l assurance qualite. Precision de service, discipline de chaine du froid et visibilite de livraison protegent l experience finale de l acheteur.',
      imageAlt: 'Distribution alimentaire europeenne et logistique d entrepot',
      points: [
        'Integration EDI complete pour un traitement efficace des commandes et une meilleure coordination de la chaine d approvisionnement.',
        'Livraison au carton pour soutenir le reassort flexible et les commandes mixtes.',
        'Aucune quantite minimum de commande pour les acheteurs ayant besoin d agilite sur plusieurs references.',
        'Couverture de distribution en France, Espagne, Belgique et Italie.',
        'Execution logistique soutenue par le partenariat Logifrio Madrid.',
        'Livraisons quotidiennes sauf le dimanche pour maintenir la continuite du service.',
        'Haut niveau de service axe sur la precision, la reactivite et des fenetres de livraison fiables.',
      ],
    },
    buyers: {
      eyebrow: 'Confiance acheteurs',
      title: 'Pourquoi les acheteurs internationaux choisissent SIMOS',
      description:
        'Importateurs, distributeurs, grossistes, retailers et acheteurs Horeca font confiance a SIMOS pour un sourcing structure, une execution stable et une lecture professionnelle du marche.',
      cards: {
        certifiedProduction: {
          title: 'Production certifiee',
          description:
            'Nous travaillons avec des partenaires de production selectionnes pour leurs systemes qualite, leur savoir-faire categorie et leur preparation a l export.',
        },
        traceability: {
          title: 'Tracabilite',
          description:
            'Une visibilite documentee des lots soutient la responsabilite de l origine jusqu a la livraison finale.',
        },
        foodSafety: {
          title: 'Securite alimentaire',
          description:
            'Les exigences de securite alimentaire restent centrales dans les decisions de sourcing, les controles produit et la coordination logistique.',
        },
        europeanDistribution: {
          title: 'Distribution europeenne',
          description:
            'Des flux de distribution etablis soutiennent un service fiable sur les principaux marches europeens.',
        },
        privateLabel: {
          title: 'Expertise marque de distributeur',
          description:
            'Nous accompagnons les clients retail et food service avec un developpement private label pilote par les specifications.',
        },
        flexibleOrdering: {
          title: 'Commande flexible',
          description:
            'La livraison au carton, la flexibilite sans MOQ et une coordination reactive aident les acheteurs a aller plus vite.',
        },
      },
    },
    finalCta: {
      title: 'Vous recherchez un partenaire certifie en produits laitiers mediterraneens ?',
      description:
        'Parlez avec notre equipe de solutions de sourcing, d opportunites private label et de produits laitiers mediterraneens certifies.',
      contact: 'Nous contacter',
    },
  },
  it: {
    meta: {
      title: 'Qualita e Certificazioni | SIMOS Mediterranean Food',
      description:
        'Scopri gli standard qualita, la tracciabilita, la rete di produttori certificati e la distribuzione europea affidabile di SIMOS Mediterranean Food.',
    },
    hero: {
      eyebrow: 'Qualita e Certificazioni',
      title: 'Qualita senza compromessi',
      subtitle:
        'Dai produttori mediterranei certificati alle reti di distribuzione europee affidabili, SIMOS offre autentici prodotti lattiero-caseari con piena tracciabilita, rigorosi standard qualitativi e un servizio affidabile.',
      imageAlt: 'Presentazione del controllo qualita e dell approvvigionamento lattiero mediterraneo',
      cardImageAlt: 'Processo di verifica del prodotto e controllo qualita',
      metrics: {
        traceabilityLabel: 'Tracciabilita',
        traceabilityValue: 'Visibilita da A a Z',
        partnerLabel: 'Rete partner',
        partnerValue: 'Produttori certificati',
      },
    },
    commitment: {
      eyebrow: 'Il nostro impegno per la qualita',
      title: 'Una cultura della qualita',
      description:
        'In SIMOS la qualita si costruisce attraverso un sourcing disciplinato, controlli documentati e partnership di lungo periodo con produttori che proteggono l integrita del prodotto dall origine alla consegna finale.',
      items: {
        certifiedPartners: {
          title: 'Partner produttivi certificati',
          description:
            'Collaboriamo con produttori che operano secondo quadri riconosciuti di sicurezza alimentare e qualita, in linea con le aspettative del retail internazionale.',
        },
        monitoredSupplyChain: {
          title: 'Filiera monitorata',
          description:
            'La qualita del prodotto viene controllata lungo sourcing, produzione, stoccaggio e coordinamento export per mantenere coerenza in ogni spedizione.',
        },
        foodSafety: {
          title: 'Focus sulla sicurezza alimentare',
          description:
            'Igiene, conformita alle specifiche, controllo lotti e integrita del prodotto restano priorita centrali in ogni categoria lattiero-casearia e mediterranea.',
        },
        authenticSourcing: {
          title: 'Origine mediterranea autentica',
          description:
            'Proteggiamo origine, identita e profilo sensoriale dei prodotti che rappresentiamo, con un chiaro focus sulle autentiche specialita lattiero-casearie mediterranee.',
        },
        longTermStandards: {
          title: 'Stabilita di prodotto nel tempo',
          description:
            'Partnership stabili con i produttori e aspettative qualitative chiare supportano standard ripetibili, fornitura affidabile e fiducia degli acquirenti nel lungo periodo.',
        },
      },
    },
    control: {
      eyebrow: 'Procedure di controllo qualita',
      title: 'Controllo qualita in ogni fase',
      description:
        'Il nostro processo e progettato per ridurre il rischio di sourcing, aumentare la trasparenza del prodotto e mantenere un esecuzione affidabile tra produzione certificata e logistica export.',
      stages: {
        supplierVerification: {
          title: 'Verifica dei fornitori',
          description:
            'Capacita del produttore, documentazione e coerenza con la categoria vengono valutate prima che un prodotto entri nel nostro portafoglio sourcing.',
        },
        productionMonitoring: {
          title: 'Monitoraggio della produzione',
          description:
            'Restiamo vicini ai partner produttivi per confermare che specifiche, packaging e parametri qualitativi concordati rimangano allineati.',
        },
        productInspections: {
          title: 'Ispezioni di prodotto',
          description:
            'Aspetto, formato, integrita dell imballo e principali specifiche commerciali vengono controllati prima che i prodotti entrino nel flusso export.',
        },
        batchControl: {
          title: 'Controllo dei lotti',
          description:
            'Ogni lotto commerciale e collegato ai registri di produzione e spedizione in modo che i prodotti possano essere tracciati con rapidita e precisione.',
        },
        continuousAssessment: {
          title: 'Valutazione continua',
          description:
            'Le performance vengono riesaminate costantemente affinche qualita, livello di servizio e aspettative del cliente rimangano allineate nel lungo periodo.',
        },
      },
    },
    traceability: {
      eyebrow: 'Tracciabilita completa',
      title: 'Tracciabilita completa del prodotto',
      description:
        'SIMOS mantiene una visibilita documentata dalla selezione del produttore fino alla consegna finale al cliente, aiutando gli acquirenti a prendere decisioni di sourcing con maggiore sicurezza.',
      highlights: [
        'Tracciabilita da A a Z lungo il flusso del prodotto, i registri di lotto e il coordinamento delle consegne.',
        'Trasparenza del prodotto a supporto delle esigenze di retailer, importatori e food service.',
        'Visibilita della supply chain su origine, movimentazione, confezionamento e stato della spedizione.',
        'Conformita normativa supportata da documentazione chiara e registrazioni verificabili.',
      ],
      steps: [
        {
          title: 'Produttore',
          description:
            'I produttori approvati vengono selezionati in base a competenza di categoria, affidabilita operativa e profilo di certificazione.',
        },
        {
          title: 'Lavorazione',
          description:
            'I dati di lavorazione e confezionamento sono collegati alla specifica prodotto, al formato e al riferimento del lotto commerciale.',
        },
        {
          title: 'Verifica qualita',
          description:
            'Controlli qualita e revisione documentale confermano l allineamento prima che l ordine entri nella fase esecutiva export.',
        },
        {
          title: 'Logistica',
          description:
            'Stoccaggio, spedizione e coordinamento della consegna vengono monitorati per proteggere la condizione del prodotto e la continuita del servizio.',
        },
        {
          title: 'Cliente',
          description:
            'Gli acquirenti ricevono un flusso prodotto affidabile supportato da visibilita documentata dall origine alla destinazione.',
        },
      ],
    },
    standards: {
      eyebrow: 'Standard affidabili',
      title: 'Standard affidabili',
      description:
        'I buyer richiedono sistemi qualita documentati e verificabili. SIMOS collabora con partner produttivi certificati, allineati alle esigenze di retail e food service.',
      trustStatement:
        'SIMOS collabora con partner produttivi certificati che rispettano standard internazionalmente riconosciuti di qualita, sicurezza alimentare e tracciabilita.',
      note:
        'La disponibilita delle certificazioni dipende dal produttore selezionato, dalla categoria di prodotto e dal sito produttivo. SIMOS presenta questi standard come parte della propria rete di sourcing certificato e del profilo di capacita dei partner.',
      cardLabel: 'Standard riconosciuto',
      officialSource: 'Fonte ufficiale',
      cards: {
        ifs:
          'IFS Food e ampiamente utilizzato per valutare sicurezza alimentare, qualita del prodotto e coerenza operativa negli ambienti di produzione e confezionamento alimentare.',
        brcgs:
          'Gli standard BRCGS sono riconosciuti da grandi retailer e importatori per sistemi strutturati di sicurezza alimentare, controlli documentati e integrita del prodotto.',
        bioHellas:
          'BIO Hellas supporta controllo e verifica biologica certificata per aziende che operano secondo requisiti riconosciuti di produzione biologica.',
        agrocert:
          'Gli schemi collegati ad Agrocert supportano quadri riconosciuti di qualita agroalimentare legati a identita del prodotto, standard agricoli e fiducia del mercato.',
        halal:
          'La certificazione Halal e rilevante per gli acquirenti che richiedono ingredienti approvati, processi controllati e conformita documentata per i mercati dei consumatori musulmani.',
        kosher:
          'La certificazione Kosher supporta l accesso a mercati in cui verifica degli ingredienti, controlli di processo e conformita religiosa sono priorita commerciali.',
      },
    },
    logistics: {
      eyebrow: 'Qualita attraverso la logistica',
      title: 'Consegna affidabile, qualita costante',
      description:
        'Nella distribuzione internazionale di latticini e alimenti mediterranei, la logistica fa parte dell assurance qualita. Precisione del servizio, disciplina della catena del freddo e visibilita della consegna proteggono l esperienza finale dell acquirente.',
      imageAlt: 'Distribuzione alimentare europea e logistica di magazzino',
      points: [
        'Piena integrazione EDI per un efficiente gestione ordini e coordinamento della supply chain.',
        'Consegna per cartone per supportare riordini flessibili e ordini misti.',
        'Nessuna quantita minima d ordine per acquirenti che richiedono agilita su piu SKU.',
        'Copertura distributiva in Francia, Spagna, Belgio e Italia.',
        'Esecuzione logistica supportata dalla partnership con Logifrio Madrid.',
        'Consegne giornaliere tranne la domenica per mantenere la continuita del servizio.',
        'Alto livello di servizio focalizzato su precisione, reattivita e finestre di consegna affidabili.',
      ],
    },
    buyers: {
      eyebrow: 'Fiducia degli acquirenti',
      title: 'Perche gli acquirenti internazionali scelgono SIMOS',
      description:
        'Importatori, distributori, grossisti, retailer e buyer Horeca si affidano a SIMOS per un sourcing strutturato, un esecuzione stabile e una lettura professionale del mercato.',
      cards: {
        certifiedProduction: {
          title: 'Produzione certificata',
          description:
            'Lavoriamo con partner produttivi selezionati per sistemi qualita, competenza di categoria e preparazione all export.',
        },
        traceability: {
          title: 'Tracciabilita',
          description:
            'La visibilita documentata dei lotti supporta la responsabilita dall origine fino alla consegna finale.',
        },
        foodSafety: {
          title: 'Sicurezza alimentare',
          description:
            'Le aspettative sulla sicurezza alimentare restano centrali nelle decisioni di sourcing, nei controlli prodotto e nel coordinamento logistico.',
        },
        europeanDistribution: {
          title: 'Distribuzione europea',
          description:
            'Flussi distributivi consolidati supportano un servizio affidabile nei principali mercati europei.',
        },
        privateLabel: {
          title: 'Esperienza private label',
          description:
            'Supportiamo clienti retail e food service con sviluppo e implementazione private label guidati dalle specifiche.',
        },
        flexibleOrdering: {
          title: 'Ordini flessibili',
          description:
            'Consegna a livello di cartone, flessibilita senza MOQ e coordinamento rapido aiutano gli acquirenti a muoversi piu velocemente.',
        },
      },
    },
    finalCta: {
      title: 'Cerchi un partner certificato per i lattiero-caseari mediterranei?',
      description:
        'Parla con il nostro team di soluzioni di sourcing, opportunita private label e prodotti lattiero-caseari mediterranei certificati.',
      contact: 'Contattaci',
    },
  },
  es: {
    meta: {
      title: 'Calidad y Certificaciones | SIMOS Mediterranean Food',
      description:
        'Descubra los estandares de calidad, la trazabilidad, la red de productores certificados y la distribucion europea confiable de SIMOS Mediterranean Food.',
    },
    hero: {
      eyebrow: 'Calidad y Certificaciones',
      title: 'Calidad sin compromiso',
      subtitle:
        'Desde productores mediterraneos certificados hasta redes de distribucion europeas confiables, SIMOS entrega autenticos productos lacteos con trazabilidad completa, rigurosos estandares de calidad y un servicio fiable.',
      imageAlt: 'Presentacion del control de calidad y del abastecimiento lacteo mediterraneo',
      cardImageAlt: 'Proceso de verificacion del producto y control de calidad',
      metrics: {
        traceabilityLabel: 'Trazabilidad',
        traceabilityValue: 'Visibilidad de A a Z',
        partnerLabel: 'Red de socios',
        partnerValue: 'Productores certificados',
      },
    },
    commitment: {
      eyebrow: 'Nuestro compromiso con la calidad',
      title: 'Una cultura de calidad',
      description:
        'En SIMOS, la calidad se construye mediante un abastecimiento disciplinado, controles documentados y relaciones a largo plazo con productores que protegen la integridad del producto desde el origen hasta la entrega final.',
      items: {
        certifiedPartners: {
          title: 'Socios de produccion certificados',
          description:
            'Colaboramos con productores que operan bajo marcos reconocidos de seguridad alimentaria y calidad, alineados con las expectativas del retail internacional.',
        },
        monitoredSupplyChain: {
          title: 'Cadena de suministro supervisada',
          description:
            'La calidad del producto se revisa durante el abastecimiento, la produccion, el almacenamiento y la coordinacion de exportacion para mantener la consistencia en cada envio.',
        },
        foodSafety: {
          title: 'Enfoque en seguridad alimentaria',
          description:
            'La higiene, el cumplimiento de especificaciones, el control por lotes y la integridad del producto siguen siendo prioridades centrales en cada categoria lactea y mediterranea.',
        },
        authenticSourcing: {
          title: 'Origen mediterraneo autentico',
          description:
            'Protegemos el origen, la identidad y el perfil sensorial de los productos que representamos, con un enfoque claro en las autenticas especialidades lacteas mediterraneas.',
        },
        longTermStandards: {
          title: 'Estabilidad de producto a largo plazo',
          description:
            'Las relaciones estables con productores y las expectativas de calidad claras respaldan estandares repetibles, suministro confiable y confianza del comprador a lo largo del tiempo.',
        },
      },
    },
    control: {
      eyebrow: 'Procedimientos de control de calidad',
      title: 'Control de calidad en cada etapa',
      description:
        'Nuestro proceso esta disenado para reducir el riesgo de abastecimiento, mejorar la transparencia del producto y mantener un desempeno confiable entre produccion certificada y logistica de exportacion.',
      stages: {
        supplierVerification: {
          title: 'Verificacion de proveedores',
          description:
            'Las capacidades del productor, la documentacion y la adecuacion por categoria se revisan antes de que un producto entre en nuestro portafolio de abastecimiento.',
        },
        productionMonitoring: {
          title: 'Seguimiento de produccion',
          description:
            'Mantenemos cercania con los socios de produccion para confirmar que las especificaciones, el empaque y los parametros de calidad acordados sigan alineados.',
        },
        productInspections: {
          title: 'Inspecciones de producto',
          description:
            'La apariencia, el formato, la integridad del envase y las principales especificaciones comerciales se controlan antes de que los productos entren en el flujo de exportacion.',
        },
        batchControl: {
          title: 'Control por lotes',
          description:
            'Cada lote comercial se vincula con registros de produccion y envio para que los productos puedan rastrearse con rapidez y precision.',
        },
        continuousAssessment: {
          title: 'Evaluacion continua',
          description:
            'El rendimiento se revisa continuamente para que la calidad, el nivel de servicio y las expectativas del cliente permanezcan alineados a largo plazo.',
        },
      },
    },
    traceability: {
      eyebrow: 'Trazabilidad total',
      title: 'Trazabilidad completa del producto',
      description:
        'SIMOS mantiene visibilidad documentada desde la seleccion del productor hasta la entrega final al cliente, ayudando a los compradores a tomar decisiones de abastecimiento con confianza.',
      highlights: [
        'Trazabilidad de la A a la Z en todo el flujo del producto, registros de lotes y coordinacion de entregas.',
        'Transparencia del producto para apoyar los requisitos de retail, importadores y food service.',
        'Visibilidad de la cadena de suministro sobre origen, manipulacion, envasado y estado del envio.',
        'Cumplimiento normativo respaldado por documentacion clara y registros auditables.',
      ],
      steps: [
        {
          title: 'Productor',
          description:
            'Los productores aprobados se seleccionan segun su experiencia por categoria, fiabilidad operativa y perfil de certificacion.',
        },
        {
          title: 'Procesamiento',
          description:
            'Los datos de procesamiento y envasado se vinculan con la especificacion del producto, el formato y la referencia del lote comercial.',
        },
        {
          title: 'Verificacion de calidad',
          description:
            'Los controles de calidad y la revision documental confirman la alineacion antes de que el pedido pase a la ejecucion exportadora.',
        },
        {
          title: 'Logistica',
          description:
            'El almacenamiento, la expedicion y la coordinacion de la entrega se supervisan para proteger la condicion del producto y la constancia del servicio.',
        },
        {
          title: 'Cliente',
          description:
            'Los compradores reciben un flujo de producto confiable respaldado por visibilidad documentada desde el origen hasta el destino.',
        },
      ],
    },
    standards: {
      eyebrow: 'Estandares de confianza',
      title: 'Estandares de confianza',
      description:
        'Los compradores exigen sistemas de calidad documentados y auditables. SIMOS colabora con socios de produccion certificados alineados con requisitos de retail y food service.',
      trustStatement:
        'SIMOS colabora con socios de produccion certificados que cumplen con estandares internacionalmente reconocidos de calidad, seguridad alimentaria y trazabilidad.',
      note:
        'La disponibilidad de certificaciones depende del productor seleccionado, la categoria del producto y la planta de produccion. SIMOS presenta estos estandares como parte de su red de abastecimiento certificado y de la capacidad de sus socios.',
      cardLabel: 'Estandar reconocido',
      officialSource: 'Fuente oficial',
      cards: {
        ifs:
          'IFS Food se utiliza ampliamente para evaluar la seguridad alimentaria, la calidad del producto y la consistencia operativa en entornos de fabricacion y envasado de alimentos.',
        brcgs:
          'Los estandares BRCGS son reconocidos por grandes retailers e importadores por sus sistemas estructurados de seguridad alimentaria, controles documentados e integridad del producto.',
        bioHellas:
          'BIO Hellas apoya el control y la verificacion organica certificada para empresas que operan conforme a requisitos reconocidos de produccion ecologica.',
        agrocert:
          'Los esquemas relacionados con Agrocert respaldan marcos reconocidos de calidad agroalimentaria vinculados con identidad del producto, estandares agricolas y confianza del mercado.',
        halal:
          'La certificacion Halal es relevante para compradores que requieren ingredientes aprobados, procesos controlados y cumplimiento documentado para mercados de consumidores musulmanes.',
        kosher:
          'La certificacion Kosher facilita el acceso a mercados donde la revision de ingredientes, los controles de proceso y el cumplimiento religioso son prioridades comerciales.',
      },
    },
    logistics: {
      eyebrow: 'Calidad a traves de la logistica',
      title: 'Entrega confiable, calidad constante',
      description:
        'En la distribucion internacional de lacteos y alimentos mediterraneos, la logistica forma parte del aseguramiento de la calidad. La precision del servicio, la disciplina de la cadena de frio y la visibilidad de la entrega protegen la experiencia final del comprador.',
      imageAlt: 'Distribucion alimentaria europea y logistica de almacen',
      points: [
        'Integracion EDI completa para un procesamiento eficiente de pedidos y coordinacion de la cadena de suministro.',
        'Entrega por caja para apoyar reposiciones flexibles y pedidos mixtos.',
        'Sin cantidad minima de pedido para compradores que requieren agilidad en multiples SKU.',
        'Cobertura de distribucion en Francia, Espana, Belgica e Italia.',
        'Ejecucion logistica respaldada por la colaboracion con Logifrio Madrid.',
        'Entregas diarias excepto los domingos para mantener la continuidad del servicio.',
        'Alto nivel de servicio enfocado en precision, capacidad de respuesta y ventanas de entrega confiables.',
      ],
    },
    buyers: {
      eyebrow: 'Confianza del comprador',
      title: 'Por que los compradores internacionales eligen SIMOS',
      description:
        'Importadores, distribuidores, mayoristas, retailers y compradores Horeca confian en SIMOS por su abastecimiento estructurado, ejecucion estable y lectura profesional del mercado.',
      cards: {
        certifiedProduction: {
          title: 'Produccion certificada',
          description:
            'Trabajamos con socios de produccion seleccionados por sus sistemas de calidad, conocimiento de categoria y preparacion para exportacion.',
        },
        traceability: {
          title: 'Trazabilidad',
          description:
            'La visibilidad documentada de los lotes respalda la responsabilidad desde el origen hasta la entrega final.',
        },
        foodSafety: {
          title: 'Seguridad alimentaria',
          description:
            'Las expectativas de seguridad alimentaria siguen siendo centrales en las decisiones de abastecimiento, los controles de producto y la coordinacion logistica.',
        },
        europeanDistribution: {
          title: 'Distribucion europea',
          description:
            'Flujos de distribucion consolidados respaldan un servicio confiable en los principales mercados europeos.',
        },
        privateLabel: {
          title: 'Experiencia en marca blanca',
          description:
            'Apoyamos a clientes de retail y food service con desarrollo e implementacion de marca blanca guiados por especificaciones.',
        },
        flexibleOrdering: {
          title: 'Pedidos flexibles',
          description:
            'La entrega por caja, la flexibilidad sin MOQ y una coordinacion agil ayudan a los compradores a avanzar con mayor rapidez.',
        },
      },
    },
    finalCta: {
      title: 'Busca un socio certificado en lacteos mediterraneos?',
      description:
        'Hable con nuestro equipo sobre soluciones de abastecimiento, oportunidades de marca blanca y productos lacteos mediterraneos certificados.',
      contact: 'Contactenos',
    },
  },
} as const;

function getQualityContent(locale: string) {
  if (locale in qualityContent) {
    return qualityContent[locale as keyof typeof qualityContent];
  }

  return qualityContent.en;
}

export function generateMetadata({ params: { locale } }: PageProps) {
  const content = getQualityContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function QualityPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);

  const commonT = useTranslations('Common');
  const content = getQualityContent(locale);

  const commitments = [
    {
      icon: ShieldCheck,
      title: content.commitment.items.certifiedPartners.title,
      description: content.commitment.items.certifiedPartners.description,
    },
    {
      icon: ClipboardCheck,
      title: content.commitment.items.monitoredSupplyChain.title,
      description: content.commitment.items.monitoredSupplyChain.description,
    },
    {
      icon: CheckCircle2,
      title: content.commitment.items.foodSafety.title,
      description: content.commitment.items.foodSafety.description,
    },
    {
      icon: Leaf,
      title: content.commitment.items.authenticSourcing.title,
      description: content.commitment.items.authenticSourcing.description,
    },
    {
      icon: BadgeCheck,
      title: content.commitment.items.longTermStandards.title,
      description: content.commitment.items.longTermStandards.description,
    },
  ];

  const controlStages = [
    {
      icon: ScanSearch,
      title: content.control.stages.supplierVerification.title,
      description: content.control.stages.supplierVerification.description,
    },
    {
      icon: Factory,
      title: content.control.stages.productionMonitoring.title,
      description: content.control.stages.productionMonitoring.description,
    },
    {
      icon: Microscope,
      title: content.control.stages.productInspections.title,
      description: content.control.stages.productInspections.description,
    },
    {
      icon: Boxes,
      title: content.control.stages.batchControl.title,
      description: content.control.stages.batchControl.description,
    },
    {
      icon: BadgeCheck,
      title: content.control.stages.continuousAssessment.title,
      description: content.control.stages.continuousAssessment.description,
    },
  ];

  const standards = [
    {
      mark: 'IFS',
      title: 'IFS',
      description: content.standards.cards.ifs,
      url: 'https://www.ifs-certification.com/index.php/en/ifs-portfolio/standards/food-standard',
    },
    {
      mark: 'BRCGS',
      title: 'BRCGS',
      description: content.standards.cards.brcgs,
      url: 'https://www.brcgs.com/our-standards/food-safety/',
    },
    {
      mark: 'BIO',
      title: 'BIO Hellas',
      description: content.standards.cards.bioHellas,
      url: 'https://bio-hellas.gr/the-biohellas-institute/the-biohellas-logo/?lang=en',
    },
    {
      mark: 'AGRO',
      title: 'Agrocert',
      description: content.standards.cards.agrocert,
      url: 'https://iagrocert.gr/',
    },
    {
      mark: 'HALAL',
      title: 'Halal Certification',
      description: content.standards.cards.halal,
      url: 'https://bpjph.halal.go.id/en/',
    },
    {
      mark: 'KOSHER',
      title: 'Kosher Certification',
      description: content.standards.cards.kosher,
      url: 'https://kof-k.org/',
    },
  ];

  const trustCards = [
    {
      icon: BadgeCheck,
      title: content.buyers.cards.certifiedProduction.title,
      description: content.buyers.cards.certifiedProduction.description,
    },
    {
      icon: ScanSearch,
      title: content.buyers.cards.traceability.title,
      description: content.buyers.cards.traceability.description,
    },
    {
      icon: ShieldCheck,
      title: content.buyers.cards.foodSafety.title,
      description: content.buyers.cards.foodSafety.description,
    },
    {
      icon: Truck,
      title: content.buyers.cards.europeanDistribution.title,
      description: content.buyers.cards.europeanDistribution.description,
    },
    {
      icon: Boxes,
      title: content.buyers.cards.privateLabel.title,
      description: content.buyers.cards.privateLabel.description,
    },
    {
      icon: MapPinned,
      title: content.buyers.cards.flexibleOrdering.title,
      description: content.buyers.cards.flexibleOrdering.description,
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
                  alt={content.hero.imageAlt}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                {content.hero.eyebrow}
              </span>
              <div className="space-y-6">
                <h1 className="text-5xl font-serif leading-tight md:text-7xl">
                  {content.hero.title}
                </h1>
                <p className="max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
                  {content.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  {commonT('requestCatalogue')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                >
                  {commonT('contactOurTeam')}
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1400"
                  alt={content.hero.cardImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 pt-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">{content.hero.metrics.traceabilityLabel}</p>
                  <p className="pt-2 text-3xl font-serif">{content.hero.metrics.traceabilityValue}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">{content.hero.metrics.partnerLabel}</p>
                  <p className="pt-2 text-3xl font-serif">{content.hero.metrics.partnerValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {content.standards.eyebrow}
            </p>
            <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.standards.title}</h2>
            <p className="text-lg leading-relaxed text-foreground/70">{content.standards.description}</p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-secondary bg-white px-8 py-10 shadow-sm md:px-12">
            <p className="text-center text-sm leading-7 text-foreground/80 md:text-base">
              {content.standards.trustStatement}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
              {standards.map((standard) => (
                <a
                  key={standard.title}
                  href={standard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[1.5rem] border border-secondary bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
                  aria-label={`${standard.title} ${content.standards.officialSource}`}
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/10 bg-primary/5">
                    <svg
                      viewBox="0 0 120 120"
                      className="h-20 w-20 text-primary"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="2" opacity="0.35" />
                      <circle cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                      <path
                        d="M60 20l6.8 9.8 11.4-2.5-2.5 11.4L85.5 46 75.7 52.8l2.5 11.4-11.4-2.5L60 71.5l-6.8-9.8-11.4 2.5 2.5-11.4L34.5 46l9.8-6.8-2.5-11.4 11.4 2.5L60 20z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        opacity="0.25"
                      />
                      <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                    </svg>
                    <span className="absolute text-lg font-semibold uppercase tracking-[0.18em] text-primary">
                      {standard.mark}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p className="text-sm font-semibold text-primary">{standard.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/50">
                      {content.standards.cardLabel}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-white via-white/80 to-transparent pb-4 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-semibold text-primary">{content.standards.officialSource}</span>
                    <ArrowRight size={14} className="text-primary" />
                  </div>
                </a>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-foreground/60">
              {content.standards.note}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {content.commitment.eyebrow}
            </p>
            <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.commitment.title}</h2>
            <p className="text-lg leading-relaxed text-foreground/70">{content.commitment.description}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[1.75rem] border border-secondary bg-secondary/40 p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-serif text-primary">{item.title}</h3>
                  <p className="pt-4 text-sm leading-7 text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {content.control.eyebrow}
            </p>
            <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.control.title}</h2>
            <p className="text-lg leading-relaxed text-foreground/70">{content.control.description}</p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-5">
            {controlStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.title} className="relative rounded-[1.75rem] bg-white p-8 shadow-sm">
                  <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-serif text-primary">{stage.title}</h3>
                  <p className="pt-4 text-sm leading-7 text-foreground/70">{stage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
                {content.traceability.eyebrow}
              </p>
              <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.traceability.title}</h2>
              <p className="text-lg leading-relaxed text-foreground/70">{content.traceability.description}</p>
              <ul className="space-y-4 pt-2">
                {content.traceability.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-foreground/75">
                    <CheckCircle2 className="mt-0.5 text-primary" size={18} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-secondary bg-secondary/40 p-8 md:p-10">
              <div className="space-y-6">
                {content.traceability.steps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      {index < content.traceability.steps.length - 1 ? (
                        <div className="mt-3 h-12 w-px bg-primary/20" />
                      ) : null}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-serif text-primary">{step.title}</h3>
                      <p className="pt-2 text-sm leading-7 text-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
                alt={content.logistics.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {content.logistics.eyebrow}
              </p>
              <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.logistics.title}</h2>
              <p className="text-lg leading-relaxed text-foreground/70">{content.logistics.description}</p>
              <ul className="grid gap-4 pt-2">
                {content.logistics.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-2xl border border-secondary p-4">
                    <Truck className="mt-0.5 text-primary" size={18} />
                    <span className="text-foreground/75">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
              {content.hero.eyebrow}
            </p>
            <h2 className="text-4xl font-serif text-primary md:text-5xl">{content.buyers.title}</h2>
            <p className="text-lg leading-relaxed text-foreground/70">{content.buyers.description}</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <div key={card.title} className="rounded-[1.75rem] bg-white p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-serif text-primary">{card.title}</h3>
                  <p className="pt-4 text-sm leading-7 text-foreground/70">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[2.5rem] bg-primary px-8 py-14 text-center text-white md:px-14 md:py-16">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-4xl font-serif md:text-5xl">{content.finalCta.title}</h2>
              <p className="text-lg font-light leading-relaxed text-white/80">{content.finalCta.description}</p>
              <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  {commonT('requestCatalogue')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                >
                  {content.finalCta.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
