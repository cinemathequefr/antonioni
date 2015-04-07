// var baseUrl = "../../antonioni_img/11/";
var baseUrl = "../antonioni_img/";
var lowResFolder = "640_7/";
var hiResFolder = "";


var $win = $(window);
var lastFrame = 1154;

var points = [
  { frame: 80, title: "Gente del Po", titlefr: "Gente del Po", year: "1943", text: "<p>Néo-réaliste avant l'heure, <em>Gente del Po</em> témoigne de l'attachement d'Antonioni à sa région natale, la plaine du Pô. Il choisit la veine documentaire comme première expression derrière une caméra, promène son objectif le long du fleuve, traverse la végétation touffue, s'attarde sur les rives marécageuses, les ponts de barques. La rudesse du quotidien est rythmée par l'écoulement des eaux du fleuve, par la pêche, et Antonioni montre la vie dans ces cabanes désolées, à bord des embarcations délabrées.</p><p>Cet essai assied d'emblée son sens de l'observation, dans une volonté de restituer la sensualité même de ce monde humide et silencieux, aux contours flous. Tout y est eau et lenteur. Tout est plongé dans une atmosphère amnésique et une quasi immobilité. Tout est prétexte à image. <em>Gente del Po</em> marque avant tout la naissance d'un réalisateur.</p>" },
  { frame: 125, title: "Cronaca di un amore", titlefr: "Chronique d'un amour", year: "1950", text: "<p>Dès ce premier long métrage, Antonioni s'emploie à pervertir sciemment un genre&nbsp;: refusant l'intrigue, se contentant d'une traque de la réalité, il propose avec <em>Chronique d'un amour</em> sa propre interprétation du film policier, sans toutefois se départir des influences du film noir.</p><p>Mais <em>Chronique d'un amour</em> est aussi prétexte à une ode à la beauté nocturne de son interprète. Avec Lucia Bosè, Antonioni réinvente une vamp italienne, aux accents de Louise Brooks, qui traverse avec élégance l'opacité charbonneuse du film. Le crime est ici d'ordre moral, le conflit d'ordre social, la bourgeoisie et les rapports à l'argent sont la toile de fond du scénario, sur laquelle Antonioni ajoute du romanesque par touches.</p><p>Antonioni s'extrait du néoréalisme au profit de sa propre introspection. L'engrenage vénéneux qu'il décortique n'est pas dépourvu d'accents shakespeariens. La recherche de style, et plus particulièrement l'utilisation du plan-séquence, apportent une nouveauté de langage qui, assortie d'une esthétique sombre et tragique, servie par une composition soignée des plans, préfigure toute la modernité de son œuvre à venir.</p>" },
  { frame: 194, title: "La Signora senza camelie", titlefr: "La Dame sans camélias", year: "1953", text: "<p>Dans la filmographie d'Antonioni, <em>La Dame sans camélias</em> fait figure d'œuvre de transition. Considéré parfois comme un film mineur, car en demi-teinte, il renferme pourtant quelques fulgurances dans une composition toujours soignée. Antonioni décrit avec un subtil pessimisme l'ascension puis la chute d'une star de cinéma. Si la véritable substance du film est la jalousie, son étude est une nouvelle occasion pour lui d'observer, derrière le mythe, la femme.</p><p>Ce récit cruel d'une obsession, cette chronique de la désillusion se double d'une radioscopie du cinéma à travers la description de Cinecittà, et la mise en abyme à peine voilée de sa propre relation à Lucia Bosè. Monde artificiel, mirage de la vie, <em>La Dame sans camélias</em> est un reflet de sa propre expérience.</p>" },
  { frame: 240, title: "I Vinti", titlefr: "Les Vaincus", year: "1953", text: "<p>Composé de trois courts métrages sur la délinquance juvénile à Paris, Rome et Londres, <em>Les Vaincus</em> est le film du déséquilibre. Ses épisodes inégaux ne satisfont ni le public, ni la critique, ni même Antonioni, frustré par les luttes et les compromis du tournage.</p><p>Initialement, Antonioni voulait simplement rapporter des faits, raconter un crime gratuit, avec pour toile de fond le désarroi de la jeunesse d'après-guerre. Mais sous les contraintes de ses commanditaires, <em>Les Vaincus</em> s'enferme par endroits dans un cadre historico-pédagogique encombrant.</p><p>Seul le talent d'Antonioni lui fait éviter l'écueil du pensum moralisateur. Chaque histoire est filmée dans le style du pays, restituant parfaitement les différentes atmosphères. Grâce au commentaire, grâce au générique réalisé sur fond de journaux façon actualités filmées, il parvient à donner à son film des accents de faits divers. Cette manière de chronique sociale constitue une forme d'esquisse. <em>Les Vaincus</em>, débarrassé de son carcan, est le terreau d'autres plans, d'autres séquences, d'autres trouvailles.</p>"},
  { frame: 291, title: "Le Amiche", titlefr: "Femmes entre elles", year: "1955", text: "<p>Film méconnu, et pourtant fondamental pour appréhender le travail d'Antonioni, <em>Femmes entre elles</em> s'inspire librement d'un texte de Pavese. Fasciné par l'écrivain, le cinéaste adapte pour la première fois une œuvre littéraire à l'écran, et ne choisit pas par hasard ce roman de l'amertume.</p><p>Cette étude de mœurs, qui lui renvoie le reflet de ses propres thèmes, semble par instants lui résister, mais lui offre en réalité une réputation de défenseur de la cause féministe&nbsp;: Antonioni navigue, alerte, entre les ombres soyeuses des intérieurs et des étoffes. Il explore la bourgeoisie et la cruauté des rapports humains. Les personnages, inoubliables, sont magnifiés par une structure narrative d'une précision d'orfèvre et un travail exceptionnel sur le noir et blanc. Devant sa caméra, la grisaille turinoise devient un miroir de l'ennui.</p><p><em>Femmes entre elles</em> évoque aussi la complexité d'une relation triangulaire, et contient les prémices de <em>L'Avventura</em>. Les personnages se répondent d'un film à l'autre, les analogies se multiplient, les fins se rapprochent. Et Antonioni rejoint, lui, Pavese, dans la recherche d'un langage essentiel.</p>"},
  { frame: 342, title: "Il Grido", titlefr: "Le Cri", year: "1957", text: "<p><em>Le Cri</em> est l'histoire d'une chute, au sens figuré comme au sens littéral. L'histoire d'un amour déliquescent, d'une obsession amoureuse, d'une errance physique comme tentative de réponse au désespoir. Antonioni filme des êtres décrépits, comme les murs, symboles de ses obsessions&nbsp;: <em>«&nbsp;Le sujet du <em>Cri</em>, je ne sais pourquoi, m'est venu à l'esprit en regardant un mur. Dans le film, les murs ont beaucoup d'importance car ils donnent l'idée du milieu où vivent les pauvres gens qui sont les personnages de l'histoire&nbsp;»</em>, explique-t-il.</p><p>Pour la première fois, il délaisse la bourgeoisie pour le milieu ouvrier, ausculte les sentiments d'un personnage masculin entravé par sa sensibilité et retrace son cheminement fataliste sous l'angle de la pitié.</p><p><em>Le Cri</em> est un embryon de road-movie avant l'heure, à travers les brouillards de la plaine du Pô qui imprègnent les décors. Antonioni puise dans une subtile palette de gris hivernaux pour traduire l'austérité et la désolation. La boue, la brume, le silence, l'hiver, se conjuguent dans un pessimisme appliqué pour accentuer le dénuement du personnage d'Aldo.</p><p>Le film marque un tournant, si ce n'est une forme d'accomplissement, dans la carrière d'Antonioni&nbsp;: le cinéaste laisse seul le spectateur face aux éléments visuels qu'il lui offre. Seul pour interpréter les situations, seul pour accepter l'incertitude du personnage, l'ambiguïté de la conclusion et de son message.</p>"},
  { frame: 468, title: "L'Avventura", titlefr: "L'Avventura", year: "1960", text: "<p><em>L'Avventura</em> est un attentat, dont la déflagration va bien au-delà du violent accueil cannois réservé au film. C'est une attaque contre les conventions du récit cinématographique et les règles observées à l'époque pour mener à bien une aventure en cinéma. Antonioni s'oppose ainsi aux normes dominantes du spectacle, et exige de surcroît chez le cinéphile averti une confiance inédite, lui offrant selon ses propres termes un «&nbsp;polar à l'envers&nbsp;» (<em>«&nbsp;giallo in rovescia&nbsp;»</em>). Une victime jamais retrouvée, un crime non élucidé, dont on n'est même pas certain qu'il ait eu lieu, sont les composantes de ce poème intemporel sur la difficulté d'être.</p><p>La perte physique et la perte des repères psychologiques sont intimement liées dans la dramaturgie. Antonioni va jusqu'aux limites du non-exprimé, jouant sur la symbolique des paysages, des éboulements, des tempêtes. Il propose des compositions résolument modernistes, un jeu sur le cadre et la possibilité du hors champ. Il utilise l'immensité, le vide, l'espace, pour analyser la maladie des sentiments.</p><p>Film de la reconnaissance critique, <em>L'Avventura</em> marque surtout chez Antonioni l'invention d'un nouveau langage visuel.</p>"},
  { frame: 532, title: "La Notte", titlefr: "La Notte", year: "1961", text: "<p>Chronique de la destruction annoncée d'un couple, doublée d'une subtile réflexion sur la mort, <em>La Notte</em> est une révolution. Avant tout par ses images, <em>«&nbsp;jusqu'alors réservées à la poésie moderne&nbsp;»</em>, selon Alberto Moravia.</p><p>Antonioni file la métaphore de l'urbanisme pour figurer la fragilité des sentiments. La froideur architecturale des quartiers urbains désertiques, l'obscurité rémanente, composent un environnement hostile dans lequel ses personnages se débattent avec leurs problèmes. L'univers de la bourgeoisie citadine, la réussite sociale liée à l'essor industriel opposent matérialisme et valeurs.</p><p>Antonioni s'attaque, à travers Giovanni incarné par Marcello Mastroianni, à l'érosion de l'idéal mâle italien. Le personnage de Jeanne Moreau, dont il décortique les états d'âme, est souvent filmé de dos, pour mieux l'isoler dans son désœuvrement. Figure de la résignation, sa force réside dans sa dignité. Elle est douloureuse et vivante à la fois.</p><p>L'enjeu dramaturgique de <em>La Notte</em>, c'est la perte de tout ressort dramatique. Ce qui intéresse Antonioni, c'est l'art des temps morts. Sa mise en scène est parfaitement arrimée à l'intrigue, il parvient à filmer le vide, l'ennui, et invente une nouvelle forme qui à elle seule fait vaciller l'édifice du néoréalisme.</p>"},
  { frame: 591, title: "L'Eclisse", titlefr: "L'Éclipse", year: "1962", text: "<p>Film de l'austérité et de la modernité à la fois, <em>L'Éclipse</em> est un vrai film de sentiments. Antonioni en raconte ainsi la genèse&nbsp;:<em>«&nbsp;Je suis à Florence pour voir et filmer une éclipse de soleil. Un froid intense et inattendu. Un silence différent des autres. Une lumière blafarde, qui ne ressemble à aucune autre. Et puis l'obscurité. Un calme absolu. Je me dis que durant une éclipse, même nos sentiments s'interrompent.&nbsp;»</em></p><p>Le cinéaste louvoie entre des objets pétrifiés et des êtres paralysés dans leurs émotions. Au désengagement masculin s'oppose le désœuvrement de Vittoria, représenté par ses errances sans but dans le quartier sans âme de l'EUR.</p><p>Dans la continuité de <em>La Notte</em>, qui s'achevait sur une séparation à l'aube, <em>L'Éclipse</em> s'ouvre sur une scène de prologue mémorable où l'objet relaie les silences d'un couple en pleine rupture. Plus tard, l'agitation de la Bourse comme métaphore préfiguratrice d'un monde en mutation fait écho au tumulte intérieur du personnage de Monica Vitti. La description des préoccupations capitalistes esquisse un portrait en creux d'une Italie en pleine croissance économique.</p><p>La construction d'Antonioni est minutieuse. Temps morts et espaces vides sont autant de traits d'union entre les personnages, dans une démarche formellement novatrice. Le langage du cadre isole les personnages dans leur solitudes et s'appuie sur un usage symbolique de la symétrie. Le piqué photographique et la modulation des gris subliment la lumière solaire de la muse Monica Vitti.</p><p>Le film se clôt sur l'imminence d'un désastre, dans une savante mosaïque de plans entre documentaire et poésie fulgurante sur l'absence et l'obscurité, achevant ainsi la «&nbsp;trilogie de l'aliénation&nbsp;» que forme <em>L'Éclipse</em> avec <em>L'Avventura</em> et <em>La Notte</em>.</p>"},
  { frame: 648, title: "Il Deserto rosso", titlefr: "Le Désert rouge", year: "1964", text: "<p>Premier film en couleurs d'Antonioni, <em>Le Désert rouge</em> est une œuvre de rupture, qui refoule les infinies nuances de gris du triptyque <em>Avventura</em> / <em>Nuit</em> / <em>Éclipse</em>. Plan après plan, le cinéaste affirme son credo&nbsp;: <em>«&nbsp;Je veux peindre la pellicule comme on peint une toile, je veux inventer des relations entre les couleurs, et non me contenter de photographier les couleurs naturelles&nbsp;»</em>. La couleur trouve un sens esthétique et non plus expressif, c'est elle qui rythme le film, jouant même, dixit Jean-Luc Godard, le rôle du commentaire parlé.</p><p>Chaque plan du <em>Désert rouge</em> serpente entre Mondrian et Matta, Cesar ou Morandi, et convoque Piero della Francesca, son peintre de prédilection, dans une brève allusion énigmatique au retable de Brera.</p><p>Pour la première fois, le personnage principal n'est plus observé dans ses relations à autrui, mais plutôt dans son rapport à son environnement. Antonioni ausculte le psychisme d'une femme névrosée au milieu de paysages fantomatiques. Son œuvre s'imprègne de rouille, il filme tuyaux, métal et fumées toxiques pour mieux matérialiser l'aliénation. Pour lui, les lignes et les courbes des usines peuvent être belles, et l'amènent à réfléchir sur la puissance et l'impact des machines. Il questionne l'avenir social de l'humanité, le sort chimique du monde, l'équilibre mental des hommes et des femmes incertains de leurs sentiments. La description d'une Italie polluée par l'activité industrielle offre un éclairage d'une particulière acuité sur la situation du monde. Et il choisit une nouvelle fois le brouillard pour figurer une solitude infranchissable, le désespoir existentiel, la mort.</p>"},
  { frame: 730, title: "Blow up", titlefr: "Blow up", year: "1966", text: "<p>Adapté d'une nouvelle de Cortázar, <em>Blow Up</em> est le film de la prise de conscience. Celle de l'impuissance à s'approprier le réel&nbsp;: <em>«&nbsp;Il y a un moment où l'on saisit la réalité, mais l'instant immédiatement après, elle fuit&nbsp;»</em>, explique Antonioni. <em>Blow Up</em> signifie à la fois agrandissement, révélation et explosion. Dans le film, Thomas, photographe de mode désabusé et angoissé, pousse l'art de scruter jusqu'à l'obsession. Jusqu'à la névrose. Jusqu'à l'aveuglement.</p><p>Antonioni abandonne l'Italie pour se perdre dans le Swinging London, sa mode, ses peintres, ses contrastes. Son personnage principal est librement inspiré de la figure du photographe David Bailey. Il filme l'explosion pop, psychédélique, de la musique rock. L'effervescence de la jeunesse. L'impact de la publicité et de la mode sur le décor urbain et la vie quotidienne. <em>Blow Up</em> est tourné avec plusieurs caméras, de façon à obtenir une plus grande variété de plans. Le travail sur le son et les silences est capital. Et toujours dans une volonté de renouveler son langage cinématographique, le cinéaste opte pour un montage fiévreux, plus rapide qu'à l'accoutumée.</p><p>L'interrogation photographique dans <em>Blow Up</em> est, au fond, la métaphore de l'étendue infinie de ce à quoi il faut recourir pour rendre compte du réel. Est-il même possible de capter la réalité, existe-t-elle au-delà de sa propre représentation... À travers cette réflexion ambitieuse sur le pouvoir de l'image, et par-delà ce film en forme d'énigme, c'est son propre statut de cinéaste qu'Antonioni questionne et remet en cause.</p>"},
  { frame: 780, title: "Zabriskie Point", titlefr: "Zabriskie Point", year: "1970", text: "<p><em>Zabriskie Point</em> est peut-être une rêverie plus qu'un film, une échappée fantastique et fantasmagorique qui ouvre une parenthèse dans la filmographie d'Antonioni. Le cinéaste choisit de livrer au spectateur ses propres conclusions, à travers la traduction de son émotion au contact de l'Amérique. Il filme un pays malade, où les déserts sont plus beaux que les villes, dans une vision apocalyptique d'une société qui fomente sa propre destruction par le progrès.</p><p>Après une séquence d'ouverture proche du cinéma-vérité, le film plonge dans un lyrisme générationnel et musical où se confondent, dans une véritable splendeur formelle, l'existence et la réalité. Pétri de l'esthétisme de son temps, Antonioni magnifie la clarté des perspectives et des espaces, exploitant la beauté des décors et de ses acteurs. Ses personnages sont dévorés par la poussière, la sécheresse et les brûlures du soleil, le désert majestueux et ses couleurs évoquent la peinture abstraite d'un Pollock, qu'admira le cinéaste, et d'un Rothko, qu'il rencontra.</p><p><em>Zabriskie Point</em>, par sa bande son minutieusement travaillée, sa musique planante et inspirée, invite à une vraie méditation poétique. Le film s'achève sur une conclusion allégorique, une explosion sans cesse recommencée, comme une évasion dans le fantasme en guise d'apogée.</p>"},
  { frame: 828, title: "Chung Kuo, Cina", titlefr: "Chung Kuo, la Chine", year: "1972", text: "<p>Pour le moins controversé, <em>La Chine</em> est, de l'aveu même d'Antonioni, un simple reportage, un journal de voyage. Le hasard des mouvements est son seul principe scénaristique et organisationnel. Il pose son œil de documentariste çà et là, au gré des rencontres et des paysages, et procède par touches impressionnistes, à travers un montage fluide teinté d'humour. Sa prédilection pour les objets est perceptible dans des plans de boîtes, de théières, de raquettes, dans son regard sur le quotidien, dans une esthétique toute antonionienne. Et comme en écho lointain à <em>Gente del Po</em>, Antonioni filme aussi des fleuves...</p><p>Antonioni n'entend pas expliquer mais juste montrer. Apolitique revendiqué, il refuse tout didactisme et tout fantasme culturel. Malgré cette volonté de distance, il se pose en analyste des impasses idéologiques, scandalisant au passage le maoïsme bien-pensant européen de l'époque, et rejoignant sur bien des points le Gide du <em>Retour de l'U.R.S.S.</em>.</p><p>À la sortie du film, Antonioni est la cible d'une campagne accusatrice instiguée notamment par le régime chinois, mécontent du résultat. Alors taxé de manipulation, de naïveté, de superficialité, <em>La Chine</em> est pourtant devenu avec les années un témoignage incontournable, une lucide observation de la société chinoise davantage qu'un pamphlet pro ou anti, l'impression sur pellicule de la vie d'un pays à un tournant de son histoire.</p>" },
  { frame: 909, title: "Professione: reporter", titlefr: "Profession : reporter", year: "1975", text: "<p>Film intimiste d'aventures, selon Antonioni, <em>Profession&nbsp;: reporter</em> est écrit dans le sillage de <em>Blow Up</em>, offrant une forme de continuité existentielle du photographe.</p><p>Le film aborde conjointement la figure du double et l'art de la fugue. Le bien nommé <em>Passenger</em> (titre du film en anglais) est saisi par une crise identitaire, renvoyé à un questionnement métaphysique qui le conduit à un pacte faustien. Se fuyant lui-même, il accomplit son transfert à travers l'expérience de la brûlure du soleil, attiré par la liberté d'une vie nouvelle, par l'opportunité de se réinventer, de se laisser porter vers un destin déjà écrit.</p><p>Antonioni place une nouvelle fois ses personnages dans la poussière, dans des endroits isolés et désolés. La complexité de la narration, qui multiplie les ellipses, est atténuée par des dialogues qui vont à l'essentiel. Mais <em>Profession&nbsp;: reporter</em> est surtout pour le cinéaste matière à de nouvelles expérimentations cinématographiques, et plus particulièrement le plan séquence final. Vraie prouesse technique, il paraît réussir l'utopie d'une caméra qui traverse toutes les frontières matérielles. D'ailleurs <em>Profession&nbsp;: reporter</em> n'a pas une ride. La contrée du monde où se déroule le récit, et la crise de conscience des personnages, sont absolument contemporains.</p><p>Le cinéaste achève sa réflexion sur une leçon de vie et de cinéma&nbsp;: il faut contempler les temps morts et les silences pour espérer appréhender la réalité. Le dernier plan, qui résume à lui seul le film par sa symbolique, pose ainsi la question essentielle pour Antonioni&nbsp;: le cinéma peut-il prétendre capter et restituer l'événement dans toute sa dimension&nbsp;?</p>"},
  { frame: 980, title: "Il Mistero di Oberwald", titlefr: "Le Mystère d'Oberwald", year: "1980", text: "<p>Film mal-aimé, <em>Le Mystère d'Oberwald</em> est pour Antonioni l'occasion d'une incursion dans le cinéma expérimental, en explorant les possibilités offertes par la vidéo. Le cinéaste dépoussière <em>L'Aigle à deux têtes</em> de Jean Cocteau pour en livrer une version résolument moderne, bien que flirtant parfois avec le kitsch.</p><p>Il compose une véritable symphonie chromatique, qui renvoie aux premiers films coloriés. Le scénario est dépouillé, les décors réduits à leur plus simple expression. Le ton est proche du fantastique, étrange, presque déconcertant, les visions oniriques s'enchaînent à la limite de l'outrance. Les dialogues laissent place dès que possible aux effets électroniques.</p><p>Sur fond de drame, d'amour et de mort, Antonioni manipule les caméras dans une tentative de détailler la couleur des sentiments. <em>Oberwald</em> est en réalité un laboratoire dans lequel le cinéaste s'essaie à des expérimentations plastiques, à une recherche sur l'imaginaire, et, comme à son habitude, à un travail sur le langage filmique.</p>"},
  { frame: 1015, title: "Identificazione di una donna", titlefr: "Identification d'une femme", year: "1982", text: "<p><em>Identification d'une femme</em> est le film du retour à soi. Après une échappée par la Chine et les États-Unis, Antonioni dresse un tableau clinique de l'Italie du début des années 80. Son film fait coïncider une quête d'identification féminine avec celle d'une nation et d'une culture. Il aborde les relations de classes au sein de la société italienne, fait un film d'amour, d'amour contemporain, bien plus bavard que ses prédécesseurs.</p><p>Dans cette œuvre raffinée et froide, Antonioni offre des fragments de génie&nbsp;: travail sur le son, cadrages élégants, beauté des compositions, sont servis par un montage rapide. L'échappée ultime dans la couleur du personnage de Niccolò accomplit une boucle démonstrative&nbsp;: c'est en peintre qu'Antonioni traduit visuellement ses interrogations sur l'existence, la société et le désir. Et qu'il analyse les constructions et les mouvements de la réalité. Ses personnages se dissimulent et se dévoilent tour à tour dans l'opacité du brouillard, qui symbolise comme souvent leurs errances et leurs conflits intérieurs. L'énigme du soleil se superpose à celle de la Femme inaccessible, et conduit le cinéaste à se réfugier dans l'utopie d'un voyage vers la lumière.</p><p><em>Identification d'une femme</em> constitue une forme d'aboutissement de l'expérience et de l'art cinématographiques d'Antonioni. C'est d'une certaine manière le film de l'aisance.</p>"},
  { frame: 1080, title: "Al di là delle nuvole", titlefr: "Par-delà les nuages", year: "1994", text: "<p><em>Par-delà les nuages</em>, dernier long métrage d'Antonioni, est tout à la fois une synthèse et une entreprise de déconstruction de son œuvre. Les quatre segments qui composent le film sont issus de nouvelles écrites par le cinéaste, mêlées à des ébauches de scénarios et des idées accumulées au fil des années. La voix off et les commentaires proviennent d'archives du cinéaste, et le film, s'il est écrit et réalisé en collaboration avec Wim Wenders, reste bel et bien antonionien. Par son empreinte autobiographique, de la ville de Ferrare au personnage du metteur en scène, et pour ses thématiques récurrentes, de la fragilité des sentiments à l'éternelle énigme féminine.</p><p>Antonioni poursuit sa réflexion sur le cinéma, encore et toujours à travers le filtre des femmes, pour lui <em>«&nbsp;bien plus subtil que la réalité&nbsp;»</em>. Il continue aussi à s'interroger sur les mystères de la vie, sur l'ambiguïté du réel&nbsp;: le titre <em>Par-delà les nuages</em> insiste d'ailleurs sur ce songe, permanent dans l'œuvre antonionienne, d'échapper à l'attraction d'une planète définitivement décevante.</p><p>Dans sa forme aussi, <em>Par-delà les nuages</em> porte indiscutablement la griffe d'Antonioni. Le film est lent, se constitue de façon fragmentaire, sur un faux rythme qui lui confère par instants un aspect contemplatif.</p><p><em>Par-delà les nuages</em> est avant tout un film libre, que l'on peut recevoir comme un testament.</p>"}
];

var queue = new createjs.LoadQueue(true); // http://www.createjs.com/Docs/PreloadJS/classes/LoadQueue.html

$(function () {

  // DOM Elements
  var elemIntro = document.querySelector(".intro");
  var elemPreloadProgressImg = document.querySelector(".preloadProgressImg");
  var elemPreloadPercent = document.querySelector(".preloadPercent");
  var elemPercent = document.querySelector(".percent");
  var elemEnter = document.querySelector(".enter");
  var elemGaugeContainer = document.querySelector(".gaugeContainer");
  var elemGauge = document.querySelector(".gauge");
  var elemFrame = document.querySelector(".frame");
  var elemFilm = document.querySelector(".film");
  var elemFilmText = document.querySelector(".scrollable");
  var elemTitleContainer = document.querySelector(".titleContainer");
  var elemTitle = document.querySelector(".title");
  var elemYear = document.querySelector(".year");
  var elemName = document.querySelector(".name"); // = Film title
  var elemTooltip = document.querySelector(".tooltip");
  var elemCredits = document.querySelector(".credits");
  var elemNext = document.querySelector(".next");
  var elemPrev = document.querySelector(".prev");
  var elemClose = document.querySelector(".close");


  var t = Timeline({
    baseUrl: baseUrl,
    lowResFolder: lowResFolder,
    hiResFolder: hiResFolder,
    lastFrame: lastFrame,
    elem: elemFrame,
    elemGauge: elemGauge,
    frameRateFactor: 0.25,
    points: points,
    easing: _.identity //easing: function (t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; } // easeInOutQuad
  });

  var filmPane = new Pane(elemFilm);
  var introPane = new Pane(elemIntro, { isOpen: true });
  var creditsPane = new Pane(elemCredits);

  var fsm = new machina.Fsm({ // See: http://machina-js.org/
    initialize: function (options) {},
    namespace: "antonioni",
    states: {
      uninitialized: {
        "*": function () {
          this.transition("intro");
        }
      },
      intro: {
        next: function () {
          // introPane.close(1, function () {
          //   t.setToDir(1);
          //   this.transition("playing");
          // }.bind(this));
          introPane.close(1);
          t.setToDir(1);
          this.transition("playing");
        },
        pause: function () { this.handle("next"); }
      },
      playing: {
        _onEnter: function () {
          if (this.priorState === "targetFrame" || this.priorState === "film") $(elemTitleContainer).fadeOut(250);
          $(elemFrame).off().one("targetEnter", function () {
            this.transition("targetFrame");
          }.bind(this));
        },
        prev: function () { t.reverseOrNoop(-1); },
        next: function () { t.reverseOrNoop(1); },
        pause: "paused"
      },
      paused: {
        _onEnter: function () { t.pause(); },
        prev: function () {
          t.reverseOrNoop(-1);
          this.handle("pause");
        },
        next: function () {
          t.reverseOrNoop(1);
          this.handle("pause");
        },
        pause: function () { // Pause on paused mean play
          t.play();
          this.transition("playing");
        }
      },
      firstFrame: {
        prev: function () {
          introPane.open(0);
          this.transition("intro");
        },
        next: function () { t.setToDir(1); this.transition("playing"); }
      },
      targetFrame: {
        _onEnter: function () {
          t.play(); // Prevent pause on target frame (NB: shouldn't be possible but...)
          if (t.getCurrentFrame() === 0) {
            this.transition("firstFrame");
            return; 
          } else if (t.getCurrentFrame() === t.getLastFrame()) {
            this.transition("credits");
            return;
          }
          if (this.priorState === "playing") {
            var data = _.find(points, { frame: t.getCurrentFrame() });
            $(elemYear).html(data.year); // BUG ???
            $(elemName).html(data.titlefr);
            $(elemTitleContainer).fadeIn(250);
            showTooltip();
          }
        },
        prev: function () { t.setToDir(-1); this.transition("playing"); },
        next: function () { t.setToDir(1); this.transition("playing"); },
        pause: function () {
          t.setToDir(t.getDir());
          this.transition("playing");
        }, // In this context, pause (= spacebar) means: play to adjacent targetFrame in the current direction
        open: function () {
          $(elemFilmText).html(_.find(points, { frame: t.getCurrentFrame() }).text);
          filmPane.open(t.getDir() === -1 ? 0 : 1, function () {
            this.transition("film");
          }.bind(this));
        },
        _onExit: function () {
          hideTooltip();
        }
      },
      film: {
        close: function () {
          filmPane.close(0, function () {
            this.transition("targetFrame");
          }.bind(this));
        },
        prev: function () {
          filmPane.close(0, function () {
            t.setToDir(-1);
            this.transition("playing");
          }.bind(this));
        },
        next: function () {
          filmPane.close(1, function () {
            t.setToDir(1);
            this.transition("playing");
          }.bind(this));
        }
      },
      credits: {
        _onEnter: function () {
          creditsPane.open(1);
        },
        prev: function () {
          creditsPane.close(0, function () {
            t.setToDir(-1);
            this.transition("playing");
          }.bind(this));
          // creditsPane.close(0);
          // t.setToDir(-1);
          // this.transition("playing");
        }
      }
    }
  });


  function preloadProgress (e) {
    var i = e.progress;
    $(elemPreloadProgressImg).css({ width: (500 * i) + "px" }); // NB: 500px
    $(elemPercent).html(Math.round(i * 100) + "%");
  };

  function preloadComplete () {
    fsm.handle("start");
    $(elemPreloadPercent).addClass("loaded");
  }

  function showTooltip () {
    $(elemTooltip).show().addClass("bounceInDown");
    showTooltip = function () {};
  }

  function hideTooltip () {
    $(elemTooltip)
    .removeClass("bounceInDown")
    .addClass("bounceOutUp")
    .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      $(elemTooltip).remove();
    });
    hideTooltip = function () {};
  }

  // Bindings
  $(elemEnter).on("click", function () { fsm.handle("next"); });
  $(elemPrev).on("click", function () { fsm.handle("prev"); });
  $(elemNext).on("click", function () { fsm.handle("next"); });
  $(elemName).on("click", function () { fsm.handle("open")});
  $(elemClose).on("click", function () { fsm.handle("close")});

  (function keyBind () {
    $(elemNext).removeClass("active");
    $(elemPrev).removeClass("active");
    $(elemEnter).removeClass("active");
    $(elemClose).removeClass("active");
    $win.off().one("keydown", function (e) {
      if (e.which === 13) fsm.handle("open");
      if (e.which === 27) { $(elemClose).addClass("active"); fsm.handle("close"); }
      if (e.which === 32) fsm.handle("pause");
      if (e.which === 37) { $(elemPrev).addClass("active");  fsm.handle("prev"); }
      if (e.which === 39) { $([elemEnter, elemNext]).addClass("active");  fsm.handle("next"); }
      $win.off().one("keyup", keyBind);
    });
  })();

  $(document).on("mousewheel", _.debounce(function (e) {
    if (e.deltaY < 0) { fsm.handle("next"); }
    if (e.deltaY > 0) { fsm.handle("prev"); }
  }.bind(this), 100));

  $win.on("resize", _.debounce(function (e) {
    $(elemFrame).css((coverDimensions(640, 360, $win.width(), $win.height())).css);
  }, 100)).trigger("resize");

  // Init
  queue.setMaxConnections(10);
  queue.loadManifest(_.map(new Array(lastFrame), function (e, i) { return (baseUrl + lowResFolder + i + ".jpg"); }));
  $([elemTitleContainer, elemTooltip]).hide();
  queue.on("progress", preloadProgress);
  queue.on("complete", preloadComplete);



});

