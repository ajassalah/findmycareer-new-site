import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Calendar, Clock, ChevronRight, BookOpen, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogs, type Blog } from "@/lib/blogData";


export default function BlogPage() {
  const shouldReduceMotion = useReducedMotion();
  // Reverse so the most recently added blog appears first
  const orderedBlogs = [...blogs].reverse();
  const [featured, ...rest] = orderedBlogs;

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.55,
        delay: shouldReduceMotion ? 0 : i * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageHero
        title={<>Latest <span className="text-accent">Insights</span></>}
        subtitle="Expert advice, news, and comprehensive guides on studying abroad, visas, scholarships, and global immigration."
        eyebrow="Our Blog"
      />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── FEATURED (latest) post ── */}
          {featured && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger(0.1)}
              className="mb-16"
            >
              <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-8 block">
                Latest Article
              </motion.span>
              <motion.div variants={fadeUp}>
                <Link
                  href={`/blog/${featured.id}`}
                  className="group grid lg:grid-cols-2 gap-0 bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Featured image — large */}
                  <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1628]/60 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent lg:hidden" />
                    <div className="absolute top-5 left-5">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                        style={{ background: featured.accentColor }}
                      >
                        {featured.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Featured content */}
                  <div className="flex flex-col justify-center p-8 lg:p-12 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block hidden" />
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold group-hover:gap-3 transition-all shadow-md"
                        style={{ background: `linear-gradient(135deg, #0A1628, ${featured.accentColor})` }}
                      >
                        Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* ── REST of posts grid ── */}
          {rest.length > 0 && (
            <>
              <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger(0.1)} className="mb-10">
                <motion.span variants={fadeUp} className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  More Articles
                </motion.span>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
                {rest.map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  >
                    <Link
                      href={`/blog/${blog.id}`}
                      className={cn(
                        "group flex flex-col bg-card rounded-3xl border border-border overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-400 h-full",
                        "bg-gradient-to-br", blog.gradient
                      )}
                    >
                      {/* Card Image */}
                      <div className="relative h-56 overflow-hidden shrink-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/20 shadow">
                            {blog.category}
                          </span>
                        </div>
                        {/* Reading time pill on image */}
                        <div className="absolute bottom-4 right-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                            <Clock className="w-3 h-3" />{blog.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-3">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                          {blog.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                          <span className="text-sm font-semibold text-foreground flex items-center gap-1.5 group-hover:text-accent transition-colors">
                            Read More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-200">
                            <BookOpen className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
