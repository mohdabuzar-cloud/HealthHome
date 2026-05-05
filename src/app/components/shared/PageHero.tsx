import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle: string;
}

export function PageHero({ breadcrumbs, title, subtitle }: PageHeroProps) {
  return (
    <section className="py-24 px-6" style={{ background: "#1C2E4A", fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          {breadcrumbs.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {item.to ? (
                <Link to={item.to} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{item.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>/</span>
              )}
            </span>
          ))}
        </nav>
        <h1 style={{ color: "#fff", fontWeight: 700, fontSize: 52, lineHeight: 1.2 }} className="max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl" style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, lineHeight: 1.75 }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
