import { CHALLENGES } from "@/lib/constants";

export default function ChallengeTable() {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto border border-hairline bg-card">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-ivory/50">
              <th className="p-6 text-xs font-sans uppercase tracking-widest text-navy font-bold w-[18%]">
                Key Challenge
              </th>
              <th className="p-6 text-xs font-sans uppercase tracking-widest text-navy font-bold w-[22%]">
                Specific Issues
              </th>
              <th className="p-6 text-xs font-sans uppercase tracking-widest text-navy font-bold w-[25%]">
                Best Practice / Solution
              </th>
              <th className="p-6 text-xs font-sans uppercase tracking-widest text-navy font-bold w-[20%]">
                Expected Outcome
              </th>
              <th className="p-6 text-xs font-sans uppercase tracking-widest text-navy font-bold w-[15%]">
                Key KPIs
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline">
            {CHALLENGES.map((row, index) => (
              <tr key={index} className="hover:bg-ivory/20 transition-colors">
                <td className="p-6 text-sm font-serif text-navy font-medium">
                  {row.challenge}
                </td>
                <td className="p-6 text-sm font-sans text-ink/80 leading-relaxed font-light">
                  {row.issue}
                </td>
                <td className="p-6 text-sm font-sans text-ink/80 leading-relaxed font-light border-x border-hairline/50">
                  <span className="font-medium text-terracotta block mb-1">
                    {row.solution.split(":")[0]}:
                  </span>
                  {row.solution.split(":")[1] || row.solution}
                </td>
                <td className="p-6 text-sm font-sans text-ink/85 leading-relaxed font-light">
                  {row.outcome}
                </td>
                <td className="p-6 text-xs font-sans text-navy/70 tracking-wide font-medium bg-ivory/10">
                  {row.kpi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-6">
        {CHALLENGES.map((row, index) => (
          <div
            key={index}
            className="bg-card border border-hairline p-6 space-y-4 rounded-sm"
          >
            {/* Header / Challenge Title */}
            <div className="border-b border-hairline pb-3">
              <span className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-bold">
                Challenge {index + 1}
              </span>
              <h3 className="font-serif text-xl font-semibold text-navy mt-1">
                {row.challenge}
              </h3>
            </div>

            {/* Content Blocks */}
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-[10px] font-sans uppercase tracking-wider text-ink/40 font-bold mb-1">
                  Specific Issue
                </span>
                <p className="font-sans text-ink/80 font-light leading-relaxed">
                  {row.issue}
                </p>
              </div>

              <div>
                <span className="block text-[10px] font-sans uppercase tracking-wider text-terracotta/80 font-bold mb-1">
                  Best Practice / Solution
                </span>
                <p className="font-sans text-ink/90 font-light leading-relaxed">
                  {row.solution}
                </p>
              </div>

              <div>
                <span className="block text-[10px] font-sans uppercase tracking-wider text-ink/40 font-bold mb-1">
                  Expected Outcome
                </span>
                <p className="font-sans text-ink/80 font-light leading-relaxed">
                  {row.outcome}
                </p>
              </div>

              <div className="pt-2 border-t border-hairline/50">
                <span className="block text-[10px] font-sans uppercase tracking-wider text-navy/60 font-bold mb-1">
                  Key KPIs
                </span>
                <p className="font-sans text-navy font-medium text-xs tracking-wide">
                  {row.kpi}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
