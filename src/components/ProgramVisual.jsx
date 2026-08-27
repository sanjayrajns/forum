import Image from "next/image";

export default function ProgramVisual({ id, title, image, isSage }) {
  // If we have an image, render it
  if (image) {
    const isContain = id === "curriculum" || id === "club" || image.includes("circulum") || image.includes("club") || image.includes("IAIF-club");
    return (
      <div className="relative aspect-square w-full border border-hairline bg-card overflow-hidden group flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, 40vw"
          className={`${
            isContain
              ? "object-contain p-4 sm:p-6 filter saturate-[0.95] contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-98"
              : "object-cover filter saturate-[0.85] contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-102"
          }`}
        />
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-navy/5 mix-blend-multiply pointer-events-none" />
        {/* Elegant accent border */}
        <div className="absolute -inset-4 border border-gold/10 pointer-events-none -z-10 translate-x-2 translate-y-2" />
      </div>
    );
  }

  // Otherwise, render a custom, highly premium technical blueprint SVG based on program ID
  return (
    <div className="relative aspect-square w-full border border-hairline bg-card flex items-center justify-center p-8 overflow-hidden">
      {/* Blueprint background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #14213D 1px, transparent 1px), linear-gradient(to right, #D8D3C7 1px, transparent 1px), linear-gradient(to bottom, #D8D3C7 1px, transparent 1px)`,
        backgroundSize: '24px 24px, 24px 24px, 24px 24px',
        backgroundPosition: 'center'
      }} />

      {/* Outer border decoration */}
      <div className="absolute inset-4 border border-hairline/40 pointer-events-none" />
      <div className="absolute top-2 left-6 text-[8px] font-sans uppercase tracking-widest text-navy/30">
        IAIF SCHEMATIC // {id.toUpperCase()}_MOD_26
      </div>
      <div className="absolute bottom-2 right-6 text-[8px] font-sans uppercase tracking-widest text-navy/30">
        SCALE 1:1 // BHARAT_FIRST
      </div>

      {/* Golden corners */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-gold/50" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-gold/50" />
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-gold/50" />
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-gold/50" />

      {/* SVG Blueprint Render */}
      <svg className="w-48 h-48 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Render program specific drawing */}
        {id === "ideathons" && (
          <>
            {/* Ideathons SVG: Overlocking circles of thought, dotted rays, central bright hub */}
            <circle cx="100" cy="100" r="70" stroke="#D8D3C7" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="50" stroke="#14213D" strokeWidth="0.5" strokeOpacity="0.3" />
            
            {/* Axis lines */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="#D8D3C7" strokeWidth="0.75" strokeDasharray="4 4" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#D8D3C7" strokeWidth="0.75" strokeDasharray="4 4" />
            
            {/* Central lightbulb/idea nodes */}
            <circle cx="100" cy="95" r="24" stroke="#A85D3B" strokeWidth="1.5" />
            <path d="M85 110C85 120 100 120 100 128" stroke="#14213D" strokeWidth="1" />
            <path d="M115 110C115 120 100 120 100 128" stroke="#14213D" strokeWidth="1" />
            <line x1="90" y1="128" x2="110" y2="128" stroke="#C49A45" strokeWidth="2" />
            <line x1="93" y1="133" x2="107" y2="133" stroke="#C49A45" strokeWidth="1" />
            
            {/* Rays */}
            <line x1="100" y1="60" x2="100" y2="45" stroke="#C49A45" strokeWidth="1.5" />
            <line x1="68" y1="78" x2="57" y2="67" stroke="#C49A45" strokeWidth="1.5" />
            <line x1="132" y1="78" x2="143" y2="67" stroke="#C49A45" strokeWidth="1.5" />
            <line x1="65" y1="100" x2="50" y2="100" stroke="#C49A45" strokeWidth="1.5" />
            <line x1="135" y1="100" x2="150" y2="100" stroke="#C49A45" strokeWidth="1.5" />
            
            {/* Data/Ideation nodes */}
            <circle cx="70" cy="70" r="4" fill="#7C8B6F" />
            <circle cx="130" cy="70" r="4" fill="#7C8B6F" />
            <circle cx="55" cy="115" r="3.5" fill="#C49A45" />
            <circle cx="145" cy="115" r="3.5" fill="#C49A45" />
            
            <path d="M70 70 Q100 45 130 70" stroke="#7C8B6F" strokeWidth="0.75" strokeDasharray="2 2" />
            <path d="M55 115 Q100 145 145 115" stroke="#C49A45" strokeWidth="0.75" strokeDasharray="2 2" />
          </>
        )}

        {id === "curriculum" && (
          <>
            {/* Curriculum Alignment: Two grids with alignment mapping */}
            <rect x="25" y="45" width="60" height="110" rx="3" stroke="#14213D" strokeWidth="1.25" />
            <text x="55" y="38" textAnchor="middle" fill="#14213D" className="font-sans text-[7px] uppercase font-bold tracking-wider">ACADEMIA</text>
            <line x1="25" y1="72" x2="85" y2="72" stroke="#D8D3C7" strokeWidth="0.75" />
            <line x1="25" y1="100" x2="85" y2="100" stroke="#D8D3C7" strokeWidth="0.75" />
            <line x1="25" y1="128" x2="85" y2="128" stroke="#D8D3C7" strokeWidth="0.75" />
            
            <rect x="115" y="45" width="60" height="110" rx="3" stroke="#A85D3B" strokeWidth="1.25" />
            <text x="145" y="38" textAnchor="middle" fill="#A85D3B" className="font-sans text-[7px] uppercase font-bold tracking-wider">INDUSTRY</text>
            <line x1="115" y1="72" x2="175" y2="72" stroke="#D8D3C7" strokeWidth="0.75" />
            <line x1="115" y1="100" x2="175" y2="100" stroke="#D8D3C7" strokeWidth="0.75" />
            <line x1="115" y1="128" x2="175" y2="128" stroke="#D8D3C7" strokeWidth="0.75" />

            {/* Connecting Mapping Nodes */}
            <circle cx="55" cy="72" r="3" fill="#14213D" />
            <circle cx="145" cy="72" r="3" fill="#A85D3B" />
            <line x1="58" y1="72" x2="142" y2="72" stroke="#C49A45" strokeWidth="1" strokeDasharray="3 3" />
            
            <circle cx="55" cy="100" r="3" fill="#14213D" />
            <circle cx="145" cy="100" r="3" fill="#A85D3B" />
            <line x1="58" y1="100" x2="142" y2="100" stroke="#C49A45" strokeWidth="1" />
            
            <circle cx="55" cy="128" r="3" fill="#14213D" />
            <circle cx="145" cy="128" r="3" fill="#A85D3B" />
            <line x1="58" y1="128" x2="142" y2="128" stroke="#C49A45" strokeWidth="1" strokeDasharray="3 3" />

            {/* Overlay alignment graphics */}
            <path d="M100 20 L100 180" stroke="#C49A45" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="100" cy="100" r="16" stroke="#C49A45" strokeWidth="0.75" />
            <path d="M92 100 L108 100 M100 92 L100 108" stroke="#C49A45" strokeWidth="0.75" />
          </>
        )}

        {id === "faculty" && (
          <>
            {/* Faculty Development: Continuous spiral or concentric growing loops of education */}
            <circle cx="100" cy="100" r="75" stroke="#D8D3C7" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="60" stroke="#D8D3C7" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="45" stroke="#14213D" strokeWidth="1" strokeOpacity="0.15" />
            
            {/* Rotational paths & arrows */}
            <path d="M100 40 A60 60 0 0 1 160 100" stroke="#7C8B6F" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M160 100 A60 60 0 0 1 100 160" stroke="#C49A45" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100 160 A60 60 0 0 1 40 100" stroke="#14213D" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M40 100 A60 60 0 0 1 100 40" stroke="#A85D3B" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Arrowheads for flow */}
            <path d="M157 95 L160 100 L165 97" stroke="#7C8B6F" strokeWidth="1.5" fill="none" />
            <path d="M105 163 L100 160 L103 155" stroke="#C49A45" strokeWidth="1.5" fill="none" />
            <path d="M43 105 L40 100 L35 103" stroke="#14213D" strokeWidth="1.5" fill="none" />
            <path d="M95 37 L100 40 L97 45" stroke="#A85D3B" strokeWidth="1.5" fill="none" />

            {/* Central core representing leadership */}
            <circle cx="100" cy="100" r="28" stroke="#14213D" strokeWidth="1.25" fill="#FBF9F5" />
            <polygon points="100,85 113,108 87,108" stroke="#C49A45" strokeWidth="1.25" fill="none" />
            <circle cx="100" cy="100" r="4" fill="#14213D" />
          </>
        )}

        {id === "ethics" && (
          <>
            {/* Nationalism & Ethics: Stylized national emblem/sun wheel with rays of integrity */}
            <circle cx="100" cy="100" r="70" stroke="#D8D3C7" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="60" stroke="#14213D" strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="100" cy="100" r="40" stroke="#A85D3B" strokeWidth="1.25" />
            <circle cx="100" cy="100" r="16" fill="#14213D" />

            {/* spokes of duty */}
            <line x1="100" y1="40" x2="100" y2="160" stroke="#C49A45" strokeWidth="0.75" />
            <line x1="40" y1="100" x2="160" y2="100" stroke="#C49A45" strokeWidth="0.75" />
            <line x1="58" y1="58" x2="142" y2="142" stroke="#C49A45" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="142" y1="58" x2="58" y2="142" stroke="#C49A45" strokeWidth="0.5" strokeDasharray="3 3" />
            
            {/* Concentric points */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x = 100 + 40 * Math.cos(angle);
              const y = 100 + 40 * Math.sin(angle);
              return <circle key={i} cx={x} cy={y} r="2" fill="#A85D3B" />;
            })}

            {/* Radiant shield lines in background */}
            <path d="M100 15 L100 30 M100 170 L100 185 M15 100 L30 100 M170 100 L185 100" stroke="#7C8B6F" strokeWidth="1" />
            <path d="M40 40 L50 50 M160 160 L150 150 M160 40 L150 50 M40 160 L50 150" stroke="#7C8B6F" strokeWidth="1" />

            {/* Label in emblem */}
            <circle cx="100" cy="100" r="8" fill="#FBF9F5" stroke="#C49A45" strokeWidth="1" />
            <polygon points="100,96 103,102 97,102" fill="#C49A45" />
          </>
        )}

        {id === "reading" && (
          <>
            {/* Culture of Reading: Floating Open Book Schematic */}
            {/* Grid lines */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="#D8D3C7" strokeWidth="0.75" strokeDasharray="5 5" />
            <line x1="20" y1="130" x2="180" y2="130" stroke="#D8D3C7" strokeWidth="0.5" />
            
            {/* Spine */}
            <line x1="100" y1="70" x2="100" y2="145" stroke="#14213D" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Book Pages - Left wing */}
            <path d="M100 70 C70 65 50 80 30 75 V140 C50 145 70 130 100 135 Z" stroke="#14213D" strokeWidth="1.5" fill="#FBF9F5" />
            <path d="M100 75 C73 70 53 84 34 79 V136" stroke="#D8D3C7" strokeWidth="0.75" />
            <path d="M100 80 C76 75 56 88 38 83" stroke="#C49A45" strokeWidth="0.75" />
            
            {/* Book Pages - Right wing */}
            <path d="M100 70 C130 65 150 80 170 75 V140 C150 145 130 130 100 135 Z" stroke="#14213D" strokeWidth="1.5" fill="#FBF9F5" />
            <path d="M100 75 C127 70 147 84 166 79 V136" stroke="#D8D3C7" strokeWidth="0.75" />
            <path d="M100 80 C124 75 144 88 162 83" stroke="#C49A45" strokeWidth="0.75" />

            {/* Rising rays representing enlightenment */}
            <path d="M100 60 L100 40 M75 52 L65 40 M125 52 L135 40 M55 60 L42 50 M145 60 L158 50" stroke="#C49A45" strokeWidth="1" strokeLinecap="round" />
            <circle cx="100" cy="55" r="2" fill="#A85D3B" />
          </>
        )}

        {id === "club" && (
          <>
            {/* IAIF Club: Connected Node Constellation representing campus clubs */}
            <circle cx="100" cy="100" r="70" stroke="#D8D3C7" strokeWidth="0.5" strokeDasharray="6 6" />
            
            {/* Central Node */}
            <circle cx="100" cy="100" r="10" stroke="#14213D" strokeWidth="1.5" fill="#FBF9F5" />
            <circle cx="100" cy="100" r="4" fill="#A85D3B" />

            {/* Outer Nodes */}
            <g>
              {/* Node 1: Top */}
              <circle cx="100" cy="45" r="7" stroke="#7C8B6F" strokeWidth="1.25" fill="#FBF9F5" />
              <line x1="100" y1="52" x2="100" y2="90" stroke="#7C8B6F" strokeWidth="1" />
              <circle cx="100" cy="45" r="2" fill="#7C8B6F" />

              {/* Node 2: Bottom-Right */}
              <circle cx="148" cy="128" r="7" stroke="#C49A45" strokeWidth="1.25" fill="#FBF9F5" />
              <line x1="142" y1="124" x2="108" y2="105" stroke="#C49A45" strokeWidth="1" />
              <circle cx="148" cy="128" r="2" fill="#C49A45" />

              {/* Node 3: Bottom-Left */}
              <circle cx="52" cy="128" r="7" stroke="#14213D" strokeWidth="1.25" fill="#FBF9F5" />
              <line x1="58" y1="124" x2="92" y2="105" stroke="#14213D" strokeWidth="1" />
              <circle cx="52" cy="128" r="2" fill="#14213D" />

              {/* Node 4: Mid-Left */}
              <circle cx="45" cy="80" r="5" stroke="#A85D3B" strokeWidth="1" fill="#FBF9F5" />
              <line x1="50" y1="82" x2="90" y2="97" stroke="#A85D3B" strokeWidth="0.75" strokeDasharray="2 2" />
              
              {/* Node 5: Mid-Right */}
              <circle cx="155" cy="80" r="5" stroke="#7C8B6F" strokeWidth="1" fill="#FBF9F5" />
              <line x1="150" y1="82" x2="110" y2="97" stroke="#7C8B6F" strokeWidth="0.75" strokeDasharray="2 2" />
            </g>

            {/* Inter-node connectivity ring */}
            <path d="M100 45 L155 80 L148 128 L52 128 L45 80 Z" stroke="#D8D3C7" strokeWidth="0.75" strokeDasharray="3 3" />
          </>
        )}
      </svg>
    </div>
  );
}
