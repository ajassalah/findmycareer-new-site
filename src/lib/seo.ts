export const SITE_URL = "https://findmycareer.org.uk";
const defaultDescription = "Find My Career helps students from Sri Lanka choose universities, prepare applications, secure visas and study abroad with confidence.";

const pageSeo: Record<string, { title: string; description: string }> = {
  "/": { title: "Study Abroad Consultancy in Sri Lanka | Find My Career", description: "Expert study abroad guidance from Sri Lanka for university applications, student visas, IELTS, scholarships and life overseas." },
  "/about": { title: "About Find My Career | Study Abroad Experts", description: "Learn about Find My Career, a trusted Sri Lankan education consultancy helping students reach leading universities worldwide." },
  "/services": { title: "Study Abroad Services | Find My Career", description: "Explore university applications, visa assistance, IELTS preparation, scholarships and post-arrival support from Find My Career." },
  "/destinations": { title: "Study Abroad Destinations | Find My Career", description: "Compare study destinations including the UK, Australia, Canada, New Zealand, Germany, France, Ireland and the USA." },
  "/contact": { title: "Contact Find My Career | Free Study Abroad Consultation", description: "Contact Find My Career for a free consultation about studying abroad, university applications, visas and scholarships." },
  "/blog": { title: "Study Abroad Advice & Visa Guides | Find My Career", description: "Read practical study abroad, university application and visa guidance from Find My Career advisors." },
  "/study-in-uk": { title: "Study in the UK from Sri Lanka | Find My Career", description: "Get expert guidance on UK universities, student visas, courses and studying in the United Kingdom." },
  "/study-in-australia": { title: "Study in Australia from Sri Lanka | Find My Career", description: "Plan your Australian study journey with university selection, applications and visa support from Find My Career." },
  "/study-in-canada": { title: "Study in Canada from Sri Lanka | Find My Career", description: "Find Canadian universities and get support with applications, scholarships and student visas." },
};

export function getSeo(pathname: string) {
  const path = pathname === "/index" ? "/" : pathname.replace(/\/$/, "") || "/";
  const fallback = path.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || "Study Abroad Consultancy";
  return pageSeo[path] || { title: `${fallback.replace(/\b\w/g, (letter) => letter.toUpperCase())} | Find My Career`, description: defaultDescription };
}
