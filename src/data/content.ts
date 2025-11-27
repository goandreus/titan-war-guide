export type Lang = "en" | "es" | "ru";

export interface Section {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface GuideContent {
  CURRENT_VERSION: string;
  changelog: {
    version: string;
    date: string;
    changes: string[];
  }[];
  sections: Section[];
}

export const contentByLang: Record<Exclude<Lang, "ru">, GuideContent> = {
  en: {
    CURRENT_VERSION: "1.1.0",
    changelog: [
      {
        version: "1.1.0",
        date: "2025-11-27",
        changes: [
          "Added language switcher (EN/ES) and prepared structure for future RU support.",
          "Refined copy to keep the tone friendly and focused on enjoying the game."
        ]
      },
      {
        version: "1.0.0",
        date: "2025-11-27",
        changes: [
          "Initial version of the clan guide and Atlantis attack rules.",
          "Friendly tone focused on enjoying the game, not adding stress."
        ]
      }
    ],
    sections: [
      {
        id: "intro",
        title: "Why do we have this guide?",
        paragraphs: [
          "Titan War is already intense by itself: wars, events, Atlantis... This guide is not here to make things harder, but to help everyone know what to expect when we play as a team.",
          "The idea is that when you join the alliance, you feel you have a clear reference: what we expect in Atlantis, how we talk in chat, and how we make decisions together.",
          "We play to disconnect a bit from real life, not to add more stress. If any rule doesn’t help with that, we can review and improve it together."
        ]
      },
      {
        id: "principios",
        title: "Alliance principles",
        bullets: [
          "Respect first: no insults, personal attacks or toxic jokes in chat.",
          "Everyone contributes: it’s not about who scores the most, but about the team result.",
          "Real life first: if you can’t play a day or an Atlantis, that’s fine, just tell us when you can.",
          "Constant learning: if someone makes a mistake, we explain and improve; the goal is not to shame anyone."
        ]
      },
      {
        id: "atlantis",
        title: "Atlantis attack rules",
        paragraphs: [
          "Atlantis is where we need the most coordination. We don’t want it to feel like an exam, but a bit of order helps everyone’s effort to actually matter.",
          "It’s better to do fewer, well‑coordinated attacks than a lot of random hits that don’t support the overall strategy."
        ],
        bullets: [
          "Follow the markers from leaders (R4/R5) about which targets we focus first.",
          "Before spending energy on a big target, ask in chat if you’re not sure.",
          "Avoid going solo into targets that clearly need group coordination, unless a leader tells you to.",
          "If you see several people heading to the same target, double‑check chat in case there’s a new call.",
          "If you hit the wrong target or jump ahead, just say it and we move on; the point is to learn."
        ]
      },
      {
        id: "comunicacion",
        title: "Communication during Atlantis",
        paragraphs: [
          "Chat during Atlantis is key. You don’t need to write essays; short and clear messages are enough."
        ],
        bullets: [
          "Use simple messages like: “Attacking left tower in 1 min”, “Need support on X target”.",
          "Avoid spam or messages unrelated to the event while Atlantis is running.",
          "If we have people with different native languages, keep key calls in simple English when possible."
        ]
      },
      {
        id: "recursos",
        title: "Resources (buffs, gems, boosts)",
        paragraphs: [
          "Everyone decides how much they want to invest in the game, but to make effort worth more, coordination helps."
        ],
        bullets: [
          "Alliance buffs are activated by leaders so we don’t waste them.",
          "Try not to spend gems on revives or extra energy unless the situation really needs it; ask if it’s worth it.",
          "If you know strong hero/origin/artifact combos, feel free to share them in chat or in the wiki/guide."
        ]
      },
      {
        id: "errores",
        title: "Mistakes and how we handle them",
        paragraphs: [
          "Everyone makes mistakes. Sometimes the finger slips, connection drops, or we just misread the call.",
          "What defines the clan is not that we never mess up, but how we react when it happens."
        ],
        bullets: [
          "If you mess up, say it without fear: “my bad, won’t happen again”.",
          "Avoid humiliating, mocking or making heavy jokes about someone’s mistake.",
          "If the same issue happens many times, we can talk privately with a leader to understand what’s going on."
        ]
      },
      {
        id: "seguimiento",
        title: "Follow‑up and improvements",
        paragraphs: [
          "This guide is not carved in stone. If something doesn’t make sense, we can adjust it. If a rule is too strict or too soft, we can also review it.",
          "The goal is for this document to evolve with the alliance’s experience, feedback and new seasons."
        ],
        bullets: [
          "If you have suggestions, you can share them in chat or directly with the leaders.",
          "From time to time, we can review the rules based on what we’ve lived as a clan."
        ]
      },
      {
        id: "cierre",
        title: "Closing",
        paragraphs: [
          "In short: we’re here to have a good time, grow as players and as a team.",
          "As long as this guide helps with that, it will keep evolving. If something doesn’t fit, we talk about it.",
          "Thanks for being part of the alliance and bringing your time and energy to Titan War."
        ]
      }
    ]
  },
  es: {
    CURRENT_VERSION: "1.1.0",
    changelog: [
      {
        version: "1.1.0",
        date: "2025-11-27",
        changes: [
          "Se agregó switch de idioma (EN/ES) y se dejó preparada la estructura para RU en el futuro.",
          "Se refinó el texto para mantener un tono cercano y enfocado en disfrutar el juego."
        ]
      },
      {
        version: "1.0.0",
        date: "2025-11-27",
        changes: [
          "Versión inicial de la guía del clan y normas de ataque en Atlantis.",
          "Se define tono más humano y enfocado en disfrutar el juego."
        ]
      }
    ],
    sections: [
      {
        id: "intro",
        title: "¿Por qué tenemos esta guía?",
        paragraphs: [
          "Titan War ya es bastante intenso por sí mismo: guerras, eventos, Atlantis... Esta guía no existe para hacerte la vida más complicada, sino para que todos sepamos qué esperar cuando jugamos en equipo.",
          "La idea es que cuando entres a la alianza sientas que tienes un lugar claro donde apoyarte: qué se espera en Atlantis, cómo nos hablamos en el chat y cómo tomamos decisiones juntos.",
          "Jugamos para desconectarnos un rato del mundo real, no para traer más estrés. Si algo de estas reglas no suma a ese objetivo, se puede revisar y mejorar entre todos."
        ]
      },
      {
        id: "principios",
        title: "Principios de la alianza",
        bullets: [
          "Respeto primero: nada de insultos, ataques personales ni burlas tóxicas en el chat.",
          "Todos sumamos: no se trata de quién hace más puntos, sino de que el resultado sea bueno como equipo.",
          "Vida real primero: si no puedes jugar un día o una Atlantis, se entiende; solo avisa cuando puedas.",
          "Aprendizaje constante: si alguien se equivoca, se explica y se mejora; no se busca humillar."
        ]
      },
      {
        id: "atlantis",
        title: "Normas de ataque en Atlantis",
        paragraphs: [
          "Atlantis es donde más coordinación necesitamos. No buscamos que sea un examen, pero sí que haya cierto orden para que el esfuerzo de todos valga la pena.",
          "Es mejor hacer menos ataques bien coordinados que muchos ataques al azar que no ayudan a la estrategia global."
        ],
        bullets: [
          "Respetar las marcas de los líderes (R4/R5) sobre qué objetivos atacar primero.",
          "Antes de gastar energía en un objetivo grande, avisar en el chat si hay dudas.",
          "Evitar entrar solo a objetivos que requieren coordinación grupal, salvo que un líder lo autorice.",
          "Si ves que varios ya van hacia el mismo objetivo, revisa el chat por si hay una indicación diferente.",
          "Si te equivocas de objetivo o te adelantas, coméntalo y seguimos; lo importante es aprender."
        ]
      },
      {
        id: "comunicacion",
        title: "Comunicación durante Atlantis",
        paragraphs: [
          "El chat durante Atlantis es clave. No hace falta escribir párrafos, con mensajes cortos y claros basta."
        ],
        bullets: [
          "Usar mensajes simples como: “Ataco torre izquierda en 1 min”, “Necesito apoyo en X objetivo”.",
          "Evitar spam o mensajes que no tengan que ver con el evento mientras dure Atlantis.",
          "Si hay gente que habla otro idioma, intentar mantener las indicaciones clave en un idioma común (por ejemplo inglés simple)."
        ]
      },
      {
        id: "recursos",
        title: "Uso de recursos (buffs, gemas, boosts)",
        paragraphs: [
          "Cada uno decide qué tanto invierte en el juego, pero para que el esfuerzo rinda más, tiene sentido coordinar algunas cosas."
        ],
        bullets: [
          "Los buffs de alianza se activan siempre por acuerdo de los líderes para no desperdiciarlos.",
          "Evitar gastar gemas en revivir o energía extra si la situación no lo justifica; preguntar si vale la pena.",
          "Si conoces buenas combinaciones de héroes, orígenes o artefactos, puedes compartirlas en el chat o en la wiki/guía."
        ]
      },
      {
        id: "errores",
        title: "Errores y cómo los manejamos",
        paragraphs: [
          "Todos nos equivocamos. A veces el dedo se va donde no debe, la conexión falla o simplemente no entendimos la indicación.",
          "Lo que define al clan no es que no haya errores, sino cómo reaccionamos cuando pasan."
        ],
        bullets: [
          "Si te equivocas, dilo sin miedo: “me adelanté, fue error mío, no se repetirá”.",
          "Evitar humillar, ridiculizar o hacer bromas pesadas a alguien que se equivocó.",
          "Si un problema se repite muchas veces, se puede hablar en privado con un líder para ver qué está pasando."
        ]
      },
      {
        id: "seguimiento",
        title: "Seguimiento y mejoras",
        paragraphs: [
          "Esta guía no está escrita en piedra. Si algo no tiene sentido, se puede ajustar. Si una regla está muy rígida o muy suave, también se puede revisar.",
          "La idea es que este documento viva y mejore con la experiencia de la alianza, los comentarios del equipo y las temporadas que vienen."
        ],
        bullets: [
          "Si tienes sugerencias, puedes comentarlas en el chat o directamente a los líderes.",
          "Cada cierto tiempo se podrá hacer una pequeña revisión de las reglas según lo que hayamos vivido como clan."
        ]
      },
      {
        id: "cierre",
        title: "Cierre",
        paragraphs: [
          "En resumen: estamos aquí para pasarla bien, crecer como jugadores y como equipo.",
          "Mientras esta guía ayude a eso, seguirá evolucionando. Si algo no cuadra, lo conversamos.",
          "Gracias por estar en la alianza y por aportar tu tiempo y tu energía a Titan War."
        ]
      }
    ]
  }
};

export const languageLabels: Record<Lang, string> = {
  en: "English",
  es: "Español",
  ru: "Русский"
};
