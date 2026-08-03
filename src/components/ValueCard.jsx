export default function ValueCard({ title, description, icon }) {
  // Simple clean SVGs for the icons
  const renderIcon = () => {
    const strokeWidth = 1.5;
    const size = "w-6 h-6";

    switch (icon) {
      case "heart": // Volunteerism
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        );
      case "shield": // Integrity
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
      case "flag": // Nationalism
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a4.875 4.875 0 00-1.305-9.228l-3.114.732a9 9 0 01-6.086-.71l-.108-.054a9 9 0 00-6.208-.682L3 7.5v7.5z" />
          </svg>
        );
      case "star": // Excellence
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.182-.383.736-.383.918 0l2.428 5.122 5.58.625c.42.047.587.567.277.859l-4.144 3.902 1.2 5.485c.09.412-.348.73-.728.514L12 17.347l-4.832 2.66c-.38.209-.817-.11-.728-.514l1.2-5.485L3.5 10.97c-.31-.293-.143-.812.277-.859l5.58-.625 2.428-5.122z" />
          </svg>
        );
      case "leaf": // Sustainable Development
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
          </svg>
        );
      default:
        return (
          <svg className={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-card border border-hairline p-8 space-y-4 hover:border-gold/30 transition-editorial duration-300">
      <div className="text-terracotta bg-ivory w-12 h-12 flex items-center justify-center border border-hairline rounded-sm">
        {renderIcon()}
      </div>
      <h3 className="font-serif text-2xl font-medium text-navy tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-sans text-ink/75 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
