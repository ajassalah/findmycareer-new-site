import {
  GraduationCap, FileCheck, Languages, Award, Plane, LifeBuoy,
} from "lucide-react";

export const SITE = {
  name: "Find My Career",
  tagline: "Study Abroad Consultancy",
  domain: "findmycareer.org.uk",
  phone: "+94 11 234 5678",
  email: "info@findmycareer.org.uk",
  address: "Colombo, Sri Lanka",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Destinations", to: "/destinations" },
  { label: "IELTS", to: "/ielts-preparation" },
  { label: "Success Stories", to: "/success-stories" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 10000, suffix: "+", label: "Students Placed" },
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 150, suffix: "+", label: "Partner Universities" },
];

export const SERVICES = [
  { icon: GraduationCap, title: "University Applications", desc: "End-to-end support choosing programs and submitting winning applications." },
  { icon: FileCheck, title: "Visa Assistance", desc: "Document prep, mock interviews and 98% approval-rate guidance." },
  { icon: Languages, title: "IELTS Preparation", desc: "Expert coaching to confidently hit a 7.0+ band in every section." },
  { icon: Award, title: "Scholarship Guidance", desc: "Find and apply for scholarships that reduce your tuition by thousands." },
  { icon: Plane, title: "Pre-Departure Briefing", desc: "Travel, accommodation, banking and cultural prep — everything ready." },
  { icon: LifeBuoy, title: "Post-Arrival Support", desc: "Our team stays with you after you land — settle in with confidence." },
];

export const DESTINATIONS = [
  { name: "United Kingdom", flag: "🇬🇧", unis: 45, students: 3200, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80" },
  { name: "Australia",      flag: "🇦🇺", unis: 28, students: 2100, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80" },
  { name: "Canada",         flag: "🇨🇦", unis: 22, students: 1450, image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=80" },
  { name: "Germany",        flag: "🇩🇪", unis: 18, students: 780,  image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80" },
  { name: "France",         flag: "🇫🇷", unis: 14, students: 520,  image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80" },
  { name: "New Zealand",    flag: "🇳🇿", unis: 9,  students: 410,  image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80" },
  { name: "Ireland",        flag: "🇮🇪", unis: 11, students: 360,  image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=80" },
  { name: "United States",  flag: "🇺🇸", unis: 19, students: 920,  image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80" },
];

export const STEPS = [
  { n: 1, title: "Free Consultation",   desc: "Understand your goals, budget and timeline." },
  { n: 2, title: "University Selection", desc: "Shortlist programs that match your profile." },
  { n: 3, title: "Application",          desc: "Polish your SOP, gather documents, submit." },
  { n: 4, title: "Visa Processing",      desc: "We prep, you pass — 98% approval rate." },
  { n: 5, title: "Pre-Departure",        desc: "Travel, housing, culture — fully briefed." },
  { n: 6, title: "You're There! 🎓",     desc: "Post-arrival support so you settle in fast." },
];

export const TESTIMONIALS = [
  { name: "Dineth Perera",    uni: "University of Manchester", country: "UK 🇬🇧",      stars: 5, quote: "Find My Career made the impossible feel easy. From IELTS to visa, every step was guided. I'm now in my dream program in Manchester!", avatar: "https://i.pravatar.cc/200?img=12" },
  { name: "Anushka Fernando", uni: "University of Melbourne",  country: "Australia 🇦🇺", stars: 5, quote: "The team's experience shows. They got my scholarship application across the line and I saved over $15,000.", avatar: "https://i.pravatar.cc/200?img=47" },
  { name: "Tharindu Silva",   uni: "University of Toronto",    country: "Canada 🇨🇦",  stars: 5, quote: "I was rejected once before. With Find My Career I reapplied and got accepted with confidence.", avatar: "https://i.pravatar.cc/200?img=33" },
  { name: "Sanduni Jayasuriya", uni: "Trinity College Dublin", country: "Ireland 🇮🇪", stars: 5, quote: "Best decision I made was walking into their office. 17 years of expertise — you can feel it.", avatar: "https://i.pravatar.cc/200?img=45" },
  { name: "Rashmi Wijesinghe", uni: "TU Munich",               country: "Germany 🇩🇪", stars: 5, quote: "Even with a tough German program, they handled every document perfectly. Visa in 3 weeks.", avatar: "https://i.pravatar.cc/200?img=20" },
];

export const PARTNERS = [
  "University of Oxford", "Manchester", "Sydney", "Toronto",
  "Melbourne", "TU Munich", "Trinity Dublin", "Auckland",
  "UBC", "Edinburgh", "King's College London", "ANU",
  "McGill", "Queen Mary", "Leeds", "Birmingham",
];

export const LANGUAGES = ["🇬🇧 English", "සිංහල", "தமிழ்"];
