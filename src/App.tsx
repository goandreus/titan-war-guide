import { useState } from "react";
import { contentByLang, type Lang, languageLabels } from "./data/content";
import "./index.css";

const AVAILABLE_LANGS: Lang[] = ["en", "es"]; // ready to add "ru" later

function App() {
  const [lang, setLang] = useState<Lang>("en");

  const content = contentByLang[lang === "ru" ? "en" : lang]; // fallback for RU until added
  const { CURRENT_VERSION, changelog, sections } = content;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isEnglish = lang === "en";

  return (
    <div className="app-root">
      <div className="app-inner">
        <header className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "flex-start",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h1 className="header-title">
                {isEnglish ? "Titan War – Clan Guide - Night Wolves" : "Titan War – Guía del - Clan Night Wolves"}
              </h1>
              <p className="header-subtitle">
                {isEnglish
                  ? "General clan rules and Atlantis attack guidelines. The idea is to keep the game fun, not a job."
                  : "Reglas generales del clan y normas de ataque en Atlantis. La idea es que jugar siga siendo algo que disfrutes, no una obligación."}
              </p>
              <div className="version-badge">
                <span className="version-dot" />
                <span>
                  {isEnglish ? "Current version" : "Versión actual"}: {CURRENT_VERSION}
                </span>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "0.35rem",
                  textAlign: "right"
                }}
              >
                {isEnglish ? "Language" : "Idioma"}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  justifyContent: "flex-end"
                }}
              >
                {AVAILABLE_LANGS.map((code) => (
                  <button
                    key={code}
                    type="button"
                    className="nav-chip"
                    style={
                      lang === code
                        ? { borderColor: "var(--accent)", color: "var(--accent)" }
                        : {}
                    }
                    onClick={() => setLang(code)}
                  >
                    {languageLabels[code]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p style={{ marginTop: "1rem" }}>
            {isEnglish
              ? "This guide is here to help us coordinate better, avoid drama and keep a good vibe in the clan. If something is unclear or you think we can improve it, feel free to suggest changes."
              : "Esta guía existe para ayudarnos a coordinarnos mejor, evitar malos entendidos y mantener un ambiente sano en el juego. Si algo no te queda claro o crees que se puede mejorar, puedes comentarlo en el chat o con los líderes del clan."}
          </p>
        </header>

        <nav className="card">
          <h2 className="card-title">
            {isEnglish ? "Sections" : "Secciones"}
          </h2>
          <p className="header-subtitle">
            {isEnglish
              ? "Use these shortcuts to jump directly to the part you need."
              : "Puedes usar estos accesos rápidos para ir directo a la parte que necesitas."}
          </p>
          <div className="nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className="nav-chip"
                type="button"
                onClick={() => handleScrollTo(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="card"
            aria-label={section.title}
          >
            <h2 className="section-title">{section.title}</h2>

            {section.paragraphs?.map((text) => (
              <p key={text}>{text}</p>
            ))}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="section-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="card">
          <h2 className="section-title">
            {isEnglish ? "Changelog" : "Historial de cambios"}
          </h2>
          <p className="header-subtitle">
            {isEnglish
              ? "Here we track the versions of the guide. When we change rules or add recommendations, we update this list."
              : "Aquí se registran las versiones de la guía. Cuando ajustemos reglas o agreguemos recomendaciones, se actualizará este listado."}
          </p>
          {changelog.map((item) => (
            <div className="changelog-item" key={item.version}>
              <div className="changelog-version">
                {isEnglish ? "Version" : "Versión"} {item.version} – {item.date}
              </div>
              <ul className="section-list">
                {item.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <footer className="card">
          <p>
            {isEnglish
              ? "If you made it this far, thank you for reading. In the end, the goal is simple: keep Titan War as a place to relax, improve as players and keep a good vibe in the alliance."
              : "Si llegaste hasta aquí, gracias por tomarte el tiempo de leer. Al final, la idea es simple: que Titan War sea un espacio para relajarnos, mejorar como jugadores y mantener un buen ambiente en la alianza."}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
