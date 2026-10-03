import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "findmycareer-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(window.localStorage.getItem(STORAGE_KEY) === null), []);
  if (!visible) return null;
  const choose = (value: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };
  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-2xl" role="dialog" aria-label="Cookie preferences">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">We use essential cookies to make this site work. Optional cookies help us understand usage. <Link href="/privacy-policy" className="font-semibold text-accent hover:underline">Read our privacy policy.</Link></p>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => choose("declined")} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">Decline</button>
          <button onClick={() => choose("accepted")} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">Accept</button>
        </div>
      </div>
    </aside>
  );
}
