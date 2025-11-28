export type Language = "es" | "en" | "ru";

export interface Section {
  id: string;
  anchor: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface GuideContent {
  sections: Section[];
}

export const guideContent: Record<Language, GuideContent> = {
  es: {
    sections: [
      {
        id: "why",
        anchor: "por-que-tenemos-esta-guia",
        title: "¿Por qué tenemos esta guía?",
        paragraphs: [
          "Titan War ya es bastante intenso por sí mismo: guerras, eventos, Atlantis... Esta guía no existe para hacerte la vida más complicada, sino para que todos sepamos qué esperar cuando jugamos en equipo.",
          "La idea es que cuando entres a la alianza sientas que tienes un lugar claro donde apoyarte: qué se espera en Atlantis, cómo nos hablamos en el chat y cómo tomamos decisiones juntos.",
          "Jugamos para desconectarnos un rato del mundo real, no para traer más estrés. Si algo de estas reglas no suma a ese objetivo, se puede revisar y mejorar entre todos."
        ]
      },
      {
        id: "principles",
        anchor: "principios-de-la-alianza",
        title: "Principios de la alianza",
        paragraphs: [
          "Estos son los acuerdos básicos de Night Wolves. Todo lo demás se construye encima de esto."
        ],
        bullets: [
          "Respeto primero: nada de insultos, ataques personales ni burlas tóxicas en el chat.",
          "Todos sumamos: no se trata de quién hace más puntos, sino de que el resultado sea bueno como equipo.",
          "Vida real primero: si no puedes jugar un día o una Atlantis, se entiende; solo avisa cuando puedas.",
          "Aprendizaje constante: si alguien se equivoca, se explica y se mejora; no se busca humillar."
        ]
      },
      {
        id: "roles",
        anchor: "roles-en-la-alianza",
        title: "Roles dentro de la alianza (fuertes, medios y en crecimiento)",
        paragraphs: [
          "No todos tenemos las mismas cuentas ni el mismo tiempo de juego, y eso está bien. La idea es usar la fuerza de cada uno donde más aporta, no compararnos entre nosotros.",
          "En Atlantis, pensamos a los jugadores más o menos así (no son etiquetas rígidas, son referencia):"
        ],
        bullets: [
          "Cuentas fuertes: suelen ir al frente, abren camino, limpian defensas duras y sostienen fortalezas clave (S/A, puentes, Tesoros). También son las que suelen marcar el ritmo en el chat.",
          "Cuentas medias: son el esqueleto del equipo. Ayudan a consolidar lo que los fuertes abren, rematan fortalezas en disputa, apoyan en defensas y ayudan a cerrar rutas.",
          "Cuentas en crecimiento: no por ser más pequeñas aportan menos. Pueden asegurar C/B de nuestra zona, reforzar defensas, completar rutas y apoyar cuando se planifica un push grande.",
          "Idea clave: los fuertes no juegan solos; ayudan a abrir y sostener rutas para que las cuentas medias y en crecimiento puedan entrar y sumar puntos sin morir inútilmente."
        ]
      },
      {
        id: "mechanics",
        anchor: "mecanicas-basicas-de-atlantis",
        title: "Mecánicas básicas de Atlantis",
        paragraphs: [
          "No hace falta memorizar todo el manual del juego, pero sí entender algunas ideas clave para que las decisiones tengan sentido.",
          "El mapa de Atlantis se puede imaginar como un conjunto de zonas unidas por 'puentes' (fortalezas que conectan áreas). Quien controla los puentes, controla por dónde se mueve el enemigo.",
          "Las fortalezas dan puntos por hora. En la práctica, la prioridad real del mapa suele ser: S > A > fortalezas con bonus de alto rendimiento > fortalezas que son puente (abren rutas) > B > C internas.",
          "Mover equipos a fortalezas en disputa consume cargas de apoyo/asistencia. Esas cargas son tu combustible: si las gastas en ataques que no cambian nada, luego faltan cuando el clan realmente las necesita.",
          "Las rachas de victorias dan más Méritos, pero si pierdes atacando se reinician a 0. Intenta usar tus mejores rachas en batallas clave, no en duelos casi perdidos.",
          "Reagrupar equipo solo lo usan presidente y ancianos. Sirve para mover equipos desde la base a fortalezas aliadas, sobre todo para salvar S/A o reforzar Tesoros. No es para acomodar el mapa por estética.",
          "Los buffs de cristal dan ventajas temporales a toda la alianza (más ataque, vida, penetración o mitigación). Funcionan mejor cuando hay varias personas conectadas y se va a hacer un push o defensa fuerte.",
          "El Tesoro de la Atlántida, las misiones de avance y las fortalezas con bonificación de alto rendimiento son eventos especiales: no siempre hay que pelear todos, pero cuando se decide ir, se va en serio y con coordinación."
        ]
      },
      {
        id: "map-types",
        anchor: "tipos-de-partida-y-lectura-de-mapa",
        title: "Tipos de partida y lectura del mapa",
        paragraphs: [
          "No todas las partidas de Atlantis son iguales. A veces el emparejamiento nos trae rivales más débiles, a veces similares, a veces mucho más fuertes. Adaptar la estrategia a eso es clave.",
          "De forma simple, podemos pensar los escenarios así:"
        ],
        bullets: [
          "Rivales más débiles: es tentador ir a por todo el mapa, pero lo más eficiente es asegurar primero nuestra zona (C/B/A cercanas), controlar bien los puentes y no regalar defensas. Luego sí se puede presionar su lado.",
          "Rivales de fuerza similar: aquí el mapa se vuelve ajedrez. Importan mucho los puentes, las S/A y las zonas donde hay varias fortalezas en disputa. Lo que no cambia el marcador o la posición, importa menos.",
          "Rivales claramente más fuertes: el objetivo deja de ser ganar por paliza y pasa a ser jugar inteligente: asegurar una buena 'media luna' de B/A en nuestra zona, cortar sus rutas cuando se pueda y no sobre-extenderse.",
          "En todos los casos: ver cuántas alianzas hay, quién tiene la zona central, qué rutas llevan a nuestras S/A y cuáles son los puntos donde se repiten las peleas. Allí es donde tiene sentido gastar asistencia y esfuerzo."
        ]
      },
      {
        id: "strategy",
        anchor: "estrategias-de-atlantis",
        title: "Estrategias de Atlantis (cómo pensamos la partida)",
        paragraphs: [
          "La clave no es solo quién pega más, sino cómo usamos el mapa. Pensamos Atlantis en tres bloques: nuestra zona segura, la frontera con otras alianzas y los puntos de puente que abren rutas.",
          "En términos simples:"
        ],
        bullets: [
          "Inicio de partida (early): consolidar casa. Capturar C y B cercanas, pasar a algunas A seguras y evitar meternos muy profundo en la zona enemiga. Aquí las cuentas en crecimiento y medias son muy útiles.",
          "Medio juego (mid): marcar frontera. Definimos qué S/A son intocables, qué C/B pueden sacrificarse y qué fortalezas son puentes que no podemos perder. Las cuentas fuertes suelen estar en estas zonas.",
          "Final (late): decidir si cerramos o resistimos. Si vamos ganando, queremos mantener S/A y puentes, no regalarlos por peleas innecesarias. Si vamos perdiendo, buscamos cortar rutas, elegir batallas y aprovechar errores rivales.",
          "En pushes coordinados: primero entran los fuertes para abrir, luego las cuentas medias para asegurar la fortaleza y finalmente las cuentas en crecimiento para consolidar y mantener la guarnición.",
          "Si el enemigo es muy fuerte: priorizar rutas y defensas clave. No tiene sentido vaciar toda la alianza en un solo punto si el resto del mapa se cae. A veces 'perder bien' también suma experiencia y Méritos decentes."
        ]
      },
      {
        id: "attack",
        anchor: "normas-de-ataque-en-atlantis",
        title: "Normas de ataque en Atlantis",
        paragraphs: [
          "Atlantis es donde más coordinación necesitamos. Es mejor hacer menos ataques bien coordinados que muchos ataques al azar. Estos son los criterios que usamos como alianza:"
        ],
        bullets: [
          "Respetar las marcas de los líderes (R4/R5) sobre qué objetivos atacar primero. Si hay marcas, son la prioridad.",
          "Antes de abrir un frente nuevo lejos de nuestra zona o atacar una fortaleza grande sin estar seguro, pregunta en el chat de alianza o en WhatsApp.",
          "Tus cargas de asistencia son limitadas: úsalas para pushes coordinados, defensa u ofensiva importante, no para duelos personales o ataques que no cambian el mapa.",
          "Si llevas buena racha de victorias, intenta usarla en batallas clave (S/A, puentes, Tesoros), no en peleas con muy poca probabilidad de ganar.",
          "Si ves que varios del clan ya van hacia el mismo objetivo, revisa el chat antes de gastar tu asistencia: quizá haya un plan para dividir fuerzas.",
          "Si te equivocas de objetivo o te adelantas, coméntalo y listo. Lo importante es aprender qué buscaba la alianza en ese momento y no repetir el error."
        ]
      },
      {
        id: "defense",
        anchor: "normas-de-defensa",
        title: "Normas de defensa",
        paragraphs: [
          "Defender bien es tan importante como atacar bien. Muchas partidas se pierden por descuidos en S/A, no por falta de daño. Algunas reglas prácticas:"
        ],
        bullets: [
          "Las fortalezas S y A de frontera no deberían quedar vacías. Si eres de los fuertes y te vas a mover de ahí, avisa por WhatsApp para que alguien tome tu lugar.",
          "Cuando veas varias fortalezas cercanas en disputa, esa zona se vuelve prioridad. Es mejor reforzar ahí que ir a buscar una C lejana sin impacto.",
          "El botón de reagrupar (regroup) es solo para líderes y se usa como emergencia: salvar S/A clave, defender Tesoro importante o responder a un push grande del enemigo.",
          "Las fortalezas con bonificación de alto rendimiento necesitan guarnición constante, porque dan más puntos y Méritos con el tiempo.",
          "Si tu cuenta es más débil, puedes aportar mucho manteniendo B/C defendidas, reforzando cuando se te pida y avisando rápido de ataques repetidos en una misma zona.",
          "En escenarios donde el enemigo es más fuerte, defender bien nuestra media luna de fortalezas y no exponerse de más vale más que intentar recuperar todo el mapa a la vez."
        ]
      },
      {
        id: "communication",
        anchor: "comunicacion-durante-atlantis",
        title: "Comunicación durante Atlantis",
        paragraphs: [
          "No usamos Discord; toda la coordinación es por el chat del juego y por WhatsApp. Que la comunicación sea clara ayuda más que cualquier buff.",
          "Durante Atlantis, intentamos usar mensajes cortos y claros, por ejemplo:"
        ],
        bullets: [
          "“Ataco A3 derecha en 1 min”.",
          "“Necesito apoyo en S central”.",
          "“Entran por puente B2, refuercen”.",
          "“No gasten más asistencia en X, muy perdido, cambiamos de objetivo”."
        ]
      },
      {
        id: "resources",
        anchor: "uso-de-recursos-buffs-gemas-boosts",
        title: "Uso de recursos (buffs, gemas, boosts)",
        paragraphs: [
          "Cada uno decide cuánto invierte en el juego, pero si coordinamos el uso de recursos, el esfuerzo rinde mucho más.",
          "Los buffs de alianza (cristales, boosts globales) se activan solo por acuerdo de los líderes, cuando haya varias personas conectadas y un plan claro de ataque o defensa.",
          "Evita gastar recursos premium (gemas, boosts, recargas) en situaciones que no cambian el resultado de la partida. Si no estás seguro, pregunta en el chat si vale la pena invertirlos.",
          "Si conoces buenas combinaciones de héroes, orígenes o artefactos útiles para Atlantis, puedes compartirlas en el chat o en la wiki/guía para ayudar al resto del clan.",
          "La idea no es que nadie se arruine en el juego, sino que, si alguien quiere invertir, lo haga en momentos donde el clan realmente aproveche esa inversión."
        ]
      },
      {
        id: "mistakes",
        anchor: "errores-y-como-los-manejamos",
        title: "Errores y cómo los manejamos",
        paragraphs: [
          "Todos nos equivocamos: el dedo se va, la conexión falla o simplemente no vimos la indicación a tiempo.",
          "Lo que define al clan no es que no haya errores, sino cómo reaccionamos cuando pasan."
        ],
        bullets: [
          "Si te equivocas, dilo sin miedo: “me adelanté”, “no vi el mensaje”, “ataqué donde no debía”. Eso ayuda a entender qué pasó y a no repetirlo.",
          "Evitamos humillar, ridiculizar o hacer bromas pesadas a alguien que se equivocó. No queremos que Atlantis se sienta como un trabajo tóxico.",
          "Si un problema se repite muchas veces, se puede hablar en privado con un líder para ver qué está pasando y si hace falta explicar mejor alguna parte de la guía."
        ]
      },
      {
        id: "evolution",
        anchor: "seguimiento-y-mejoras",
        title: "Seguimiento y mejoras",
        paragraphs: [
          "Esta guía no está escrita en piedra. Si algo no tiene sentido, se puede ajustar. Si una regla está muy rígida o muy suave, también se puede revisar.",
          "La idea es que este documento viva y mejore con la experiencia de la alianza, los comentarios del equipo y las temporadas que vienen.",
          "Si tienes sugerencias, puedes comentarlas en el chat o directamente a los líderes. Cada cierto tiempo se podrá revisar la guía según lo que hayamos vivido como clan.",
          "En futuras versiones de esta página queremos añadir un espacio de feedback y un pequeño registro de cambios (changelog) para que todos vean qué se ha actualizado."
        ]
      },
      {
        id: "closing",
        anchor: "cierre",
        title: "Cierre",
        paragraphs: [
          "En resumen: estamos aquí para pasarla bien, crecer como jugadores y como equipo.",
          "Mientras esta guía ayude a eso, seguirá evolucionando. Si algo no cuadra, lo conversamos.",
          "Gracias por estar en la alianza y por aportar tu tiempo y tu energía a Titan War. Night Wolves es más fuerte cuando jugamos como manada."
        ]
      }
    ]
  },

  en: {
    sections: [
      {
        id: "why",
        anchor: "why-we-have-this-guide",
        title: "Why do we have this guide?",
        paragraphs: [
          "Titan War is already intense by itself: wars, events, Atlantis... This guide is not here to make things harder, but to make sure we all know what to expect when we play as a team.",
          "The idea is that when you join the alliance you have a clear place to check: what we expect in Atlantis, how we talk in chat and how we make decisions together.",
          "We play to disconnect from real-life stress, not to add more. If any rule stops helping with that, we can review and improve it as a team."
        ]
      },
      {
        id: "principles",
        anchor: "alliance-principles",
        title: "Alliance principles",
        paragraphs: [
          "These are the basic agreements in Night Wolves. Everything else is built on top of this."
        ],
        bullets: [
          "Respect first: no insults, personal attacks or toxic mocking in chat.",
          "Everyone contributes: it is not only about who scores more points, but about the final result as a team.",
          "Real life first: if you cannot play a day or an Atlantis, it is okay; just let us know when you can.",
          "Always learning: if someone makes a mistake, we explain and improve; we do not try to humiliate."
        ]
      },
      {
        id: "roles",
        anchor: "roles-in-alliance",
        title: "Roles in the alliance (strong, mid and growing accounts)",
        paragraphs: [
          "We do not all have the same account level or playtime, and that is fine. The idea is to use each player’s strength where it helps the most, not to compare each other.",
          "In Atlantis we roughly think of players like this (not rigid labels, just a reference):"
        ],
        bullets: [
          "Strong accounts: they lead pushes, open paths, break hard defenses and hold key forts (S/A, bridges, Treasures). They often set the pace in chat.",
          "Mid accounts: they are the backbone. They help secure what strong players open, finish forts in dispute, support defenses and help close routes.",
          "Growing accounts: smaller does not mean useless. They can secure C/B in our area, reinforce defenses, complete routes and help when a big push is planned.",
          "Key idea: strong players do not play solo; they open and hold routes so mid and growing accounts can come in and score without dying for nothing."
        ]
      },
      {
        id: "mechanics",
        anchor: "atlantis-core-mechanics",
        title: "Atlantis – core mechanics",
        paragraphs: [
          "You do not need to memorize the full game manual, but understanding a few key ideas makes our decisions much easier.",
          "The Atlantis map can be seen as a set of zones connected by 'bridges' (forts that connect areas). Whoever controls the bridges controls where the enemy can move.",
          "Fortresses generate points per hour. In practice, the real map priority is usually: S > A > high-performance forts > bridge forts (open routes) > B > inner C forts.",
          "Moving teams into contested forts consumes assistance charges. Those charges are your fuel: if you spend them on hits that change nothing, they will be missing when the alliance really needs them.",
          "Win streaks give extra Merits, but if you lose while attacking, they reset to 0. Try to use your best streaks on key battles, not on almost-lost duels.",
          "Regroup can only be used by president and elders. It moves teams from base into allied forts, mainly to save S/A forts or reinforce Treasures. It is not meant to tidy the map just for aesthetics.",
          "Crystal buffs give temporary combat bonuses to the whole alliance. They work best when several members are online and we are pushing or defending something important.",
          "Treasure of Atlantis, advance missions and high-performance forts are special events. We do not need to fight all of them, but when we choose to go, we go seriously and with coordination."
        ]
      },
      {
        id: "map-types",
        anchor: "match-types-and-map-reading",
        title: "Match types and map reading",
        paragraphs: [
          "Not every Atlantis match is the same. Sometimes we get weaker enemies, sometimes similar, sometimes much stronger. Adapting strategy to that is key.",
          "We can loosely think about scenarios like this:"
        ],
        bullets: [
          "Weaker alliances: it is tempting to take the whole map, but the most efficient approach is to secure our area first (nearby C/B/A), control bridges and not give away defenses. Then we can pressure their side.",
          "Similar strength: now the map becomes chess. Bridges, S/A forts and clusters of contested forts are crucial. Things that do not change score or position matter less.",
          "Much stronger enemies: the goal is no longer a perfect win but smart play: secure a good ‘crescent’ of B/A in our zone, cut routes when possible and avoid overextending.",
          "In all cases: look at how many alliances are present, who holds the center, which routes lead to our S/A and where fights repeat. Those are the places worth spending assistance and effort."
        ]
      },
      {
        id: "strategy",
        anchor: "atlantis-strategy",
        title: "Atlantis strategy (how we think about the match)",
        paragraphs: [
          "The key is not only who hits harder, but how we use the map. We split Atlantis into three parts: our safe area, the frontier with other alliances and the bridge forts that open routes.",
          "In simple terms:"
        ],
        bullets: [
          "Early game: build home. Capture nearby C and B forts, then some safe A forts, and avoid going too deep into enemy territory. Growing and mid accounts shine here.",
          "Mid game: mark the frontier. Decide which S/A are untouchable, which B/C can be traded and which forts are bridges we cannot lose. Strong accounts usually hold these spots.",
          "Late game: decide if we close or resist. If we are winning, we want to keep S/A and bridges, not give them away for random fights. If we are losing, we try to cut routes, pick our battles and exploit mistakes.",
          "On coordinated pushes: strong accounts hit first to break defenses, then mid accounts secure the fort, and growing accounts come after to consolidate and hold.",
          "Against much stronger enemies: focus on key routes and defenses, not on the whole map. Sometimes ‘losing well’ still brings decent Merits and, more importantly, experience for the clan."
        ]
      },
      {
        id: "attack",
        anchor: "attack-rules",
        title: "Attack rules in Atlantis",
        paragraphs: [
          "Atlantis is where we need the most coordination. Fewer, well-coordinated attacks are better than many random ones. These are the criteria we use as an alliance:"
        ],
        bullets: [
          "If leaders (R4/R5) mark or call a target, that priority comes first.",
          "Before opening a new front far from our zone or hitting a big fort by yourself, ask in alliance chat or WhatsApp.",
          "Your assistance charges are limited. Use them on coordinated pushes and important attack/defense, not on personal duels or hits that do not change the map.",
          "If you have a good win streak, try to use it on key fights (S/A, bridges, Treasures), not on very low-chance gambles.",
          "If you see several clan members going for the same target, check chat before spending assistance: there might be a plan to split forces.",
          "If you hit the wrong target or move too early, just say it and we move on. The important part is understanding what the alliance was trying to do and not repeating the mistake."
        ]
      },
      {
        id: "defense",
        anchor: "defense-rules",
        title: "Defense rules",
        paragraphs: [
          "Good defense is as important as good attack. Many games are lost because S/A forts are left exposed, not because of low damage. Some practical rules:"
        ],
        bullets: [
          "Frontline S and A forts should not be left empty. If you are a strong account and you leave a key defense, please warn in WhatsApp so someone can cover.",
          "When you see several nearby forts in dispute, that zone becomes priority. It is better to reinforce there than to chase a distant C fort.",
          "Regroup (only for leaders) is an emergency button: save key S/A forts, defend an important Treasure or react to a large enemy push.",
          "High-performance forts should remain garrisoned, as they give more points and steady Merits over time.",
          "If your account is weaker, you can help a lot by holding B/C forts, reinforcing when asked and reporting repeated attacks quickly.",
          "When the enemy is stronger, holding a solid ‘crescent’ of forts and not overextending often matters more than trying to retake the whole map."
        ]
      },
      {
        id: "communication",
        anchor: "communication",
        title: "Communication during Atlantis",
        paragraphs: [
          "We do not use Discord; all coordination happens through in-game chat and WhatsApp. Clear communication helps more than any buff.",
          "During Atlantis, short, clear messages work best, for example:"
        ],
        bullets: [
          "“Attacking A3 right in 1 min”.",
          "“Need support on S mid”.",
          "“They are pushing through bridge B2, reinforce”.",
          "“Stop spending assistance on X, too lost, switching target now”."
        ]
      },
      {
        id: "resources",
        anchor: "resources-usage",
        title: "Use of resources (buffs, gems, boosts)",
        paragraphs: [
          "Everyone decides how much they invest in the game, but coordinating resource usage makes that investment much more valuable.",
          "Alliance buffs (crystals, global boosts) are only activated by agreement with leaders, when several members are online and there is a clear plan (push, big defense, Treasure, etc.).",
          "Avoid spending premium resources (gems, boosts, refills) in situations that do not change the outcome. If you are unsure, ask in chat if it makes sense to invest there.",
          "If you know strong combinations of heroes, origins or artifacts useful in Atlantis, share them in chat or the wiki/guide to help the rest of the alliance.",
          "The goal is not for anyone to burn money on the game, but if someone wants to invest, we try to make sure it happens where the clan actually benefits from it."
        ]
      },
      {
        id: "mistakes",
        anchor: "mistakes",
        title: "Mistakes and how we handle them",
        paragraphs: [
          "We all make mistakes: finger slips, lag, distractions or misunderstood calls.",
          "What defines the clan is not the absence of mistakes, but how we react when they happen."
        ],
        bullets: [
          "If you mess up, say it without fear: “I went early”, “I did not see the call”, “I hit the wrong fort”. That helps us understand and avoid repeating it.",
          "We avoid shaming, ridiculing or heavy joking around someone who failed. We do not want Atlantis to feel like a toxic workplace.",
          "If something keeps happening often, leaders can talk in private to understand the situation and see if we need to explain any part of the guide better."
        ]
      },
      {
        id: "evolution",
        anchor: "evolution",
        title: "Follow-up and improvements",
        paragraphs: [
          "This guide is not set in stone. If something does not make sense, we can adjust it. If a rule is too strict or too soft, we can review it.",
          "The idea is that this document grows with alliance experience, player feedback and upcoming seasons.",
          "If you have suggestions, share them in chat or directly with leaders. From time to time, we can review the guide based on what we lived as a clan.",
          "In future versions of this page we want to add a feedback section and a small changelog so everyone can see what has been updated."
        ]
      },
      {
        id: "closing",
        anchor: "closing",
        title: "Closing",
        paragraphs: [
          "In short: we are here to have fun, improve as players and as a team.",
          "As long as this guide helps with that, it will keep evolving. If something does not fit anymore, we talk and adjust.",
          "Thanks for being part of the alliance and putting your time and energy into Titan War. Night Wolves is stronger when we act like a pack."
        ]
      }
    ]
  },

  ru: {
    sections: [
      {
        id: "ru-coming-soon",
        anchor: "ru-coming-soon",
        title: "Русская версия (скоро)",
        paragraphs: [
          "Привет, волки! 😊 Русская версия гайда для Atlantis ещё в разработке.",
          "Пока что, пожалуйста, используйте английскую или испанскую версию. В будущем мы добавим полный перевод на русский, чтобы всем было удобнее.",
          "Если хочешь помочь с переводом или исправлениями на русском, можешь написать лидерам альянса в чате или в WhatsApp."
        ]
      }
    ]
  }
};
