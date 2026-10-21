// ENST L1 Portal - Data Store & Translations

const TRANSLATIONS = {
  fr: {
    "hero.badge": "Promotions L1",
    "hero.welcome": "Hello ENST Student 👋",
    "hero.subtitle": "Accédez aux cours, polycopiés PDF/PPTX, sujets d'examens et fiches de révision pour l'ensemble des 9 modules de Licence 1.",
    "stats.modules": "Modules L1",
    "stats.resources": "Documents",
    "stats.saved": "Favoris",
    "news.heading": "Actualités & Annonces de la Promotion",
    "news.addBtn": "Publier une Annonce",
    "news.formTitle": "Nouvelle Annonce",
    "news.publish": "Publier",
    "filter.all": "Tout",
    "filter.cours": "Cours",
    "filter.td": "TP & TD",
    "filter.examens": "Examens",
    "filter.bookmarks": "Mes Favoris",
    "modal.download": "Télécharger Fichier",
    "modal.save": "Ajouter aux Favoris",
    "modal.summary": "Aperçu & Sommaire",
    "quiz.title": "Auto-Évaluation du Cours PDF",
    "empty.text": "Aucune ressource pour le moment. Vous pouvez ajouter et téléverser vos propres cours PDF avec quiz !",
    "footer.rights": "Plateforme pédagogique d'étude et de partage de ressources pour la 1ère Année Licence."
  },
  en: {
    "hero.badge": "L1 Cohort",
    "hero.welcome": "Hello ENST Student 👋",
    "hero.subtitle": "Access lecture notes, PDF/PPTX handouts, past exam papers, and revision summaries for all 9 First-Year modules.",
    "stats.modules": "L1 Modules",
    "stats.resources": "Documents",
    "stats.saved": "Bookmarks",
    "news.heading": "Cohort News & Announcements",
    "news.addBtn": "Post Announcement",
    "news.formTitle": "New Announcement",
    "news.publish": "Publish",
    "filter.all": "All",
    "filter.cours": "Lectures",
    "filter.td": "Worksheets / TD",
    "filter.examens": "Exams",
    "filter.bookmarks": "My Bookmarks",
    "modal.download": "Download File",
    "modal.save": "Add to Bookmarks",
    "modal.summary": "Chapter Summary",
    "quiz.title": "PDF Document Self-Assessment Quiz",
    "empty.text": "No resources yet. You can upload your own PDF courses and custom quizzes here!",
    "footer.rights": "Educational study portal and resource sharing platform for 1st Year Tourism Students."
  }
};

// Exact 9 Modules required for ENST L1
const ENST_MODULES = [
  { id: 'all', nameFr: 'Tous les Modules', nameEn: 'All Modules', icon: 'fa-layer-group' },
  { id: 'management', nameFr: 'Management Général', nameEn: 'General Management', icon: 'fa-chart-pie' },
  { id: 'comptabilite', nameFr: 'Comptabilité Générale', nameEn: 'General Accounting', icon: 'fa-calculator' },
  { id: 'droit', nameFr: 'Droit du Tourisme', nameEn: 'Tourism Law', icon: 'fa-scale-balanced' },
  { id: 'english', nameFr: 'English for Tourism', nameEn: 'English for Tourism', icon: 'fa-language' },
  { id: 'monuments', nameFr: 'Monuments Touristiques', nameEn: 'Tourist Monuments', icon: 'fa-landmark' },
  { id: 'marketing', nameFr: 'Marketing Touristique', nameEn: 'Tourism Marketing', icon: 'fa-bullhorn' },
  { id: 'informatique', nameFr: 'Informatique & Bureautique', nameEn: 'IT & Office Systems', icon: 'fa-laptop-code' },
  { id: 'maths', nameFr: 'Mathématiques & Stats', nameEn: 'Mathematics & Stats', icon: 'fa-square-root-variable' },
  { id: 'espanol', nameFr: 'Español del Turismo', nameEn: 'Tourism Spanish', icon: 'fa-earth-americas' }
];

// Initial News Articles
let newsArticles = [
  {
    id: 'news-1',
    title: 'Planning Général des Examens du 1er Semestre',
    tag: 'Examen',
    date: 'Aujourd\'hui',
    author: 'Délégué L1',
    content: 'Les examens débuteront le dimanche 15 Février à l\'Amphi A. Consultez le tableau pour vos numéros de table.'
  }
];

// Optional Seed Resources (empty by default so you can add custom uploads)
const DEFAULT_RESOURCES = [];