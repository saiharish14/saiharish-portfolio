import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-y">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-6 bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
