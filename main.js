let cards = document.querySelectorAll(".gameCardSelection")
let viewCardContainer = document.querySelector(".viewCard")
let nameViewSelected = document.querySelector(".nameViewSelected")
let imgCard = document.querySelector(".imgCard")
let backButton = document.querySelector(".backButton")
let card = document.querySelector(".card")
let buttonViewCar = document.querySelector(".buttonViewCar")
let cardFront = document.querySelector(".cardFront")
let cardBack = document.querySelector(".cardBack")
let nameCardSelected = document.querySelector(".nameCardSelected")
let buttonViewCardContainer = document.querySelector(".buttonViewCardContainer")
let cardText = document.querySelector(".cardText")
let buttonRandomCategory = document.querySelector(".buttonRandomCategory")
let menuGameContainer = document.querySelector(".menuGameContainer")


let cardSelected;
const categ = [
  'perspectiva',
  'profundidad',
  'picantes',
  'random'
];

cards.forEach(card => {
    card.addEventListener("click",()=>{
        cardSelected = card.dataset.category
        SelectedCard(cardSelected)
    })
});
buttonRandomCategory.addEventListener("click", ()=>{
    let randomCat = elegirAleatorio(categ)
    SelectedCard(randomCat)
})

const questions = {
    perspectiva: [
      "¿Qué importancia le das a la comunicación en las relaciones íntimas?",
      "¿Crees que la química sexual puede desarrollarse con el tiempo o es esencial desde el primer encuentro?",
      "¿Enamoramos del vínculo entre personas o de las personas en sí?",
      "¿Consideras que una vida sin actividad sexual es una vida insatisfactoria?",
      "¿Qué opinas sobre la idea de que tener sexo con empatía es exclusivo de las relaciones de pareja?",
      "¿Qué papel crees que juegan las fantasías en una relación sexual saludable?",
      "¿Cómo crees que influyen las expectativas sociales en nuestras actitudes hacia el sexo?",
      "¿Consideras que la monogamia es la única forma válida de relación?",
      "¿Qué opinas sobre la exploración y experimentación en la intimidad?",
      "¿Crees que la compatibilidad sexual es un factor fundamental en una relación?",
      "¿Cómo crees que la tecnología ha impactado nuestras relaciones sexuales y emocionales?",
      "¿Qué piensas acerca de la relación entre la confianza y la sexualidad?",
      "¿Cuál es tu perspectiva sobre la conexión emocional durante el sexo?",
      "¿Consideras que el amor y el deseo sexual son dos cosas separadas?",
      "¿Qué crees que define una buena comunicación sexual?",
      "¿Cómo influye la educación sexual que recibimos en nuestras actitudes y comportamientos?",
      "¿Qué opinas sobre la importancia del consentimiento en las relaciones sexuales?",
      "¿Crees que el género y la identidad sexual influyen en nuestras preferencias y experiencias?",
      "¿Qué piensas sobre el equilibrio entre el placer propio y el de la pareja en el sexo?",
      "¿Consideras que la intimidad emocional es más difícil de lograr que la intimidad física?",
      "¿Qué importancia le das a la comunicación sexual fuera del dormitorio?",
      "¿Crees que la vergüenza o la culpa pueden influir en nuestra experiencia sexual?",
      "¿Qué opinas sobre la idea de mantener la chispa sexual a lo largo del tiempo?",
      "¿Cómo influyen los valores culturales y religiosos en nuestras actitudes sexuales?",
      "¿Crees que el deseo sexual puede cambiar con la edad?",
      "¿Qué piensas sobre la importancia de la autoexploración sexual y el autoconocimiento?",
      "¿Consideras que el sexo es una forma de expresión emocional?",
      "¿Qué rol crees que juegan las fantasías en la vida sexual de una persona?",
      "¿Cómo afecta el estrés y las preocupaciones cotidianas a nuestra vida sexual?",
      "¿Crees que las expectativas sobre el cuerpo perfecto influyen en nuestras experiencias sexuales?",
      "¿Qué opinas sobre la idea de separar el sexo del amor en ciertos contextos?",
      "¿Consideras que la confianza en uno mismo es clave para una vida sexual satisfactoria?",
      "¿Cómo crees que influyen las redes sociales en nuestras percepciones de la sexualidad?",
      "¿Qué piensas sobre la comunicación sobre las preferencias y deseos sexuales en una relación?",
      "¿Crees que las diferencias culturales pueden influir en la manera en que vivimos la sexualidad?",
      "¿Qué importancia le das a la comunicación sobre la salud sexual y el uso de métodos de protección?",
      "¿Consideras que la aceptación y la autoestima influyen en la satisfacción sexual?",
      "¿Cómo crees que evolucionan las expectativas sexuales a lo largo de una relación?",
      "¿Qué opinas sobre la importancia de la honestidad en las conversaciones sobre el sexo?",
      "¿Crees que las fantasías sexuales pueden enriquecer una relación?",
      "¿Cómo afectan las experiencias pasadas nuestras actitudes y deseos sexuales?",
      "¿Qué piensas sobre la comunicación abierta en situaciones de disfunción sexual?",
      "¿Consideras que la comunicación sobre los límites y las preferencias sexuales es esencial?",
      "¿Crees que el consentimiento verbal es necesario en cada encuentro sexual?",
      "¿Qué opinas sobre la importancia de la educación sexual en la juventud?",
      "¿Cómo influyen los estereotipos de género en nuestras expectativas sexuales?",
      "¿Consideras que la sexualidad puede ser una forma de empoderamiento?",
      "¿Qué piensas sobre la influencia de la pornografía en nuestras percepciones del sexo?",
      "¿Crees que la comunicación sobre las fantasías sexuales puede fortalecer una relación?",
      "¿Cómo crees que las actitudes hacia el sexo han cambiado en la sociedad moderna?",
      "¿Cuál es tu visión ideal para el futuro?",
      "¿Qué crees que es lo más importante en la vida?",
      "Si pudieras hablar con tu yo del pasado, ¿qué consejo te darías?",
      "¿Cuál es el momento más importante que has experimentado hasta ahora?",
      "Si la vida fuese un libro, ¿cuál sería su título y por qué?",
      "Si fueras una obra de arte, ¿cómo te describirías?",
      "¿Qué crees que es más valioso: tiempo o dinero?",
      "Si tuvieras que escribir una carta a la humanidad, ¿qué les dirías?",
      "¿Qué es lo más hermoso que has encontrado en un lugar inesperado?",
      "Si pudieras ser una criatura mitológica, ¿cuál serías y por qué?",
      "¿Qué cambiarías en el mundo si tuvieras el poder para hacerlo?",
      "¿Cuál es el desafío más grande que has superado y cómo te cambió?",
      "Si pudieras vivir en una época histórica, ¿cuál elegirías y por qué?",
      "¿Cuál es tu definición personal de éxito y felicidad?",
      "Si pudieras tener una conversación con cualquier personaje histórico, ¿quién sería y qué le preguntarías?",
      "¿Qué lecciones has aprendido de tus mayores errores?",
      "Si pudieras aprender instantáneamente una habilidad, ¿cuál sería y por qué?",
      "¿Cuál es el lugar en el mundo donde te sientes más conectado/a contigo mismo/a?",
      "Si fueras un color, ¿cuál serías y cómo representaría tu personalidad?",
      "¿Qué te gustaría que las futuras generaciones recuerden de ti?",
      "Si pudieras tener una conversación con tu yo del futuro, ¿qué te gustaría preguntarle?",
      "¿Cuál es tu mayor temor y cómo lo enfrentas?",
      "Si pudieras visitar cualquier lugar en el universo, ¿a dónde irías y por qué?",
      "¿Qué opinas que es más importante: la verdad o la felicidad?",
      "Si pudieras experimentar un día en la vida de otra persona, ¿quién sería y por qué?",
      "¿Qué te hace sentir más vivo/a y enérgico/a?",
      "Si pudieras tener una habilidad sobrenatural, ¿cuál sería y cómo la usarías?",
      "¿Cuál es la canción que mejor representa tu estado emocional actual?",
      "Si pudieras revivir un solo día de tu vida, ¿cuál elegirías y por qué?",
      "¿Qué te inspira a superar los desafíos en tu vida?",
      "Si pudieras experimentar una cultura completamente diferente, ¿cuál elegirías y por qué?",
      "¿Qué libro o película ha tenido el mayor impacto en tu forma de pensar?",
      "Si pudieras tener una conversación con un animal, ¿cuál sería y qué le preguntarías?",
      "¿Qué te gustaría que la gente entendiera mejor sobre ti?",
      "Si pudieras cambiar una decisión que tomaste en el pasado, ¿cuál sería?",
      "¿Qué es lo que más valoras en tus amistades cercanas?",
      "Si pudieras explorar un lugar desconocido en la Tierra, ¿a dónde irías y qué descubrirías?",
      "¿Cuál es el mejor consejo que alguien te ha dado y cómo lo has aplicado?",
      "Si pudieras experimentar la vida en otro país, ¿cuál sería y qué te gustaría aprender?",
      "¿Qué te motiva a levantarte cada mañana y enfrentar el día?",
      "Si pudieras tener una conversación con una versión futura de ti mismo/a, ¿qué te gustaría saber?",
      "¿Qué aspecto de la naturaleza te conecta más con el mundo que te rodea?",
      "Si pudieras resolver un problema mundial, ¿cuál elegirías y cómo lo abordarías?",
      "¿Qué te hace sentir agradecido/a en tu vida en este momento?",
      "Si pudieras cambiar una creencia o opinión que tienes, ¿cuál sería y por qué?",
      "¿Qué te gustaría lograr en los próximos 5 años y cómo planeas hacerlo?",
      "Si pudieras viajar en el tiempo para presenciar un momento histórico, ¿cuál sería y por qué?",
      "¿Qué te hace sentir más conectado/a con la humanidad en general?",
      "Si pudieras experimentar un día en la vida de alguien que admiras, ¿quién sería y por qué?",
      "¿Qué te gustaría explorar o descubrir en el vasto universo?",
      "Si pudieras cambiar una cosa en la sociedad actual, ¿cuál sería y cómo lo lograrías?",
      "¿Qué mensaje o consejo te gustaría transmitir a las generaciones futuras?"
    ],
    profundidad: [
      "¿Cómo definirías la intimidad en una relación?",
      "¿Cuál es tu experiencia más significativa de conexión emocional con otra persona?",
      "¿Qué papel juegan la confianza y la vulnerabilidad en la intimidad?",
      "¿Cuál es el mayor obstáculo que enfrentas al abrirte emocionalmente a alguien?",
      "¿Cómo te sientes al compartir tus miedos e inseguridades con tu pareja?",
      "¿Cuál es el recuerdo más conmovedor que tienes de un momento íntimo?",
      "¿Qué piensas sobre la importancia de mantener la individualidad en una relación íntima?",
      "¿Cómo afecta el pasado emocional a tus relaciones actuales?",
      "¿Qué consideras que es esencial para construir una conexión profunda?",
      "¿Cuál es el mayor desafío que has enfrentado al comunicarte abiertamente en una relación?",
      "¿Cómo encuentras el equilibrio entre mantener secretos y ser completamente transparente?",
      "¿Cuál es el valor más profundo que buscas en una conexión íntima?",
      "¿Qué opinas sobre la idea de que la verdadera intimidad lleva tiempo en desarrollarse?",
      "¿Cómo manejas las diferencias en las necesidades de espacio y cercanía emocional?",
      "¿Qué te impulsa a revelar tus pensamientos más íntimos a tu pareja?",
      "¿Cuál ha sido tu experiencia más poderosa de superar obstáculos en una relación?",
      "¿Qué piensas sobre la idea de que la intimidad se relaciona con la aceptación incondicional?",
      "¿Cómo crees que la comunicación emocional afecta la calidad de una relación?",
      "¿Qué importancia le das a las conversaciones sobre el futuro en una relación íntima?",
      "¿Cuál es el mayor temor que tienes en cuanto a la intimidad?",
      "¿Cómo influyen las heridas emocionales pasadas en tus relaciones actuales?",
      "¿Qué papel juega el perdón en la construcción de la intimidad?",
      "¿Cómo crees que se puede mantener viva la chispa de la intimidad a lo largo del tiempo?",
      "¿Qué opinas sobre la idea de que la intimidad puede ser compartida con amigos cercanos además de parejas?",
      "¿Cómo te sientes al expresar tus deseos más profundos a tu pareja?",
      "¿Cuál es el mayor regalo que puedes dar a alguien en términos de intimidad?",
      "¿Cómo influyen las expectativas sobre la relación en la construcción de la intimidad?",
      "¿Qué piensas sobre la idea de que la intimidad implica aceptar tanto las fortalezas como las debilidades?",
      "¿Cuál ha sido la experiencia más valiosa que has tenido al permitirte ser vulnerable?",
      "¿Cómo crees que las experiencias compartidas fortalecen la intimidad en una relación?",
      "¿Qué importancia le das a la conexión espiritual en una relación íntima?",
      "¿Cómo enfrentas los desafíos de la distancia emocional en una relación?",
      "¿Qué papel juega la empatía en la construcción de la intimidad?",
      "¿Cuál ha sido tu mayor logro en términos de conectarte profundamente con alguien?",
      "¿Cómo crees que las barreras culturales pueden afectar la intimidad en una relación?",
      "¿Qué opinas sobre la idea de que la intimidad implica comprender los miedos y las esperanzas del otro?",
      "¿Cómo encuentras el equilibrio entre compartir y proteger tu privacidad emocional?",
      "¿Cuál ha sido tu experiencia más reveladora al permitirte ser vulnerable?",
      "¿Qué piensas sobre la importancia de nutrir la conexión emocional en una relación íntima?",
      "¿Cómo enfrentas las diferencias en la forma en que muestras cariño y afecto?",
      "¿Qué papel juegan las experiencias compartidas en la construcción de la intimidad?",
      "¿Cuál es tu perspectiva sobre cómo la intimidad puede cambiar y evolucionar con el tiempo?",
      "¿Cómo influyen las expectativas familiares en tu capacidad para conectarte profundamente?",
      "¿Qué opinas sobre la idea de que la intimidad se trata de conocer a alguien en su totalidad?",
      "¿Cómo enfrentas los momentos de desconexión emocional en una relación íntima?",
      "¿Qué papel desempeñan los desafíos compartidos en la construcción de una conexión profunda?",
      "¿Cuál es tu enfoque para superar las barreras emocionales en una relación?",
      "¿Cómo crees que la intimidad se relaciona con la autenticidad en una relación íntima?",
      "¿Qué opinas sobre la importancia de la gratitud en la construcción de la intimidad?",
      "¿Cómo enfrentas los momentos de vulnerabilidad en una relación íntima?",
      "¿Cuál ha sido el momento más significativo de tu vida?",
      "¿Qué experiencias te han cambiado como persona?",
      "¿Cuál es la lección más valiosa que has aprendido de tus fracasos?",
      "Si pudieras cambiar una decisión importante en tu vida, ¿cuál sería y por qué?",
      "¿Qué valores son fundamentales para ti y cómo influyen en tus decisiones?",
      "Si tuvieras que describirte en tres palabras, ¿cuáles usarías y por qué?",
      "¿Cuál es tu mayor miedo y cómo has tratado de superarlo?",
      "¿Qué crees que es la clave para una relación exitosa?",
      "Si pudieras conocer la respuesta a una pregunta sobre tu futuro, ¿cuál preguntarías?",
      "¿Cómo te enfrentas a los momentos de incertidumbre en tu vida?",
      "Si tu vida fuera una película, ¿cuál sería su mensaje central?",
      "¿Cuál es el desafío interno más grande que has superado y cómo lo lograste?",
      "¿Qué te ha enseñado el dolor y cómo ha impactado en tu crecimiento?",
      "Si pudieras cambiar una cosa sobre ti mismo/a, ¿qué sería y por qué?",
      "¿Cómo defines la autenticidad y cómo la vives en tu vida cotidiana?",
      "¿Qué opinas sobre el propósito de la existencia humana?",
      "Si tuvieras la oportunidad de influir en el mundo, ¿qué legado te gustaría dejar?",
      "¿Cuál es la relación más influyente que has tenido y cómo te ha afectado?",
      "¿Qué rol juega la empatía en tus relaciones personales?",
      "Si pudieras tener una conversación honesta contigo mismo/a, ¿qué te dirías?",
      "¿Cuál es la lección más importante que has aprendido de alguien menor que tú?",
      "¿Cómo manejas las contradicciones internas y las luchas emocionales?",
      "Si pudieras hablar con alguien que ya no está contigo, ¿qué les dirías?",
      "¿Cuál es tu filosofía personal sobre cómo vivir una vida plena?",
      "¿Qué te gustaría que las personas comprendieran mejor sobre tu mundo interior?",
      "Si tuvieras la oportunidad de cambiar una creencia global, ¿cuál sería y por qué?",
      "¿Qué te inspira a superar los obstáculos y perseverar en momentos difíciles?",
      "Si pudieras dar un consejo a tu yo más joven, ¿qué le dirías?",
      "¿Cómo encuentras el equilibrio entre la gratitud por el presente y la aspiración al futuro?",
      "¿Qué es lo que más te ha sorprendido en tu viaje de autodescubrimiento?",
      "Si tuvieras que definir el amor en una sola frase, ¿cómo lo describirías?",
      "¿Qué te motiva a seguir aprendiendo y creciendo a lo largo de tu vida?",
      "Si pudieras resolver un problema global, ¿cuál elegirías y cómo lo abordarías?",
      "¿Cuál es la mayor lección que has aprendido de una pérdida o separación?",
      "¿Cómo te conectas con tu intuición y confías en tus decisiones?",
      "Si pudieras enseñar una sola lección a la humanidad, ¿cuál sería?",
      "¿Cómo encuentras significado y propósito en los momentos difíciles?",
      "¿Qué papel juega la autenticidad en tus relaciones personales?",
      "Si pudieras experimentar la vida desde la perspectiva de otra persona, ¿quién sería?",
      "¿Cómo te enfrentas a tus propios prejuicios y sesgos?",
      "Si pudieras cambiar una política mundial, ¿cuál sería y cómo afectaría al mundo?",
      "¿Cómo defines la felicidad y qué haces para cultivarla en tu vida?",
      "Si tuvieras que describir tu evolución personal en una palabra, ¿cuál sería?",
      "¿Qué te gustaría explorar más profundamente en tu búsqueda de entendimiento?",
      "Si pudieras hacer una pregunta al universo y obtener una respuesta, ¿qué preguntarías?",
      "¿Cuál es la mayor lección que has aprendido al enfrentarte a tus miedos?",
      "¿Cómo influye tu pasado en tus elecciones y acciones actuales?",
      "Si pudieras resumir tu filosofía de vida en una frase, ¿cuál sería?",
      "¿Cómo te conectas con tu espiritualidad o sentido de trascendencia?",
      "Si pudieras hablar con alguien famoso, ¿qué conversación te gustaría tener?",
      "¿Cómo te imaginas tu vida en un estado de plenitud absoluta?",
      "Si tuvieras que compartir una sabiduría con las generaciones futuras, ¿cuál sería?"
    ],
    picantes: [
      "Si tuvieras que crear una película erótica con tu vida, ¿cuál sería el argumento?",
      "¿Qué opinas sobre la idea de tener una noche de juegos de roles con tu pareja?",
      "Si pudieras experimentar una fantasía sensual en un lugar público, ¿dónde sería?",
      "¿Has probado alguna vez una experiencia sensual bajo la luz de la luna?",
      "Si tuvieras la oportunidad de explorar una fantasía prohibida, ¿cuál sería?",
      "¿Qué importancia le das al poder de la seducción en las relaciones?",
      "Si pudieras vivir una aventura ardiente en una época histórica, ¿cuál elegirías?",
      "¿Has experimentado con la idea de compartir tus pensamientos eróticos con tu pareja?",
      "Si pudieras crear tu propia guía de seducción, ¿qué consejos incluirías?",
      "¿Qué piensas sobre la posibilidad de tener una noche apasionada en un lugar exótico?",
      "Si pudieras tener una experiencia sensual en un escenario inusual, ¿cuál sería?",
      "¿Has explorado la idea de un fin de semana de pasión en un retiro romántico?",
      "Si pudieras protagonizar una escena ardiente de una película famosa, ¿cuál sería?",
      "¿Qué opinas sobre la posibilidad de sorprender a tu pareja con una fantasía secreta?",
      "Si pudieras revivir una experiencia erótica del pasado, ¿cuál elegirías?",
      "¿Has probado alguna vez la idea de una noche de pasión con elementos de misterio?",
      "Si pudieras explorar tus deseos más salvajes en un lugar remoto, ¿dónde sería?",
      "¿Qué importancia le das a la sensualidad en la construcción de una conexión emocional?",
      "Si pudieras protagonizar una sesión de fotos sensual, ¿en qué entorno sería?",
      "¿Has considerado la posibilidad de un encuentro erótico al estilo de una cita a ciegas?",
      "¿Cuál es tu fantasía más atrevida?",
      "Si pudieras tener una noche de pasión con una celebridad, ¿quién sería?",
      "¿Qué lugar inusual te gustaría probar para tener relaciones?",
      "¿Cuál es la situación más emocionante en la que has tenido relaciones?",
      "¿Tienes algún fetiche que te gustaría explorar?",
      "Si pudieras probar cualquier juguete sexual, ¿cuál elegirías?",
      "¿Qué opinas sobre el sexting y su papel en las relaciones modernas?",
      "¿Has tenido alguna experiencia en un lugar público o arriesgado?",
      "¿Qué te parece la idea de tener una noche temática con juegos sexuales?",
      "¿Cómo te sientes acerca de los juguetes y accesorios en la intimidad?",
      "¿Alguna vez has tenido un sueño erótico que te haya dejado impactado?",
      "Si pudieras cambiar de género por un día, ¿cómo explorarías tu sexualidad?",
      "¿Qué opinas sobre la posibilidad de tener encuentros casuales sin compromiso?",
      "¿Has experimentado con la seducción o el coqueteo en lugares inesperados?",
      "Si pudieras diseñar tu escenario perfecto para una noche apasionada, ¿cómo sería?",
      "¿Qué piensas sobre la idea de introducir alimentos en la intimidad?",
      "¿Cuál es tu opinión sobre el intercambio de roles en la pareja?",
      "Si pudieras recrear una escena de una película o libro en la vida real, ¿cuál sería?",
      "¿Qué crees que es lo más importante para mantener una chispa en la relación?",
      "¿Has probado alguna vez una experiencia de realidad virtual con contenido erótico?",
      "Si pudieras cambiar un aspecto de tu vida sexual, ¿qué elegirías?",
      "¿Qué opinas sobre el uso de disfraces en la intimidad?",
      "¿Alguna vez has considerado la posibilidad de tener relaciones en público?",
      "Si pudieras experimentar una noche de pasión en una época histórica, ¿cuál sería?",
      "¿Qué crees que es esencial para comunicar tus deseos y límites en la intimidad?",
      "¿Has explorado el mundo de los juegos de rol en la intimidad?",
      "Si pudieras cambiar un aspecto de las expectativas sexuales en la sociedad, ¿cuál sería?",
      "¿Qué opinas sobre la incorporación de juegos de mesa o cartas eróticas en la relación?",
      "¿Has explorado el concepto de 'amigos con beneficios' o relaciones sin compromiso?",
      "Si pudieras diseñar tu habitación de fantasía para una noche apasionada, ¿cómo sería?",
      "¿Qué importancia le das a la exploración de nuevas posiciones sexuales?",
      "¿Has tenido alguna experiencia en la que el factor sorpresa haya avivado la pasión?",
      "Si pudieras viajar en el tiempo y tener una noche íntima con alguien, ¿quién sería?",
      "¿Qué piensas sobre la posibilidad de combinar aventuras al aire libre con la intimidad?",
      "¿Has experimentado con la idea de un encuentro espontáneo en lugares públicos?",
      "Si pudieras cambiar un aspecto de las normas sexuales en la sociedad, ¿cuál sería?",
      "¿Qué opinas sobre la incorporación de elementos de BDSM en la intimidad?",
      "¿Has probado alguna vez una experiencia sensual en un lugar inusual?",
      "Si pudieras explorar cualquier lugar del mundo de manera íntima, ¿dónde sería?",
      "¿Qué importancia le das a la comunicación abierta sobre deseos sexuales?",
      "¿Has tenido alguna experiencia que te haya sorprendido por su intensidad?",
      "Si pudieras compartir una experiencia sensual con tu pareja ideal, ¿cómo sería?",
      "¿Qué te parece la idea de una escapada romántica con un toque picante?",
      "Si pudieras disfrutar de una noche apasionada en un destino exótico, ¿dónde sería?",
      "¿Has experimentado con la creación de un ambiente sensual a través de aromas?",
      "Si pudieras tener una cita temática con un enfoque sensual, ¿cómo sería?",
      "¿Qué opinas sobre el uso de la lencería y disfraces en la relación?",
      "Si pudieras revivir una experiencia pasional del pasado, ¿cuál sería?",
      "¿Has explorado la posibilidad de introducir elementos de juego en la intimidad?",
      "Si pudieras tener una noche apasionada en un lugar histórico, ¿dónde sería?"
    ],
    random: [
      "¿Cómo fue la primera vez que viste contenido para adultos? ¿En qué contexto fue?",
      "¿Alguna vez has tenido una conexión inesperada con una persona que acabas de conocer?",
      "Si pudieras tener una cita con alguien famoso, ¿quién sería y qué harían?",
      "¿Qué harías si te encontraras en una isla desierta con solo una persona por un mes?",
      "¿Tienes algún secreto extravagante o divertido que estés dispuesto a compartir?",
      "¿Cuál es la cosa más extraña que has hecho por amor?",
      "Si pudieras intercambiar de vida con alguien por un día, ¿quién sería y qué harías?",
      "¿Alguna vez has tenido un encuentro inesperado que cambió tu día por completo?",
      "Si fueras un superhéroe, ¿cuál sería tu súper poder y cómo lo usarías?",
      "¿Tienes una historia divertida o embarazosa que nunca olvidarás?",
      "Si pudieras vivir en cualquier época histórica, ¿cuál elegirías y por qué?",
      "¿Alguna vez has experimentado un flechazo a primera vista? Cuéntanos.",
      "Si pudieras crear una nueva tradición, ¿cuál sería y cómo la celebrarías?",
      "¿Tienes alguna habilidad o talento oculto que pocos conocen?",
      "Si pudieras tener una conversación con cualquier personaje histórico, ¿quién sería?",
      "¿Has tenido alguna experiencia que te haya hecho creer en el destino?",
      "Si pudieras viajar a cualquier lugar del mundo en este momento, ¿dónde irías?",
      "¿Tienes alguna meta o sueño que nunca has compartido con nadie?",
      "Si fueras el protagonista de una película, ¿cuál sería el género y el argumento?",
      "¿Alguna vez has tenido una intuición fuerte que resultó ser cierta?",
      "Si pudieras cambiar una decisión en tu pasado, ¿cuál sería y por qué?",
      "¿Tienes una historia de amistad que te haga sonreír cada vez que la recuerdas?",
      "Si fueras un animal, ¿cuál sería y cómo pasarías un día típico?",
      "¿Alguna vez has tomado una decisión impulsiva que cambió tu vida?",
      "Si pudieras presenciar un evento histórico, ¿cuál sería y por qué?",
      "¿Tienes alguna tradición familiar única o especial que te gustaría compartir?",
      "Si pudieras vivir en cualquier universo ficticio, ¿cuál sería tu elección?",
      "¿Alguna vez has tenido una conversación profunda con un extraño que nunca olvidarás?",
      "Si pudieras aprender instantáneamente cualquier habilidad, ¿cuál sería y cómo la usarías?",
      "¿Tienes alguna historia de viaje emocionante o inusual que te gustaría contar?",
      "Si fueras un personaje de libro o película, ¿cuál sería tu papel en la historia?",
      "¿Alguna vez has tenido un sueño extraño que te hizo reflexionar?",
      "Si pudieras tener una cena con cualquier personaje histórico, ¿qué preguntas les harías?",
      "¿Tienes algún hábito o manía interesante que quieras compartir?",
      "Si pudieras ser parte de cualquier evento deportivo o artístico, ¿cuál sería?",
      "¿Alguna vez has tenido un encuentro con un animal salvaje o exótico?",
      "Si pudieras inventar un nuevo juego, ¿cuál sería la premisa y las reglas?",
      "¿Tienes alguna historia de coincidencia asombrosa que te haya dejado sin palabras?",
      "Si pudieras ser testigo de un descubrimiento científico, ¿cuál elegirías?",
      "¿Alguna vez has tenido un momento en el que te sentiste completamente fuera de tu zona de confort?",
      "Si pudieras viajar en el tiempo y darle un consejo a tu yo más joven, ¿qué le dirías?",
      "¿Tienes alguna experiencia de aprendizaje inusual o inspiradora que quieras compartir?",
      "Si pudieras pasar un día con un personaje de ficción, ¿quién sería y qué harían?",
      "¿Alguna vez has tenido una experiencia mágica que no puedes explicar?",
      "Si pudieras explorar un lugar misterioso o legendario, ¿dónde irías?",
      "¿Tienes una historia de amistad que demuestre la importancia de la confianza?",
      "Si pudieras asistir a un evento histórico, ¿qué momento te gustaría presenciar?",
      "¿Alguna vez has experimentado una conexión instantánea con alguien que acabas de conocer?",
      "Si pudieras crear una nueva festividad, ¿cuál sería su propósito y cómo se celebraría?",
      "¿Tienes alguna historia que demuestre la importancia de seguir tus instintos?"
    ],
  };




function elegirAleatorio(arreglo) {
  const randomIndex = Math.floor(Math.random() * arreglo.length);
  return(arreglo[randomIndex]);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function SelectedCard(cardName){

    menuGameContainer.classList.add("showMenu")
    let randomQuestion = getRandomInt(0, questions[cardName].length - 1)
    nameViewSelected.innerText = cardName.toUpperCase()
    imgCard.src = './assets/img/' + cardName + '.svg'
    cardFront.classList = ["viewCard"]
    cardFront.classList.add("back" + cardName)
    nameViewSelected.classList.add("degrade" + cardName)
    
    viewCardContainer.classList.add("showViewCard")
    cardText.innerText = questions[cardName][randomQuestion]
    console.log(cardName)
    backButton.addEventListener("click", ()=>{
        viewCardContainer.classList.remove("showViewCard")
        menuGameContainer.classList.remove("showMenu")

    })
    buttonViewCar.addEventListener("click",()=>{
        card.classList.add('flipped')
        cardFront.classList.add('flippedFront')
        cardBack.classList.add('flippedBack')
        nameCardSelected.style.opacity = '0'
        buttonViewCardContainer.style.opacity = '0'
        //viewCardContainer.classList.add('back' + cardName)
        backButton.addEventListener("click", ()=>{


            setTimeout(() => {
              card.classList.remove('flipped')
              cardFront.classList.remove('flippedFront')
              cardBack.classList.remove('flippedBack')
              nameCardSelected.style.opacity = '1'
              buttonViewCardContainer.style.opacity = '1'
            }, 250);
            setTimeout(() => {
              nameViewSelected.classList = []
              cardFront.classList = ["viewCard"]


            }, 500);  


        })
    })
}