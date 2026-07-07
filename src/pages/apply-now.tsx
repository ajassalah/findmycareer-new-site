import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { DESTINATIONS } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { Send } from "lucide-react";


export default function Apply() {
  return (
    <>
      <PageHero
        eyebrow="Apply now"
        title={<>Start your application — <span className="text-accent">in minutes</span></>}
        subtitle="Tell us a bit about you. An advisor will reach out within 24 hours with a tailored plan."
      />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-card p-6 lg:p-10 shadow-[var(--shadow-elegant)] space-y-4"
          >
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" placeholder="Dineth" />
              <Field label="Last name" placeholder="Perera" />
            </motion.div>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Phone" placeholder="+94 ..." />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="text-sm font-medium text-foreground">Preferred destination</label>
              <select className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                {DESTINATIONS.map((d) => <option key={d.name}>{d.flag} {d.name}</option>)}
              </select>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="text-sm font-medium text-foreground">Program of interest</label>
              <input placeholder="e.g. MSc Computer Science" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="text-sm font-medium text-foreground">Anything else?</label>
              <textarea rows={4} placeholder="Goals, timelines, budget..." className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </motion.div>
            <motion.button variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-105 transition-transform">
              Submit application <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input {...rest} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
