const fs = require('fs');

const files = [
  'study-in-australia.tsx',
  'study-in-canada.tsx',
  'study-in-new-zealand.tsx',
  'study-in-germany.tsx',
  'study-in-france.tsx',
  'study-in-ireland.tsx',
  'study-in-usa.tsx'
];

const hookCode = `
  const shouldReduceMotion = useReducedMotion();
  const motionProps = (delay = 0, axis = "y", distance = 30) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: viewportOnce, transition: { duration: 0.3, delay } }
      : { initial: { opacity: 0, [axis]: distance }, whileInView: { opacity: 1, [axis]: 0 }, viewport: viewportOnce, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } };
`;

files.forEach(f => {
  const p = 'src/routes/' + f;
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/(function StudyIn[A-Za-z]+Page\(\)\s*\{)/, match => {
    if (c.includes('const shouldReduceMotion = useReducedMotion();')) return match;
    return match + '\n' + hookCode;
  });
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed', f);
});
