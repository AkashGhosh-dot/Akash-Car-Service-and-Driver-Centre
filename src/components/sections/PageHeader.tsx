interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-brand-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            {label}
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-wide text-white md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-gray-300 md:mx-0">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
