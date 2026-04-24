"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/videos", label: "Video" },
  { href: "/packages", label: "Package" },
  { href: "/contact", label: "Contact" },
  { href: "/studio", label: "Studio" },
];

function linkClass(isActive: boolean) {
  return isActive
    ? "text-stone after:w-full"
    : "text-stone/70 after:w-0 hover:text-stone hover:after:w-full";
}

export function Header({ brandName }: { brandName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[#faf5ed]/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-[1.35rem] font-semibold tracking-[0.28em] text-stone">
          {brandName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-sm tracking-[0.24em] uppercase after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all ${linkClass(isActive)}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-stone/15 bg-white/60 lg:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
        >
          <span className="block h-px w-5 bg-stone" />
          <span className="block h-px w-5 bg-stone" />
          <span className="block h-px w-5 bg-stone" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone/10 bg-[#fbf7f1] lg:hidden">
          <nav className="container-shell flex flex-col py-4">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.24em] ${
                    isActive ? "bg-white text-stone shadow-soft" : "text-stone/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
