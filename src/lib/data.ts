import {
  GraduationCap, FileCheck, Languages, Award, Plane, LifeBuoy,
} from "lucide-react";

export const SITE_ADDRESSES = [
  {
    label: "United Kingdom",
    address: "2nd Floor, 4 De Montfort St, Leicester LE1 7GA, United Kingdom",
  },
  {
    label: "Sri Lanka",
    address: "No. 18, Beltona Lane, Colombo - 04 Sri Lanka",
  },
];

export const SITE = {
  name: "Find My Career",
  tagline: "Study Abroad Consultancy",
  domain: "findmycareer.org.uk",
  phone: "+94 117 221 192",
  email: "info@findmycareer.org.uk",
  address: SITE_ADDRESSES[0].address,
  addresses: SITE_ADDRESSES,
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { 
    label: "About", 
    subItems: [
      { label: "About Us", to: "/about" },
      { label: "Why Choose Us", to: "/why-choose-us" },
      { label: "Mission & Vision", to: "/mission-vision" },
      { label: "Success Stories", to: "/success-stories" },
    ]
  },
  { 
    label: "Services", 
    to: "/services",
    subItems: [
      { label: "University Applications", to: "/university-applications" },
      { label: "Visa Assistance", to: "/visa-assistance" },
      { label: "IELTS Preparation", to: "/ielts-preparation" },
      { label: "Scholarship Guidance", to: "/scholarship-guidance" },
      { label: "Pre-departure Briefing", to: "/pre-departure-briefing" },
      { label: "Post-arrival Support", to: "/post-arrival-support" }
    ]
  },
  { 
    label: "Destinations", 
    subItems: [
      { label: "United Kingdom", to: "/study-in-uk" },
      { label: "Australia", to: "/study-in-australia" },
      { label: "Canada", to: "/study-in-canada" },
      { label: "New Zealand", to: "/study-in-new-zealand" },
      { label: "Germany", to: "/study-in-germany" },
      { label: "France", to: "/study-in-france" },
      { label: "Ireland", to: "/study-in-ireland" },
      { label: "United States", to: "/study-in-usa" },
    ]
  },
  { label: "Innovator Founder visa", to: "/innovator-founder-visa" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 10000, suffix: "+", label: "Students Placed" },
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 150, suffix: "+", label: "Partner Universities" },
];

export const SERVICES = [
  { icon: GraduationCap, title: "University Applications", desc: "End-to-end support choosing programs and submitting winning applications.", to: "/university-applications" },
  { icon: FileCheck, title: "Visa Assistance", desc: "Document prep, mock interviews and 98% approval-rate guidance.", to: "/visa-assistance" },
  { icon: Languages, title: "IELTS Preparation", desc: "Expert coaching to confidently hit a 7.0+ band in every section.", to: "/ielts-preparation" },
  { icon: Award, title: "Scholarship Guidance", desc: "Find and apply for scholarships that reduce your tuition by thousands.", to: "/scholarship-guidance" },
  { icon: Plane, title: "Pre-Departure Briefing", desc: "Travel, accommodation, banking and cultural prep — everything ready.", to: "/pre-departure-briefing" },
  { icon: LifeBuoy, title: "Post-Arrival Support", desc: "Our team stays with you after you land — settle in with confidence.", to: "/post-arrival-support" },
];

export const DESTINATIONS = [
  { name: "United Kingdom", flag: "🇬🇧", unis: 45, students: 3200, to: "/study-in-uk",          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80" },
  { name: "Australia",      flag: "🇦🇺", unis: 28, students: 2100, to: "/study-in-australia",   image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80" },
  { name: "Canada",         flag: "🇨🇦", unis: 22, students: 1450, to: "/study-in-canada",      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&q=80" },
  { name: "New Zealand",    flag: "🇳🇿", unis: 9,  students: 410,  to: "/study-in-new-zealand", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80" },
  { name: "Germany",        flag: "🇩🇪", unis: 18, students: 780,  to: "/study-in-germany",    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80" },
  { name: "France",         flag: "🇫🇷", unis: 14, students: 520,  to: "/study-in-france",     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80" },
  { name: "Ireland",        flag: "🇮🇪", unis: 11, students: 360,  to: "/study-in-ireland",    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&q=80" },
  { name: "United States",  flag: "🇺🇸", unis: 19, students: 920,  to: "/study-in-usa",        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80" },
];

export const STEPS = [
  { n: 1, title: "Free Consultation",   desc: "Understand your goals, budget and timeline." },
  { n: 2, title: "University Selection", desc: "Shortlist programs that match your profile." },
  { n: 3, title: "Application",          desc: "Polish your SOP, gather documents, submit." },
  { n: 4, title: "Visa Processing",      desc: "We prep, you pass — 98% approval rate." },
  { n: 5, title: "Pre-Departure",        desc: "Travel, housing, culture — fully briefed." },
  { n: 6, title: "You're There! 🎓",     desc: "Post-arrival support so you settle in fast." },
];

import dilshanImg from "@/assets/success stories/Dilshan Samarakoon.jpg";
import farhaImg from "@/assets/success stories/Farha Farizan.jpg";
import fathimaImg from "@/assets/success stories/Fathima Sheroza Rajabdeen.jpg";
import mohamedImg from "@/assets/success stories/Mohamed Rahid.jpg";

export const TESTIMONIALS = [
  { name: "Dilshan Samarakoon",    uni: "University of Manchester", country: "UK 🇬🇧",      stars: 5, quote: "Find My Career made the impossible feel easy. From IELTS to visa, every step was guided. I'm now in my dream program in Manchester!", avatar: dilshanImg },
  { name: "Farha Farizan", uni: "University of Melbourne",  country: "Australia 🇦🇺", stars: 5, quote: "The team's experience shows. They got my scholarship application across the line and I saved over $15,000.", avatar: farhaImg },
  { name: "Fathima Sheroza Rajabdeen",   uni: "University of Toronto",    country: "Canada 🇨🇦",  stars: 5, quote: "I was rejected once before. With Find My Career I reapplied and got accepted with confidence.", avatar: fathimaImg },
  { name: "Mohamed Rahid", uni: "Trinity College Dublin", country: "Ireland 🇮🇪", stars: 5, quote: "Best decision I made was walking into their office. 17 years of expertise — you can feel it.", avatar: mohamedImg },
  { name: "Rashmi Wijesinghe", uni: "TU Munich",               country: "Germany 🇩🇪", stars: 5, quote: "Even with a tough German program, they handled every document perfectly. Visa in 3 weeks.", avatar: "https://i.pravatar.cc/200?img=20" },
  { name: "Ayesha Perera", uni: "University of Sydney", country: "Australia 🇦🇺", stars: 5, quote: "Their pre-departure briefing was a lifesaver. Everything was planned perfectly.", avatar: "https://i.pravatar.cc/200?img=1" },
  { name: "Kamal Fernando", uni: "UCL", country: "UK 🇬🇧", stars: 5, quote: "Got my Innovator Founder Visa sorted with their business plan guidance. Excellent service!", avatar: "https://i.pravatar.cc/200?img=11" },
  { name: "Nuwan Bandara", uni: "University of British Columbia", country: "Canada 🇨🇦", stars: 5, quote: "From university selection to visa approval, Find My Career handled everything professionally.", avatar: "https://i.pravatar.cc/200?img=14" },
  { name: "Shanika Silva", uni: "University of Auckland", country: "New Zealand 🇳🇿", stars: 5, quote: "Their scholarship guidance helped me secure a 50% tuition waiver. Highly recommended!", avatar: "https://i.pravatar.cc/200?img=5" },
  { name: "Thilini Gunaratne", uni: "Humboldt University", country: "Germany 🇩🇪", stars: 5, quote: "The mock interviews boosted my confidence immensely. Got my visa without a single issue.", avatar: "https://i.pravatar.cc/200?img=9" },
  { name: "Kavindu Peiris", uni: "NYU", country: "USA 🇺🇸", stars: 5, quote: "Navigating the F-1 visa process was a breeze thanks to their dedicated team.", avatar: "https://i.pravatar.cc/200?img=15" },
  { name: "Piumi de Silva", uni: "University of Edinburgh", country: "UK 🇬🇧", stars: 5, quote: "Fast, reliable, and incredibly knowledgeable. Find My Career is the best consultancy.", avatar: "https://i.pravatar.cc/200?img=10" },
  { name: "Sahan Jayawardena", uni: "Monash University", country: "Australia 🇦🇺", stars: 5, quote: "Their IELTS prep classes were brilliant. Achieved an 8.0 overall in just one month.", avatar: "https://i.pravatar.cc/200?img=52" },
  { name: "Nadeesha Rathnayake", uni: "McGill University", country: "Canada 🇨🇦", stars: 5, quote: "I can't thank them enough for their support in my Express Entry application.", avatar: "https://i.pravatar.cc/200?img=25" },
  { name: "Isuru Senanayake", uni: "University of Otago", country: "New Zealand 🇳🇿", stars: 5, quote: "Transparent process and friendly staff. They truly care about your future.", avatar: "https://i.pravatar.cc/200?img=60" },
  { name: "Malindi Fernando", uni: "Sorbonne University", country: "France 🇫🇷", stars: 5, quote: "Handled my application and accommodation in Paris seamlessly.", avatar: "https://i.pravatar.cc/200?img=35" },
  { name: "Ashen Silva", uni: "UCD", country: "Ireland 🇮🇪", stars: 5, quote: "Secured my offer letter and visa in record time. Excellent communication throughout.", avatar: "https://i.pravatar.cc/200?img=59" },
  { name: "Chathurika Perera", uni: "Stanford University", country: "USA 🇺🇸", stars: 5, quote: "The SOP writing assistance was top-notch. It really made my application stand out.", avatar: "https://i.pravatar.cc/200?img=43" },
  { name: "Lahiru Karunaratne", uni: "University of Warwick", country: "UK 🇬🇧", stars: 5, quote: "A stress-free experience from start to finish. Highly recommend their services.", avatar: "https://i.pravatar.cc/200?img=68" },
  { name: "Sanduni Ranasinghe", uni: "UNSW", country: "Australia 🇦🇺", stars: 5, quote: "Their post-arrival support helped me settle into Sydney comfortably.", avatar: "https://i.pravatar.cc/200?img=49" },
  { name: "Hasitha Silva", uni: "University of Waterloo", country: "Canada 🇨🇦", stars: 5, quote: "Professional and efficient. They know exactly what the visa officers are looking for.", avatar: "https://i.pravatar.cc/200?img=51" },
  { name: "Nethmi Fernando", uni: "University of Amsterdam", country: "Netherlands 🇳🇱", stars: 5, quote: "Expert guidance for European study destinations. Couldn't have done it without them.", avatar: "https://i.pravatar.cc/200?img=31" },
  { name: "Ruwan Rajapaksa", uni: "University of Bristol", country: "UK 🇬🇧", stars: 5, quote: "Their thorough document review ensured there were no delays in my application.", avatar: "https://i.pravatar.cc/200?img=67" },
  { name: "Sachini Gamage", uni: "University of Queensland", country: "Australia 🇦🇺", stars: 5, quote: "A dedicated team that genuinely wants you to succeed. Thank you Find My Career!", avatar: "https://i.pravatar.cc/200?img=28" },
];

export const PARTNERS = [
  "University of Oxford", "Manchester", "Sydney", "Toronto",
  "Melbourne", "TU Munich", "Trinity Dublin", "Auckland",
  "UBC", "Edinburgh", "King's College London", "ANU",
  "McGill", "Queen Mary", "Leeds", "Birmingham",
];

export const LANGUAGES = ["🇬🇧 English", "සිංහල", "தமிழ்"];
