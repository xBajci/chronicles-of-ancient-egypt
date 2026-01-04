import { TimelineItem, LocationData, ItemType } from './types';

// Raw JSON Data v2.4
const RAW_DATA = {
  "meta": {
    "version": "2.4-file",
    "title": "Starověký Egypt – vertikální časová osa (model bez obrázků)",
    "language": "cs",
    "yearFormat": "BC_AD",
    "generatedAt": "2026-01-04T00:00:00+02:00",
    "ui": {
      "layout": "timeline-left_detail-right",
      "scroll": "vertical",
      "defaultZoom": "kingdoms",
      "filters": [
        "period",
        "dynasty",
        "type",
        "location",
        "tags",
        "confidence"
      ]
    }
  },
  "periods": [
    {
      "id": "predynastic",
      "type": "period",
      "name": "Předdynastické období",
      "startYear": -5000,
      "endYear": -3100,
      "confidence": "high",
      "summary": "Dlouhá „přípravná fáze“ Egypta: od vesnic a lokálních náčelníků k regionálním centrům moci. Vznikají sociální elity, specializovaná řemesla, dálkový obchod a symbolika autority, která později přejde do královské ideologie.",
      "detail": {
        "whatHappens": [
          "Stabilizace zemědělství v nilské kotlině; růst sídel a regionálních tradic (Horní vs. Dolní Egypt).",
          "Rozvoj elitních pohřbů a znaků statusu; vznik „administrativních“ praktik (značení, pečetění, evidence).",
          "Prohlubování obchodních kontaktů (Núbie, Levanta, Sinaj) a přenos technologií i prestižních materiálů."
        ],
        "whyItMatters": [
          "Bez tohoto období nejde pochopit, proč sjednocení nevzniklo „z ničeho“ – instituce a ideologie se budují postupně.",
          "Ikonografie a rituály moci se rodí ještě před první dynastií."
        ],
        "whatToLookFor": [
          "Přechod od lokálních stylů k širší standardizaci symbolů.",
          "Značky na keramice/pečetích – drobnosti, které často nesou „státní“ logiku."
        ],
        "funFacts": [
          "Termín „0. dynastie“ se někdy používá pro pozdní fázi, kdy už existují vládci s královskými znaky, ale ještě nejde o „klasické“ dynastie."
        ],
        "tags": [
          "počátky státu",
          "Nil",
          "archeologie",
          "společnost",
          "obchod"
        ]
      }
    },
    {
      "id": "early_dynastic",
      "type": "period",
      "name": "Raně dynastické období (1.–2. dynastie)",
      "startYear": -3100,
      "endYear": -2686,
      "confidence": "high",
      "summary": "Zrození dynastického státu: sjednocení „dvou zemí“, stabilizace královské titulatury a rozvoj administrativy. Vzniká model faraona jako garanta řádu, správy i rituálu – a budují se první velké královské nekropole.",
      "detail": {
        "whatHappens": [
          "Konsolidace moci a vznik raných institucí státu (úředníci, daně, logistika).",
          "Upevnění královské ideologie: král jako posvátný vládce a ochránce maat (řádu).",
          "Rozvoj písma a evidenčních praktik – často v administrativním kontextu."
        ],
        "whyItMatters": [
          "Je to období, kdy se „Egypt“ stává fungujícím státem se symboly, které budou přežívat tisíce let.",
          "Prameny jsou fragmentární, ale zásadní: i malé nápisy mohou měnit interpretace."
        ],
        "whatToLookFor": [
          "Serechy, rané hieroglyfické značky a pečetidla.",
          "Motivy dvou korun a sjednocení."
        ],
        "funFacts": [
          "U raných vládců často existuje více jmen/variant přepisů – UI by mělo umět aliasy."
        ],
        "tags": [
          "sjednocení",
          "titulatura",
          "administrativa",
          "nekropole",
          "písmo"
        ]
      }
    },
    {
      "id": "old_kingdom",
      "type": "period",
      "name": "Stará říše (3.–6. dynastie) – věk pyramid",
      "startYear": -2686,
      "endYear": -2181,
      "confidence": "high",
      "summary": "Vrchol centralizace a „státního inženýrství“. Vznikají pyramidové komplexy a rozsáhlá infrastruktura, která vyžaduje koordinaci lidí, materiálu i rituálu. Egyptská ideologie krále a posmrtnosti se promítá do kamene.",
      "detail": {
        "whatHappens": [
          "Monumentální stavby: od Sakkáry k Gíze a dál; standardizace pohřebních komplexů.",
          "Růst administrativy a specializovaných profesí; silná role dvoru a elit.",
          "Dlouhodobé formování „klasické“ estetiky a kanonu královského umění."
        ],
        "whyItMatters": [
          "Stará říše je testem kapacity státu: logistika, ekonomika i ideologie musí fungovat zároveň.",
          "Pyramidy nejsou jen hrobky – jsou politickým prohlášením a rituálním strojem."
        ],
        "whatToLookFor": [
          "Vztah mezi pyramidou, chrámy, procesními cestami a „krajinným plánem“.",
          "Kvalita opracování kamene a orientace staveb."
        ],
        "funFacts": [
          "Dlouho tradované mýty o „otročí“ stavbě jsou problematické; dnes se spíš mluví o organizované pracovní síle s rozsáhlým zázemím."
        ],
        "tags": [
          "pyramidy",
          "centralizace",
          "Sakkára",
          "Gíza",
          "monumenty"
        ]
      }
    },
    {
      "id": "first_intermediate",
      "type": "period",
      "name": "První přechodné období (7.–10. dynastie)",
      "startYear": -2181,
      "endYear": -2055,
      "confidence": "high",
      "summary": "Období decentralizace: více center moci, regionální dynastie a proměnlivé koalice. Vnímáno jako „krize“, ale zároveň jako čas inovací v regionální správě, umění a lokální legitimizaci.",
      "detail": {
        "whatHappens": [
          "Oslabení centrální správy; posílení nomarchů (regionálních vládců).",
          "Paralelní mocenská centra a soupeření o legitimitu.",
          "Kulturní posuny: více regionálních stylů a lokálních tradic."
        ],
        "whyItMatters": [
          "Ukazuje, že Egypt není vždy monolit – stát může být síť center, ne jen jedno centrum.",
          "Připravuje půdu pro nové formy moci ve Střední říši."
        ],
        "whatToLookFor": [
          "Regionální nápisy a pohřební památky, které ukazují lokální sebevědomí.",
          "Změny v titulatuře a v „jazyce“ legitimity."
        ],
        "funFacts": [
          "Číslování dynastií 7–10 je v pramenech obzvlášť citlivé; často jde o rekonstrukce z neúplných seznamů."
        ],
        "tags": [
          "decentralizace",
          "nomarchové",
          "regiony",
          "krize?",
          "legitimita"
        ]
      }
    },
    {
      "id": "middle_kingdom",
      "type": "period",
      "name": "Střední říše (11.–12. dynastie)",
      "startYear": -2055,
      "endYear": -1650,
      "confidence": "high",
      "summary": "Znovusjednocení a stabilizace: reformy správy, posílení armády a státních projektů. Rozkvět literatury a umění, promyšlenější kontrola periferie a důraz na „funkční“ stát.",
      "detail": {
        "whatHappens": [
          "Konsolidace moci a obnova centrální správy; modernizace aparátu.",
          "Státní projekty (zavlažování, opevnění, těžba) a aktivnější zahraniční politika.",
          "Kulturní rozkvět: texty, které formují egyptské sebevnímání."
        ],
        "whyItMatters": [
          "Střední říše je často považována za „klasický“ model efektivní správy.",
          "Vytváří tradice, na které se pozdější epochy rády odvolávají."
        ],
        "whatToLookFor": [
          "Literární tradice (moudrostní texty, vyprávění) a jejich témata.",
          "Státní infrastruktura mimo tradiční jádro."
        ],
        "funFacts": [
          "Mnoho pozdějších panovníků se stylizuje jako „obnovitelé“ právě v duchu Střední říše."
        ],
        "tags": [
          "reformy",
          "literatura",
          "stabilita",
          "projekty",
          "klasika"
        ]
      }
    },
    {
      "id": "second_intermediate",
      "type": "period",
      "name": "Druhé přechodné období (13.–17. dynastie)",
      "startYear": -1650,
      "endYear": -1550,
      "confidence": "high",
      "summary": "Složitá mozaika více vládců a center moci: severní Delta bývá spojována s Hyksósy, zatímco jih kontrolují thébské dynastie. Postupné znovusjednocení vede k nástupu Nové říše.",
      "detail": {
        "whatHappens": [
          "Fragmentace politické mapy a paralelní dynastie.",
          "Vojenské a technologické změny (např. koně a vozy v širším regionálním kontextu).",
          "Postupné posilování thébské moci a cesta k expanzi Nové říše."
        ],
        "whyItMatters": [
          "Často se zde vysvětluje, proč Nová říše startuje tak „imperiálně“ – je to reakce na předchozí zranitelnost.",
          "Je to období, kde je chronologie nejcitlivější a prameny nejfragmentárnější."
        ],
        "whatToLookFor": [
          "Regionální rozdíly: Delta vs. Horní Egypt.",
          "Stopy kontaktů s Levantou a širším Blízkým východem."
        ],
        "funFacts": [
          "Termín „Hyksós“ je moderní zjednodušení pro komplexní skupiny a dynastické struktury."
        ],
        "tags": [
          "Hyksósové",
          "Théby",
          "fragmentace",
          "inovace",
          "přechod"
        ]
      }
    },
    {
      "id": "new_kingdom",
      "type": "period",
      "name": "Nová říše (18.–20. dynastie) – věk chrámů",
      "startYear": -1550,
      "endYear": -1070,
      "confidence": "high",
      "summary": "Imperiální vrchol: expanze, bohatství chrámů a monumentální stavby (Karnak/Luxor, Údolí králů). Doba velkých osobností i ideologických zlomů (Amarna) a intenzivní státní propagandy.",
      "detail": {
        "whatHappens": [
          "Vojenská expanze a diplomacie; Egypt jako regionální velmoc.",
          "Monumentální chrámové projekty a ekonomická síla kněžstva.",
          "Náboženské a dvorské proměny (včetně amarnské reformy) a následná „rekonstrukce řádu“."
        ],
        "whyItMatters": [
          "Nejviditelnější architektonické dědictví Egypta pochází právě odsud.",
          "Je to ideální období pro „detail panel“ v UI: jednotliví vládcové mají výrazné příběhy."
        ],
        "whatToLookFor": [
          "Chrámové nápisy jako propaganda a „státní komunikace“.",
          "Pohřební architektura v Údolí králů – posun od pyramid k skalním hrobkám."
        ],
        "funFacts": [
          "Amarnská epizoda je jedním z nejdramatičtějších ideologických experimentů starověku."
        ],
        "tags": [
          "imperium",
          "chrám",
          "Karnak",
          "Amarna",
          "Údolí králů"
        ]
      }
    },
    {
      "id": "third_intermediate",
      "type": "period",
      "name": "Třetí přechodné období (21.–25. dynastie)",
      "startYear": -1070,
      "endYear": -664,
      "confidence": "high",
      "summary": "Decentralizace a více mocenských center: Tanis, Théby a další regionální dynastie. V závěru nastupují núbijští (kušitští) vládci, kteří přinášejí novou dynamiku legitimity a tradice.",
      "detail": {
        "whatHappens": [
          "Rozdělení moci mezi královské a kněžské/vojenské elity; časté spoluvlády.",
          "Mocenská mapa se mění rychle; regionální dynastie se překrývají.",
          "Kušitští faraoni (25. dynastie) obnovují některé tradice a střetávají se s asyrským tlakem."
        ],
        "whyItMatters": [
          "Výborně ukazuje, jak flexibilní může být egyptská státnost: různé modely moci v jednom kulturním rámci.",
          "Je to přechod k Pozdní době a k častějším zásahům vnějších mocností."
        ],
        "whatToLookFor": [
          "Dvojí centra moci (Delta vs. Horní Egypt) v titulatuře a památkách.",
          "Archaizující styl – vědomé „navazování“ na minulost."
        ],
        "funFacts": [
          "Egyptská legitimita byla natolik univerzální, že ji dokázali úspěšně adoptovat i vládci z Núbie."
        ],
        "tags": [
          "Tanis",
          "Théby",
          "kušitští",
          "spoluvlády",
          "decentralizace"
        ]
      }
    },
    {
      "id": "late_period",
      "type": "period",
      "name": "Pozdní období (26.–31. dynastie)",
      "startYear": -664,
      "endYear": -332,
      "confidence": "high",
      "summary": "Obnova tradic i střet s velmocemi: saiská renesance, poté perské okupace a krátké návraty nezávislosti. Silná „archaizace“ v umění i ideologii je vědomou strategií, jak se opřít o slavnou minulost.",
      "detail": {
        "whatHappens": [
          "26. dynastie (Sais): kulturní obnova a návrat ke klasickým formám.",
          "Perská kontrola a administrativní změny; opakované konflikty o autonomii.",
          "Poslední domácí dynastie (30.) před Alexandrem – snaha o stabilizaci v těžkém geopolitickém prostředí."
        ],
        "whyItMatters": [
          "Pozdní období boří mýtus „úpadku“: je to éra silných tradic, diplomacie a adaptace.",
          "Je to přímý most k helénistickému Egyptu."
        ],
        "whatToLookFor": [
          "Archaizující styl soch a textů – záměrné „retro“, které má legitimizovat současnost.",
          "Stopy cizích správních praktik vedle egyptské kontinuity."
        ],
        "funFacts": [
          "Egypt byl tak prestižní, že si i cizí vládci osvojovali faraonskou titulaturu."
        ],
        "tags": [
          "Sais",
          "Persie",
          "archaizace",
          "diplomacie",
          "poslední dynastie"
        ]
      }
    },
    {
      "id": "ptolemaic",
      "type": "period",
      "name": "Ptolemaiovské období",
      "startYear": -332,
      "endYear": -30,
      "confidence": "high",
      "summary": "Helénistická monarchie s centrem v Alexandrii: řecké dvorské modely se propojují s egyptskou náboženskou legitimitou. Ekonomická síla a věda kontrastují s dynastickými konflikty a rostoucím tlakem Říma.",
      "detail": {
        "whatHappens": [
          "Alexandrie jako kosmopolitní centrum vzdělanosti, obchodu a správy.",
          "Dynastické spory a spoluvlády; střídání stabilit a krizí.",
          "Růst římského vlivu až k formálnímu konci nezávislosti."
        ],
        "whyItMatters": [
          "Je to laboratorní směs kultur: řecká elita, egyptské chrámy, mezinárodní ekonomika.",
          "Pro timeline je to ideální pro propojení s římskými dějinami."
        ],
        "whatToLookFor": [
          "Ikonografie na mincích a titulatura: jak se vládci představují různým publikům.",
          "Napětí mezi Alexandrií a tradičními náboženskými centry."
        ],
        "funFacts": [
          "Ptolemaiovci vládli jako řečtí králové, ale legitimizovali se i jako faraoni."
        ],
        "tags": [
          "Alexandrie",
          "helénismus",
          "Řím",
          "spoluvlády",
          "mince"
        ]
      }
    },
    {
      "id": "roman",
      "type": "period",
      "name": "Římské období (Egypt jako provincie)",
      "startYear": -30,
      "endYear": 395,
      "confidence": "high",
      "summary": "Egypt se stává římskou provincií: ekonomicky klíčový (obilí), správně řízený zvenčí. Kulturní kontinuita přetrvává, ale politické centrum je mimo Egypt; proměňuje se i náboženská krajina.",
      "detail": {
        "whatHappens": [
          "Římská správa a vojenská kontrola; Egypt jako strategický zdroj pro impérium.",
          "Soužití tradičních kultů s novými proudy; postupné změny v náboženském prostoru.",
          "Dlouhá pozdně-antická transformace až do pozdně římské doby."
        ],
        "whyItMatters": [
          "Uzavírá faraonskou politickou nezávislost, ale ne kulturní příběh Egypta.",
          "Skvělé pro „volitelnou vrstvu“ timeline – navazuje na Kleopatru a přechod k Římu."
        ],
        "whatToLookFor": [
          "Římské administrativní stopy vedle egyptské tradice.",
          "Změny v ikonografii a titulatuře."
        ],
        "funFacts": [
          "Římským císařům se někdy formálně přisuzuje faraonská titulatura – reálná moc je ale římská."
        ],
        "tags": [
          "provincie",
          "obilí",
          "správa",
          "pozdní antika",
          "kontinuita"
        ]
      }
    }
  ],
  "dynasties": [
    {
      "id": "dyn_0",
      "type": "dynasty",
      "name": "0. dynastie (proto-dynastická)",
      "periodId": "predynastic",
      "startYear": -3200,
      "endYear": -3100,
      "confidence": "medium",
      "notes": "Pozdní fáze předdynastické éry; vládci s královskými znaky a centralizačními ambicemi.",
      "rulersIndex": [
        "narmer"
      ]
    },
    {
      "id": "dyn_1",
      "type": "dynasty",
      "name": "1. dynastie",
      "periodId": "early_dynastic",
      "startYear": -3100,
      "endYear": -2890,
      "confidence": "medium",
      "notes": "Formování raného státu, královské ideologie a administrativy.",
      "rulersIndex": [
        "narmer",
        "hor_aha",
        "djer",
        "djet",
        "den",
        "anadjib",
        "semerkhet",
        "qa_a"
      ]
    },
    {
      "id": "dyn_2",
      "type": "dynasty",
      "name": "2. dynastie",
      "periodId": "early_dynastic",
      "startYear": -2890,
      "endYear": -2686,
      "confidence": "medium",
      "notes": "Raně dynastické období; umocňování státních institucí a standardizace správy.",
      "rulersIndex": [
        "hetepsekhemwy",
        "raneb",
        "ninetjer",
        "sekhemib",
        "peribsen",
        "khasekhemwy"
      ]
    },
    {
      "id": "dyn_3",
      "type": "dynasty",
      "name": "3. dynastie",
      "periodId": "old_kingdom",
      "startYear": -2686,
      "endYear": -2613,
      "confidence": "medium",
      "notes": "Začátek Staré říše; nástup monumentální kamenné architektury.",
      "rulersIndex": [
        "djoser",
        "sekhemkhet",
        "khaba",
        "huni"
      ]
    },
    {
      "id": "dyn_4",
      "type": "dynasty",
      "name": "4. dynastie (Gíza)",
      "periodId": "old_kingdom",
      "startYear": -2613,
      "endYear": -2494,
      "confidence": "medium",
      "notes": "Vrchol pyramidové éry; Gíza a Dahšúr jako centra královských komplexů.",
      "rulersIndex": [
        "sneferu",
        "khufu",
        "djedefre",
        "khafre",
        "menkaure",
        "shepseskaf"
      ]
    },
    {
      "id": "dyn_5",
      "type": "dynasty",
      "name": "5. dynastie",
      "periodId": "old_kingdom",
      "startYear": -2494,
      "endYear": -2345,
      "confidence": "medium",
      "notes": "Pozdní Stará říše; přechod k menší centralizaci a růst vlivu chrámů.",
      "rulersIndex": [
        "userkaf",
        "sahure",
        "neferirkare",
        "shepseskare",
        "neferefre",
        "niuserre",
        "menkauhor",
        "djedkare",
        "unas"
      ]
    },
    {
      "id": "dyn_6",
      "type": "dynasty",
      "name": "6. dynastie",
      "periodId": "old_kingdom",
      "startYear": -2345,
      "endYear": -2181,
      "confidence": "medium",
      "notes": "Závěr Staré říše; postupný rozpad centralizace a růst regionálních mocností.",
      "rulersIndex": [
        "teti",
        "userkare",
        "pepi_i",
        "merenre",
        "pepi_ii",
        "merenre_ii",
        "nitocris"
      ]
    },
    {
      "id": "dyn_7",
      "type": "dynasty",
      "name": "7. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "rulersIndex": []
    },
    {
      "id": "dyn_8",
      "type": "dynasty",
      "name": "8. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "rulersIndex": []
    },
    {
      "id": "dyn_9",
      "type": "dynasty",
      "name": "9. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "rulersIndex": []
    },
    {
      "id": "dyn_10",
      "type": "dynasty",
      "name": "10. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "rulersIndex": []
    },
    {
      "id": "dyn_11",
      "type": "dynasty",
      "name": "11. dynastie",
      "periodId": "middle_kingdom",
      "startYear": -2055,
      "endYear": -1985,
      "confidence": "medium",
      "notes": "Raná Střední říše; znovusjednocení a začátek konsolidace centrální moci.",
      "rulersIndex": [
        "mentuhotep_i",
        "mentuhotep_ii",
        "mentuhotep_iii",
        "mentuhotep_iv"
      ]
    },
    {
      "id": "dyn_12",
      "type": "dynasty",
      "name": "12. dynastie",
      "periodId": "middle_kingdom",
      "startYear": -1985,
      "endYear": -1795,
      "confidence": "high",
      "notes": "Vrchol Střední říše; klasická modelová doba efektivní správy a ekonomického rozvoje.",
      "rulersIndex": [
        "amenemhat_i",
        "senusret_i",
        "amenemhat_ii",
        "senusret_ii",
        "senusret_iii",
        "amenemhat_iii",
        "amenemhat_iv",
        "sobekneferu"
      ]
    },
    {
      "id": "dyn_13",
      "type": "dynasty",
      "name": "13. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "rulersIndex": []
    },
    {
      "id": "dyn_14",
      "type": "dynasty",
      "name": "14. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "rulersIndex": []
    },
    {
      "id": "dyn_15",
      "type": "dynasty",
      "name": "15. dynastie (Hyksósové)",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "rulersIndex": []
    },
    {
      "id": "dyn_16",
      "type": "dynasty",
      "name": "16. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "rulersIndex": []
    },
    {
      "id": "dyn_17",
      "type": "dynasty",
      "name": "17. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "rulersIndex": []
    },
    {
      "id": "dyn_18",
      "type": "dynasty",
      "name": "18. dynastie",
      "periodId": "new_kingdom",
      "startYear": -1550,
      "endYear": -1292,
      "confidence": "high",
      "notes": "Nástup Nové říše, expanze a Amarna; výrazné osobnosti a velké stavby.",
      "rulersIndex": [
        "ahmose_i",
        "amenhotep_i",
        "thutmose_i",
        "thutmose_ii",
        "hatshepsut",
        "thutmose_iii",
        "amenhotep_ii",
        "thutmose_iv",
        "amenhotep_iii",
        "akhenaten",
        "smenkhkare",
        "tutankhamun",
        "ay",
        "horemheb"
      ]
    },
    {
      "id": "dyn_19",
      "type": "dynasty",
      "name": "19. dynastie",
      "periodId": "new_kingdom",
      "startYear": -1292,
      "endYear": -1186,
      "confidence": "high",
      "notes": "Ramessovská éra; vrchol imperiální moci a monumentální stavby.",
      "rulersIndex": [
        "sethos_i",
        "ramesses_ii",
        "merenptah",
        "amenmesses",
        "sethos_ii",
        "siptah",
        "tausret"
      ]
    },
    {
      "id": "dyn_20",
      "type": "dynasty",
      "name": "20. dynastie",
      "periodId": "new_kingdom",
      "startYear": -1186,
      "endYear": -1070,
      "confidence": "high",
      "notes": "Pozdní Nová říše; postupný úpadek centrální moci a internacionalní nestabilita.",
      "rulersIndex": [
        "sethnakhte",
        "ramesses_iii",
        "ramesses_iv",
        "ramesses_v",
        "ramesses_vi",
        "ramesses_vii",
        "ramesses_viii",
        "ramesses_ix",
        "ramesses_x",
        "ramesses_xi"
      ]
    },
    {
      "id": "dyn_21",
      "type": "dynasty",
      "name": "21. dynastie",
      "periodId": "third_intermediate",
      "startYear": -1070,
      "endYear": -945,
      "confidence": "medium",
      "notes": "Třetí přechodné období; parallelní mocenské centra a křehká rovnováha.",
      "rulersIndex": [
        "smendes",
        "amenemnisu",
        "psusennes_i",
        "amenemope",
        "osorkon_elder",
        "siamun",
        "psusennes_ii"
      ]
    },
    {
      "id": "dyn_22",
      "type": "dynasty",
      "name": "22. dynastie",
      "periodId": "third_intermediate",
      "startYear": -945,
      "endYear": -715,
      "confidence": "medium",
      "notes": "Třetí přechodné období; Libyjské dynastie a složitá politika regionálních elit.",
      "rulersIndex": [
        "shoshenq_i",
        "osorkon_i",
        "takelot_i",
        "osorkon_ii",
        "takelot_ii",
        "shoshenq_iii",
        "pami",
        "shoshenq_v",
        "osorkon_iv"
      ]
    },
    {
      "id": "dyn_23",
      "type": "dynasty",
      "name": "23. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "rulersIndex": []
    },
    {
      "id": "dyn_24",
      "type": "dynasty",
      "name": "24. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "rulersIndex": []
    },
    {
      "id": "dyn_25",
      "type": "dynasty",
      "name": "25. dynastie (Kušitští/Núbijští)",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "rulersIndex": []
    },
    {
      "id": "dyn_26",
      "type": "dynasty",
      "name": "26. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_27",
      "type": "dynasty",
      "name": "27. dynastie (Perská)",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_28",
      "type": "dynasty",
      "name": "28. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_29",
      "type": "dynasty",
      "name": "29. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_30",
      "type": "dynasty",
      "name": "30. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_31",
      "type": "dynasty",
      "name": "31. dynastie (Perská)",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "rulersIndex": []
    },
    {
      "id": "dyn_ptolemaic",
      "type": "dynasty",
      "name": "Ptolemaiovci",
      "periodId": "ptolemaic",
      "startYear": -305,
      "endYear": -30,
      "confidence": "high",
      "notes": "Helénistická dynastie s centrem v Alexandrii; časté spoluvlády a dynastické krize.",
      "rulersIndex": [
        "ptolemy_i",
        "ptolemy_ii",
        "ptolemy_iii",
        "ptolemy_iv",
        "ptolemy_v",
        "ptolemy_vi",
        "ptolemy_viii",
        "ptolemy_xii",
        "cleopatra_vii"
      ]
    }
  ],
  "entities": [
    {
      "id": "predynastic",
      "type": "period",
      "name": "Předdynastické období",
      "startYear": -5000,
      "endYear": -3100,
      "confidence": "high",
      "summary": "Dlouhá „přípravná fáze“ Egypta: od vesnic a lokálních náčelníků k regionálním centrům moci. Vznikají sociální elity, specializovaná řemesla, dálkový obchod a symbolika autority, která později přejde do královské ideologie.",
      "detail": {
        "whatHappens": [
          "Stabilizace zemědělství v nilské kotlině; růst sídel a regionálních tradic (Horní vs. Dolní Egypt).",
          "Rozvoj elitních pohřbů a znaků statusu; vznik „administrativních“ praktik (značení, pečetění, evidence).",
          "Prohlubování obchodních kontaktů (Núbie, Levanta, Sinaj) a přenos technologií i prestižních materiálů."
        ],
        "whyItMatters": [
          "Bez tohoto období nejde pochopit, proč sjednocení nevzniklo „z ničeho“ – instituce a ideologie se budují postupně.",
          "Ikonografie a rituály moci se rodí ještě před první dynastií."
        ],
        "whatToLookFor": [
          "Přechod od lokálních stylů k širší standardizaci symbolů.",
          "Značky na keramice/pečetích – drobnosti, které často nesou „státní“ logiku."
        ],
        "funFacts": [
          "Termín „0. dynastie“ se někdy používá pro pozdní fázi, kdy už existují vládci s královskými znaky, ale ještě nejde o „klasické“ dynastie."
        ],
        "tags": [
          "počátky státu",
          "Nil",
          "archeologie",
          "společnost",
          "obchod"
        ]
      }
    },
    {
      "id": "early_dynastic",
      "type": "period",
      "name": "Raně dynastické období (1.–2. dynastie)",
      "startYear": -3100,
      "endYear": -2686,
      "confidence": "high",
      "summary": "Zrození dynastického státu: sjednocení „dvou zemí“, stabilizace královské titulatury a rozvoj administrativy. Vzniká model faraona jako garanta řádu, správy i rituálu – a budují se první velké královské nekropole.",
      "detail": {
        "whatHappens": [
          "Konsolidace moci a vznik raných institucí státu (úředníci, daně, logistika).",
          "Upevnění královské ideologie: král jako posvátný vládce a ochránce maat (řádu).",
          "Rozvoj písma a evidenčních praktik – často v administrativním kontextu."
        ],
        "whyItMatters": [
          "Je to období, kdy se „Egypt“ stává fungujícím státem se symboly, které budou přežívat tisíce let.",
          "Prameny jsou fragmentární, ale zásadní: i malé nápisy mohou měnit interpretace."
        ],
        "whatToLookFor": [
          "Serechy, rané hieroglyfické značky a pečetidla.",
          "Motivy dvou korun a sjednocení."
        ],
        "funFacts": [
          "U raných vládců často existuje více jmen/variant přepisů – UI by mělo umět aliasy."
        ],
        "tags": [
          "sjednocení",
          "titulatura",
          "administrativa",
          "nekropole",
          "písmo"
        ]
      }
    },
    {
      "id": "old_kingdom",
      "type": "period",
      "name": "Stará říše (3.–6. dynastie) – věk pyramid",
      "startYear": -2686,
      "endYear": -2181,
      "confidence": "high",
      "summary": "Vrchol centralizace a „státního inženýrství“. Vznikají pyramidové komplexy a rozsáhlá infrastruktura, která vyžaduje koordinaci lidí, materiálu i rituálu. Egyptská ideologie krále a posmrtnosti se promítá do kamene.",
      "detail": {
        "whatHappens": [
          "Monumentální stavby: od Sakkáry k Gíze a dál; standardizace pohřebních komplexů.",
          "Růst administrativy a specializovaných profesí; silná role dvoru a elit.",
          "Dlouhodobé formování „klasické“ estetiky a kanonu královského umění."
        ],
        "whyItMatters": [
          "Stará říše je testem kapacity státu: logistika, ekonomika i ideologie musí fungovat zároveň.",
          "Pyramidy nejsou jen hrobky – jsou politickým prohlášením a rituálním strojem."
        ],
        "whatToLookFor": [
          "Vztah mezi pyramidou, chrámy, procesními cestami a „krajinným plánem“.",
          "Kvalita opracování kamene a orientace staveb."
        ],
        "funFacts": [
          "Dlouho tradované mýty o „otročí“ stavbě jsou problematické; dnes se spíš mluví o organizované pracovní síle s rozsáhlým zázemím."
        ],
        "tags": [
          "pyramidy",
          "centralizace",
          "Sakkára",
          "Gíza",
          "monumenty"
        ]
      }
    },
    {
      "id": "first_intermediate",
      "type": "period",
      "name": "První přechodné období (7.–10. dynastie)",
      "startYear": -2181,
      "endYear": -2055,
      "confidence": "high",
      "summary": "Období decentralizace: více center moci, regionální dynastie a proměnlivé koalice. Vnímáno jako „krize“, ale zároveň jako čas inovací v regionální správě, umění a lokální legitimizaci.",
      "detail": {
        "whatHappens": [
          "Oslabení centrální správy; posílení nomarchů (regionálních vládců).",
          "Paralelní mocenská centra a soupeření o legitimitu.",
          "Kulturní posuny: více regionálních stylů a lokálních tradic."
        ],
        "whyItMatters": [
          "Ukazuje, že Egypt není vždy monolit – stát může být síť center, ne jen jedno centrum.",
          "Připravuje půdu pro nové formy moci ve Střední říši."
        ],
        "whatToLookFor": [
          "Regionální nápisy a pohřební památky, které ukazují lokální sebevědomí.",
          "Změny v titulatuře a v „jazyce“ legitimity."
        ],
        "funFacts": [
          "Číslování dynastií 7–10 je v pramenech obzvlášť citlivé; často jde o rekonstrukce z neúplných seznamů."
        ],
        "tags": [
          "decentralizace",
          "nomarchové",
          "regiony",
          "krize?",
          "legitimita"
        ]
      }
    },
    {
      "id": "middle_kingdom",
      "type": "period",
      "name": "Střední říše (11.–12. dynastie)",
      "startYear": -2055,
      "endYear": -1650,
      "confidence": "high",
      "summary": "Znovusjednocení a stabilizace: reformy správy, posílení armády a státních projektů. Rozkvět literatury a umění, promyšlenější kontrola periferie a důraz na „funkční“ stát.",
      "detail": {
        "whatHappens": [
          "Konsolidace moci a obnova centrální správy; modernizace aparátu.",
          "Státní projekty (zavlažování, opevnění, těžba) a aktivnější zahraniční politika.",
          "Kulturní rozkvět: texty, které formují egyptské sebevnímání."
        ],
        "whyItMatters": [
          "Střední říše je často považována za „klasický“ model efektivní správy.",
          "Vytváří tradice, na které se pozdější epochy rády odvolávají."
        ],
        "whatToLookFor": [
          "Literární tradice (moudrostní texty, vyprávění) a jejich témata.",
          "Státní infrastruktura mimo tradiční jádro."
        ],
        "funFacts": [
          "Mnoho pozdějších panovníků se stylizuje jako „obnovitelé“ právě v duchu Střední říše."
        ],
        "tags": [
          "reformy",
          "literatura",
          "stabilita",
          "projekty",
          "klasika"
        ]
      }
    },
    {
      "id": "second_intermediate",
      "type": "period",
      "name": "Druhé přechodné období (13.–17. dynastie)",
      "startYear": -1650,
      "endYear": -1550,
      "confidence": "high",
      "summary": "Složitá mozaika více vládců a center moci: severní Delta bývá spojována s Hyksósy, zatímco jih kontrolují thébské dynastie. Postupné znovusjednocení vede k nástupu Nové říše.",
      "detail": {
        "whatHappens": [
          "Fragmentace politické mapy a paralelní dynastie.",
          "Vojenské a technologické změny (např. koně a vozy v širším regionálním kontextu).",
          "Postupné posilování thébské moci a cesta k expanzi Nové říše."
        ],
        "whyItMatters": [
          "Často se zde vysvětluje, proč Nová říše startuje tak „imperiálně“ – je to reakce na předchozí zranitelnost.",
          "Je to období, kde je chronologie nejcitlivější a prameny nejfragmentárnější."
        ],
        "whatToLookFor": [
          "Regionální rozdíly: Delta vs. Horní Egypt.",
          "Stopy kontaktů s Levantou a širším Blízkým východem."
        ],
        "funFacts": [
          "Termín „Hyksós“ je moderní zjednodušení pro komplexní skupiny a dynastické struktury."
        ],
        "tags": [
          "Hyksósové",
          "Théby",
          "fragmentace",
          "inovace",
          "přechod"
        ]
      }
    },
    {
      "id": "new_kingdom",
      "type": "period",
      "name": "Nová říše (18.–20. dynastie) – věk chrámů",
      "startYear": -1550,
      "endYear": -1070,
      "confidence": "high",
      "summary": "Imperiální vrchol: expanze, bohatství chrámů a monumentální stavby (Karnak/Luxor, Údolí králů). Doba velkých osobností i ideologických zlomů (Amarna) a intenzivní státní propagandy.",
      "detail": {
        "whatHappens": [
          "Vojenská expanze a diplomacie; Egypt jako regionální velmoc.",
          "Monumentální chrámové projekty a ekonomická síla kněžstva.",
          "Náboženské a dvorské proměny (včetně amarnské reformy) a následná „rekonstrukce řádu“."
        ],
        "whyItMatters": [
          "Nejviditelnější architektonické dědictví Egypta pochází právě odsud.",
          "Je to ideální období pro „detail panel“ v UI: jednotliví vládcové mají výrazné příběhy."
        ],
        "whatToLookFor": [
          "Chrámové nápisy jako propaganda a „státní komunikace“.",
          "Pohřební architektura v Údolí králů – posun od pyramid k skalním hrobkám."
        ],
        "funFacts": [
          "Amarnská epizoda je jedním z nejdramatičtějších ideologických experimentů starověku."
        ],
        "tags": [
          "imperium",
          "chrám",
          "Karnak",
          "Amarna",
          "Údolí králů"
        ]
      }
    },
    {
      "id": "third_intermediate",
      "type": "period",
      "name": "Třetí přechodné období (21.–25. dynastie)",
      "startYear": -1070,
      "endYear": -664,
      "confidence": "high",
      "summary": "Decentralizace a více mocenských center: Tanis, Théby a další regionální dynastie. V závěru nastupují núbijští (kušitští) vládci, kteří přinášejí novou dynamiku legitimity a tradice.",
      "detail": {
        "whatHappens": [
          "Rozdělení moci mezi královské a kněžské/vojenské elity; časté spoluvlády.",
          "Mocenská mapa se mění rychle; regionální dynastie se překrývají.",
          "Kušitští faraoni (25. dynastie) obnovují některé tradice a střetávají se s asyrským tlakem."
        ],
        "whyItMatters": [
          "Výborně ukazuje, jak flexibilní může být egyptská státnost: různé modely moci v jednom kulturním rámci.",
          "Je to přechod k Pozdní době a k častějším zásahům vnějších mocností."
        ],
        "whatToLookFor": [
          "Dvojí centra moci (Delta vs. Horní Egypt) v titulatuře a památkách.",
          "Archaizující styl – vědomé „navazování“ na minulost."
        ],
        "funFacts": [
          "Egyptská legitimita byla natolik univerzální, že ji dokázali úspěšně adoptovat i vládci z Núbie."
        ],
        "tags": [
          "Tanis",
          "Théby",
          "kušitští",
          "spoluvlády",
          "decentralizace"
        ]
      }
    },
    {
      "id": "late_period",
      "type": "period",
      "name": "Pozdní období (26.–31. dynastie)",
      "startYear": -664,
      "endYear": -332,
      "confidence": "high",
      "summary": "Obnova tradic i střet s velmocemi: saiská renesance, poté perské okupace a krátké návraty nezávislosti. Silná „archaizace“ v umění i ideologii je vědomou strategií, jak se opřít o slavnou minulost.",
      "detail": {
        "whatHappens": [
          "26. dynastie (Sais): kulturní obnova a návrat ke klasickým formám.",
          "Perská kontrola a administrativní změny; opakované konflikty o autonomii.",
          "Poslední domácí dynastie (30.) před Alexandrem – snaha o stabilizaci v těžkém geopolitickém prostředí."
        ],
        "whyItMatters": [
          "Pozdní období boří mýtus „úpadku“: je to éra silných tradic, diplomacie a adaptace.",
          "Je to přímý most k helénistickému Egyptu."
        ],
        "whatToLookFor": [
          "Archaizující styl soch a textů – záměrné „retro“, které má legitimizovat současnost.",
          "Stopy cizích správních praktik vedle egyptské kontinuity."
        ],
        "funFacts": [
          "Egypt byl tak prestižní, že si i cizí vládci osvojovali faraonskou titulaturu."
        ],
        "tags": [
          "Sais",
          "Persie",
          "archaizace",
          "diplomacie",
          "poslední dynastie"
        ]
      }
    },
    {
      "id": "ptolemaic",
      "type": "period",
      "name": "Ptolemaiovské období",
      "startYear": -332,
      "endYear": -30,
      "confidence": "high",
      "summary": "Helénistická monarchie s centrem v Alexandrii: řecké dvorské modely se propojují s egyptskou náboženskou legitimitou. Ekonomická síla a věda kontrastují s dynastickými konflikty a rostoucím tlakem Říma.",
      "detail": {
        "whatHappens": [
          "Alexandrie jako kosmopolitní centrum vzdělanosti, obchodu a správy.",
          "Dynastické spory a spoluvlády; střídání stabilit a krizí.",
          "Růst římského vlivu až k formálnímu konci nezávislosti."
        ],
        "whyItMatters": [
          "Je to laboratorní směs kultur: řecká elita, egyptské chrámy, mezinárodní ekonomika.",
          "Pro timeline je to ideální pro propojení s římskými dějinami."
        ],
        "whatToLookFor": [
          "Ikonografie na mincích a titulatura: jak se vládci představují různým publikům.",
          "Napětí mezi Alexandrií a tradičními náboženskými centry."
        ],
        "funFacts": [
          "Ptolemaiovci vládli jako řečtí králové, ale legitimizovali se i jako faraoni."
        ],
        "tags": [
          "Alexandrie",
          "helénismus",
          "Řím",
          "spoluvlády",
          "mince"
        ]
      }
    },
    {
      "id": "roman",
      "type": "period",
      "name": "Římské období (Egypt jako provincie)",
      "startYear": -30,
      "endYear": 395,
      "confidence": "high",
      "summary": "Egypt se stává římskou provincií: ekonomicky klíčový (obilí), správně řízený zvenčí. Kulturní kontinuita přetrvává, ale politické centrum je mimo Egypt; proměňuje se i náboženská krajina.",
      "detail": {
        "whatHappens": [
          "Římská správa a vojenská kontrola; Egypt jako strategický zdroj pro impérium.",
          "Soužití tradičních kultů s novými proudy; postupné změny v náboženském prostoru.",
          "Dlouhá pozdně-antická transformace až do pozdně římské doby."
        ],
        "whyItMatters": [
          "Uzavírá faraonskou politickou nezávislost, ale ne kulturní příběh Egypta.",
          "Skvělé pro „volitelnou vrstvu“ timeline – navazuje na Kleopatru a přechod k Římu."
        ],
        "whatToLookFor": [
          "Římské administrativní stopy vedle egyptské tradice.",
          "Změny v ikonografii a titulatuře."
        ],
        "funFacts": [
          "Římským císařům se někdy formálně přisuzuje faraonská titulatura – reálná moc je ale římská."
        ],
        "tags": [
          "provincie",
          "obilí",
          "správa",
          "pozdní antika",
          "kontinuita"
        ]
      }
    },
    {
      "id": "dyn_0",
      "type": "dynasty",
      "name": "0. dynastie (proto-dynastická)",
      "periodId": "predynastic",
      "startYear": -3200,
      "endYear": -3100,
      "confidence": "medium",
      "summary": "Pozdní fáze předdynastické éry; používá se pro vládce, kteří už mají královské znaky a centralizační ambice.",
      "detail": {
        "periodId": "predynastic",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Pozdní fáze předdynastické éry; používá se pro vládce, kteří už mají královské znaky a centralizační ambice."
      }
    },
    {
      "id": "dyn_1",
      "type": "dynasty",
      "name": "1. dynastie",
      "periodId": "early_dynastic",
      "startYear": -3100,
      "endYear": -2890,
      "confidence": "medium",
      "summary": "Formování raného státu, královské ideologie a administrativy.",
      "detail": {
        "periodId": "early_dynastic",
        "rulersCount": 8,
        "character": [
          "Upevnění královského rituálu a ikonografie (dvě země, titulatura).",
          "Rozvoj rané administrativy a evidence."
        ],
        "keyThemes": [
          "sjednocení",
          "správa",
          "nekropole",
          "rané písmo"
        ],
        "notes": "Formování raného státu, královské ideologie a administrativy."
      }
    },
    {
      "id": "dyn_2",
      "type": "dynasty",
      "name": "2. dynastie",
      "periodId": "early_dynastic",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "early_dynastic",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_3",
      "type": "dynasty",
      "name": "3. dynastie",
      "periodId": "old_kingdom",
      "startYear": -2686,
      "endYear": -2613,
      "confidence": "medium",
      "summary": "Začátek Staré říše; nástup monumentální kamenné architektury.",
      "detail": {
        "periodId": "old_kingdom",
        "rulersCount": 4,
        "character": [
          "Technologický skok: kámen jako hlavní médium monumentální architektury.",
          "Vznik „modelu“ královského pohřebního komplexu."
        ],
        "keyThemes": [
          "Sakkára",
          "architektura",
          "Imhotep",
          "stát"
        ],
        "notes": "Začátek Staré říše; nástup monumentální kamenné architektury."
      }
    },
    {
      "id": "dyn_4",
      "type": "dynasty",
      "name": "4. dynastie (Gíza)",
      "periodId": "old_kingdom",
      "startYear": -2613,
      "endYear": -2494,
      "confidence": "medium",
      "summary": "Vrchol pyramidové éry; Gíza a Dahšúr jako centra královských komplexů.",
      "detail": {
        "periodId": "old_kingdom",
        "rulersCount": 6,
        "character": [
          "Vrchol pyramidového programu a královské krajiny Gízy.",
          "Monument jako propaganda i logistický projekt."
        ],
        "keyThemes": [
          "Gíza",
          "Dahšúr",
          "pyramidy",
          "centralizace"
        ],
        "notes": "Vrchol pyramidové éry; Gíza a Dahšúr jako centra královských komplexů."
      }
    },
    {
      "id": "dyn_5",
      "type": "dynasty",
      "name": "5. dynastie",
      "periodId": "old_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "old_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_6",
      "type": "dynasty",
      "name": "6. dynastie",
      "periodId": "old_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "old_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_7",
      "type": "dynasty",
      "name": "7. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "detail": {
        "periodId": "first_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: období s nejistou chronologií a paralelními vládami."
      }
    },
    {
      "id": "dyn_8",
      "type": "dynasty",
      "name": "8. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "detail": {
        "periodId": "first_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: období s nejistou chronologií a paralelními vládami."
      }
    },
    {
      "id": "dyn_9",
      "type": "dynasty",
      "name": "9. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "detail": {
        "periodId": "first_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: období s nejistou chronologií a paralelními vládami."
      }
    },
    {
      "id": "dyn_10",
      "type": "dynasty",
      "name": "10. dynastie",
      "periodId": "first_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: období s nejistou chronologií a paralelními vládami.",
      "detail": {
        "periodId": "first_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: období s nejistou chronologií a paralelními vládami."
      }
    },
    {
      "id": "dyn_11",
      "type": "dynasty",
      "name": "11. dynastie",
      "periodId": "middle_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "middle_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_12",
      "type": "dynasty",
      "name": "12. dynastie",
      "periodId": "middle_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "middle_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_13",
      "type": "dynasty",
      "name": "13. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "detail": {
        "periodId": "second_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii."
      }
    },
    {
      "id": "dyn_14",
      "type": "dynasty",
      "name": "14. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "detail": {
        "periodId": "second_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii."
      }
    },
    {
      "id": "dyn_15",
      "type": "dynasty",
      "name": "15. dynastie (Hyksósové)",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "detail": {
        "periodId": "second_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii."
      }
    },
    {
      "id": "dyn_16",
      "type": "dynasty",
      "name": "16. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "detail": {
        "periodId": "second_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii."
      }
    },
    {
      "id": "dyn_17",
      "type": "dynasty",
      "name": "17. dynastie",
      "periodId": "second_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: druhé přechodné období má složitou a spornou chronologii.",
      "detail": {
        "periodId": "second_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: druhé přechodné období má složitou a spornou chronologii."
      }
    },
    {
      "id": "dyn_18",
      "type": "dynasty",
      "name": "18. dynastie",
      "periodId": "new_kingdom",
      "startYear": -1550,
      "endYear": -1292,
      "confidence": "high",
      "summary": "Nástup Nové říše, expanze a Amarna; výrazné osobnosti a velké stavby.",
      "detail": {
        "periodId": "new_kingdom",
        "rulersCount": 14,
        "character": [
          "Expanze, diplomacie a vrcholná chrámová architektura.",
          "Amarnská epizoda a následná „rekonstrukce“ náboženského řádu."
        ],
        "keyThemes": [
          "Karnak",
          "Amarna",
          "Údolí králů",
          "imperium"
        ],
        "notes": "Nástup Nové říše, expanze a Amarna; výrazné osobnosti a velké stavby."
      }
    },
    {
      "id": "dyn_19",
      "type": "dynasty",
      "name": "19. dynastie",
      "periodId": "new_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: ramessovská éra (doplnit vládce).",
      "detail": {
        "periodId": "new_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: ramessovská éra (doplnit vládce)."
      }
    },
    {
      "id": "dyn_20",
      "type": "dynasty",
      "name": "20. dynastie",
      "periodId": "new_kingdom",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní Nová říše (doplnit vládce).",
      "detail": {
        "periodId": "new_kingdom",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní Nová říše (doplnit vládce)."
      }
    },
    {
      "id": "dyn_21",
      "type": "dynasty",
      "name": "21. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "detail": {
        "periodId": "third_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií."
      }
    },
    {
      "id": "dyn_22",
      "type": "dynasty",
      "name": "22. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "detail": {
        "periodId": "third_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií."
      }
    },
    {
      "id": "dyn_23",
      "type": "dynasty",
      "name": "23. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "detail": {
        "periodId": "third_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií."
      }
    },
    {
      "id": "dyn_24",
      "type": "dynasty",
      "name": "24. dynastie",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "detail": {
        "periodId": "third_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií."
      }
    },
    {
      "id": "dyn_25",
      "type": "dynasty",
      "name": "25. dynastie (Kušitští/Núbijští)",
      "periodId": "third_intermediate",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: třetí přechodné období má mnoho paralelních linií.",
      "detail": {
        "periodId": "third_intermediate",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: třetí přechodné období má mnoho paralelních linií."
      }
    },
    {
      "id": "dyn_26",
      "type": "dynasty",
      "name": "26. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_27",
      "type": "dynasty",
      "name": "27. dynastie (Perská)",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_28",
      "type": "dynasty",
      "name": "28. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_29",
      "type": "dynasty",
      "name": "29. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_30",
      "type": "dynasty",
      "name": "30. dynastie",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_31",
      "type": "dynasty",
      "name": "31. dynastie (Perská)",
      "periodId": "late_period",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "summary": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie.",
      "detail": {
        "periodId": "late_period",
        "rulersCount": 0,
        "character": [
          "Placeholder dynastie připravená pro doplnění vládců a konkrétních událostí."
        ],
        "keyThemes": [
          "chronologie",
          "prameny",
          "nejistota"
        ],
        "notes": "Placeholder: pozdní doba – doplnit vládce dle zvolené chronologie."
      }
    },
    {
      "id": "dyn_ptolemaic",
      "type": "dynasty",
      "name": "Ptolemaiovci",
      "periodId": "ptolemaic",
      "startYear": -305,
      "endYear": -30,
      "confidence": "high",
      "summary": "Helénistická dynastie s centrem v Alexandrii; časté spoluvlády a dynastické krize.",
      "detail": {
        "periodId": "ptolemaic",
        "rulersCount": 9,
        "character": [
          "Alexandrie jako centrum moci; helénistická správa + egyptská legitimita.",
          "Dynastické spory a postupný nárůst římského vlivu."
        ],
        "keyThemes": [
          "Alexandrie",
          "Řím",
          "mince",
          "spoluvlády"
        ],
        "notes": "Helénistická dynastie s centrem v Alexandrii; časté spoluvlády a dynastické krize."
      }
    },
    {
      "id": "narmer",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Narmer",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": -3100,
      "endYear": -3050,
      "confidence": "medium",
      "locations": [
        "Abydos",
        "Memphis"
      ],
      "tags": [
        "sjednocení",
        "počátky státu",
        "ikonografie"
      ],
      "summary": "Tradičně spojován se sjednocením Horního a Dolního Egypta. Jeho jméno a symboly stojí na prahu dynastického státu: méně „jedna bitva“, více dlouhý proces konsolidace moci a rituální legitimity.",
      "detail": {
        "who": "Raně dynastický král na hraně mezi předdynastickou fragmentací a státní centralizací.",
        "whyImportant": [
          "Symbol sjednocení a standardizace královské moci.",
          "Upevnění ikonografie krále jako ochránce řádu (maat)."
        ],
        "whatToLookFor": [
          "Motivy dvou zemí (koruny, sjednocovací scény).",
          "Rané nápisy/pečetě a serechy."
        ],
        "funFacts": [
          "Narmer je často spojován s ikonickými artefakty, které jsou zároveň propaganda i rituální obraz moci.",
          "U raných vládců se běžně řeší identifikace jmen a pořadí – UI by mělo mít aliasy a nejistotu."
        ],
        "tags": [
          "sjednocení",
          "propaganda",
          "rané písmo"
        ]
      }
    },
    {
      "id": "hor_aha",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Hor-Aha",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos",
        "Memphis"
      ],
      "tags": [
        "raný stát",
        "nekropole"
      ],
      "summary": "Raný vládce 1. dynastie, známý hlavně z fragmentárních pramenů. V jeho době pokračuje budování institucí státu a královských nekropolí, ale přesné datování a detaily vlády jsou nejisté.",
      "detail": {
        "who": "Král 1. dynastie navazující na proces konsolidace státu.",
        "whyImportant": [
          "Patří do generace, která stabilizuje nově vzniklý stát a jeho rituály."
        ],
        "whatToLookFor": [
          "Královské značky na pečetích a nápisech; vazby na nekropole."
        ],
        "funFacts": [
          "Jméno se zapisuje v různých transkripcích (Hor-Aha/Aha)."
        ]
      }
    },
    {
      "id": "djer",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Džer",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "nekropole",
        "raná titulatura"
      ],
      "summary": "Vládce 1. dynastie s nejistým datováním; bývá spojován s královskými pohřby v Abydu. Představuje dobu, kdy se královská identita (jméno, titulatura, rituály) teprve standardizuje.",
      "detail": {
        "who": "Raný král známý hlavně z archeologických stop.",
        "whyImportant": [
          "Je součástí řetězce raných vládců, kteří stabilizují dynastickou tradici."
        ],
        "whatToLookFor": [
          "Značky na nádobách, pečetích a v pohřebním kontextu."
        ],
        "funFacts": [
          "U raných králů je důležitější archeologie než „narativ“ z textů."
        ]
      }
    },
    {
      "id": "djet",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Džet",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "raná správa",
        "nápisy"
      ],
      "summary": "Král 1. dynastie, jehož vláda je doložena převážně fragmentárně. Období charakterizuje raná administrativa a rituální reprezentace krále v pohřebních a státních kontextech.",
      "detail": {
        "who": "Raně dynastický vládce se slabým pramenným krytím.",
        "whyImportant": [
          "Pomáhá mapovat rané postupy správy a reprezentace moci."
        ],
        "whatToLookFor": [
          "Královské značky (serech) a krátké nápisy."
        ],
        "funFacts": [
          "Datace a pořadí vládců 1. dynastie se v detailech liší podle zdrojů."
        ]
      }
    },
    {
      "id": "den",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Den",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos",
        "Memphis"
      ],
      "tags": [
        "reformy?",
        "titulatura",
        "správa"
      ],
      "summary": "Jeden z nejlépe doložených králů 1. dynastie (ve srovnání s ostatními), často spojovaný s rozvojem titulatury a státních praktik. Přesná datace je však v modelu ponechána jako nejistá.",
      "detail": {
        "who": "Král 1. dynastie s relativně výrazným archeologickým profilem.",
        "whyImportant": [
          "Je často uváděn jako příklad zralého raně dynastického státu."
        ],
        "whatToLookFor": [
          "Administrativní značky, pečetě a doklady státních aktivit."
        ],
        "funFacts": [
          "U Dena se někdy zmiňuje výraznější standardizace královské reprezentace."
        ]
      }
    },
    {
      "id": "anadjib",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Anedžib",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "legitimita",
        "dvůr"
      ],
      "summary": "Raně dynastický vládce s fragmentárními prameny. V této fázi je klíčové, jak král komunikuje legitimitu – i malé nápisy a titulární formule mohou být politickým signálem.",
      "detail": {
        "who": "Král 1. dynastie; prameny jsou omezené.",
        "whyImportant": [
          "Dobře ilustruje, jak je raný Egypt citlivý na otázky legitimity a nástupnictví."
        ],
        "whatToLookFor": [
          "Variace v titulatuře a královských značkách."
        ],
        "funFacts": [
          "Jméno se v literatuře přepisuje různě (Anedžib/Adjib)."
        ]
      }
    },
    {
      "id": "semerkhet",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Semerchet",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "nástupnictví",
        "prameny"
      ],
      "summary": "Král 1. dynastie známý z omezených nápisů a královských seznamů. Připomíná, že rané dějiny Egypta jsou mozaika fragmentů, kde i drobný nález může přepsat interpretaci.",
      "detail": {
        "who": "Raně dynastický král s omezenými archeologickými doklady.",
        "whyImportant": [
          "Příklad toho, jak křehká je chronologie raných dynastií."
        ],
        "whatToLookFor": [
          "Krátké nápisy, pečetidla a pohřební kontext."
        ],
        "funFacts": [
          "Někdy se diskutuje délka vlády a stabilita období – prameny jsou však omezené."
        ]
      }
    },
    {
      "id": "qa_a",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Qa'a",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_1",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "závěr dynastie",
        "přechod"
      ],
      "summary": "Závěrečný král 1. dynastie (tradičně). Jeho období je často vnímáno jako přechodový moment k 2. dynastii, kdy se mohou měnit vnitrodynastické vztahy i forma správy.",
      "detail": {
        "who": "Pozdní vládce 1. dynastie na hraně dynastického přechodu.",
        "whyImportant": [
          "Pomáhá rámovat, jak může vypadat nástupnictví a změna dynastie v raném státě."
        ],
        "whatToLookFor": [
          "Pozdní artefakty 1. dynastie a možné signály změn v administrativě."
        ],
        "funFacts": [
          "Přechody mezi dynastiemi nebývají „čisté“ – často jde o postupnou proměnu elit."
        ]
      }
    },
    {
      "id": "djoser",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Džoser",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_3",
      "startYear": -2667,
      "endYear": -2648,
      "confidence": "medium",
      "locations": [
        "Saqqara"
      ],
      "tags": [
        "pyramida",
        "Imhotep",
        "architektura"
      ],
      "summary": "Přelomový vládce Staré říše: za jeho vlády vzniká stupňovitá pyramida v Sakkáře a celý pohřební komplex, který mění architekturu i „jazyk“ královské moci. Ukazuje schopnost státu organizovat megaprojekt a převést ideologii do kamene.",
      "detail": {
        "who": "Faraon 3. dynastie spojený s první monumentální kamennou architekturou v plném měřítku.",
        "whyImportant": [
          "Stupňovitá pyramida je prototyp – předchůdce pozdějších „pravých“ pyramid.",
          "Komplex funguje jako rituální město pro posmrtný život krále."
        ],
        "whatToLookFor": [
          "Vývoj stavby (stupně jako čitelné fáze).",
          "Rozsah areálu: zdi, nádvoří, rituální trasy."
        ],
        "funFacts": [
          "Imhotep je jednou z prvních historicky známých osobností-architektů; později byl uctíván jako učenec a léčitel."
        ]
      }
    },
    {
      "id": "sekhemkhet",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Sechemchet",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_3",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Saqqara"
      ],
      "tags": [
        "nedokončené projekty",
        "pyramida"
      ],
      "summary": "Vládce 3. dynastie často spojovaný s nedokončeným nebo problematicky doloženým stavebním programem. V této fázi se experimentuje s architekturou a královské projekty mohou zůstat nedokončené kvůli krátké vládě či politickým změnám.",
      "detail": {
        "who": "Král 3. dynastie se slabšími prameny a nejistým datováním.",
        "whyImportant": [
          "Dokládá, že monumentální programy byly citlivé na délku vlády a kontinuitu správy."
        ],
        "whatToLookFor": [
          "Nedokončené či „přerušené“ stavební stopy a jejich interpretace."
        ],
        "funFacts": [
          "U některých vládců Staré říše známe spíš projekty než „příběh“ – archeologie dominuje textům."
        ]
      }
    },
    {
      "id": "khaba",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Chaba",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_3",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [],
      "tags": [
        "sporné zařazení",
        "pohřební stavby"
      ],
      "summary": "Král 3. dynastie (někdy diskutovaný) s omezeným pramenným zázemím. Jeho existence a pořadí ilustrují, jak složité je rekonstruovat rané dynastie ze zlomků nápisů a archeologie.",
      "detail": {
        "who": "Vládce se spornějším profilem v chronologii 3. dynastie.",
        "whyImportant": [
          "Příklad nejistoty: model může pracovat s nízkou confidence a chybějícími daty."
        ],
        "whatToLookFor": [
          "Jména na pečetích/artefaktech; vazby na pohřební lokality."
        ],
        "funFacts": [
          "U raných dynastií se často řeší, zda jde o jednoho vládce, variantu jména, nebo chybu v tradici."
        ]
      }
    },
    {
      "id": "huni",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Huni",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_3",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Memphis region"
      ],
      "tags": [
        "přechod",
        "rané pyramidy"
      ],
      "summary": "Pozdní vládce 3. dynastie (tradičně) na prahu 4. dynastie. Často se zmiňuje v souvislosti s přechodem k vrcholnému pyramidovému programu; detaily vlády jsou však nejisté.",
      "detail": {
        "who": "Král na konci 3. dynastie; přechodová postava mezi stavebními experimenty a vrcholem pyramidové éry.",
        "whyImportant": [
          "Pomáhá rámovat kontinuitu mezi Sakkárou a pozdějšími projekty v Dahšúru/Gíze."
        ],
        "whatToLookFor": [
          "Zdroje mohou uvádět různé atribuce staveb; sleduj nejistotu a alternativy."
        ],
        "funFacts": [
          "„Přechodové“ vlády jsou často nejhůř uchopitelné: nejde o jednu ikonickou stavbu, ale o proměnu systému."
        ]
      }
    },
    {
      "id": "sneferu",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Sneferu",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": -2613,
      "endYear": -2589,
      "confidence": "medium",
      "locations": [
        "Dahshur"
      ],
      "tags": [
        "pyramidy",
        "inovace",
        "architektura"
      ],
      "summary": "Zakladatel vrcholné pyramidové éry: spojovaný s klíčovými stavebními inovacemi (přechod k „pravé“ pyramidě). Jeho vláda ukazuje, jak se technika a ideologie navzájem posilují v monumentálních projektech.",
      "detail": {
        "who": "První velký stavitel 4. dynastie; inovátor v pyramidové architektuře.",
        "whyImportant": [
          "Technologické experimenty, které umožnily pozdější Gízu.",
          "Model „stát jako stavitel“ se za něj výrazně posiluje."
        ],
        "whatToLookFor": [
          "Stavební řešení a proměny tvaru pyramid v Dahšúru.",
          "Doklady organizace práce a logistiky."
        ],
        "funFacts": [
          "Sneferu bývá spojován s více pyramidovými projekty – což je samo o sobě rarita."
        ]
      }
    },
    {
      "id": "khufu",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Chufu (Cheops)",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": -2589,
      "endYear": -2566,
      "confidence": "medium",
      "locations": [
        "Giza"
      ],
      "tags": [
        "Velká pyramida",
        "Gíza",
        "7 divů"
      ],
      "summary": "Vládce, pro nějž vznikla Velká pyramida v Gíze – největší pyramida Egypta. Jeho jméno se stalo synonymem pro „pyramidy“, ale ve skutečnosti jde o příběh státní kapacity, propagandy a krajinného plánování.",
      "detail": {
        "who": "Faraon 4. dynastie, spojený s největším monumentem egyptských dějin.",
        "whyImportant": [
          "Velká pyramida je vrcholná demonstrace organizace a legitimity.",
          "Gíza jako plánovaná posvátná krajina se stává ikonou civilizace."
        ],
        "whatToLookFor": [
          "Komplex okolo pyramidy: chrámy, procesní cesta, infrastruktura.",
          "Konstrukční řešení uvnitř pyramidy."
        ],
        "funFacts": [
          "Původní vápencový obklad byl hladký a zářivý; dnešní vzhled je „pozdější“ stav.",
          "Moderní představy o stavbě jsou často mýtotvorné – existuje více realistických rekonstrukcí."
        ]
      }
    },
    {
      "id": "djedefre",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Džedefre",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [],
      "tags": [
        "nástupnictví",
        "Gíza?",
        "spory"
      ],
      "summary": "Král 4. dynastie s nejistým datováním a méně „popkulturním“ profilem. V jeho době se řeší nástupnictví a pokračování monumentální tradice; část informací zůstává fragmentární.",
      "detail": {
        "who": "Nástupce v rámci 4. dynastie s omezenými prameny v popularizačních přehledech.",
        "whyImportant": [
          "Ukazuje, že i v „zlaté éře pyramid“ existují méně jasně doložené mezikroky."
        ],
        "whatToLookFor": [
          "Jak se mění centra a projekty v rámci dynastie; sleduj atribuční nejistoty."
        ],
        "funFacts": [
          "U některých králů 4. dynastie se diskutuje přesné umístění a interpretace pohřebního programu."
        ]
      }
    },
    {
      "id": "khafre",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Rachef (Khafre)",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": -2558,
      "endYear": -2532,
      "confidence": "medium",
      "locations": [
        "Giza"
      ],
      "tags": [
        "pyramida",
        "Sfinga?",
        "Gíza"
      ],
      "summary": "Vládce tradičně spojovaný s druhou pyramidou v Gíze a často i se Sfingou (atribuce Sfingy je však v detailech diskutovaná). Jeho éra posiluje obraz Gízy jako královské krajiny a rituálního centra.",
      "detail": {
        "who": "Faraon 4. dynastie spojený s gízským komplexem a ikonickou královskou reprezentací.",
        "whyImportant": [
          "Upevňuje „gízský program“: pyramida + chrámy + krajina jako propaganda.",
          "Časté propojení se Sfingou dává jeho příběhu silný symbolický rozměr."
        ],
        "whatToLookFor": [
          "Vazby mezi pyramidou, chrámem a procesními osami.",
          "Umělecké reprezentace krále (sochy, proporce, styl)."
        ],
        "funFacts": [
          "Sfinga je zdrojem legend i odborných debat – skvělý příklad, jak se mýtus lepí na kámen."
        ]
      }
    },
    {
      "id": "menkaure",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Menkaure",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": -2532,
      "endYear": -2503,
      "confidence": "medium",
      "locations": [
        "Giza"
      ],
      "tags": [
        "pyramida",
        "Gíza",
        "umění"
      ],
      "summary": "Stavitel třetí pyramidy v Gíze. Jeho vláda je známá mimo jiné i krásnými sochařskými díly, která ukazují „klasický“ styl královské reprezentace Staré říše.",
      "detail": {
        "who": "Faraon 4. dynastie; pokračovatel gízského programu v menším měřítku.",
        "whyImportant": [
          "Dokládá, že monumentální program pokračuje, ale může měnit měřítko a priority.",
          "Sochařství jeho doby patří k vrcholům egyptského umění."
        ],
        "whatToLookFor": [
          "Pyramidový komplex a jeho plán.",
          "Sochy triád a královská ikonografie."
        ],
        "funFacts": [
          "V moderní představivosti je často „ten třetí“, ale jeho umělecké dědictví je prvotřídní."
        ]
      }
    },
    {
      "id": "shepseskaf",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Šepseskaf",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_4",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [],
      "tags": [
        "přechod",
        "konec dynastie"
      ],
      "summary": "Pozdní vládce 4. dynastie (tradičně). Jeho období často reprezentuje přechod a proměnu mezi vrcholnou pyramidovou érou a následujícími dynastiemi, kde se může měnit role chrámů i elit.",
      "detail": {
        "who": "Závěr 4. dynastie; přechodová postava.",
        "whyImportant": [
          "Připomíná, že dynastické konce často znamenají posun v prioritách a mocenských vztazích."
        ],
        "whatToLookFor": [
          "Změny v pohřebních formách a v organizaci komplexů."
        ],
        "funFacts": [
          "Přechody jsou často nejhůř „narativně“ uchopitelné, ale systémově nejzajímavější."
        ]
      }
    },
    {
      "id": "ahmose_i",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ahmose I.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1550,
      "endYear": -1525,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "znovusjednocení",
        "počátek Nové říše",
        "vojensko-politické reformy"
      ],
      "summary": "Zakladatel Nové říše (tradičně): završuje znovusjednocení a nastartuje éru expanze. Jeho vláda je klíčem k pochopení, proč Nová říše začne jednat imperiálně – je to reakce na zranitelnost druhého přechodného období.",
      "detail": {
        "who": "Thebský vládce, který konsoliduje moc a otevírá Novou říši.",
        "whyImportant": [
          "Znovusjednocení a start imperiální politiky.",
          "Reset státního sebevědomí ničící „trauma fragmentace“."
        ],
        "whatToLookFor": [
          "Thebské památky a rané nověříšské nápisy o legitimitě a vítězství."
        ],
        "funFacts": [
          "Začátky Nové říše často kombinují vojenský úspěch s masivní sakrální investicí."
        ]
      }
    },
    {
      "id": "amenhotep_i",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Amenhotep I.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1525,
      "endYear": -1504,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "stabilizace",
        "správa",
        "kultura"
      ],
      "summary": "Panovník rané Nové říše zaměřený na stabilizaci, správu a kulturní kontinuitu. Jeho éra upevňuje nový režim po bouřlivém nástupu a vytváří prostor pro pozdější expanzi Thutmoseovců.",
      "detail": {
        "who": "Raně nověříšský král; konsoliduje stát po znovusjednocení.",
        "whyImportant": [
          "Stabilizace institucí a pokračování stavební a kultovní politiky."
        ],
        "whatToLookFor": [
          "Nápisy o darování chrámům a o budování legitimity v Thébách."
        ],
        "funFacts": [
          "Raná Nová říše často posiluje kultovní centra jako ekonomickou i ideologickou základnu moci."
        ]
      }
    },
    {
      "id": "thutmose_i",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Thutmose I.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1504,
      "endYear": -1492,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "expanze",
        "armáda",
        "imperium"
      ],
      "summary": "Vojensky aktivní vládce, který patří k formování imperiální identity Nové říše. V jeho době se rozšiřují ambice státu a roste význam vojenské elity i chrámových institucí jako partnerů moci.",
      "detail": {
        "who": "Král 18. dynastie spojený s expanzí a posílením armády.",
        "whyImportant": [
          "Pomáhá definovat Novou říši jako velmoc s aktivní zahraniční politikou."
        ],
        "whatToLookFor": [
          "Propagandistické nápisy a záznamy o kampaních."
        ],
        "funFacts": [
          "V Nové říši se politická legitimita často opírá o vojenský úspěch a chrámové investice zároveň."
        ]
      }
    },
    {
      "id": "thutmose_ii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Thutmose II.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1492,
      "endYear": -1479,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "dvůr",
        "dynastie",
        "přechod"
      ],
      "summary": "Vládce s kratší a méně jednoznačně profilovanou vládou ve srovnání s Thutmosem III. či Hatšepsut. V jeho éře je důležité pochopit dynastické vazby a to, jak se moc může sdílet či předávat v rámci dvora.",
      "detail": {
        "who": "Král 18. dynastie v přechodovém období před vrcholem Thutmose III.",
        "whyImportant": [
          "Kontext pro nástup Hatšepsut a později Thutmose III."
        ],
        "whatToLookFor": [
          "Dvorské tituly a role hlavních postav (královna, regentství)."
        ],
        "funFacts": [
          "Nová říše má několik známých případů složitých spoluvlád a regentství."
        ]
      }
    },
    {
      "id": "hatshepsut",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Hatšepsut",
      "aliases": [
        "Hatshepsut"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1473,
      "endYear": -1458,
      "confidence": "medium",
      "locations": [
        "Theby",
        "Deir el-Bahri"
      ],
      "tags": [
        "žena-faraon",
        "propaganda",
        "architektura",
        "obchod"
      ],
      "summary": "Jedna z nejpozoruhodnějších panovnic Egypta: vládne jako faraon a buduje svou legitimitu promyšlenou propagandou i monumentální architekturou. Její éra je známá i důrazem na obchodní expedice a reprezentaci prosperity.",
      "detail": {
        "who": "Královna, která přijímá titulaturu faraona a vládne jako plnohodnotný panovník.",
        "whyImportant": [
          "Ukazuje flexibilitu egyptské ideologie: legitimita se dá „vyrobit“ rituálem, architekturou a narativem.",
          "Její stavby patří k vrcholům Nové říše."
        ],
        "whatToLookFor": [
          "Způsoby zobrazování (královské insignie, stylizace).",
          "Monumentální terasový chrám v Deir el-Bahri (kontext v UI můžeš doplnit jako další entity)."
        ],
        "funFacts": [
          "Pozdější zásahy do památky (poškození jmen/soch) jsou skvělý případ „paměťové politiky“."
        ]
      }
    },
    {
      "id": "thutmose_iii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Thutmose III.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1479,
      "endYear": -1425,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "expanze",
        "vojenství",
        "imperium"
      ],
      "summary": "Často označován jako „Napoleon Egypta“ (zkratka, ale výstižná pro vojenskou aktivitu). Jeho vláda reprezentuje vrchol expanze Nové říše a silnou integraci propagandy, diplomacie a chrámové ekonomiky.",
      "detail": {
        "who": "Král 18. dynastie spojený s rozsáhlými kampaněmi a imperiální politikou.",
        "whyImportant": [
          "Vrchol vojenské expanze a konsolidace říše.",
          "Model, jak Egypt spravuje území mimo Nil a jak legitimizuje dominanci."
        ],
        "whatToLookFor": [
          "Záznamy o kampaních, tribut, seznamy dobytých míst (často v chrámových nápisech)."
        ],
        "funFacts": [
          "Imperiální propaganda Nové říše často funguje jako „státní tisková zpráva“ vytesaná do kamene."
        ]
      }
    },
    {
      "id": "amenhotep_ii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Amenhotep II.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1427,
      "endYear": -1400,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "armáda",
        "sportovní ikonografie",
        "stabilita"
      ],
      "summary": "Panovník, který navazuje na imperiální model a udržuje prestiž státu. Jeho éra je často spojována s důrazem na královu fyzickou zdatnost a vojenskou autoritu jako součást legitimity.",
      "detail": {
        "who": "Král 18. dynastie pokračující v imperiální tradici.",
        "whyImportant": [
          "Udržení impéria vyžaduje nejen expanzi, ale i správu a symbolickou autoritu."
        ],
        "whatToLookFor": [
          "Královská propaganda zdůrazňující sílu, vítězství a řád."
        ],
        "funFacts": [
          "„Atletický král“ je motiv, který se v Nové říši opakuje jako politický marketing."
        ]
      }
    },
    {
      "id": "thutmose_iv",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Thutmose IV.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1400,
      "endYear": -1390,
      "confidence": "medium",
      "locations": [
        "Giza",
        "Theby"
      ],
      "tags": [
        "legitimita",
        "mýty",
        "Sfinga"
      ],
      "summary": "Vládce známý mimo jiné díky narativům, které pracují s legitimizací moci (včetně příběhů spojovaných se Sfingou). Ukazuje, jak se v Nové říši kombinuje náboženská symbolika, rodová legitimita a veřejná propaganda.",
      "detail": {
        "who": "Král 18. dynastie, jehož propaganda pracuje s narativem legitimity.",
        "whyImportant": [
          "Příklad „příběhu o legitimitě“ jako nástroje politiky."
        ],
        "whatToLookFor": [
          "Nápisy a stély, které vyprávějí legitimizační příběh."
        ],
        "funFacts": [
          "Sfinga zůstává zdrojem symboliky i dlouho po Staré říši – mýty se recyklují, protože fungují."
        ]
      }
    },
    {
      "id": "amenhotep_iii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Amenhotep III.",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1390,
      "endYear": -1352,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "prosperita",
        "diplomacie",
        "umění",
        "Luxor"
      ],
      "summary": "Éra bohatství a mezinárodní diplomacie: Amenhotep III. je symbolem „zlatého věku“ před amarnským zlomem. Staví, investuje do umění a využívá diplomacii jako nástroj stability impéria.",
      "detail": {
        "who": "Král 18. dynastie spojený s prosperitou a velkými stavebními programy.",
        "whyImportant": [
          "Vrchol dvorské kultury a mezinárodních vztahů Nové říše.",
          "Připravuje půdu (nechtěně) pro náboženský experiment Achnatona."
        ],
        "whatToLookFor": [
          "Monumenty a umělecké programy; důraz na královskou „sluneční“ ideologii."
        ],
        "funFacts": [
          "V jeho době je diplomacie často stejně důležitá jako válka – impérium drží i skrze sítě vazalů."
        ]
      }
    },
    {
      "id": "akhenaten",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Achnaton (Amenhotep IV.)",
      "aliases": [
        "Amenhotep IV.",
        "Akhenaten"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1353,
      "endYear": -1336,
      "confidence": "medium",
      "locations": [
        "Amarna"
      ],
      "tags": [
        "Amarna",
        "Aton",
        "reforma",
        "náboženství"
      ],
      "summary": "Nejznámější reformátor Nové říše: prosazuje kult Atona a přesouvá dvůr do nového centra (Amarna). Jeho vláda je dramatickou zkouškou toho, co se stane, když panovník přepíše náboženský i politický „operační systém“.",
      "detail": {
        "who": "Faraon 18. dynastie, který spouští amarnskou náboženskou a dvorskou revoluci.",
        "whyImportant": [
          "Ukazuje, jak hluboko je náboženství propojeno s ekonomikou a politikou.",
          "Jeho experiment mění umění, titulaturu i institucionální rovnováhu."
        ],
        "whatToLookFor": [
          "Amarnský styl v umění (odlišná estetika).",
          "Nápisy o Atonovi a změny v tradičních kultovních strukturách."
        ],
        "funFacts": [
          "Po amarnské epizodě následuje snaha o „nápravu“ a vymazávání některých stop – politika paměti v praxi."
        ]
      }
    },
    {
      "id": "smenkhkare",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Smenchkare",
      "aliases": [],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Amarna"
      ],
      "tags": [
        "přechod",
        "spoluvláda?",
        "nejistota"
      ],
      "summary": "Záhadná postava amarnského přechodu: krátká a špatně doložená vláda (případně spoluvláda). Je to typický „debug“ bod chronologie, kde se řeší identita, pořadí i vztah k Achnatonovi.",
      "detail": {
        "who": "Krátce doložený vládce spojený s koncem amarnské éry.",
        "whyImportant": [
          "Klíčový uzel pro pochopení přechodu od Achnatona k Tutanchamonovi."
        ],
        "whatToLookFor": [
          "Diskuse o identitě a titulatuře; možné překryvy jmen."
        ],
        "funFacts": [
          "Některé amarnské postavy jsou natolik špatně doložené, že existuje více konkurujících rekonstrukcí."
        ]
      }
    },
    {
      "id": "tutankhamun",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Tutanchamon",
      "aliases": [
        "Tutankhamun"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1332,
      "endYear": -1323,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "návrat tradic",
        "hrobka",
        "popkultura"
      ],
      "summary": "Král známý hlavně díky mimořádnému nálezu hrobky, ale historicky je důležitý jako symbol návratu k tradičním kultům po amarnské epizodě. Jeho doba ukazuje, že „náprava“ ideologie je často politický projekt celého dvora.",
      "detail": {
        "who": "Mladý faraon, za nějž probíhá obnova tradičních náboženských struktur.",
        "whyImportant": [
          "Znovunastavení vztahů mezi dvorem a chrámy po amarnské reformě.",
          "Jeho hrobka poskytuje unikátní okno do materiální kultury Nové říše."
        ],
        "whatToLookFor": [
          "Restorativní nápisy a změny titulatury.",
          "Materiální kultura (výbava hrobky) jako zdroj poznání každodenního i rituálního života elit."
        ],
        "funFacts": [
          "Jeho historický význam je často přehlušen „objevovým“ významem hrobky – v UI je fajn mít obě roviny."
        ]
      }
    },
    {
      "id": "ay",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Aj",
      "aliases": [
        "Ay"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1323,
      "endYear": -1319,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "dvůr",
        "přechod",
        "stabilizace"
      ],
      "summary": "Dvořan a panovník přechodové fáze po Tutanchamonovi. Představuje roli elit a úřednických struktur, které mohou v krizových obdobích nést kontinuitu státu i ideologie.",
      "detail": {
        "who": "Panovník s hlubokými vazbami na dvorské elity.",
        "whyImportant": [
          "Dokládá, že moc ve státě není jen král – ale i síť elit a institucí."
        ],
        "whatToLookFor": [
          "Titulární a dvorské funkce; stopy legitimizace v nápisech."
        ],
        "funFacts": [
          "Přechodná období Nové říše často zvýrazňují „skryté“ aktéry politiky: úředníky, vojáky, kněze."
        ]
      }
    },
    {
      "id": "horemheb",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Haremheb",
      "aliases": [
        "Horemheb"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_18",
      "startYear": -1319,
      "endYear": -1292,
      "confidence": "medium",
      "locations": [
        "Theby"
      ],
      "tags": [
        "reformy",
        "armáda",
        "rekonstrukce řádu"
      ],
      "summary": "Panovník, který završuje obnovu po amarnské krizi a posiluje státní řád. Často je spojován s reformním tónem a s rolí armády v politice – přemosťuje cestu k 19. dynastii.",
      "detail": {
        "who": "Bývalý vojenský činitel, který stabilizuje režim po amarnské epizodě.",
        "whyImportant": [
          "Konsolidace správy a legitimizace „návratu k řádu“.",
          "Přechod k ramessovské éře (19. dynastie)."
        ],
        "whatToLookFor": [
          "Reformní nápisy a důraz na právo/řád.",
          "Propojení vojenské moci a faraonské legitimity."
        ],
        "funFacts": [
          "Jeho obraz v pramenech je často „restaurátorský“ – ideální pro UI témata o paměťové politice."
        ]
      }
    },
    {
      "id": "ptolemy_i",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios I. Sótér",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -305,
      "endYear": -282,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "Alexandrie",
        "helénismus",
        "stát"
      ],
      "summary": "Zakladatel ptolemaiovského Egypta: buduje helénistickou monarchii, která zároveň potřebuje egyptskou náboženskou legitimitu. Alexandrie se stává centrem správy, obchodu i prestiže.",
      "detail": {
        "who": "Makedonsko-řecký vládce, který stabilizuje nový režim po Alexandrově éře.",
        "whyImportant": [
          "Nastavuje model ptolemaiovské vlády: řecký dvůr + egyptská legitimita.",
          "Buduje institucionální základ Alexandrie jako centra moci."
        ],
        "whatToLookFor": [
          "Rané ptolemaiovské titulatury a ikonografie na mincích.",
          "Vztahy s chrámy jako nástrojem legitimity."
        ],
        "funFacts": [
          "Helénistická administrativa je vysoce byrokratická – ideální pro „státní mechaniku“ v detail panelu."
        ]
      }
    },
    {
      "id": "ptolemy_ii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios II. Filadelfos",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -283,
      "endYear": -246,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "věda",
        "ekonomika",
        "dvůr"
      ],
      "summary": "Éra rozkvětu alexandrijské kultury a ekonomiky. Ptolemaios II. představuje vrchol dvorské reprezentace, mezinárodního obchodu a prestiže helénistického Egypta.",
      "detail": {
        "who": "Ptolemaiovský král spojený s rozkvětem Alexandrie.",
        "whyImportant": [
          "Upevňuje Alexandrii jako centrum vzdělanosti a moci.",
          "Stabilizuje ekonomické a administrativní struktury dynastie."
        ],
        "whatToLookFor": [
          "Dvorské a kulturní programy; numismatika a titulatura."
        ],
        "funFacts": [
          "Helénistický Egypt je „globální“ ve smyslu tehdejšího Středomoří – obchod a diplomacie jsou klíč."
        ]
      }
    },
    {
      "id": "ptolemy_iii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios III. Euergetés",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -246,
      "endYear": -222,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "expanze",
        "prestige",
        "chrámové vztahy"
      ],
      "summary": "Vládce období síly a prestiže, často spojovaný s vojenskými úspěchy i podporou chrámových institucí. Kombinuje helénistickou geopolitiku s egyptskou legitimizací.",
      "detail": {
        "who": "Ptolemaiovský král v době vysoké prestiže dynastie.",
        "whyImportant": [
          "Ukazuje, že ptolemaiovský Egypt je aktivní regionální hráč, ne jen „knihovna a věda“."
        ],
        "whatToLookFor": [
          "Vztahy mezi dvorem a chrámy; veřejná reprezentace úspěchu."
        ],
        "funFacts": [
          "Ptolemaiovci často pracují s dary chrámům jako s politickou investicí."
        ]
      }
    },
    {
      "id": "ptolemy_iv",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios IV. Filopatór",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -221,
      "endYear": -204,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "dvůr",
        "krize",
        "nástupnictví"
      ],
      "summary": "Panovník, jehož éra bývá spojována s dvorskými konflikty a s postupným napětím uvnitř dynastie. Zároveň ukazuje, že stabilita helénistického režimu je křehká a závisí na schopnosti řídit elity.",
      "detail": {
        "who": "Ptolemaiovský král; období se často popisuje jako politicky komplikované.",
        "whyImportant": [
          "Předznamenává, jak dynastické konflikty oslabují stát vůči vnějším tlakům."
        ],
        "whatToLookFor": [
          "Změny v dvorské politice a v legitimizačních strategiích."
        ],
        "funFacts": [
          "Helénistické dynastie často bojují samy se sebou – a tím dávají prostor Římu."
        ]
      }
    },
    {
      "id": "ptolemy_v",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios V. Epifanés",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -204,
      "endYear": -180,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "chrámové dekrety",
        "legitimita",
        "mladý král"
      ],
      "summary": "Jeho vláda je typická pro helénistický problém: mladý/oslabený král a potřeba legitimity skrze chrámové instituce a formální dekrety. V této době roste role „textů legitimity“ jako politického nástroje.",
      "detail": {
        "who": "Ptolemaiovský král, za nějž je silně vidět role chrámů v legitimizaci režimu.",
        "whyImportant": [
          "Ukazuje, jak se řecký dvůr opírá o egyptské náboženské autority.",
          "Vhodné pro UI: „dekret“ jako interaktivní detail (texty, formální jazyk, politika)."
        ],
        "whatToLookFor": [
          "Chrámové formulace, titulatura a vztah dvora k tradici."
        ],
        "funFacts": [
          "V ptolemaiovské éře se často mísí řečtina a egyptské tradice v jednom politickém aktu."
        ]
      }
    },
    {
      "id": "ptolemy_vi",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios VI. Filométór",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -180,
      "endYear": -145,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "spoluvlády",
        "dynastické konflikty",
        "Řím"
      ],
      "summary": "Éra charakteristická dynastickými spory a složitými spoluvládami. V takových obdobích roste význam vnějšího arbitra – a tím se otevírá prostor pro římský vliv.",
      "detail": {
        "who": "Ptolemaiovský král v období dynastických konfliktů a spoluvlád.",
        "whyImportant": [
          "Dobře ilustruje, jak vnitřní nestabilita přitahuje vnější zásahy."
        ],
        "whatToLookFor": [
          "Složitá titulatura a rychlé změny v mocenských vztazích."
        ],
        "funFacts": [
          "Ptolemaiovská chronologie často zahrnuje překryvy vlád – timeline UI by mělo umět paralelní intervaly."
        ]
      }
    },
    {
      "id": "ptolemy_viii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios VIII. Euergetés II.",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -170,
      "endYear": -116,
      "confidence": "medium",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "krize",
        "dvůr",
        "spoluvlády"
      ],
      "summary": "Kontroverzně vnímaný panovník v dlouhé a komplikované éře, často spojené s vnitřními konflikty a proměnlivými aliancemi. Ptolemaiovský stát je v této fázi stále silný, ale politicky vyčerpávaný.",
      "detail": {
        "who": "Ptolemaiovský král v době vysoce konfliktní dvorské politiky.",
        "whyImportant": [
          "Ukazuje, že i dlouhá vláda nemusí znamenat stabilitu – důležitá je kvalita institucí a vztahů elit."
        ],
        "whatToLookFor": [
          "Známky polarizace dvora a proměnlivých spoluvlád."
        ],
        "funFacts": [
          "V helénistických dynastiích může být „rodinná politika“ doslova geopolitika."
        ]
      }
    },
    {
      "id": "ptolemy_xii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ptolemaios XII. Auletés",
      "aliases": [],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -80,
      "endYear": -51,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "Řím",
        "závislost",
        "finance"
      ],
      "summary": "Panovník pozdní ptolemaiovské éry, kdy už je Řím dominantní mocí v pozadí. V jeho době se prohlubuje závislost na římské podpoře a politické „dluhy“ se stávají strategií i pastí.",
      "detail": {
        "who": "Pozdní ptolemaiovský král, jehož politika se silně točí kolem Říma.",
        "whyImportant": [
          "Připravuje scénu pro Kleopatru VII. a finální střet o nezávislost Egypta."
        ],
        "whatToLookFor": [
          "Známky římského vlivu: diplomacie, finance, vnitřní opozice."
        ],
        "funFacts": [
          "V pozdní fázi často rozhodují peníze stejně jako armáda – a Řím to umí využít."
        ]
      }
    },
    {
      "id": "cleopatra_vii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Kleopatra VII.",
      "aliases": [
        "Cleopatra VII"
      ],
      "periodId": "ptolemaic",
      "dynastyId": "dyn_ptolemaic",
      "startYear": -51,
      "endYear": -30,
      "confidence": "high",
      "locations": [
        "Alexandrie"
      ],
      "tags": [
        "Řím",
        "diplomacie",
        "konec nezávislosti",
        "Alexandrie"
      ],
      "summary": "Poslední aktivní vladařka Egypta: schopná politička a diplomatka v době, kdy Řím pohlcuje Středomoří. Popkulturní obraz je jen vrstva; jádro příběhu je o státní strategii, ekonomice a přežití režimu pod tlakem.",
      "detail": {
        "who": "Ptolemaiovská královna vládnoucí z Alexandrie; používá jak řecké dvorské, tak egyptské legitimační formy.",
        "whyImportant": [
          "Poslední velký pokus udržet Egypt jako nezávislého aktéra.",
          "Uzel, kde se egyptská historie přímo propojuje s koncem římské republiky."
        ],
        "whatToLookFor": [
          "Mince a titulatura: jak komunikuje moc různému publiku.",
          "Alexandrie jako nástroj politiky – přístav, správa, propaganda."
        ],
        "funFacts": [
          "Často se uvádí, že patřila mezi ptolemaiovce, kteří se učili egyptsky.",
          "Její příběh je filtrován římskou propagandou; UI může mít „mythsVsReality“ vrstvy."
        ]
      }
    },
    {
      "id": "hetepsekhemwy",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Hetepsekhemwy",
      "aliases": [],
      "periodId": "early_dynastic",
      "dynastyId": "dyn_2",
      "startYear": null,
      "endYear": null,
      "confidence": "low",
      "locations": [
        "Abydos"
      ],
      "tags": [
        "2. dynastie",
        "raný stát"
      ],
      "summary": "Zakladatel 2. dynastie; přechodová postava mezi raně dynastickými obdobími.",
      "detail": {
        "who": "Zakladatel 2. dynastie.",
        "whyImportant": [
          "Markuje begin 2. dynastie."
        ],
        "whatToLookFor": [
          "Královské značky."
        ],
        "funFacts": [
          "Raní vládci mají nejisté datování."
        ]
      }
    },
    {
      "id": "userkaf",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Userkaf",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_5",
      "startYear": -2494,
      "endYear": -2487,
      "confidence": "medium",
      "locations": [
        "Abusír"
      ],
      "tags": [
        "5. dynastie",
        "pyramida"
      ],
      "summary": "Zakladatel 5. dynastie; jeho vláda značí přechod k novému slohu pyramidové architektury.",
      "detail": {
        "who": "Faraon na začátku pozdní Staré říše.",
        "whyImportant": [
          "Ukazuje změny v ideologii."
        ],
        "whatToLookFor": [
          "Prvky sluneční ideologie."
        ],
        "funFacts": [
          "5. dynastie je fascinující pro studium změn v státních prioritách."
        ]
      }
    },
    {
      "id": "teti",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Teti",
      "aliases": [],
      "periodId": "old_kingdom",
      "dynastyId": "dyn_6",
      "startYear": -2345,
      "endYear": -2323,
      "confidence": "medium",
      "locations": [
        "Memphis"
      ],
      "tags": [
        "6. dynastie",
        "texty pyramid"
      ],
      "summary": "Zakladatel 6. dynastie; jeho vláda je první fází krize v Staré říši.",
      "detail": {
        "who": "Vládce přechodového období.",
        "whyImportant": [
          "Začátek procesu decentralizace."
        ],
        "whatToLookFor": [
          "Texty pyramid a jejich témata."
        ],
        "funFacts": [
          "Texty pyramid jsou nejstaršími náboženskými texty v historii."
        ]
      }
    },
    {
      "id": "mentuhotep_ii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Mentuhotep II.",
      "aliases": [],
      "periodId": "middle_kingdom",
      "dynastyId": "dyn_11",
      "startYear": -2010,
      "endYear": -1960,
      "confidence": "high",
      "locations": [
        "Théby"
      ],
      "tags": [
        "11. dynastie",
        "znovusjednocení"
      ],
      "summary": "Klíčový vládce znovusjednocení Egypta; markuje konec Prvního přechodného období.",
      "detail": {
        "who": "Thébský vládce, který sjednotil zemi.",
        "whyImportant": [
          "Symbolu obnovy a kontinuity."
        ],
        "whatToLookFor": [
          "Chrámové stavby a náboženská propaganda."
        ],
        "funFacts": [
          "Deír el-Bahari chrám je jedním z nejkrásnějších egipta monumentů."
        ]
      }
    },
    {
      "id": "senusret_iii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Senusret III.",
      "aliases": [],
      "periodId": "middle_kingdom",
      "dynastyId": "dyn_12",
      "startYear": -1870,
      "endYear": -1831,
      "confidence": "high",
      "locations": [
        "Memphis",
        "Théby"
      ],
      "tags": [
        "12. dynastie",
        "vojenství",
        "Núbie"
      ],
      "summary": "Jeden z největších vládců Střední říše; jeho vláda je charakterizována vojenskou expanzí.",
      "detail": {
        "who": "Mocný faraon známý vojenským úspěchem.",
        "whyImportant": [
          "Vrchol středořímských institucí."
        ],
        "whatToLookFor": [
          "Reformní nápisy; vojenské kampaně."
        ],
        "funFacts": [
          "Jeho portrety jsou realistické a individualizované."
        ]
      }
    },
    {
      "id": "ramesses_ii",
      "type": "ruler",
      "roles": [
        "pharaoh"
      ],
      "name": "Ramesse II.",
      "aliases": [
        "Ramses II"
      ],
      "periodId": "new_kingdom",
      "dynastyId": "dyn_19",
      "startYear": -1279,
      "endYear": -1213,
      "confidence": "high",
      "locations": [
        "Abú Simbel",
        "Memphis"
      ],
      "tags": [
        "19. dynastie",
        "Abu Simbel",
        "dlouhá vláda"
      ],
      "summary": "Jeden z nejznámějších faraonů; jeho dlouhá vláda je charakterizována stavebním programem.",
      "detail": {
        "who": "Ramessovský faraon s dlouhou vládou.",
        "whyImportant": [
          "Symbol ramessovské moci."
        ],
        "whatToLookFor": [
          "Monumenty a jejich sdělení; Abu Simbel."
        ],
        "funFacts": [
          "Ramesse II. se dožil vysokého věku a měl více než 100 dětí."
        ]
      }
    },
    {
      "id": "great_pyramid_giza",
      "type": "monument",
      "name": "Velká pyramida v Gíze",
      "periodId": "old_kingdom",
      "startYear": -2580,
      "endYear": -2560,
      "confidence": "medium",
      "locations": [
        "Giza"
      ],
      "tags": [
        "pyramida",
        "7 divů",
        "hrobka",
        "Gíza"
      ],
      "summary": "Největší pyramida Egypta a jediný dochovaný div starověkého světa. Není to jen „stavba“, ale součást plánované posvátné krajiny a státního programu, který spojuje logistiku, ekonomiku a ideologii krále.",
      "detail": {
        "builtFor": "khufu",
        "purpose": "Královská hrobka a kosmologický symbol (řád, znovuzrození, legitimita).",
        "whatToLookFor": [
          "Vnitřní chodby a komory (konstrukční řešení).",
          "Zbytky obkladu a kvalita opracování.",
          "Vazby na okolní chrámy a infrastrukturu."
        ],
        "mythsVsReality": [
          "Mýtus: stavěli otroci. Realita: spíš organizovaná pracovní síla se zázemím.",
          "Mýtus: existuje jediná jistá metoda stavby. Realita: více plausibilních modelů."
        ],
        "funFacts": [
          "Původně měla hladký vápencový obklad – vizuálně „zářila“.",
          "Gíza je celek: pyramida dává největší smysl v kontextu krajiny."
        ],
        "relatedEntities": [
          {
            "id": "khufu",
            "relation": "built-for"
          },
          {
            "id": "dyn_4",
            "relation": "within-dynasty"
          }
        ]
      }
    },
    {
      "id": "great_sphinx",
      "type": "monument",
      "name": "Velká sfinga",
      "periodId": "old_kingdom",
      "startYear": -2520,
      "endYear": -2490,
      "confidence": "medium",
      "locations": [
        "Giza"
      ],
      "tags": [
        "sfinga",
        "strážce",
        "Gíza",
        "ikona"
      ],
      "summary": "Monumentální sfinga vytesaná z podloží je jedním z nejslavnějších symbolů Egypta. Její příběh je vrstevnatý: od staroegyptské krajiny moci přes pozdější legendy až po moderní konzervaci a odborné debaty o atribuci.",
      "detail": {
        "attribution": "Často spojována s Khafrem, ale detaily atribuce a interpretace se diskutují.",
        "whatToLookFor": [
          "Geologické vrstvy a erozní stopy – „dějiny v materiálu“.",
          "Vztah k chrámům a procesním trasám v Gíze."
        ],
        "mythsVsReality": [
          "Mýtus: nos zničil Napoleon. Realita: poškození je starší.",
          "Mýtus: sfinga byla vždy vidět celá. Realita: dlouho byla zasypaná pískem."
        ],
        "funFacts": [
          "Sfinga se v dějinách opakovaně „znovuobjevuje“ – písek je její přirozený nepřítel i archiv.",
          "Symbolika lva a krále je jasná propaganda: ochrana posvátného prostoru."
        ],
        "relatedEntities": [
          {
            "id": "khafre",
            "relation": "often-attributed-to"
          },
          {
            "id": "great_pyramid_giza",
            "relation": "same-site"
          }
        ]
      }
    },
    {
      "id": "karnak",
      "type": "monument",
      "name": "Karnacký chrámový komplex",
      "periodId": "new_kingdom",
      "startYear": -2000,
      "endYear": -30,
      "confidence": "medium",
      "locations": [
        "Luxor (Theby)"
      ],
      "tags": [
        "Karnak",
        "Amun",
        "chrám",
        "Nová říše"
      ],
      "summary": "Karnak je kamenná kronika Egypta: generace vládců přidávaly pylony, nádvoří, svatyně a nápisy. V Nové říši je to nejen náboženské centrum, ale i ekonomický a politický uzel, kde se formuje propaganda státu.",
      "detail": {
        "whyImportant": [
          "Chrám jako instituce spravuje zdroje (půda, dílny, sklady) – náboženství a stát splývají.",
          "Nápisy fungují jako veřejná komunikace legitimity, darů a vítězství."
        ],
        "whatToLookFor": [
          "Hypostylová síň a její reliéfy.",
          "Pylony jako časové vrstvy – každý je podpis jiné éry.",
          "Procesní osy a propojení s Luxorem."
        ],
        "funFacts": [
          "Karnak je „stavba přes staletí“ – v UI se dá krásně rozfázovat podle vládců.",
          "Mnoho panovníků se do Karnaku zapisuje doslova: vytesáním svého příběhu."
        ]
      }
    },
    {
      "id": "abu_simbel",
      "type": "monument",
      "name": "Abu Simbel (skalní chrámy)",
      "periodId": "new_kingdom",
      "startYear": -1264,
      "endYear": -1244,
      "confidence": "medium",
      "locations": [
        "Abu Simbel"
      ],
      "tags": [
        "Ramesse II",
        "propaganda",
        "Núbie",
        "skalní chrám"
      ],
      "summary": "Skalní chrámy na jihu říše jsou učebnicová propaganda moci: kolosy Ramesse II. mají ohromit a zároveň vyprávět příběh královy legitimity. Moderní dějiny památky jsou neméně slavné díky přesunu ve 20. století.",
      "detail": {
        "builtFor": "Ramesse II. (není v tomto datasetu jako ruler – doplníš v dyn_19)",
        "whyImportant": [
          "Strategické umístění jako signál moci na hranici s Núbií.",
          "Příklad toho, jak architektura pracuje s krajinou a rituálem."
        ],
        "whatToLookFor": [
          "Kolosy u vstupu a reliéfy s vojenskými/rituálními scénami.",
          "Dramaturgie interiéru směrem ke svatyni."
        ],
        "funFacts": [
          "Chrámy byly přesunuty kvůli Asuánské přehradě – „megaprojekt záchrany dědictví“."
        ]
      }
    },
    {
      "id": "julius_caesar",
      "type": "person",
      "name": "Julius Caesar",
      "periodId": "ptolemaic",
      "startYear": -100,
      "endYear": -44,
      "confidence": "high",
      "locations": [
        "Řím",
        "Alexandrie"
      ],
      "tags": [
        "Řím",
        "politika",
        "Kleopatra",
        "občanské války"
      ],
      "summary": "V egyptském příběhu je Caesar katalyzátor římského vlivu: zásahy do alexandrijské dynastické krize posouvají Egypt blíž k římské dominanci. Současně je klíčovou postavou přechodu od republiky k mocenským strukturám, které později dohrají konec egyptské nezávislosti.",
      "detail": {
        "whyImportant": [
          "Mechanismus hegemonie: intervence → závazky → kontrola.",
          "Přímé propojení egyptské a římské chronologie v jednom „uzlu“ timeline."
        ],
        "whatToLookFor": [
          "Propagandistické zkreslení římských pramenů – kdo vypráví a proč.",
          "Ekonomika (obilí, finance) jako politická páka."
        ],
        "funFacts": [
          "Egypt je pro Řím strategický zdroj; politika se tu často dělá přes zásobování, ne jen přes armádu."
        ],
        "relatedEntities": [
          {
            "id": "cleopatra_vii",
            "relation": "political-ally"
          }
        ]
      }
    }
  ],
  "assets": {
    "imagePolicy": "no-embedded-images",
    "lazyLoad": true
  }
};

// Helper to create map of entities
const entityMap = new Map<string, any>();
RAW_DATA.entities.forEach(e => entityMap.set(e.id, e));

// 1. Periods
const processedPeriods: TimelineItem[] = RAW_DATA.periods.map(p => ({
  id: p.id,
  type: 'period',
  name: p.name,
  startYear: p.startYear,
  endYear: p.endYear,
  description: p.summary,
  confidence: p.confidence,
  detail: entityMap.get(p.id)?.detail // Merge detail from entities if present (periods are in both)
}));

// 2. Dynasties
const processedDynasties: TimelineItem[] = RAW_DATA.dynasties.map(d => {
  const entity = entityMap.get(d.id);
  return {
    id: d.id,
    type: 'dynasty',
    name: d.name,
    startYear: d.startYear || (entity?.startYear) || 0, // Fallback if null
    endYear: d.endYear || (entity?.endYear) || 0,
    displayStartYear: d.startYear,
    displayEndYear: d.endYear,
    description: entity?.summary || (d as any).notes || `${d.name} of Ancient Egypt`,
    periodId: d.periodId,
    confidence: (d as any).confidence,
    detail: entity?.detail
  };
});

// 3. Rulers (from Dynasties rulersIndex)
const processedRulers: TimelineItem[] = [];
RAW_DATA.dynasties.forEach(d => {
  d.rulersIndex.forEach((rId) => {
    const entity = entityMap.get(rId);
    if (!entity) return;

    // Determine start/end year. If null, inherit from dynasty start/end for sorting, but keep null for display
    const sortStart = entity.startYear !== null ? entity.startYear : (d.startYear || 0);
    const sortEnd = entity.endYear !== null ? entity.endYear : (d.endYear || 0);

    processedRulers.push({
      id: entity.id,
      type: 'pharaoh', // Map 'ruler' to 'pharaoh' for UI consistency
      name: entity.name,
      startYear: sortStart,
      endYear: sortEnd,
      displayStartYear: entity.startYear,
      displayEndYear: entity.endYear,
      confidence: entity.confidence,
      description: entity.summary,
      dynasty: d.name,
      periodId: d.periodId, // Inherit period from dynasty
      location: entity.locations,
      tags: entity.tags,
      detail: entity.detail
    });
  });
});

// 4. Monuments and Persons (from Entities directly)
const processedOthers: TimelineItem[] = RAW_DATA.entities
  .filter(e => e.type === 'monument' || e.type === 'person')
  .map(e => ({
    id: e.id,
    type: e.type as ItemType,
    name: e.name,
    startYear: e.startYear,
    endYear: e.endYear,
    description: e.summary,
    periodId: e.periodId,
    confidence: e.confidence,
    location: e.locations,
    tags: e.tags,
    detail: e.detail,
    builtBy: e.detail?.builtFor
  }));

// Combine and sort
export const TIMELINE_DATA: TimelineItem[] = [
  ...processedPeriods,
  ...processedDynasties,
  ...processedRulers,
  ...processedOthers
].sort((a, b) => {
    // Primary sort by start year
    if (a.startYear !== b.startYear) return a.startYear - b.startYear;
    
    // Secondary sort by type priority (Period > Dynasty > Pharaoh > Monument)
    const typePriority: Record<string, number> = { period: 0, dynasty: 1, pharaoh: 2, person: 2, monument: 3 };
    const pA = typePriority[a.type] ?? 99;
    const pB = typePriority[b.type] ?? 99;
    return pA - pB;
});