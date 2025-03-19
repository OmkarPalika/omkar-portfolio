// components/SectionLayout.tsx
"use client"
import { ReactNode } from 'react';

type SectionLayoutProps = {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionLayout = ({ id, title, children }: SectionLayoutProps) => (
  <section id={id} className="py-16 bg-[var(--color-dark-bg)]">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-12 text-center">{title}</h2>
      {children}
    </div>
  </section>
);

export default SectionLayout;
