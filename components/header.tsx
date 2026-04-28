"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Package" },
  { href: "/contact", label: "Contact" },
];

function linkClass(isActive: boolean) {
  return isActive
    ? "text-stone"
    : "text-stone/70 hover:text-stone";
}

export function Header({ brandName }: { brandName?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[#faf5ed]/84 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[1.55rem] font-semibold tracking-[0.18em] text-stone"
        >
          {brandName || "Portfolio"}
        </Link>

        <nav className="hidden items-center gap-3 rounded-full border border-white/70 bg-white/60 px-3 py-2 shadow-soft lg:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm tracking-[0.2em] uppercase transition ${linkClass(isActive)} ${
                  isActive ? "bg-[#f5e4c8]/80" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-stone/20 bg-white/70 shadow-soft lg:hidden"
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
