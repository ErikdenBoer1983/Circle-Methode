// Volledig profiel per stijl, rechtstreeks overgenomen uit "De 6 Circle Oriëntaties nader toegelicht"
// (paginas 34-61 van het originele document). Herhaalde paginakopjes zijn eruit gefilterd.
const styleProfiles = {
  c1: {
    naam: "C1 Ondersteunen", ondertitel: "een introverte en relatiegerichte oriëntatie",
    sleutelwoord: "Helpen",
    motivatie: `"Gezien worden als een persoon die anderen helpt en met respect behandelt".`,
    houding: `Eigen normen en waarden vormen de leidraad: "Wat vind ik".`,
    vragen: ["Hoe kan ik helpen?", "Wat is het nut? Is het goed wat ik doe?", "Is het eerlijk en rechtvaardig?", "Dient dit het algemeen belang?"],
    basisbenadering: `"De mening van anderen is belangrijk en dient daarom gevraagd en gehoord te worden. Door onvoorwaardelijk steun aan te bieden zal de waardering voor mijn persoon vanzelf toenemen".`,
    sterkteKort: "Ondersteunen",
    valkuilKort: "Zichzelf wegcijferen, zichzelf tekort doen.",
    leerpuntKort: "Voor jezelf opkomen",
    afkeurKort: "Geen respect tonen",
    sterkteVol: [
      `Het kenmerkende en ook de kracht van deze oriëntatie is de wijze waarop steun en hulp aan anderen wordt aangeboden. Onvoorwaardelijk en dus zonder dat daar direct een beloning in welke vorm dan ook tegenover wordt gesteld. Daarnaast is er een sterke hang naar kwaliteit, iets moet gewoon goed gebeuren, maak er geen rommeltje van is het appèl dat de oriëntatie doet. Het zijn vaak uitstekende gastheren, het zal je aan niets ontbreken.`,
      `Een persoon met een sterk ontwikkelde Ondersteunende oriëntatie is geneigd om de normen en waarden van bijvoorbeeld de organisatie die hij vertegenwoordigt te bewaken en zo als haar geweten willen functioneren. Men mag van deze oriëntatie verwachten dat deze zijn uiterste best zal doen hiervoor in de bres te springen, overigens zonder zich hiervoor op de borst te kloppen.`,
      `Dit komt meer voort uit de eigen behoefte deze rol te spelen dan door de behoefte aan anderen te willen laten zien dat men deze rol vervult. De oriëntatie neigt er meer naar dit laatste te zien in plaats van een teveel opkomen voor de eigen belangen of pocherij en daaraan heeft hij juist een broertje dood.`,
      `De oriëntatie zal daarom minder snel op de voorgrond treden. "Als anderen dat beter kunnen laat ze dat dan doen, het is goed voor hun ontwikkeling" is een typerende uitspraak van deze oriëntatie. Deze wat meer ingetogen en bescheiden opstelling past meer bij zijn manier van denken en handelen. Als resultaat hiervan past luisteren meer bij zijn manier van optreden dan praten.`,
      `Hij heeft minder de behoefte zichzelf te "verkopen". Hij houdt niet van de spotlights. Een bijvoorbeeld: als leidinggevende zegt hij eerder "Ik ben er als je me nodig hebt". Vervolgens vindt hij het prettig als iemand daar gebruik van maakt en daar zijn voordeel mee kan doen. Iets of iemand beter maken vindt hij prettig. "Je krijgt er altijd les van, een stuk (her)opvoeding krijg je er voor niks bij" wordt wel eens over deze oriëntatie gezegd.`,
      `Bij conflictsituaties is zijn kracht de tegenstander te laten merken ook diens belang te respecteren. Respect is overigens iets dat de Ondersteunende oriëntatie uitstraalt en dus ook graag van de ander krijgt. Evenals integriteit en loyaliteit overigens, dat hij hoog in het vaandel draagt.`,
      `Langere termijn denken past sterk bij hem en het hebben van een eigen visie en missie, zowel persoonlijk als zakelijk, is een logisch onderdeel van zijn denktrant.`
    ],
    valkuilVol: [
      `Het doorslaan van een oriëntatie ontstaat, zoals al beschreven is, als de kracht té veel wordt gebruikt. Uiteraard speelt hierin de oriëntatie van de ander ook een belangrijke rol.`,
      `In het geval van de Ondersteunende oriëntatie kan de valkuil betekenen dat de steun ongevraagd en mogelijk ongewenst wordt aangeboden. Zeker als deze gecombineerd wordt met een sterkere Ondernemende stijl.`,
      `Daarnaast kan het sterke norm- en plichtsbesef ontaarden in een teveel opleggen van deze normen waardoor de ander zich ongemakkelijk gaat voelen en het idee krijgt dat hij niet kan of zal kunnen voldoen aan de hoge eisen die aan hem worden gesteld.`,
      `Dit té perfectionistische gedrag kan anderen afschrikken en een samenwerking in de weg staan. Hij kan als té belerend worden gezien. In sommige situaties kan de Ondersteunende oriëntatie minder aan zijn "P.R. functie" willen te werken en zo niet geaccepteerd worden, of zijn idee niet "verkocht" krijgen.`,
      `Hij is geen 'pleaser' want hij gaat van zijn eigen waarden en normen en praat je daarom niet snel naar de mond.`,
      `De mogelijkheid bestaat ook dat deze oriëntatie teveel vertrouwt op een goede afloop en daardoor bedrogen uitkomt. Té goed van vertrouwen en daardoor minder geneigd waakzaam te zijn is een andere bekende valkuil.`,
      `Kenmerkend voor de oriëntatie is ook dat als deze een fout maakt, deze in eerste instantie aan het eigen falen wordt toegeschreven. Hij neemt zichzelf dat dus kwalijk. Door de introverte houding kan een Ondersteunende oriëntatie zichzelf 'de schuld' geven van een fout. Dit imploderen is een beweging die de oriëntatie vaak herkent. Hij slaat dus als het ware naar binnen. En slaat dus dicht.`,
      `De emotie teleurstelling is niet vreemd voor de oriëntatie. In de loop van de jaren ben ik nogal wat mensen met deze voorkeursstijl tegengekomen die mij vertelden het lastig te vinden om met feedback om te gaan. Ze zien deze feedback (onterecht) dan als kritiek op hun functioneren: "ben ik al zo streng voor mezelf en dan krijg ik het ook nog eens te horen".`,
      `Teveel betrokkenheid bij mensen kan leiden tot het zelf nemen van de "aap op de eigen schouders". "Nee" zeggen tegen een onredelijk bod kan moeilijk voor de oriëntatie zijn: hij wil immers hoe dan ook helpen.`
    ],
    leerpuntVol: [
      `Omdat hij zo sterk gericht is op het helpen van anderen kan de oriëntatie zichzelf vergeten! Loslaten door de last van anderen niet teveel op de eigen schouders nemen is aan de orde. Ook kan hij zelf groeien als hij de ondersteuning door anderen toelaat.`,
      `Daarnaast feedback leren ervaren als middel om te groeien in plaats van deze als kritiek te ervaren is een leerpunt dat door deze oriëntatie wordt genoemd.`,
      `Ook vaker controles inbouwen in plaats van er van uitgaan dat de ander zijn toezegging na zal komen zal teleurstelling helpen voorkomen.`,
      `Eerder zijn gevoelens naar anderen uiten is aan de orde in plaats van deze voor zich te houden, gedeelde smart is halve smart, zo luidt het spreekwoord.`
    ],
    afkeurVol: [
      `Deze oriëntatie komt in zijn afkeur terecht als hij niet in staat is om te helpen. Hij voelt zich dan als het ware onmachtig, en onbegrepen. Hij heeft immers toch de juiste bedoelingen?`,
      `Een andere afkeur die opkomt doet zich voor in de situatie dat hij niet met respect wordt behandeld. Zo ga je niet met elkaar om, vindt hij.`,
      `Als er niet voldoende kwaliteit wordt geleverd wekt dat bij de ondersteunende oriëntatie onlustgevoelens op. Iets moet er netjes uitzien, geen knoeiwerk. Een gesprek waar iedereen door elkaar praat en er dus niet naar elkaar wordt geluisterd draagt niet bij aan het respect waar deze stijl voor staat.`
    ],
    nonverbaal: `"laag" gedrag — bescheiden/rustig — introvert`,
    excessiefBenadering: [
      "Ondersteuning geven.",
      "Respect tonen.",
      "Hoor de persoon tot het einde toe aan (zwijg dus zelf!).",
      "Erken de goede bedoeling (ook al is het resultaat niet als gewenst!). Stel gerust."
    ]
  },

  c2: {
    naam: "C2 Ondernemen", ondertitel: "een extraverte en taakgerichte oriëntatie",
    sleutelwoord: "Initiatiefrijk",
    motivatie: `"Gezien worden als een persoon die actief en competent zaken aanpakt".`,
    houding: `Actie en resultaat vormen de leidraad: "Wat doe ik".`,
    vragen: ["Wat ga ik doen?", "Wat levert dit op?", "Is het uitdagend?", "Wie heeft hier de leiding?"],
    basisbenadering: `"Als ik wil dat er iets gebeurt moet ik zelf het initiatief nemen. De anderen volgen dan vanzelf, ze moeten er van uitgaan dat ik weet wat ik doe".`,
    sterkteKort: "Aanpakken",
    valkuilKort: "Zelf teveel hooi op de vork nemen, daarbij anderen het initiatief ontnemen.",
    leerpuntKort: "Kalmte/rust inbouwen",
    afkeurKort: "Passief zijn",
    sterkteVol: [
      `Een persoon met de Ondernemende oriëntatie neigt ertoe om zaken aan te pakken, te ondernemen, initiatieven te ontplooien. Hij gaat daarbij risico's niet uit de weg, sterker nog deze ziet hij vaak als uitdagingen die uit de weg geruimd gaan worden. "Problemen zijn verstopte kansen" riep een collega met deze stijl als hoofdstijl steeds als iemand op een dreigende situatie wees.`,
      `Zijn gesprekspartner mag steevast op zijn vraag "Waarom?" rekenen. Uit zijn "no-nonsense" houding spreekt kracht. Dit betekent ook dat deze oriëntatie graag uitdagingen heeft en deze, ook in de toekomst, wil houden. Veranderingen ziet hij daarom vaak niet als bedreiging maar als een uitdaging die hem kansen biedt om zijn competentie te tonen.`,
      `De kracht van de stijl is zaken in beweging stellen en niet uit te gaan van het verleden maar van de uitdagende toekomst. Zijn hoge werkinzet en houding van "de schouders eronder zetten" is een andere kracht. Hij wil geen probleem horen maar oplossingen en op die wijze vraagt hij de ander om met voorstellen te komen.`,
      `Als er gevraagd wordt "de nek uit te steken" dan zal de Ondernemende oriëntatie zich van zijn beste kant laten zien. "Kom maar op, wat moet er gebeuren?" is dan vaak een reactie.`,
      `Je hoeft de Ondernemende oriëntatie niet te leren het initiatief in een gesprek naar zich toe te trekken. Sterker nog, hij neigt ertoe het gesprek te beheersen.`,
      `In conflictsituaties kenmerkt de stijl zich als een stevige onderhandelaar die weerstanden gemakkelijk wegdrukt. Uit zijn houding spreekt vaak iets van ongeduld, een gevoel van urgentie. Zaken dulden geen uitstel, ze moeten hier en nu opgelost worden.`
    ],
    valkuilVol: [
      `In het geval dat de Ondernemende oriëntatie doorslaat en zijn kracht teveel gebruikt is het gevolg dat anderen worden overvallen met zijn dadendrang. De ander is nog niet aan het ene toe of hij is al weer met het volgende bezig.`,
      `Door zijn teveel aan dadendrang wordt concentratie vasthouden lastig of hij gaat zich vervelen. Ongeduldig hopt hij van de ene uitdaging naar de andere en maakt zo niets af. Hij pakt veel aan maar maakt te weinig af.`,
      `Zijn drang om naar een oplossing te gaan ontaardt soms in een flinterdunne en snelle analyse van een ingewikkeld probleem. "Een nachtje erover slapen" als advies wordt dan al snel als te tijdrovend in de wind geslagen.`,
      `Als de stijl doorslaat dan bevat een actielijst overigens meestal minstens tweemaal zoveel zaken als hij aankan. Voor ontspanning neemt hij te weinig tijd, "die heb ik niet" verzucht deze oriëntatie dan. Niets doen geeft vaak een schuldcomplex.`,
      `Zijn drang om situaties te veel te beheersen doet hem tijdens gesprekken de anderen het woord ontnemen. Hij kapt dan de ander af en kan door een niet aflatende vraagstellings-techniek de ander in de hoek drijven.`,
      `Hij kan onsystematisch tegen regels handelen. Soms heeft hij ze zelf even daarvoor uitgevaardigd: "dat klopt" zegt hij dan, om er snel aan toe te voegen: "maar nu even niet".`
    ],
    leerpuntVol: [
      `Rust inbouwen wordt door vele personen met een hoge(re) Ondernemende oriëntatie steevast als leerpunt genoemd. Meer reflectie op het eigen handelen ook.`,
      `Die laptop eens thuis laten tijdens de vakantie of in het weekend niet aan het werk zijn (ook niet in het hoofd). De oriëntatie kan maar zo 'continu aan staan'.`,
      `Een ander laten uitpraten is ook een heel herkenbaar leerpunt. De ander niet onderbreken, zelfs niet in het eigen hoofd.`,
      `Eerst andermans mening te herhalen bijvoorbeeld door te zeggen "als ik je goed begrijp vind je dat..." voorkomt door dit testen van begrip niet alleen misverstanden door onterechte aannames maar brengt meer balans aan in geven en nemen.`,
      `Niet te snel reageren door vaker tot 10 te tellen is een ander leerpunt. Een nachtje erover slapen voordat je een mail verstuurt bijvoorbeeld kan veel schade voorkomen.`
    ],
    afkeurVol: [
      `Het vervelende gevoel je te gaan vervelen doet menig Ondernemende stijl opspringen om weer in actie te komen. Ik ken oriëntaties die letterlijk niet stil kunnen zitten.`,
      `Iedere dag even de dag laten passeren is een bezigheid waartoe hij niet snel bereid is. Laat staan de tijd voor zichzelf nemen door mindful te luisteren wat er in en met zijn lijf gebeurt. "Het levert me niks op" verzucht de oriëntatie vaak.`,
      `Hij krijgt ook een onbestemd gevoel bij een lege agenda of een to-do lijst waar niets op staat.`
    ],
    nonverbaal: `"hoog" gedrag — opgewonden/naar voren — extravert`,
    excessiefBenadering: [
      "Geef oplossingen, werp geen nieuwe problemen op.",
      "Wees open en duidelijk, maar niet té duidelijk.",
      "Wacht tot de druk afneemt alvorens vragen te stellen.",
      "Stel vragen en geef de ander het gevoel zelf aan het stuur te blijven zitten."
    ]
  },

  c3: {
    naam: "C3 Onderbouwen", ondertitel: "een introverte en taakgerichte oriëntatie",
    sleutelwoord: "Rationeel",
    motivatie: `"Gezien worden als een persoon die logisch analyseert en concludeert en zich daarbij laat overtuigen door concrete feiten".`,
    houding: `De eigen feitelijke waarnemingen vormen het bewijs dat het klopt. Dat bewijs zal moeten blijken, ook uit eerdere ervaringen: "Klopt dit?"`,
    vragen: ["Hoe kom je hieraan?", "Is het terdege onderbouwd?", "Wat heb je onderzocht?", "Is er rekening gehouden met een alternatief?"],
    basisbenadering: `"De feiten zijn belangrijk en spreken voor zich. Ik hoef daar weinig aan toe te voegen".`,
    sterkteKort: "Onderbouwen",
    valkuilKort: "Alleen feiten tellen, het gevoel speelt geen rol.",
    leerpuntKort: "Ook gevoelens mee laten wegen",
    afkeurKort: "Te wollig, te druk",
    sterkteVol: [
      `De stijl Onderbouwen munt uit door zijn drang naar logica. Als geen ander kan hij zaken taakgericht analyseren en inventariseren, daarbij continu op zoek naar feiten. Hij stelt open vragen die beginnen met Wie, Wat, Waar, Waarom, Wanneer, Welke, Hoe, Hoe vaak.`,
      `Zijn scherpe analyserende vermogen doet hem tijdens bijvoorbeeld vergaderingen weinig tot niets zeggen. En zeker niets wat in zijn ogen onlogisch is. Als hij gevraagd wordt om een samenvatting van het besprokene te geven, geeft hij bondig en concreet de kern van de zaak aan. Ook op basis van feiten.`,
      `Zijn systematische manier van werken doet menig ander bewonderend kijken. Zijn zelfdiscipline om zaken af te ronden is over 't algemeen hoog. Hij werkt grondig en nauwgezet. Zijn concentratievermogen is over het algemeen sterk ontwikkeld.`,
      `Je weet precies waar je met de Onderbouwende oriëntatie aan toe bent, vaak is hij zeer constant in zijn gedragingen. Zijn rustige manier van optreden kenmerkt hem, evenals zijn sterk ontwikkelde luistervaardigheden.`
    ],
    valkuilVol: [
      `Zijn drang naar logica doet hem uitgaan van de feiten die zich aandienen. "Het staat er toch" zegt hij dan. Teveel aan de feiten vasthouden kan echter ook leiden tot een halsstarrige houding.`,
      `Als de Onderbouwende Oriëntatie té logisch wil zijn wordt hij bovendien afgeschilderd als te kil, te afstandelijk. "Doe eens wat enthousiaster", krijgt hij dan vaak te horen. "Je toont geen betrokkenheid".`,
      `De collega die verzucht "ik ben zo druk, ik kom er niet meer uit" heeft wellicht meer behoefte aan een persoonlijk blijk van medeleven dan aan een feitelijke verklaring of onderbouwing. Zijn vermogen om dat in te schatten laat de onderbouwende oriëntatie dan in de steek.`,
      `Het teveel in details gaan is ook een valkuil voor deze oriëntatie. "Wat een muggenzifter" is dan het verwijt. Ook kan de overmatige behoefte aan feiten uitgelegd worden als weerstand, terwijl het pure onzekerheid is.`,
      `Zijn analyserend vermogen kan bij het te lang analyseren een vorm van analyseverlamming opleveren die uiteindelijk elke vorm van actie tegenhoudt.`,
      `Als de Onderbouwende oriëntatie zijn eigen wijs teveel volgt wordt hij te eigenwijs, zo volhardend in zijn mening dat de ander nauwelijks ruimte voor een eigen inbreng ervaart. Omdat de empathische antennes van deze stijl wat korter zijn pikt hij minder gevoelsmatige zaken op.`
    ],
    leerpuntVol: [
      `Naast feiten ook gevoelens laten meebewegen is een leerpunt. "Ik heb geleerd dat een arm om de schouder van een ander beter kan helpen dan een heldere analyse" zei iemand met een sterke voorkeur voor de Onderbouwende oriëntatie.`,
      `"Als ik meer interesse toon in wat mijn collega beweegt krijg ik tot mijn verbazing meer gedaan" is een ander voorbeeld van een leerpunt.`,
      `Voordat hij in zijn feitenrelaas duikt kan het handig zijn voor de oriëntatie om na te gaan of zijn gesprekspartner ook behoefte heeft aan zijn onderbouwde verhaal. Eenmaal in het betoog zelf: meer toetsen of de ander nog steeds aangesloten blijft is een goede manier om te voorkomen dat die ander afhaakt. Ook letten op non-verbale seintjes kan helpen.`
    ],
    afkeurVol: [
      `Als anderen hun meningen baseren op in zijn ogen flinterdunne feiten belandt deze oriëntatie bijna zeker in een van zijn afkeuren. Een mening is nog geen feit.`,
      `Omdat hij zich graag laat leiden door onderbouwing wordt deze oriëntatie als het ware onzeker als zekerheid ontbreekt. Zekerheid is heel belangrijk voor deze oriëntatie.`
    ],
    nonverbaal: `"laag" gedrag — koel/rechtop — introvert`,
    excessiefBenadering: [
      "Onderbouw uw vragen met feiten.",
      "Geef duidelijk aan waar je naar toe wilt.",
      "Minimaliseer emotionaliteit, probeer spanning en bedreiging te verminderen.",
      "Gebruik logische argumenten."
    ]
  },

  c4: {
    naam: "C4 Overdenken", ondertitel: "een introverte en taakgerichte oriëntatie",
    sleutelwoord: "Nadenken",
    motivatie: `"Gezien worden als een persoon die zorgvuldig en weloverwogen tot een besluit komt".`,
    houding: `Rust en tijd nemen om na te denken vormen de leidraad.`,
    vragen: ["Mag ik daarover nadenken?", "Welke overwegingen hebben een rol gespeeld?", "Is er goed over nagedacht?", "Hoe lang is daarover nagedacht?"],
    basisbenadering: `"De uiteindelijke antwoorden op een vraag kunnen het best geformuleerd worden na een rijp en doordacht proces waarvoor de tijd is genomen. Door vooraf goed na te denken over de consequenties wordt verlies door onnodige en tijdrovende fouten achteraf juist voorkomen".`,
    sterkteKort: "Overdenken, de tijd nemen.",
    valkuilKort: "Teveel tijd nemen, daardoor geen beslissing nemen.",
    leerpuntKort: "Sneller een beslissing nemen",
    afkeurKort: "Te snel beslist, niet voldoende overdacht",
    sterkteVol: [
      `Denk bij de kracht van de Overdenkende oriëntatie aan iemand die zich niet laat opjutten, die werkelijk de tijd neemt. De uitdrukking "ik heb geen tijd" wordt vaak (in gedachte) beantwoord met "tijd heb je niet, die neem je".`,
      `Als geen ander verstaat deze stijl het vermogen om zaken te laten rijpen, zoals een goede wijn of kaas jaren moet rijpen om tot volle ontplooiing te komen. Hij kan hierbij vertrouwen op de kracht van zijn onderbewustzijn van waaruit zelf de oplossingen komen op het moment dat de tijd daar rijp voor is.`,
      `Alle voors en tegens meenemen in zijn overdenkingen en ze van diverse kanten belichten om tot een goede beeldvorming te komen en vervolgens een of meer alternatieve keuzen naast elkaar zetten en evalueren alvorens ze uit te voeren, is een denktrant die deze oriëntatie kenmerkt.`,
      `Door dit gedrag brengt deze oriëntatie rust, ook in hectische tijden. "Onze rots in de branding" wordt er dan over hem gezegd. Hij is sterk bezig om eerst de Visie te bepalen en dan pas de Missie en niet andersom.`
    ],
    valkuilVol: [
      `De kracht van de Overdenkende oriëntatie kan doorslaan naar het beeld van iemand die "niet vooruit te branden is". Tijd nemen terwijl er echt sprake is van een noodsituatie wordt dan uitgelegd als niet betrokken, ongeïnteresseerd.`,
      `Hem kan nonchalant gedrag verweten worden, hij maakt dan de indruk zich de situatie niet aan te trekken, ook de persoonlijke contacten lopen terug, hij lijkt in zijn schulp te kruipen.`,
      `Teveel overpeinzingen worden dan uitgelegd als besluiteloos en té afwachtend. De behoefte aan rust kan zo doorslaan dat hem onbuigzaamheid wordt verweten. Het lukt de Overdenkende oriëntatie dan niet meer om te kiezen voor de korte termijn, de snelle oplossing: hij blokkeert als het ware.`
    ],
    leerpuntVol: [
      `Te lang nadenken doet beslissingen uitstellen of, als deze valkuil te lang blijft aanhouden, als het ware verlammen. "Eerder beslissen door mezelf de vraag te stellen welke termijn ik daarvoor neem" is een goed leerpunt.`,
      `Omdat de emotie angst voor de foute beslissing vaak aan de basis van dit gedrag ligt, is het belangrijk om de oorzaak voor die angst te onderzoeken. Angst om fouten te maken weerhoudt vaak om te snel beslissingen te nemen — maar dat overwinnen betekent niet dat je zonder goed nadenken moet gaan beslissen, want dat is nou juist de sterkte.`
    ],
    afkeurVol: [
      `In het geval van de Overdenkende oriëntatie ligt de afkeur in het ondoordachte. Te snel een reactie vragen, dus geen denkpauze geven, te snel de stilte onderbreken komt bij deze oriëntatie over als onder druk gezet worden of geen respect hebben voor iemands mening. Het bezorgt hem de rillingen, een echt afkeurgevoel dus.`
    ],
    nonverbaal: `"laag" gedrag — ogen naar boven gericht — introvert`,
    excessiefBenadering: [
      "Geef de ander de tijd om na te denken alvorens te antwoorden (denkpauzes geven, dus geen spervuur van vragen!).",
      "Geef duidelijk aan dat hij er rustig over kan nadenken.",
      "Verhef jouw stem niet.",
      "Laat impulsiviteit achterwege."
    ]
  },

  c5: {
    naam: "C5 Overleggen", ondertitel: "een extraverte en relatiegerichte oriëntatie",
    sleutelwoord: "Overleggen",
    motivatie: `"Gezien worden als een persoon die anderen bij zaken betrekt alvorens te beslissen wat te doen. De anderen hebben ook ideeën die waardevol kunnen zijn".`,
    houding: `Overleggen en gebruik maken van elkaars ideeën vormen de leidraad. "Wat vind jij ervan?"`,
    vragen: ["Wat is jouw mening?", "Welke personen zouden nog aanvullende ideeën hebben?", "Is ieder naar een mening gevraagd?"],
    basisbenadering: `"Door gezamenlijk naar de antwoorden op een vraag te zoeken kunnen de beste oplossingen worden gevonden".`,
    sterkteKort: "Overleggen, anderen erbij betrekken.",
    valkuilKort: "Proces stopt als niet iedereen meedoet.",
    leerpuntKort: "Eigen doelen formuleren en daaraan vasthouden",
    afkeurKort: "Egoïsme, solistisch optreden",
    sterkteVol: [
      `Anderen ergens bij betrekken is de kracht van de Overleggende oriëntatie. Hij gaat er vanuit dat de kracht meer kan komen uit het collectief: "samen weten we meer dan 1 gedachte".`,
      `Overleggen en gebruik maken van elkaars ideeën is dus de leidraad van deze oriëntatie. Hij treedt graag in overleg en legt daar sterke sociale vaardigheden bij aan de dag, en bereikt daar vaak mee dat anderen zich werkelijk gewaardeerd en betrokken voelen. Consensus als besluitvorming past sterk bij deze oriëntatie.`,
      `Bij ieder besluit dat hij neemt vraagt hij zich af "wat zouden de anderen hier van vinden?" De oriëntatie is een uitstekend teamspeler die ook graag onder de mensen is.`,
      `Brainstormen is een vaardigheid waarover hij van nature beschikt, daarbij staat hij open voor ogenschijnlijk nieuwe ideeën of tegenstrijdige oplossingen. Hij schaamt zich er niet voor in de ogen van anderen onhaalbare voorstellen in te dienen om zo nieuwe inzichten te verkrijgen of nieuwe wegen te bewandelen.`
    ],
    valkuilVol: [
      `Anderen overal bij betrekken is niet altijd en voor elk onderdeel noodzakelijk. Dit kan een gevolg zijn van een te ver doorgevoerde sterkte van de Overleggende stijl — de indruk dat iedereen over van alles mag meepraten waardoor er uiteindelijk geen beslissing komt, of steeds weer opgeschoven wordt.`,
      `Het kan ook leiden tot de situatie dat hij het proces stopt als niet iedereen meedoet, of maar blijft zoeken naar consensus daar waar een standpunt innemen en doorpakken nodig is. Een soort te ver doorgevoerd Poldermodel is dan het gevolg.`,
      `In conflictsituaties kan hij de ander het gevoel geven geen eigen mening te hebben doordat hij steeds weer in overleg met zijn achterban moet treden, of geen standpunt wil of kan innemen uit angst wellicht iemand te verliezen.`
    ],
    leerpuntVol: [
      `Het helpt deze oriëntatie om eigen doelen te formuleren en zich daaraan vast te houden — bijvoorbeeld door voorafgaand aan een gesprek een doelstellingenladder te maken: het minimale resultaat onderaan, het ultieme resultaat bovenaan.`,
      `Het duidelijk geven van zijn mening is vaak een leerpunt. "Ga er daarbij vanuit dat jouw overleggende sterkte allang gezorgd heeft voor een 'overbruggende' houding!"`
    ],
    afkeurVol: [
      `Kom niet aan met solistisch optreden bij deze oriëntatie! Teamspeler als hij bij uitstek is, houdt hij niet van solisten die hun eigen weg gaan.`,
      `Als verbinden zijn kracht is, betekent dat ook dat het tegenovergestelde — ruzie — zijn duidelijke afkeur heeft.`
    ],
    nonverbaal: `"hoog" gedrag — vriendelijk/open — extravert`,
    excessiefBenadering: [
      "Geef duidelijk aan dat je wilt samenwerken.",
      "Geef ook aan dat hij in overleg met anderen kan treden en dat je dit waardeert.",
      "Wees ontspannen en luister actief naar wat hij zegt.",
      "Vraag wat hij denkt dat anderen ervan vinden."
    ]
  },

  c6: {
    naam: "C6 Overeenkomen", ondertitel: "een extraverte en relatiegerichte oriëntatie",
    sleutelwoord: "Overeenkomen (zich aanpassen)",
    motivatie: `"Gezien worden als een persoon die in staat is zich aan elke persoon of situatie aan te passen".`,
    houding: `Open en vriendelijke houding, benadrukt het positieve. "Vindt iedereen het prettig?"`,
    vragen: ["Heb jij het naar jouw zin?", "Welke gevoelens roept dit bij jou op?", "Wat vind jij dat ik het beste kan doen?"],
    basisbenadering: `"Door jezelf aan te passen aan de andere persoon of de situatie kan de eigen behoefte het beste worden ingevuld".`,
    sterkteKort: "Zich aanpassen aan personen en situaties.",
    valkuilKort: "Zich teveel aanpassen en vervolgens geen eigen mening meer inbrengen.",
    leerpuntKort: `"Nee" zeggen. Assertiever zijn.`,
    afkeurKort: "Star gedrag. Niet open voor verandering.",
    sterkteVol: [
      `Door zich sterk aan te passen aan zijn omgeving overleeft de kameleon. Deze kracht is typerend voor de Overeenkomende oriëntatie: hij is in staat gemakkelijk overeen te komen met zijn omgeving, zowel met uiteenlopende situaties als met verschillende personen.`,
      `Zijn kracht is om bijvoorbeeld risico's te nemen en te vertrouwen op zijn gave zich aan te kunnen passen. Om die reden kan hij onvoorbereid op situaties af stappen en ter plekke bepalen wat en hoe te handelen.`,
      `Ook weet hij precies wat tegen de ander te zeggen en de juiste toon te raken. Kwade personen krijgen maar weinig vat op hem, hij kan als geen ander gebruik maken van zijn gave "de angel" er snel uit te trekken.`,
      `Humor wordt als een wapen gebruikt. Hij voelt als het ware de situatie aan, meer met de buik dan met het verstand, meer met gevoel dan met de ratio. Hij heeft een sterk ontwikkeld empathisch vermogen.`,
      `De stijl is vaak heel creatief, denkt en handelt 'out of the box'. Blijft nieuwsgierig, onderzoekt alternatieve verklaringen en methodes, durft eigen aannames ter discussie te stellen en past zich gemakkelijk aan als feiten daarom vragen.`
    ],
    valkuilVol: [
      `Indien de Overeenkomende oriëntatie zich teveel aanpast aan anderen wordt hij als niet geloofwaardig beoordeeld. Zijn mening wordt dan meer als naar de mond praten gezien. Inconsequent handelen is dan het verwijt.`,
      `In de behoefte om de sfeer goed te houden haat hij het conflict soms zo zeer dat hij alles doet om de lieve vrede te bewaren, terwijl het conflict juist eens flink aangepakt zou moeten worden om herhaling of frustratie te voorkomen.`,
      `Zijn vermogen om zich in elke situatie aan te passen geeft de ander het idee niet precies te weten hoe met hem om te gaan — een "ongrijpbare gladde paling". Dit inconsequente gedrag wordt de oriëntatie aangerekend.`,
      `Zijn kracht om zich in te leven in de ander zorgt er tijdens het doorslaan voor dat hij het probleem mee naar huis neemt, terwijl de ander zijn probleem wel kwijt is. Doordat hij graag ziet dat de ander hem begrijpt, kan hij veel woorden gebruiken en schiet zijn creatieve geest dan alle kanten op: "het is mij te wollig allemaal".`
    ],
    leerpuntVol: [
      `"Nee" zeggen komt best vaak in het leerpuntenboekje van deze oriëntatie voor. Zich wat vaker assertiever opstellen en meer voor zichzelf opkomen zijn daarnaast herkenbare leerpunten.`,
      `Ook een probleem van de ander niet tot het eigen probleem maken is een logisch leerpunt; immers het aanvoelen van andermans situatie is een sterkte van deze oriëntatie. Een eigen plan hebben en vooral daaraan vasthouden is een ander leerpunt.`
    ],
    afkeurVol: [
      `Star gedrag — iemand die iets in zijn hoofd heeft als een onwrikbare eigen mening waar niet mee te praten valt — is een duidelijke afkeur, evenals vastgeroeste ervaringen ("zo doen we dat al 15 jaar").`,
      `Ook onvriendelijk gedrag ziet hij als verstoring van de goede sfeer. Zijn relatiegerichte instelling heeft een hekel aan situaties die geen recht doen aan mensen, en aan personen die zich omwille van hun titel of functie afstandelijk opstellen.`
    ],
    nonverbaal: `"hoog" gedrag — glimlachend/gespreide handen — extravert`,
    excessiefBenadering: [
      "Besteed eerst aandacht aan de sfeer voordat je ter zake komt.",
      "Vertel eerst wat wél goed gaat.",
      "Verzeker de ander van je algemene sympathie.",
      "Geef aan dat je zijn openheid waardeert, gebruik een positieve benadering."
    ]
  }
};
