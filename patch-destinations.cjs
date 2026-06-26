const fs = require('fs');
const files = ['study-in-australia', 'study-in-canada', 'study-in-new-zealand', 'study-in-germany', 'study-in-france', 'study-in-ireland', 'study-in-usa'];

const hookCode = `
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } };
`;

for (const f of files) {
  let content = fs.readFileSync(`src/routes/${f}.tsx`, 'utf8');
  
  // Insert hook
  content = content.replace(/function StudyIn[a-zA-Z]+Page\(\) \{\n/, match => match + hookCode);
  
  // Replace simple y: 20
  content = content.replace(/initial=\{\{ opacity: 0, y: 20 \}\} whileInView=\{\{ opacity: 1, y: 0 \}\} viewport=\{viewportOnce\}/g, '{...motionProps()}');
  
  // Replace x: -30
  content = content.replace(/initial=\{\{ opacity: 0, x: -30 \}\} whileInView=\{\{ opacity: 1, x: 0 \}\} viewport=\{viewportOnce\}/g, '{...motionProps(0, "x", -30)}');
  
  // Replace x: 30
  content = content.replace(/initial=\{\{ opacity: 0, x: 30 \}\} whileInView=\{\{ opacity: 1, x: 0 \}\} viewport=\{viewportOnce\}/g, '{...motionProps(0, "x", 30)}');
  
  // Replace y: 30
  content = content.replace(/initial=\{\{ opacity: 0, y: 30 \}\} whileInView=\{\{ opacity: 1, y: 0 \}\} viewport=\{viewportOnce\}/g, '{...motionProps(0, "y", 30)}');
  
  // Replace y: 10
  content = content.replace(/initial=\{\{ opacity: 0, y: 10 \}\} whileInView=\{\{ opacity: 1, y: 0 \}\} viewport=\{viewportOnce\}/g, '{...motionProps(0, "y", 10)}');

  // transition={{ delay: 0.1 }} handling:
  content = content.replace(/\{\.\.\.motionProps\(\)\}\s*transition=\{\{\s*delay:\s*([\d.]+)\s*\}\}/g, '{...motionProps($1)}');
  content = content.replace(/\{\.\.\.motionProps\(0,\s*"([^"]+)",\s*(-?\d+)\)\}\s*transition=\{\{\s*delay:\s*([\d.]+)\s*\}\}/g, '{...motionProps($3, "$1", $2)}');
  
  // i * 0.1 handling
  content = content.replace(/\{\.\.\.motionProps\(\)\}\s*transition=\{\{\s*delay:\s*(i\s*\*\s*[\d.]+)\s*\}\}/g, '{...motionProps($1)}');
  content = content.replace(/\{\.\.\.motionProps\(0,\s*"([^"]+)",\s*(-?\d+)\)\}\s*transition=\{\{\s*delay:\s*(i\s*\*\s*[\d.]+)\s*\}\}/g, '{...motionProps($3, "$1", $2)}');

  // scale: 0.95
  content = content.replace(/initial=\{\{ opacity: 0, scale: 0\.95 \}\} whileInView=\{\{ opacity: 1, scale: 1 \}\} viewport=\{viewportOnce\}/g, 
    'initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewportOnce} transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}');

  // add hover effects to programs
  content = content.replace(/className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"/g,
    'whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }} className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:border-accent/30 transition-all duration-300 group"');

  // support services hover
  content = content.replace(/className="flex gap-4"/g, 'whileHover={shouldReduceMotion ? undefined : { y: -3 }} className="flex gap-4 group"');

  fs.writeFileSync(`src/routes/${f}.tsx`, content, 'utf8');
  console.log('Patched: ' + f);
}
