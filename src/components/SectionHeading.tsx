interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className = "",
}: Props) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-heading tracking-wide ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-[2px] bg-warm-gold mx-auto mt-4 mb-4" />
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto ${
            light ? "text-white/70" : "text-charcoal/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
