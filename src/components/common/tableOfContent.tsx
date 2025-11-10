"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    headings.forEach((heading) => {
      if (heading) observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        if (heading) observer.unobserve(heading);
      });
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    // Close mobile menu first to prevent layout shift
    setIsOpen(false);
    
    // Wait for the TOC to close and layout to settle
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = window.innerWidth < 1024 ? 150 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 250); // Wait for TOC close animation to complete
  };

  const tocContent = (
    <nav aria-label="Table of contents">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`
                w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                flex items-center gap-2 group
                ${activeId === item.id
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <svg
                className={`w-4 h-4 flex-shrink-0 ${activeId === item.id ? "text-green-600" : "text-gray-400"
                  }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="line-clamp-2">{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile Version - Sticky Collapsible */}
      <div className="lg:hidden sticky top-10 z-40 ">
        <div className="bg-white rounded-b-xl border-b border-gray-200 shadow-md">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            aria-expanded={isOpen}
          >
            <h2 className="text-base font-bold text-gray-900">In this article</h2>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`transition-all duration-200 ease-in-out ${isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
              } overflow-auto`}
          >
            <div className="px-4 pb-4 border-t border-gray-100">
              {tocContent}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - Sticky Sidebar */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">In this article</h2>
          {tocContent}
        </div>
      </div>
    </>
  );
}