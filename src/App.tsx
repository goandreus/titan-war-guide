import { useState, useMemo } from "react";
import { guideContent, Language, Section } from "./content";

function App() {
  const [language, setLanguage] = useState<Language>("es");
  const { sections } = guideContent[language];

  const primaryNav = useMemo(() => {
    const wantedIds = ["why", "strategy", "attack", "defense", "communication"];
    return wantedIds
      .map((id) => sections.find((s) => s.id === id))
      .filter((s): s is Section => Boolean(s));
  }, [sections]);

  const handleScrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isRu = language === "ru";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1f2937,_#020617_55%)]" />
      <div className="fixed inset-0 -z-10 opacity-35 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.3),_transparent_55%)]" />

      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 via-red-500 to-indigo-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-amber-500/40">
              🐺
            </div>
            <div className="leading-tight">
              <h1 className="text-sm sm:text-base font-semibold tracking-wide">
                Night Wolves · Atlantis Guide
              </h1>
              <p className="text-[11px] text-slate-400">
                Titan War · Clan rules & strategy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!isRu && primaryNav.length > 0 && (
              <nav className="hidden md:flex items-center gap-2 text-[11px]">
                {primaryNav.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleScrollTo(s.anchor)}
                    className="px-2.5 py-1 rounded-full border border-slate-700/70 text-slate-200 hover:border-amber-300/80 hover:text-amber-200 bg-slate-900/40 transition"
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-1 rounded-full bg-slate-900/70 border border-slate-700/70 px-1 py-0.5">
              <LangButton
                current={language}
                value="es"
                label="ES"
                onClick={setLanguage}
              />
              <LangButton
                current={language}
                value="en"
                label="EN"
                onClick={setLanguage}
              />
              <LangButton
                current={language}
                value="ru"
                label="RU"
                onClick={setLanguage}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16 pt-6">
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-xl shadow-slate-900/80">
            <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.3),_transparent_60%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.28),_transparent_55%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-6 md:gap-8 p-5 sm:p-7 md:p-8">
              <div className="flex flex-col gap-3 justify-center">
                <p className="inline-flex itemsircle gap-2 text-[11px] uppercase tracking-widest text-amber-300/90">
                  <span className="h-1 w-6 rounded-full bg-amber-400" />
                  {language === "es"
                    ? "Guía viva de Atlantis"
                    : language === "en"
                    ? "Living Atlantis guide"
                    : "Гайд по Atlantis (в разработке)"}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {language === "es"
                    ? "Juega Atlantis como manada, no como lobo solitario."
                    : language === "en"
                    ? "Play Atlantis as a pack, not as a lone wolf."
                    : "Играем Atlantis как стая, а не в одиночку."}
                </h2>
                <p className="text-sm text-slate-200">
                  {language === "es"
                    ? "Esta guía resume cómo pensamos Atlantis en Night Wolves: qué hacer, qué evitar y cómo usar el chat y los recursos para que el esfuerzo de todos cuente."
                    : language === "en"
                    ? "This guide explains how Night Wolves approaches Atlantis: what to do, what to avoid and how to use chat and resources so everyone’s effort matters."
                    : "Здесь будет полная русская версия гайда. Пока можно пользоваться английской или испанской версией, а эта секция — в разработке."}
                </p>
                {!isRu && (
                  <p className="text-xs text-slate-400">
                    {language === "es"
                      ? "La guía irá cambiando según la experiencia del clan. Lo que no funcione, se ajusta."
                      : "The guide will evolve with the clan’s experience. Anything that stops working can be adjusted."}
                  </p>
                )}

                {!isRu && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sections.slice(0, 6).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleScrollTo(s.anchor)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900/70 border border-slate-700/80 hover:border-amber-300/80 hover:text-amber-200 transition"
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="h-44 sm:h-56 md:h-full rounded-2xl border border-slate-700/70 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_rgba(2,6,23,0.95))] overflow-hidden shadow-lg shadow-slate-900/70 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-40 bg-[url('/titanwar-bg.png')] bg-cover bg-center" />
                  <div className="relative z-10 flex flex-col items-center text-center px-4 py-4">
                    <span className="text-4xl mb-2">⚔️</span>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300 mb-1">
                      Titan War · Atlantis
                    </p>
                    <p className="text-xs text-slate-200 max-w-xs">
                      {language === "es"
                        ? ""
                        : language === "en"
                        ? ""
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)] gap-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
            {!isRu && (
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/75 p-3 sm:p-4">
                <h3 className="text-xs font-semibold mb-2 flex items-center gap-2">
                  <span className="h-3 w-1 rounded-full bg-amber-400/80" />
                  {language === "es"
                    ? "Navegación rápida"
                    : "Quick navigation"}
                </h3>
                <div className="flex flex-col gap-1 max-h-64 overflow-y-auto pr-1 text-xs">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleScrollTo(section.anchor)}
                      className="text-left px-2 py-1 rounded-lg hover:bg-slate-800/80 hover:text-amber-200 text-slate-200/90"
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-950/80 p-3 sm:p-4">
              <h3 className="text-xs font-semibold mb-1 flex items-center gap-2">
                <span>📝</span>
                {language === "es"
                  ? "Feedback y próximas mejoras"
                  : language === "en"
                  ? "Feedback & next updates"
                  : "Обратная связь и обновления"}
              </h3>
              <p className="text-[11px] text-slate-300 mb-2">
                {language === "es"
                  ? "En futuras versiones queremos añadir un cajón de feedback y un pequeño registro de cambios para ver cómo evoluciona la guía."
                  : language === "en"
                  ? "In future versions we want to add a feedback box and a small changelog to track how the guide evolves."
                  : "В следующих версиях здесь появится форма для обратной связи и небольшой список изменений гайда."}
              </p>
              <p className="text-[11px] text-slate-500">
                {language === "es"
                  ? "Por ahora, cualquier idea o sugerencia la puedes comentar directamente en el chat o por WhatsApp a los líderes."
                  : language === "en"
                  ? "For now, any ideas or suggestions can be shared directly in alliance chat or via WhatsApp with the leaders."
                  : "Пока что любые предложения можно писать в чат альянса или лидерам в WhatsApp."}
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

type LangButtonProps = {
  current: Language;
  value: Language;
  label: string;
  onClick: (lang: Language) => void;
};

function LangButton({ current, value, label, onClick }: LangButtonProps) {
  const active = current === value;
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-2 py-0.5 text-[11px] rounded-full border transition ${
        active
          ? "bg-slate-100 text-slate-900 border-slate-100"
          : "border-transparent text-slate-300 hover:bg-slate-800/80"
      }`}
    >
      {label}
    </button>
  );
}

function SectionCard({ section }: { section: Section }) {
  return (
    <section id={section.anchor} className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/85 hover:border-amber-300/70 transition-colors shadow-md shadow-slate-900/60">
        <div className="px-4 py-3 sm:px-5 sm:py-4">
          <h3 className="text-sm sm:text-base font-semibold mb-2 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-amber-400/85" />
            {section.title}
          </h3>
          <div className="space-y-2 text-sm text-slate-200/95">
            {section.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc list-inside mt-1 space-y-1">
                {section.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
