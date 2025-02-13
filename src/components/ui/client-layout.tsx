"use client";

import ThemeSwitcher from "@/components/ui/theme-switcher";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex justify-end p-4">
        <ThemeSwitcher />
      </div>
      {children}
    </div>
  );
}