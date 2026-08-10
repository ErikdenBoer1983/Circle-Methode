// Voorbeeld van pagina 95: "alle oriëntaties zitten in dezelfde vergadering, de voorzitter
// heeft net het onderwerp 'de nieuwe organisatie' naar voren gebracht" - dezelfde situatie,
// zes verschillende vragen per stijl. Rechtstreeks uit het document.
const vergaderingVragen = {
  c1: ["Is het goed voor iedereen?", "We kiezen toch wel voor kwaliteit?"],
  c2: ["Wie heeft de leiding?", "Wie gaat er onderhandelen (en hoe scherp)?"],
  c3: ["Wanneer gebeurt het?", "Op welke criteria beslissen we?"],
  c4: ["Is er goed nagedacht over X?", "Laten we niet overhaast te werk gaan!"],
  c5: ["Wie gaan overleggen?", "Wanneer betrekken we de leverancier?"],
  c6: ["Kiezen we iets leuks te doen?", "Hoe zorgen we ervoor dat we het allemaal leuk vinden?"]
};

// Oorspronkelijke accentkleur per themakaartje, zoals in het Word-document (celachtergrond).
// Kleuren per stijl (C1-C6), gesampled uit het originele "6 gevlochten ringen"-logo
// (file_00000000cff082439f58ab2693812909.png). De toewijzing welke ring bij welke
// oriëntatie hoort is mijn eigen keuze - laat het weten als je een andere volgorde wilt.
const styleColors = {
  c1: "#1F7A3D", // groen - Ondersteunen
  c2: "#D64545", // rood - Ondernemen
  c3: "#3090D8", // blauw - Onderbouwen
  c4: "#7D3C5C", // paars/plum - Overdenken
  c5: "#D9A916", // geel/goud - Overleggen
  c6: "#E8752C"  // oranje - Overeenkomen
};

// "Efficiënter omgaan met tijd" stond als afbeelding in het document (paarse band) - kleur hier benaderd.
const themeColors = {
  "Communicatie en Gespreksvoering": { bg: "#FFFF99", fg: "#2b2620" },
  "Hoe leren we?": { bg: "#FF9900", fg: "#2b2620" },
  "Onderhandelen": { bg: "#CCFFCC", fg: "#2b2620" },
  "Samenwerken": { bg: "#FF0000", fg: "#ffffff" },
  "Feedback geven": { bg: "#0000CC", fg: "#ffffff" },
  "Leidinggeven en coachen": { bg: "#99CCFF", fg: "#2b2620" },
  "Beter omgaan met Verandering": { bg: "#1B5E3C", fg: "#ffffff" },
  "Basis (algemeen)": { bg: "#C0C0C0", fg: "#2b2620" },
  "Basis (kernwoorden per oriëntatie)": { bg: "#BFBFBF", fg: "#2b2620" },
  "Efficiënter omgaan met tijd": { bg: "#CBB2F0", fg: "#2b2620" }
};

// Niveau-indeling en volgorde: Basis -> Zelfontwikkeling -> Communicatie -> Team & Leiding
const themeLevels = [
  { name: "Niveau 1 — Basis", themes: ["Basis (algemeen)", "Basis (kernwoorden per oriëntatie)"] },
  { name: "Niveau 2 — Zelfontwikkeling", themes: ["Hoe leren we?", "Efficiënter omgaan met tijd", "Beter omgaan met Verandering"] },
  { name: "Niveau 3 — Communicatie", themes: ["Communicatie en Gespreksvoering", "Feedback geven", "Onderhandelen"] },
  { name: "Niveau 4 — Team & Leiding", themes: ["Samenwerken", "Leidinggeven en coachen"] }
];
const themeOrder = themeLevels.flatMap(l => l.themes);
const themeLevelOf = {};
themeLevels.forEach(l => l.themes.forEach(t => { themeLevelOf[t] = l.name; }));

// FIX: "Leidinggeven en coachen" - Ruud's tabel schrijft elke rol (Leider/Manager/Coach/Baas)
// over meerdere regels uit (met "Kernwoord:" en een 4e aspect als losse tussenregel, zonder
// scheidingslijn). De automatische extractie herkende deze tussenregels ten onrechte als nieuwe
// vraag, waardoor er losse woordflarden ontstonden. Hieronder correct samengevoegd per rol.
(function () {
  themesData["Leidinggeven en coachen"] = [
    {
      label: "Leider (rol 1 van 4)",
      c1: "boven de partijen, integriteit, niet alleen nu, ook wat laten we na",
      c2: "straalt kracht uit, voorop, initiatiefrijk",
      c3: "wil duidelijkheid verschaffen, licht zaken toe, beschrijft deze",
      c4: "goed doordachte ideeën, stap voor stap, rustig gedrag",
      c5: "weet wat er speelt tussen de mensen, empathisch",
      c6: "creatief, nieuwe ideeën, daagt uit"
    },
    {
      label: "Manager (rol 2 van 4)",
      c1: "ruimte gevend aan eigen inbreng, vanuit collectief bewaakt waarden",
      c2: "geeft instructies, daagt uit, bewaakt voortgang",
      c3: "maakt procedures, onderbouwt, bewaakt logisch proces",
      c4: "eerst zeker stellen wat er al is, doordacht handelen, bewaakt rustige voortgang",
      c5: "toetsend gedragen beslissingen, bewaakt dat iedereen aangesloten is",
      c6: "nieuwe werkwijze, nieuwe invalshoeken, geen starre procedures"
    },
    {
      label: "Coach (rol 3 van 4)",
      c1: "luisterend, rustig, stimulerend, aandacht voor persoonlijke zaken",
      c2: "vertellend, doet het voor, aandacht voor resultaat",
      c3: "uitleggend, draagt feiten aan, aandacht voor logica & kennis",
      c4: "luisterend, coachee aan eigen stuur, aandacht voor reflectie / rust",
      c5: "enthousiast-merend, stimuleert, leeft mee",
      c6: "kijkt wat coachee nodig heeft, frisse blik, onorthodoxe werkwijze"
    },
    {
      label: "Baas (rol 4 van 4)",
      c1: "liever niet vanuit deze rol, gelijkwaardige behandeling voor iedereen",
      c2: "gaat lastige beslissingen niet uit de weg, hakt knopen door",
      c3: "pragmatische beslissingen, vanuit ratio, bewijzend",
      c4: "denkt in oplossingen, goed door, doordachte acties",
      c5: "liever niet vanuit deze rol, bottum-up, licht impopulaire maatregel toe",
      c6: "ontziend, bekijkt de zaak van alle kanten"
    },
    {
      label: "Leider — aandachtspunten voor jezelf",
      c1: "let op aansluiting, niet te abstract, niet te afwachtend",
      c2: "niet te ver voorop lopen, kwetsbaar opstellen helpt visie toetsen",
      c3: "niet alles van tevoren dichttimmeren, eigen visie toetsen, emoties tonen",
      c4: "vertel wat je denkt, eerder naar buiten treden, duidelijk zijn",
      c5: "eigen visie meer op de voorgrond, tegen de stroom in durven gaan",
      c6: "ook raamwerk aangeven, niet teveel tegelijk, meer rust inbouwen"
    },
    {
      label: "Manager — aandachtspunten voor jezelf",
      c1: "duidelijke doelen en koers, controles inbouwen, verantwoording laten afleggen",
      c2: "zijn doelen realistisch? is koers duidelijk? (toetsen), delegeren",
      c3: "let op aantal procedures, geef ruimte voor eigen inbreng, ook aandacht voor gevoelens",
      c4: "eigen doelen en koers eerder delen met anderen, nieuwe werkwijze ook inzetten, spreek jouw verwachtingen uit",
      c5: "eigen plan trekken en presenteren, jouw verwachtingen uitspreken, duidelijk grenzen aangeven",
      c6: "prioriteiten stellen, zaken eerst afmaken alvorens nieuwe aan te pakken, meer lijn inbrengen"
    },
    {
      label: "Coach — aandachtspunten voor jezelf",
      c1: "niet op eigen schouders nemen, niet teveel opvoeden",
      c2: "stuur niet overnemen van coachee, niet te dwingend, denkpauzes geven",
      c3: "niet teveel uitleg naast logica, ook naar gevoel luisteren, goed luisteren",
      c4: "openen het gesprek, niet teveel vanuit eigen scenario ingaan: spontaniteit mag!",
      c5: "niet té enthousiast, meer diepgang aanbrengen, meer vragen",
      c6: "werken vanuit persoonlijk plan evalueren, niet teveel tegelijk"
    },
    {
      label: "Baas — aandachtspunten voor jezelf",
      c1: "streep trekken indien nodig, macht ook gebruiken",
      c2: "let op teveel ingrijpen, niet teveel angst inboezemen",
      c3: "besteed ook aandacht aan emoties, let op éénrichtingsverkeer",
      c4: "niet té voorzichtig, méér op de voorgrond treden",
      c5: "streep trekken, nee zeggen, impopulaire maatregelen nemen",
      c6: "jouw verwachtingen uitspreken, duidelijker kaders aangeven, vanuit stappenplan werken"
    }
  ];
})();

// FIX: "Onderhandelen" - "Verhouding" kwam twee keer voor als label (voor twee verschillende
// assen). Hieronder ondubbelzinnig gemaakt. Ook stond er nog een losse kop-regel
// ("Circle Oriëntaties methode®") tussen de echte inhoud - die hoort er niet tussen.
(function () {
  const rows = themesData["Onderhandelen"];
  if (!rows) return;
  themesData["Onderhandelen"] = rows.filter(r => r.label.trim() !== "Circle Oriëntaties methode®");
  themesData["Onderhandelen"].forEach(r => {
    if (r.label === "Verhouding" && r.c1 === "relatie") r.label = "Verhouding: relatie of goede deal?";
    if (r.label === "Verhouding" && r.c1 === "belang") r.label = "Verhouding: standpunt of belang?";
  });
})();

// "Basis (kernwoorden per oriëntatie)" heeft een ander vorm (1 rij per oriëntatie ipv 1 rij per onderwerp).
// Draai het om naar dezelfde {label, c1..c6} vorm zodat de zoekfunctie het uniform kan doorzoeken.
(function () {
  const basisKey = "Basis (kernwoorden per oriëntatie)";
  const raw = themesData[basisKey];
  if (raw && raw.length && raw[0].orientatie !== undefined) {
    const attrs = [
      { key: "intentie", label: "Intentie" },
      { key: "gedrag", label: "Gedrag" },
      { key: "sleutelwoord", label: "Sleutelwoord" },
      { key: "vraag", label: "Vraag" }
    ];
    const pivoted = attrs.map(attr => {
      const row = { label: attr.label };
      raw.forEach((entry, i) => { row["c" + (i + 1)] = entry[attr.key]; });
      return row;
    });
    themesData[basisKey] = pivoted;
  }
})();

// Achterkant van het Feedback-kaartje: 1 algemene aanpak die voor alle stijlen geldt
// (stond als losse afbeelding vlak vóór de tabel, bron: EMF-schema, handmatig overgetypt)
(function () {
  const algemeneFeedbackAanpak = "Feedback geven op gedrag: neem iemand apart! In een \"IK-boodschap\" (wat jij ziet, hoort, ervaart) - beschrijf jouw eigen gevoel erbij - beschrijf wat het effect van zijn/haar gedrag op jou is. Bijvoorbeeld: \"De manier waarop je dit aan mij vraagt vind ik niet prettig, ik word daar onzeker van. Vandaar dat ik je ga ontlopen.\" (gevolgd door stilte: laat de ander reageren). Geef feedback op: het moment zelf - het gedrag, niet op de persoon - een niet veroordelende manier. Geef géén advies. Laat de ander de ruimte!";
  const row = { label: "Algemene aanpak (geldt voor alle stijlen)" };
  ["c1","c2","c3","c4","c5","c6"].forEach(c => { row[c] = algemeneFeedbackAanpak; });
  if (themesData["Feedback geven"]) {
    themesData["Feedback geven"].unshift(row);
  }
})();

// Aanvulling "Basis (algemeen)" - het grijze kaartje heeft een 2e kant met Mogelijke
// Sterkten/Valkuilen/Leerpunten/Afkeuren per stijl (bevestigd met een foto van het originele
// kaartje). Deze exacte tekst staat al correct verwerkt onder "Hoe leren we?" (dezelfde
// basistabel wordt op dat kaartje hergebruikt) - die hergebruiken we hier 1-op-1.
(function () {
  const bron = themesData["Hoe leren we?"];
  const basis = themesData["Basis (algemeen)"];
  if (!bron || !basis) return;
  const labels = ["Mogelijke Sterkten", "Mogelijke Valkuilen", "Mogelijke Leerpunten", "Mogelijke Afkeuren"];
  for (let i = 0; i < 4 && i < bron.length; i++) {
    const row = { label: labels[i] };
    ["c1","c2","c3","c4","c5","c6"].forEach(c => { row[c] = bron[i][c]; });
    basis.push(row);
  }
})();

// Extra theme: "Efficiënter omgaan met tijd" (bron: twee EMF-schema's, handmatig overgetypt)
themesData["Efficiënter omgaan met tijd"] = [
  { label: "Produktief gebruik van tijd", c1: "helpen met anderen werken de beste kwaliteit leveren", c2: "veel zaken tegelijk nieuwe methoden resultaat willen boeken", c3: "feiten verzamelen plan van aanpak maken systematisch werken", c4: "rust inbouwen diverse mogelijke oplossingen naast elkaar zetten prioriteiten stellen", c5: "met anderen prioriteiten delen hulp vragen indien nodig", c6: "veel zaken tegelijk soepele indeling tijd open voor nieuwe ontwikkelingen" },
  { label: "Contra-produktief gebruik van tijd", c1: "zorg overnemen \"ja\" zeggen tegen teveel mensen teveel perfectie duurt te lang", c2: "teveel tegelijk willen doen zaken niet afmaken geen prioriteiten", c3: "\"analyse-verlamming\" te star vasthouden aan plan niet flexibel", c4: "geen begin maken teveel opties werkt vertragend prioriteit teveel overwegen", c5: "teveel op de ander leunen geen eigen prioriteiten stellen teveel \"ja\" zeggen tegen teveel mensen", c6: "teveel zaken onafgemaakt laten alles is interessant weinig interesse voor bestaande zaken" },
  { label: "Hoe effektiever en efficiënter kan worden omgegaan met tijd", c1: "niet teveel op eigen nek nemen eerder \"nee\" zeggen minder perfectie, knoop doorhakken", c2: "zaken een voor een afwerken \"nee\" zeggen tegen teveel uitdagingen prioriteiten stellen", c3: "niet teveel in detail controle of oorspronkelijk plan nog werkt meer open staan voor andere werkwijze", c4: "beginnen knopen doorhakken tijdslimiet aangeven", c5: "eigen plan maken eigen prioriteiten stellen eerder \"nee\" zeggen", c6: "raamwerk/plan maken nieuw en bestaand meer in balans meer concentratie op 1 taak" },
  { label: "Mogelijke zorg", c1: "geen waardering", c2: "te laat zijn", c3: "onvoldoende onderbouwing", c4: "ondoordacht handelen", c5: "wat vindt de ander", c6: "te starre planning" },
  { label: "Mogelijke afkeur", c1: "\"rommel afleveren\"", c2: "teveel nadenken", c3: "doelloos", c4: "te onstuimig", c5: "bot \"nee\" zeggen", c6: "niet creatief" },
  { label: "Doelen & prioriteiten stellen", c1: "door teveel zorg om kwaliteit: lastig", c2: "uitdagende doelen alles moet direct", c3: "afgebakende doelen duidelijke prioriteitstelling", c4: "goed doordachte doelen en prioriteiten", c5: "flexibel \"we zien wel\"", c6: "stelt doelen flexibel bij weinig prioriteit" },
  { label: "Houding tegenover \"nee\" zeggen", c1: "moeilijk i.v.m. afwijzing", c2: "geen probleem met \"nee\" uitdagingen uitgezonderd", c3: "geen probleem \"nee\" blijft \"nee\"", c4: "geen probleem volgt eigen gedachtengang", c5: "lastig i.v.m. afwijzing", c6: "lastig beperkt creativiteit" }
];

const oriNames = {c1:"C1 Ondersteunen", c2:"C2 Ondernemen", c3:"C3 Onderbouwen", c4:"C4 Overdenken", c5:"C5 Overleggen", c6:"C6 Overeenkomen"};

// "Hoe ervaart de andere oriëntatie onze oriëntatie?" - als STERKTE ingezet
// sterkteData[mijnStijl][andermansStijl] = "jij ..."
const sterkteData = {
  c1: { c1:"geeft mij het gevoel van wederzijds respect", c2:"bent zacht", c3:"bent niet praktisch", c4:"bent erg betrokken", c5:"bent attent", c6:"bent serieus" },
  c2: { c1:"behandelt anderen zonder respect", c2:"bent lekker actief", c3:"bent strijdlustig", c4:"hebt weinig tijd nodig om te beslissen", c5:"neemt snel een eigen beslissing", c6:"bent enthousiast bezig" },
  c3: { c1:"bent erg rationeel", c2:"ziet veel details", c3:"bent logisch", c4:"bent consequent", c5:"bent sterk op jezelf", c6:"bent heel feitelijk" },
  c4: { c1:"handelt goed doordacht", c2:"neemt veel tijd", c3:"bent rustig", c4:"laat je ook niet opjutten", c5:"trekt je graag terug", c6:"bent met jouw eigen gedachten bezig" },
  c5: { c1:"betrekt anderen er goed bij", c2:"maakt goed gebruik van anderen", c3:"betrekt anderen overal in", c4:"geeft anderen inspraak", c5:"haalt alle ideeën uit iedere persoon", c6:"bent meewerkend" },
  c6: { c1:"durft je kwetsbaar op te stellen", c2:"past je gemakkelijk aan", c3:"bent flexibel", c4:"bent rusteloos", c5:"bent prettig in de omgang", c6:"bent inspirerend" }
};

// als VALKUIL ingezet (sterkte teveel gebruikt)
const valkuilData = {
  c1: { c1:"stelt mij teleur", c2:"bent veel té zacht", c3:"bent té emotioneel", c4:"bent veel te betrokken", c5:"betrekt té weinig anderen erbij", c6:"bent véél te kritisch" },
  c2: { c1:"bent meedogenloos", c2:"kan je niet in bedwang houden", c3:"bent te impulsief", c4:"denkt niet na", c5:"wilt ten koste van alles jouw doel bereiken", c6:"loopt over anderen heen" },
  c3: { c1:"trekt je te weinig van anderen aan", c2:"let teveel op de details", c3:"wil mij niet geloven", c4:"bent koppig", c5:"wilt teveel alleen doen", c6:"hebt te weinig gevoel voor wat anderen denken" },
  c4: { c1:"bent teveel met jezelf bezig", c2:"denkt te lang en neemt maar geen beslissing", c3:"bent te afwachtend", c4:"denkt teveel na", c5:"moet eens niet zoveel voor je houden", c6:"past je nooit aan anderen aan" },
  c5: { c1:"geeft teveel toe", c2:"vraagt teveel aan anderen en neemt zelf geen beslissing", c3:"hebt geen eigen mening", c4:"bent teveel gericht op de menselijke kant", c5:"laat mij er teveel buiten", c6:"geeft mij het gevoel beetgenomen te zijn" },
  c6: { c1:"geeft teveel toe", c2:"bent te sluw", c3:"bent chaotisch", c4:"neemt ondoordachte beslissingen", c5:"moet een ander jou zijn beslissing niet laten opdringen", c6:"verplaatst je teveel in andermans gevoelens in plaats in die van mij" }
};

// Interactiepatronen: "als twee personen met deze oriëntaties een probleem hebben"
// interactieData["c1-c2"] = tekst (richting: eerste stijl - tweede stijl, zoals in het boek)
const interactieData = {
  "c1-c1": "Beiden: willen graag tot een wederzijds bevredigende oplossing komen; gaan diepgaande discussie om het onderste uit de kan te halen uit de weg; vinden het lastig om met kritiek om te gaan; voelen zich in conflict- en spanningssituaties erg ongemakkelijk, willen elkaar dan ontzien; kunnen elkaar de schuldvraag gaan stellen (draagt niet bij); kunnen het voor elkaar in willen vullen (draagt niet bij).",
  "c1-c2": "C1 wil graag tot een wederzijds bevredigende oplossing komen. C2 kan tot een diepgaande discussie neigen om het onderste uit de kan te halen. C1 vindt het lastig om met kritiek om te gaan. C2 voelt zich in conflict- en spanningssituaties gemakkelijker en wil dit uitbuiten.",
  "c1-c3": "C1 wil graag tot een wederzijds bevredigende oplossing komen. C3 kan alleen een voor hem logische oplossing nastreven. C1 vindt het lastig om met kritiek om te gaan. C3 voelt spanning bij C1 minder aan en treedt te koel, te afstandelijk naar C1 op.",
  "c1-c4": "C1 wil graag tot een wederzijds bevredigende oplossing komen. C4 zal graag de tijd nemen om tot een goede oplossing te komen. C1 vindt het lastig om met kritiek om te gaan. C4 zal zich minder van C1 aantrekken en meer zijn eigen oplossing zoeken.",
  "c1-c5": "C1 wil graag tot een wederzijds bevredigende oplossing komen. C5 zal, in overleg, ook een goede oplossing voor beiden willen. C1 vindt het lastig om met kritiek om te gaan. C5 snapt dit ook en zal samen met C1 naar een oplossing zoeken.",
  "c1-c6": "C1 wil graag tot een wederzijds bevredigende oplossing komen. C6 voelt dit ook aan en zal zich hier over uitspreken. C1 vindt het lastig om met kritiek om te gaan. C6 snapt dit ook en kan C1 ook daadwerkelijk het gevoel geven naar een gezamenlijke oplossing te streven.",

  "c2-c1": "C2 kan een diepgaande discussie aangaan om het onderste uit de kan te halen. C1 voelt zich hier erg ongemakkelijk bij. C2 zet C1 nog meer onder druk en als C1 geen tegengas geeft neigt C2 tot forceren van de oplossing. C1 geeft zich gewonnen, voelt zich gefrustreerd, slaat naar 'binnen' en vergeet het incident niet meer. C2 moet van goeden huize komen om het beschadigde vertrouwen te herstellen.",
  "c2-c2": "Beiden: gaan een stevige discussie aan en geven beiden geen strobreed toe; zoeken manieren om van elkaar te winnen, de oplossing zelf wordt niet gezocht; zetten zware druk op de discussie en de zaak kan escaleren; zinnen op wraak als men zich gewonnen moet geven.",
  "c2-c3": "C2 gaat een diepgaande discussie aan. C3 vraagt naar feitelijke criteria. C2 ervaart dat C3 daardoor de oplossing onnodig ophoudt en drukt door. C3 lijkt op te geven als C2 doordrukt en vindt C2 arrogant en te emotioneel (zegt dit waarschijnlijk niet).",
  "c2-c4": "C2 gaat een stevige discussie aan. C4 wil tijd om over een goede oplossing na te mogen denken. C2 ervaart dat C4 daardoor de oplossing onnodig ophoudt en drukt door. C4 reageert niet meer als C2 doordrukt en vindt C2 arrogant en te impulsief handelen (zegt dit waarschijnlijk niet).",
  "c2-c5": "C2 gaat een stevige discussie aan. C5 vraagt tijd om met anderen over een gezamenlijke oplossing te overleggen. C2 ervaart dat C5 daardoor de oplossing onnodig ophoudt en drukt door. C5 geeft zich gewonnen als C2 doordrukt en vindt C2 arrogant en egoïstisch handelen (zegt dit waarschijnlijk ook als hij tenminste zelf de confrontatie niet uit de weg gaat, wat juist tegenover C2 kan gebeuren).",
  "c2-c6": "C2 gaat een diepgaande discussie aan. C6 neigt ertoe om de positieve onderdelen van C2's betoog te benadrukken: \"daar zit wel wat in\". C2 ervaart C6's toegeeflijkheid als zwakte en drukt daarom zijn eigen standpunten door. C6 past zich aan de oplossing van C2 aan als deze doordrukt, vindt C2 drammerig maar zal dit waarschijnlijk niet tegen hem zeggen; vervolgens wel tegen anderen: \"wat vind jij nou van zijn manier van optreden?\"",

  "c3-c1": "C3 doet, vanuit eigen oplossing, een voorstel, gebaseerd op feiten. C1 voelt zich ongemakkelijk bij het probleem. C3 ervaart niet dat C1 zich ongemakkelijk voelt en blijft logische argumenten aanvoeren (die C1 niet helpen). C1 reageert niet meer als C3 alleen maar feiten noemt en te weinig aandacht voor zijn gevoelens toont.",
  "c3-c2": "C3 doet, vanuit eigen onderbouwing, een voorstel, gebaseerd op feiten. C2 zoekt de discussie en probeert te overtuigen op basis van initiatieven. C3 ervaart dat C2 daardoor de oplossing onnodig forceert en zal waarschijnlijk nog meer feiten en logische argumenten aandragen om C2 te overtuigen. C2 legt C3's feitelijke onderbouwing uit als onwil om tot een oplossing te komen en reageert steeds heftiger.",
  "c3-c3": "Beiden: doen, vanuit de eigen oplossing, voorstellen, gebaseerd op feiten; overtuigen elkaar van hun logica en brengen beiden hun feitenrelaas naar voren; ervaren elkaar als eigenwijs en geven niet toe; zijn niet in staat tot loslaten of nader overwegen van hun eigen standpunten en de zaak komt dan onwrikbaar vast te zitten.",
  "c3-c4": "C3 doet, vanuit eigen bedachte oplossing, een voorstel, gebaseerd op feiten. C4 geeft aan meer tijd nodig te hebben voor het vinden van een oplossing. C3 draagt nog meer feitelijke onderbouwing aan. C4 raakt overspoeld door \"feitenbombardement\" en haakt af (zegt dit waarschijnlijk niet).",
  "c3-c5": "C3 doet, vanuit eigen oplossing, voorstel, gebaseerd op feiten. C5 geeft aan meer tijd nodig te hebben om met anderen te kunnen overleggen. C3 draagt nog meer feitelijke onderbouwing aan. C5 vindt dat C3 teveel naar zichzelf luistert en haakt af (en zegt dit waarschijnlijk ook).",
  "c3-c6": "C3 doet, vanuit eigen oplossing, voorstel, gebaseerd op feiten. C6 past zich vrij gemakkelijk aan C3's oplossing aan. C3 voelt zich door C6 aangemoedigd en draagt nog meer feitelijke onderbouwing aan. C6 vindt C3's feitelijke onderbouwing veel te kil en voelt weinig motivatie om oplossing in praktijk te gaan brengen (en zegt dit waarschijnlijk niet als hij de confrontatie uit de weg gaat).",

  "c4-c1": "C4 doet een uitermate doordacht voorstel. C1 voelt zich ongemakkelijk bij het probleem. C4 stelt voor rustig de tijd te nemen voor het vinden van de goede oplossing. C1 vindt C4's voorstel te afstandelijk en vindt dat C4 te weinig aandacht heeft voor de gevoelens van C1.",
  "c4-c2": "C4 doet een uitermate doordacht voorstel. C2 veegt dit voorstel van tafel en doet eigen voorstel. C4 stelt voor rustig de tijd te nemen voor het vinden van de goede oplossing. C2 wordt ongeduldig, vindt C4's voorstel niet juist omdat dit te lang duurt en drukt eigen voorstel door.",
  "c4-c3": "C4 doet een uitermate doordacht voorstel. C3 voelt zich op zijn gemak bij deze manier van doen en doet aanvullend een feitelijk voorstel. C4 stelt voor rustig de tijd te nemen voor het vinden van de goede oplossing. C3 vindt C4's voorstel wel goed maar vindt diens voorstel niet voldoende onderbouwd (maar zegt dit wellicht niet).",
  "c4-c4": "Beiden: doen een uitermate doordacht voorstel; waarderen elkaars denktrant en haasten zich niet; luisteren goed en rustig naar elkaars overwegingen; nemen niet het initiatief om een oplossing te kiezen (er treedt \"radiostilte\" op).",
  "c4-c5": "C4 doet een uitermate doordacht voorstel. C5 vraagt meer tijd om met anderen te overleggen. C4 stelt voor rustig de tijd te nemen voor het vinden van de goede oplossing. C5 ziet dit als een aanmoediging om het voorstel voor overleg met anderen vooral niet te haasten en schuift het voor zich uit.",
  "c4-c6": "C4 doet een uitermate doordacht voorstel. C6 past zich gemakkelijk aan diens voorstel aan. C4 stelt voor rustig de tijd te nemen voor het vinden van de goede oplossing. C6 wordt nog meer op zijn gemak gesteld en wacht verdere voorstellen van C4 af.",

  "c5-c1": "C5 doet een voorstel dat hij al met anderen heeft overlegd en doorgesproken. C1 waardeert dit op zich maar vraagt zichzelf af in hoeverre C5 er zelf ook achter staat. C5 stelt voor een eventuele oplossing eerst nog met anderen te overleggen alvorens te beslissen. C1 raakt geïrriteerd omdat C5 niet voor eigen mening uit durft te komen, gelooft niet meer in een goede oplossing en haakt af (zegt dit waarschijnlijk niet).",
  "c5-c2": "C5 doet een voorstel dat hij al met anderen heeft overlegd en doorgesproken. C2 vraagt of C5 hier zelf ook achter staat en doet in ieder geval eigen voorstel. C5 stelt voor een eventuele oplossing eerst nog met anderen te overleggen alvorens te beslissen. C2 verwijt C5 openlijk geen standpunt in te durven nemen en drukt eigen standpunt door.",
  "c5-c3": "C5 doet een voorstel dat hij al met anderen heeft overlegd en doorgesproken. C3 stelt feitelijke en inhoudelijke vragen en toont daarbij weinig gevoelens. C5 stelt voor een eventuele oplossing eerst nog met anderen te overleggen alvorens te beslissen. C3 denkt dat C5 nog niet overtuigd is en draagt nieuwe feiten aan (terwijl deze alleen maar wil overleggen en zo te toetsen).",
  "c5-c4": "C5 doet een voorstel dat hij al met anderen heeft overlegd en doorgesproken. C4 stelt voor geen overhaaste beslissing te nemen. C5 stelt voor de besproken oplossing eerst nog met anderen te overleggen alvorens te beslissen. C4 voelt zich uitstekend bij de begrepen denkpauze en wacht af.",
  "c5-c5": "Beiden: doen een voorstel dat men al met anderen heeft overlegd en doorgesproken; stellen voor de besproken oplossing eerst nog met anderen te overleggen alvorens te beslissen; vinden dit een prettige werkwijze, overleggen goed met elkaar en stellen vervolgoverleg met anderen voor en voeren dit ook uit; begrijpen elkaar zo goed dat ze maar met elkaar en anderen blijven overleggen en geen besluit nemen om tot een oplossing van het probleem te komen.",
  "c5-c6": "C5 doet een voorstel dat hij al met anderen heeft overlegd en doorgesproken. C6 past zich gemakkelijk aan het voorstel van C5 aan. C5 stelt voor de besproken oplossing eerst nog met anderen te overleggen alvorens te beslissen. C6 past zich ook aan dit voorstel aan en wacht rustig het verdere verloop af.",

  "c6-c1": "C6 doet een voorstel waarbij hij rekening houdt met de gevoelens van C1. C1 waardeert dit op zich wel maar vraagt zich af of C6 hem niet manipuleert. C6 past zich bij tegengas van de ander vrij gemakkelijk aan. C1 vindt dat C6 zich wel al te gemakkelijk aanpast en vertrouwt hem niet (en zegt dit waarschijnlijk niet).",
  "c6-c2": "C6 doet een voorstel waarbij hij rekening houdt met de gevoelens van C2. C2 legt dat uit als zwakte en probeert dan juist zijn voorstel door te drukken. C6 past zich bij tegengas van de ander vrij gemakkelijk aan. C2 is nu helemaal niet meer te houden en walst over C6 heen (dit vindt C6 niet prettig maar hij durft dit waarschijnlijk niet tegen C2 zelf te zeggen; vervolgens bespreekt hij C2's gedrag wel met anderen).",
  "c6-c3": "C6 doet een voorstel waarbij hij rekening houdt met de gevoelens van C3. C3 weet niet precies hoe hier mee om te gaan en werpt zich op de feiten. C6 past zich vrij gemakkelijk aan, vindt C3 wel erg koel maar zegt dit niet. C3 vindt C6 erg oppervlakkig, zegt dit waarschijnlijk niet en voert nog meer feiten aan.",
  "c6-c4": "C6 doet een voorstel waarbij hij rekening houdt met de gevoelens van C4. C4 snapt niet wat hij hier mee aan moet en stelt voor rustig na te denken over een oplossing. C6 vindt samenwerking met C4 op zich redelijk maar wil het wel direct \"hier en nu\" met C4 bespreken. C4 vindt C6 erg opdringerig, zegt dit waarschijnlijk niet en remt de voortgang af.",
  "c6-c5": "C6 doet een voorstel waarbij hij rekening houdt met de gevoelens van C5. C5 waardeert dit zeer en stelt overleg met anderen voor. C6 past zich vrij gemakkelijk aan C5's standpunt aan. C6 vindt dat C5 zich wel al te gemakkelijk aanpast en bespreekt dit vervolgens openlijk met C5: \"dat kan je in de problemen brengen, bij anderen, niet bij mij\".",
  "c6-c6": "Beiden: doen een voorstel waarbij men rekening houdt met de gevoelens van beiden; voelen zich uitermate prettig in elkaars gezelschap en ontzien elkaar; zullen, als er al sprake is van tegengas (dit manifesteert zich dan nauwelijks), om de harmonie niet te verstoren; vragen zich wellicht af of men het echt eens was over de gekozen oplossing of dat beiden elkaar teveel hebben ontzien."
};
