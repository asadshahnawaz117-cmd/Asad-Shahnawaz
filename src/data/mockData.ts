import { Specialty, Instructor, Testimonial, FaqItem } from '../types';

export const SPECIALTIES_DATA: Specialty[] = [
  {
    id: 'anesthesie',
    name: 'Anesthésie-Réanimation',
    category: 'emergency',
    hours: 120,
    casesCount: 45,
    questionsCount: 1200,
    passRate: 98,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    description: 'Préparation complète aux épreuves théoriques et cliniques en anesthésie, réanimation chirurgicale et médecine péri-opératoire.',
    modules: [
      'Gestion des voies aériennes difficiles & ventilation',
      'Chocs septiques, cardiogéniques et hémorragiques',
      'Anesthésie locorégionale et pharmacologie avancée',
      'Cas cliniques d’annales corrigés par des PH'
    ]
  },
  {
    id: 'chirurgie-ortho',
    name: 'Chirurgie Orthopédique',
    category: 'surgery',
    hours: 110,
    casesCount: 38,
    questionsCount: 950,
    passRate: 95,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    description: 'Traumatologie ostéo-articulaire, chirurgie prothétique de hanche et genou, urgences rachidiennes et critères EVC.',
    modules: [
      'Fractures articulaires complexes du membre inférieur',
      'Pathologies de la coiffe des rotateurs & épaule',
      'Infections ostéo-articulaires nosocomiales',
      'Simulations orales avec grille officielle CNG'
    ]
  },
  {
    id: 'geriatrie',
    name: 'Gériatrie',
    category: 'medicine',
    hours: 85,
    casesCount: 30,
    questionsCount: 820,
    passRate: 96,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
    description: 'Polypathologie du sujet âgé, iatrogénie, troubles neurocognitifs majeurs et filières de soins en France.',
    modules: [
      'Chutes et syndromes confusionnels aigus',
      'Optimisation thérapeutique et sevrage médicamenteux',
      'Nutrition et dénutrition en EHPAD / USLD',
      'Éthique, directives anticipées et soins palliatifs'
    ]
  },
  {
    id: 'urgences',
    name: "Médecine d'Urgence",
    category: 'emergency',
    hours: 140,
    casesCount: 52,
    questionsCount: 1450,
    passRate: 97,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    description: 'Prise en charge déchocage, SMUR, urgences vitales médicales et chirurgicales, protocoles SFMU récents.',
    modules: [
      'Arrêt cardio-respiratoire et réanimation cardio-pulmonaire',
      'Syndromes coronariens aigus et AVC ischémiques',
      'Polytraumatisés graves et damage control',
      'Triage IAO et organisation des SAU français'
    ]
  },
  {
    id: 'medecine-generale',
    name: 'Médecine Générale',
    category: 'medicine',
    hours: 160,
    casesCount: 60,
    questionsCount: 1800,
    passRate: 99,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    description: 'Soins primaires en cabinet et MSP, prévention, maladies chroniques, diabétologie et pédiatrie ambulatoire.',
    modules: [
      'Cardiologie ambulatoire et HTA résistante',
      'Santé de la femme et suivi de grossesse en ambulatoire',
      'Psychiatrie de première ligne et dépendances',
      'Épreuves pratiques orales de consultation EVC'
    ]
  },
  {
    id: 'chirurgie-viscerale',
    name: 'Chirurgie Viscérale',
    category: 'surgery',
    hours: 115,
    casesCount: 42,
    questionsCount: 980,
    passRate: 94,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=600&q=80',
    description: 'Chirurgie digestive d’urgence, oncologie digestive, pathologies herniaires et hépato-bilio-pancréatiques.',
    modules: [
      'Occlusions intestinales aiguës et péritonites',
      'Cancers colorectaux et stratégie néoadjuvante',
      'Chirurgie bariatrique et complications précoces',
      'Cas pratiques illustrés et vidéos opératoires commentées'
    ]
  },
  {
    id: 'radiologie',
    name: 'Radiologie',
    category: 'radiology',
    hours: 105,
    casesCount: 85,
    questionsCount: 1100,
    passRate: 100,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    description: 'Scanner thoraco-abdo-pelvien, IRM neuro et ostéo, radiologie interventionnelle et cas PACS réels.',
    modules: [
      'Scanner thoracique dans l’embolie pulmonaire et pneumopathies',
      'IRM cérébrale dans les accidents vasculaires et SEP',
      'Urgences digestives en imagerie en coupes',
      'Banque de 500+ cas PACS réels téléchargeables'
    ]
  },
  {
    id: 'cardiologie',
    name: 'Cardiologie',
    category: 'medicine',
    hours: 130,
    casesCount: 48,
    questionsCount: 1350,
    passRate: 96,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80',
    description: 'Insuffisance cardiaque, valvulopathies, troubles du rythme, coronaropathies et lecture d’ECG experts.',
    modules: [
      'ECG complexes et rythmologie interventionnelle',
      'Insuffisance cardiaque aiguë et choc cardiogénique',
      'Valvulopathies aortiques et mitrales selon l’ESC',
      'Cas cliniques types EVC avec barème détaillé'
    ]
  },
  {
    id: 'oncologie',
    name: 'Oncologie Médicale',
    category: 'medicine',
    hours: 95,
    casesCount: 36,
    questionsCount: 890,
    passRate: 93,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
    description: 'Thérapies ciblées, immunothérapie, RCP, toxicité des antinéoplasiques et soins de support.',
    modules: [
      'Cancers du poumon et marqueurs moléculaires',
      'Cancers du sein et classification moléculaire',
      'Urgences oncologiques : neutropénie fébrile et compression médullaire',
      'Analyse critique d’articles scientifiques EVC'
    ]
  },
  {
    id: 'pediatrie',
    name: 'Pédiatrie',
    category: 'medicine',
    hours: 120,
    casesCount: 44,
    questionsCount: 1150,
    passRate: 97,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80',
    description: 'Néonatalogie, urgences pédiatriques, maladies infectieuses infantiles et développement psychomoteur.',
    modules: [
      'Détresse respiratoire du nourrisson et bronchiolite',
      'Convulsions fébriles et états de mal convulsif',
      'Dépistage des cardiopathies congénitales',
      'Dossiers cliniques progressifs EVC'
    ]
  }
];

export const INSTRUCTORS_DATA: Instructor[] = [
  {
    id: 'dr-catanon',
    name: 'Dr. Grégoire Catanon',
    role: 'Praticien Hospitalier, Médecine d’Urgence',
    hospital: 'AP-HP, Hôpital Cochin',
    city: 'Paris',
    specialty: 'Urgences & Soins Critiques',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    quote: 'La réussite aux EVC ne dépend pas seulement du savoir médical, mais de la maîtrise rigoureuse de la méthodologie attendue par les jurys français.'
  },
  {
    id: 'dr-perrin',
    name: 'Dr. Jean-Matthieu Perrin',
    role: 'Chirurgien des Hôpitaux, MCU-PH',
    hospital: 'Hospices Civils de Lyon (HCL)',
    city: 'Lyon',
    specialty: 'Chirurgie & Anatomie Clinique',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    quote: 'Chaque semaine, nous entraînons nos confrères internationaux dans les conditions exactes du concours pour qu’ils arrivent sereins le jour J.'
  },
  {
    id: 'dr-hourdellys',
    name: 'Dr. Romain Hourdellys',
    role: 'Chef de Clinique Assistant (CCA), Cardiologie',
    hospital: 'CHU de Bordeaux',
    city: 'Bordeaux',
    specialty: 'Cardiologie & Vasculaire',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    quote: 'Plus de 94% de nos étudiants obtiennent leur affectation dès leur première tentative grâce à nos oraux blancs réguliers.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Amina Benali',
    specialty: 'Anesthésie-Réanimation',
    rank: 'Major de promotion (1ère)',
    year: 'Session EVC 2024',
    hospital: 'Praticienne associée au CHU de Lille',
    avatar: 'https://images.unsplash.com/photo-1594824813587-c5980a316c02?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Grâce à PrepEVC, j’ai compris les subtilités du barème français. Les fiches de synthèse et les simulations d’oraux avec Dr. Perrin ont fait toute la différence. Aujourd’hui ma PAE est validée !'
  },
  {
    id: 'test-2',
    name: 'Dr. Tarek Mansouri',
    specialty: 'Médecine d’Urgence',
    rank: 'Classé 3ème national',
    year: 'Session EVC 2024',
    hospital: 'Praticien Hospitalier au CH de Melun',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'La meilleure décision de mon parcours médical en France. Les 1450 QCM types et les corrections personnalisées m’ont permis d’obtenir 18.5/20 à l’épreuve clinique.'
  },
  {
    id: 'test-3',
    name: 'Dr. Elena Radu',
    specialty: 'Radiologie & Imagerie',
    rank: 'Admise 1er choix',
    year: 'Session EVC 2023',
    hospital: 'CHU de Strasbourg',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'La banque de cas PACS avec scanners réels est sans équivalent en France. L’accompagnement administratif pour le dossier CNG et l’affectation est également précieux.'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Qu’est-ce que les EVC et la PAE en France ?',
    answer: 'Les Épreuves de Vérification des Connaissances (EVC) constituent le concours d’accès obligatoire pour les Praticiens à Diplôme Hors Union Européenne (PADHUE). Réussir les EVC permet d’intégrer un parcours de consolidation de 2 ans en milieu hospitalier public, menant à la Procédure d’Autorisation d’Exercice (PAE) plénière en France.',
    category: 'Général'
  },
  {
    question: 'Quel est le taux de réussite des candidats PrepEVC ?',
    answer: 'Sur la session 2024, 97% de nos candidats inscrits au cycle intensif ont été déclarés lauréats des EVC, et plus de 70% dès leur toute première tentative, contre une moyenne nationale de 28% tous candidats confondus.',
    category: 'Résultats'
  },
  {
    question: 'Comment se déroulent les cours et les entraînements ?',
    answer: 'La formation allie cours magistraux en direct (visioconférence hebdomadaire interactive), replays accessibles 24h/24 en illimité, banques de QCM corrigées et commentées par item, et 4 concours blancs chronométrés avec correction détaillée par un membre de jury.',
    category: 'Pédagogie'
  },
  {
    question: 'Les formations sont-elles éligibles à des financements ?',
    answer: 'Oui, PrepEVC est un organisme de formation certifié. Nos programmes peuvent être pris en charge selon votre situation par le FIF-PL, les OPCO, les plans de formation des établissements de santé ou avec facilités de paiement en plusieurs fois sans frais.',
    category: 'Financement'
  },
  {
    question: 'Puis-je suivre la formation tout en exerçant comme FFI ou stagiaire associé ?',
    answer: 'Absolument ! Notre emploi du temps est spécialement conçu pour les médecins en poste hospitalier : les visioconférences se tiennent en soirée (20h - 22h) ou les samedis matin, et l’ensemble des contenus est disponible sur l’application mobile.',
    category: 'Organisation'
  }
];
