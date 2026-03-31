import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Lock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { showcase, categoryLabels, ShowcaseCategory } from '../data/showcase';

type Filter = 'all' | ShowcaseCategory;

const filterOptions: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'saas', label: 'SaaS' },
  { value: 'client', label: 'Client' },
  { value: 'tool', label: 'Tools' },
  { value: 'agency', label: 'Agency' },
];

const FaviconImg: React.FC<{ item: typeof showcase[0]; size?: number; className?: string }> = ({ item, size = 16, className = '' }) => {
  const [err, setErr] = useState(false);

  if (item.favicon && !err) {
    return (
      <img
        src={item.favicon}
        alt=""
        width={size}
        height={size}
        className={`rounded object-contain ${className}`}
        onError={() => setErr(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`rounded flex items-center justify-center text-white font-bold ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.5, background: item.color }}
    >
      {item.name.charAt(0)}
    </div>
  );
};

const BrowserCard: React.FC<{ item: typeof showcase[0]; large?: boolean }> = ({ item, large }) => {
  const [hovered, setHovered] = useState(false);
  const [ogErr, setOgErr] = useState(false);
  const domain = item.url.replace('https://', '').replace('http://', '');
  const hasOgImage = item.ogImage && !ogErr;
  const showFullOgImage = item.ogImageFit === 'contain';

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col relative overflow-hidden rounded-[14px] border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161922] transition-all duration-300 group h-full ${
        hovered ? 'border-black/[0.14] dark:border-white/[0.14] shadow-xl shadow-black/[0.06]' : 'shadow-sm shadow-black/[0.02]'
      }`}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-3.5 py-2 border-b border-black/[0.06] dark:border-white/[0.06] bg-[#fafafa] dark:bg-[#1e2130] flex-shrink-0">
        <div className="flex gap-[5px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-1.5">
          <div className="bg-white dark:bg-[#0f1117] rounded-lg px-3 py-[5px] text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] truncate border border-black/[0.06] dark:border-white/[0.06] flex items-center gap-2">
            <Lock size={9} className="text-[#9ca3af] flex-shrink-0" />
            <FaviconImg item={item} size={14} />
            <span className="truncate">{domain}</span>
          </div>
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
          transition={{ duration: 0.15 }}
          className="flex-shrink-0"
        >
          <ExternalLink size={13} className="text-[#9ca3af]" />
        </motion.div>
      </div>

      {/* OG Image / Preview area */}
      <div className={`relative w-full overflow-hidden flex-shrink-0 ${large ? 'h-[200px]' : 'h-[150px]'}`}>
        {hasOgImage ? (
          <>
            <img
              src={item.ogImage}
              alt={item.ogTitle}
              className={`w-full h-full object-center transition-transform duration-700 ease-out ${
                showFullOgImage
                  ? 'object-contain p-2 bg-[#f8fafc] dark:bg-[#0f1117] group-hover:scale-[1.01]'
                  : 'object-cover group-hover:scale-[1.04]'
              }`}
              style={!showFullOgImage ? { objectPosition: item.ogImagePosition || 'center' } : undefined}
              onError={() => setOgErr(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent" />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{ background: `linear-gradient(135deg, ${item.color}08 0%, ${item.color}03 100%)` }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(${item.color} 1px, transparent 1px), linear-gradient(90deg, ${item.color} 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
            <div className="relative w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-sm">
              <FaviconImg item={item} size={36} className="rounded-lg" />
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <div className="px-3 py-1 rounded-full bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.06] text-[10px] font-mono text-[#6b7280] dark:text-[#9ca3af]">
                {domain}
              </div>
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
            style={{
              background: item.status === 'live' ? 'rgba(22,163,74,0.12)' : item.status === 'beta' ? 'rgba(37,99,235,0.12)' : 'rgba(107,114,128,0.12)',
              border: `1px solid ${item.status === 'live' ? 'rgba(22,163,74,0.25)' : item.status === 'beta' ? 'rgba(37,99,235,0.25)' : 'rgba(107,114,128,0.25)'}`,
              color: item.status === 'live' ? '#16a34a' : item.status === 'beta' ? '#2563eb' : '#6b7280',
            }}
          >
            <div
              className="w-[6px] h-[6px] rounded-full"
              style={{ background: item.status === 'live' ? '#16a34a' : item.status === 'beta' ? '#2563eb' : '#6b7280' }}
            />
            {item.status === 'coming-soon' ? 'Soon' : item.status}
          </div>
        </div>

        {/* Category label */}
        <div className="absolute top-3 left-3">
          <div className="px-2 py-0.5 rounded-md bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.06] text-[9px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wider font-semibold">
            {categoryLabels[item.category]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative ${large ? 'p-5' : 'p-4'} flex flex-col justify-between flex-1`}>
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <FaviconImg item={item} size={24} />
            </div>
            <div className="min-w-0">
              <h3 className={`font-display font-bold text-[#0f172a] dark:text-[#f1f5f9] leading-tight truncate ${large ? 'text-[17px]' : 'text-[14px]'}`}>
                {item.name}
              </h3>
              <p className="text-[11px] text-[#9ca3af] truncate">{item.tagline}</p>
            </div>
          </div>

          <p className={`text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-3 ${large ? 'text-[13px] line-clamp-3' : 'text-[12px] line-clamp-2'}`}>
            {item.ogDescription}
          </p>

          <div className="flex flex-wrap gap-1">
            {item.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#f3f4f6] dark:bg-[#1e2130] text-[#6b7280] dark:text-[#9ca3af] border border-black/[0.04] dark:border-white/[0.04]">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 pt-2.5 flex items-center justify-between border-t border-black/[0.04] dark:border-white/[0.04]">
          <div className="flex items-center gap-1.5 text-[#9ca3af]">
            <Globe size={10} />
            <span className="font-mono text-[10px]">{domain}</span>
          </div>
          <span className={`text-[11px] font-medium transition-all ${hovered ? 'text-primary translate-x-0 opacity-100' : 'text-[#9ca3af] -translate-x-1 opacity-0'}`}>
            Visit site &rarr;
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const Showcase: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? showcase : showcase.filter(s => s.category === filter);
  const featured = filtered.filter(s => s.featured);
  const rest = filtered.filter(s => !s.featured);

  const counts = {
    all: showcase.length,
    saas: showcase.filter(s => s.category === 'saas').length,
    client: showcase.filter(s => s.category === 'client').length,
    tool: showcase.filter(s => s.category === 'tool').length,
    agency: showcase.filter(s => s.category === 'agency').length,
  };

  return (
    <section id="showcase" className="py-16 px-6 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="section-label">03 &mdash; Showcase</div>
          <h2 className="section-title dark:text-[#f1f5f9]">Sites & platforms I've built</h2>
          <p className="section-sub dark:text-[#9ca3af]">
            {showcase.length} live products, client sites, and tools — each one designed, built, and shipped.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${
                  filter === opt.value
                    ? 'bg-[#0f172a] dark:bg-[#f1f5f9] text-white dark:text-[#0f172a]'
                    : 'bg-[#f0f1f5] dark:bg-[#1e2130] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#e5e7eb] dark:hover:bg-[#262a3a] hover:text-[#0f172a] dark:hover:text-[#f1f5f9]'
                }`}
              >
                {opt.label}
                <span className={`ml-1.5 text-[10px] ${filter === opt.value ? 'text-white/60 dark:text-[#0f172a]/60' : 'text-[#9ca3af]'}`}>
                  {counts[opt.value]}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {featured.map((item) => (
              <BrowserCard key={item.url} item={item} large />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((item) => (
              <BrowserCard key={item.url} item={item} />
            ))}
          </div>
        )}

        {/* Stats footer */}
        <ScrollReveal delay={0.15}>
          <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.06] dark:border-white/[0.06]">
            <div className="flex items-center gap-6">
              <div>
                <div className="font-display text-2xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9]">{showcase.length}</div>
                <div className="text-[11px] text-[#9ca3af] font-mono uppercase tracking-wider">Sites live</div>
              </div>
              <div className="w-px h-8 bg-black/[0.06] dark:bg-white/[0.06]" />
              <div>
                <div className="font-display text-2xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9]">
                  {showcase.filter(s => s.category === 'saas').length}
                </div>
                <div className="text-[11px] text-[#9ca3af] font-mono uppercase tracking-wider">SaaS products</div>
              </div>
              <div className="w-px h-8 bg-black/[0.06] dark:bg-white/[0.06]" />
              <div>
                <div className="font-display text-2xl font-extrabold text-[#0f172a] dark:text-[#f1f5f9]">
                  {showcase.filter(s => s.category === 'client').length}
                </div>
                <div className="text-[11px] text-[#9ca3af] font-mono uppercase tracking-wider">Client sites</div>
              </div>
            </div>
            <a
              href="https://github.com/ryantetro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[13px] px-4 py-2 dark:text-[#f1f5f9] dark:border-white/[0.12] dark:hover:bg-[#161922]"
            >
              View on GitHub &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Showcase;
