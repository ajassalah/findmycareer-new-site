const fs = require('fs');

const files = [
  'mission-vision', 'why-choose-us',
  'university-applications', 'visa-assistance', 'scholarship-guidance',
  'pre-departure-briefing', 'post-arrival-support'
];

const hookCode = `
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } };
`;

for (const f of files) {
  const p = `src/routes/${f}.tsx`;
  let content = fs.readFileSync(p, 'utf8');

  // Add import
  if (!content.includes('useReducedMotion')) {
    content = content.replace(/import \{ motion \} from "framer-motion";/, 'import { motion, useReducedMotion } from "framer-motion";');
  }

  // Inject hook
  content = content.replace(/(function [A-Z][a-zA-Z0-9]*Page\(\)\s*\{)/, match => {
    if (content.includes('const shouldReduceMotion = useReducedMotion();')) return match;
    return match + hookCode;
  });

  // Basic regexes for animations
  // y: 20
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*viewport=\{viewportOnce\}/g, '{...motionProps()}');
  // y: 16
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*16\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g, '{...motionProps(0, "y", 16)}');
  // x: -40
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*x:\s*-40\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g, '{...motionProps(0, "x", -40)}');
  // x: 40
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*x:\s*40\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g, '{...motionProps(0, "x", 40)}');
  // y: 10
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*10\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*viewport=\{viewportOnce\}/g, '{...motionProps(0, "y", 10)}');
  
  // Clean up transitions that immediately follow motionProps
  content = content.replace(/\{\.\.\.motionProps\([^)]*\)\}\s*transition=\{\{\s*duration:\s*[\d.]+,\s*ease:\s*\[[^\]]+\]\s*\}\}/g, match => {
    // If it's just duration and ease, motionProps already handles it, so we can drop it
    return match.replace(/\s*transition=\{\{\s*duration:\s*[\d.]+,\s*ease:\s*\[[^\]]+\]\s*\}\}/, '');
  });
  
  content = content.replace(/\{\.\.\.motionProps\(\)\}\s*transition=\{\{\s*delay:\s*([^}]+)\s*\}\}/g, '{...motionProps($1)}');
  content = content.replace(/\{\.\.\.motionProps\(0,\s*"([xy])",\s*(-?\d+)\)\}\s*transition=\{\{\s*delay:\s*([^}]+)\s*\}\}/g, '{...motionProps($3, "$1", $2)}');
  content = content.replace(/\{\.\.\.motionProps\(0,\s*"([xy])",\s*(-?\d+)\)\}\s*transition=\{\{\s*duration:\s*[\d.]+,\s*ease:\s*\[[^\]]+\]\s*\}\}/g, '{...motionProps(0, "$1", $2)}');

  // Also replace `{ opacity: 0, y: 16 }` pattern inside mission-vision etc.
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*y:\s*16\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g, '{...motionProps(0, "y", 16)}');

  // Convert generic feature cards to be beautifully animated
  // e.g. className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30 hover:bg-background hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300"
  // to add whileHover
  content = content.replace(/className="([^"]*hover:shadow-md[^"]*)"/g, (match, cls) => {
    if (cls.includes('group')) {
      return `whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="${cls}"`;
    }
    return match;
  });

  // Same for hover:shadow-lg
  content = content.replace(/className="([^"]*hover:shadow-lg[^"]*)"/g, (match, cls) => {
    return `whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }} className="${cls}"`;
  });

  // scale in logic
  content = content.replace(/initial=\{\{\s*opacity:\s*0,\s*scale:\s*0\.95\s*\}\}\s*whileInView=\{\{\s*opacity:\s*1,\s*scale:\s*1\s*\}\}\s*viewport=\{\{\s*once:\s*true\s*\}\}/g, 
    'initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}');

  fs.writeFileSync(p, content, 'utf8');
  console.log('Patched: ' + f);
}
