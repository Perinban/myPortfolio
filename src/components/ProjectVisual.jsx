const projectVisuals = {
    TalentBliss: {
        eyebrow: 'Product + data platform',
        stages: ['React web', 'Express API', 'PostgreSQL', 'Python ingestion'],
        output: 'Self-hosted job platform',
    },
    ReviewXtract: {
        eyebrow: 'Review intelligence pipeline',
        stages: ['Flipkart scrape', 'Text cleanup', 'Topics + clusters', 'Sentiment ML'],
        output: 'Structured review insights',
    },
    'BRICS Gold Trade Analysis': {
        eyebrow: 'Trade-data workflow',
        stages: ['UN Comtrade', 'Validate + model', 'Oracle analysis', 'Tableau'],
        output: 'Gold-trade comparisons',
    },
    'India Weather ML Analysis': {
        eyebrow: 'Weather analytics workflow',
        stages: ['Weather data', 'Relational model', 'Stats + ML', 'Tableau'],
        output: 'Regional weather findings',
    },
    'T20 Best XI Analysis': {
        eyebrow: 'Player-selection workflow',
        stages: ['JSON sources', 'Pandas metrics', 'Role scoring', 'Power BI'],
        output: 'Balanced T20 XI',
    },
};

const ProjectVisual = ({ projectName }) => {
    const visual = projectVisuals[projectName];
    if (!visual) return null;

    return (
        <div className="relative flex aspect-[16/10] w-full flex-col overflow-hidden bg-[#0a1018] p-5 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(167,139,250,0.16),transparent_30%),radial-gradient(circle_at_85%_78%,rgba(88,166,255,0.12),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />

            <div className="relative z-10 flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-accent">{visual.eyebrow}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary/30">project flow</span>
            </div>

            <div className="relative z-10 my-auto grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
                {visual.stages.map((stage, index) => (
                    <div key={stage} className="relative flex min-h-[66px] items-center justify-center rounded-xl border border-white/10 bg-tertiary/70 px-3 py-3 text-center backdrop-blur-sm">
                        <span className="text-xs font-semibold leading-5 text-secondary/75">{stage}</span>
                        {index < visual.stages.length - 1 && (
                            <span className="absolute -right-[9px] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-accent/45 sm:block" aria-hidden="true" />
                        )}
                    </div>
                ))}
            </div>

            <div className="relative z-10 mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(167,139,250,0.7)]" aria-hidden="true" />
                <span className="text-xs font-semibold text-secondary/65">{visual.output}</span>
            </div>
        </div>
    );
};

export default ProjectVisual;
