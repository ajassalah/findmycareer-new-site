$files = @('study-in-australia','study-in-canada','study-in-new-zealand','study-in-germany','study-in-france','study-in-ireland','study-in-usa')
foreach ($f in $files) {
  $path = "src\routes\$f.tsx"
  $content = Get-Content $path -Raw
  $content = $content -replace 'import \{ motion \} from "framer-motion";', 'import { motion, useReducedMotion } from "framer-motion";'
  Set-Content $path $content
  Write-Host "Patched $f"
}
Write-Host "All done"
