'use client';

import * as React from 'react';
import { AlignLeft } from 'lucide-react';

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

    const h2Elements = Array.from(container.querySelectorAll('h2'));
    const items: TOCItem[] = [];

    h2Elements.forEach((h2, index) => {
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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
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
    <aside className="sticky top-28 hidden lg:block w-full">
      <div className="rounded-lg border border-border bg-[#121212] p-5">
        <div className="flex items-center gap-2 border-b border-border pb-3 font-mono text-[11px] uppercase tracking-wider text-subtle">
          <AlignLeft className="size-3.5 text-lime" />
          <span>Contents</span>
        </div>

        <nav className="mt-4 flex flex-col gap-1" aria-label="Table of contents">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`flex items-center gap-2.5 rounded px-2.5 py-1.5 text-xs transition-colors ${
                  isActive
                    ? 'font-medium text-lime bg-lime-muted'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                <span
                  className={`size-1 rounded-full ${
                    isActive ? 'bg-lime' : 'bg-subtle/50'
                  }`}
                />
                <span className="truncate">{item.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
