'use client';

import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Search,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Shield,
} from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const TOPICS = [
  {
    icon: '🔐',
    title: 'Authentication',
    description: 'Sign up, sign in, 2FA, passkeys, and account security',
    articles: 7,
    href: '/docs/authentication',
  },
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Welcome guide and navigating the website',
    articles: 2,
    href: '/docs/getting-started',
  },
  {
    icon: '💰',
    title: 'Wallet & Payments',
    description: 'Deposits, withdrawals, crypto, and transaction history',
    articles: 4,
    href: '/docs/wallet-and-payments',
  },
  {
    icon: '🃏',
    title: 'Playing Poker',
    description: 'Game types, poker actions, and private tables',
    articles: 6,
    href: '/docs/playing-poker',
  },
  {
    icon: '🏆',
    title: 'Tournaments',
    description: 'Sit & Go, tournament blinds, prizes, and payouts',
    articles: 3,
    href: '/docs/tournaments',
  },
  {
    icon: '✅',
    title: 'Provably Fair',
    description: 'How we ensure fair play and hand verification',
    articles: 2,
    href: '/docs/provably-fair',
  },
  {
    icon: '⭐',
    title: 'VIP Program',
    description: 'Tiers, rakeback, challenges, and exclusive rewards',
    articles: 3,
    href: '/docs/vip-program',
  },
  {
    icon: '🤝',
    title: 'Referrals & Support',
    description: 'Invite friends, earn rewards, and get help',
    articles: 3,
    href: '/docs/referrals',
  },
] as const;

const STATS = [
  { value: 30, suffix: '+', label: 'Articles' },
  { value: 8, suffix: '', label: 'Topics' },
  { value: 24, suffix: '/7', label: 'Updated' },
  { value: 100, suffix: '%', label: 'Free' },
] as const;

const SUITS = ['♠', '♥', '♦', '♣'];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-gold-gradient text-4xl md:text-5xl font-bold tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function FloatingParticles() {
  const positions = [
    { size: 20, left: 10, top: 15, delay: 0 },
    { size: 28, left: 32, top: 27, delay: 1.5 },
    { size: 36, left: 54, top: 39, delay: 3 },
    { size: 44, left: 76, top: 51, delay: 4.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {SUITS.map((suit, idx) => (
        <span
          key={`slow-${suit}`}
          className="absolute text-[#d4af37] animate-float-slow select-none"
          style={{
            fontSize: `${positions[idx].size}px`,
            left: `${positions[idx].left}%`,
            top: `${positions[idx].top}%`,
            animationDelay: `${positions[idx].delay}s`,
            opacity: 0.12,
          }}
        >
          {suit}
        </span>
      ))}
      {SUITS.map((suit, idx) => (
        <span
          key={`med-${suit}`}
          className="absolute text-[#f5e6a3] animate-float-medium select-none"
          style={{
            fontSize: `${14 + idx * 6}px`,
            right: `${8 + idx * 18}%`,
            bottom: `${20 + idx * 10}%`,
            animationDelay: `${idx * 2 + 0.5}s`,
            opacity: 0.08,
          }}
        >
          {suit}
        </span>
      ))}
      {SUITS.slice(0, 3).map((suit, idx) => (
        <span
          key={`fast-${suit}`}
          className="absolute text-[#d4af37] animate-float-fast select-none"
          style={{
            fontSize: `${12 + idx * 4}px`,
            left: `${50 + idx * 15}%`,
            top: `${60 + idx * 8}%`,
            animationDelay: `${idx * 1.8}s`,
            opacity: 0.06,
          }}
        >
          {suit}
        </span>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(212,175,55,0.15), transparent 38%), radial-gradient(circle at 80% 90%, rgba(26,58,82,0.3), transparent 45%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
        style={{ background: 'rgba(212,175,55,0.08)' }}
        aria-hidden="true"
      />
      <FloatingParticles />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.24em] text-[#d4af37] font-medium">
            <Shield className="w-3.5 h-3.5" />
            Help Center
          </span>

          <h1 className="text-gold-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Everything You Need to Know About HajiPoker
          </h1>

          <p className="text-[#64748b] text-lg md:text-xl max-w-2xl leading-relaxed">
            Browse our comprehensive guides covering authentication, payments,
            gameplay, tournaments, and more. Get the answers you need, fast.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link
              href="/docs"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              Browse Documentation
            </Link>
            <Link
              href="/docs"
              className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium"
            >
              <Search className="w-4 h-4" />
              Search Articles
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #0a0e27, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  );
}

function TopicsGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.24em] text-[#d4af37] font-medium">
            Explore Topics
          </span>
          <h2 className="text-gold-gradient text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Browse by Category
          </h2>
          <p className="text-[#64748b] mt-4 text-lg max-w-xl mx-auto">
            Find answers organized by topic. Each section contains detailed
            guides and step-by-step instructions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TOPICS.map((topic) => (
            <motion.div key={topic.title} variants={item}>
              <Link
                href={topic.href}
                className="card-glow glass rounded-2xl p-6 block h-full group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08), transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <span className="text-3xl block mb-4">{topic.icon}</span>
                  <h3 className="text-[#f8fafc] font-semibold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#d4af37] font-medium">
                      {topic.articles} articles
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#64748b] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.05), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="glass rounded-2xl p-6 md:p-8 text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="block mt-2 text-[#64748b] text-sm font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SearchCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.12), transparent 50%), radial-gradient(circle at 70% 80%, rgba(26,58,82,0.2), transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#d4af37] font-medium">
              Need Help?
            </span>
            <h2 className="text-gold-gradient text-3xl md:text-4xl font-bold mt-3 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-[#64748b] text-lg max-w-lg mx-auto mb-8">
              Our documentation covers everything from account setup to advanced
              gameplay. Browse the full library or reach out for support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
              >
                <BookOpen className="w-4 h-4" />
                Browse All Docs
              </Link>
              <Link
                href="/docs/support/getting-help"
                className="btn-glass inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, #d4af37, transparent)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#64748b] text-sm">
            &copy; 2026 HajiPoker. All rights reserved.
          </span>
          <nav className="flex flex-wrap items-center gap-6">
            {[
              { label: 'Documentation', href: '/docs' },
              { label: 'Privacy', href: '/docs' },
              { label: 'Terms', href: '/docs' },
              { label: 'Support', href: '/docs/support/getting-help' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#64748b] text-sm hover:text-[#d4af37] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden" style={{ background: '#0a0e27' }}>
      <HeroSection />
      <TopicsGrid />
      <StatsSection />
      <SearchCTA />
      <Footer />
    </main>
  );
}
