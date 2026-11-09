'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { AlignLeft, ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TOCProps {
  contentId?: string;
}

export function TOC({ contentId = 'legal-content' }: TOCProps) {
  const [headings, setHeadings] = React.useState<TOCItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    const container = document.getElementById(contentId);
    if (!container) return;

    // Find all <h2> tags inside the container
    const h2Elements = Array.from(container.querySelectorAll('h2'));
    const items: TOCItem[] = [];

    h2Elements.forEach((h2, index) => {
      // Ensure element has an ID
      if (!h2.id) {
        const slug = h2.textContent
          ? h2.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          : `section-${index + 1}`;
        h2.id = slug;
      }
      items.push({
        id: h2.id,
        title: h2.textContent || `Section ${index + 1}`,
      });
    });

    setHeadings(items);
    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // Setup IntersectionObserver for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by position from top
          const topEntry = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
          });
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    h2Elements.forEach((h2) => observer.observe(h2));

    return () => {
      observer.disconnect();
    };
  }, [contentId]);

  if (headings.length === 0) {
    return null;
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="sticky top-24 hidden lg:block w-full">
      <div className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/60 dark:bg-[#0c111c]/60 backdrop-blur-xl p-5 shadow-card-stacked">
        <div className="flex items-center gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <AlignLeft className="size-3.5 text-accent" />
          <span>Table of Contents</span>
        </div>

        <nav className="mt-4 flex flex-col gap-1.5" aria-label="Table of contents">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`group relative flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors ${
                  isActive
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground hover:bg-black/[0.03] dark:hover:bg-white/[0.04] hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`size-1.5 rounded-full transition-all ${
                      isActive
                        ? 'bg-accent scale-125'
                        : 'bg-black/20 dark:bg-white/20 group-hover:bg-foreground/50'
                    }`}
                  />
                  <span className="truncate">{item.title}</span>
                </div>

                <ChevronRight
                  className={`size-3 transition-opacity ${
                    isActive ? 'opacity-100 text-accent' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />

                {isActive && (
                  <motion.div
                    layoutId="toc-active-bar"
                    className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
