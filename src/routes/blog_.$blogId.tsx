import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";
import { blogs, type ContentSection } from "@/lib/blogData";

export const Route = createFileRoute("/blog_/$blogId")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const blog = blogs.find((b) => b.id === params.blogId);
    if (!blog) throw new Error("Blog not found");
    return blog;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Blog"} | Find My Career` },
      { name: "description", content: loaderData?.excerpt ?? "" },
    ],
  }),
});

function renderSection(section: ContentSection, idx: number) {
  switch (section.type) {
    case "image":
      return (
        <div key={idx} className="my-8">
          <img
            src={section.src}
            alt={section.alt ?? ""}
            className="w-full max-h-[420px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      );
    case "heading":
      if (section.level === 2) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-black text-foreground mt-10 mb-4">
            {section.content}
          </h2>
        );
      }
      return (
        <h3 key={idx} className="text-xl font-bold text-foreground mt-8 mb-3">
          {section.content}
        </h3>
      );
    case "text":
      return (
        <p
          key={idx}
          className="text-muted-foreground leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: section.content ?? "" }}
        />
      );
    case "list":
      return (
        <ul key={idx} className="list-disc pl-6 mb-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "orderedList":
      return (
        <ol key={idx} className="list-decimal pl-6 mb-5 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed">{item}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

function BlogPostPage() {
  const blog = Route.useLoaderData();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: blog.accentColor }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-5"
              style={{ background: blog.accentColor }}
            >
              {blog.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-foreground">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground font-medium border-b border-border/50 pb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {blog.readTime}
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-64 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent pointer-events-none" />
          </div>

          {/* Excerpt */}
          <p className="text-xl font-medium text-foreground/80 mb-10 leading-relaxed border-b border-border/50 pb-10">
            {blog.excerpt}
          </p>

          {/* Structured content sections */}
          <div className="blog-content">
            {blog.contentSections.map((section, idx) => renderSection(section, idx))}
          </div>

          {/* CTA footer */}
          <div
            className="mt-16 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: `linear-gradient(135deg, rgba(10,22,40,0.8), ${blog.accentColor}22)`,
              border: `1px solid ${blog.accentColor}33`,
            }}
          >
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">
                Ready to start your journey?
              </h4>
              <p className="text-sm text-black">
                Book a consultation with our immigration experts today.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg shrink-0"
              style={{
                background: `linear-gradient(135deg, #0A1628, ${blog.accentColor})`,
              }}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
