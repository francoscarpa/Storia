var preistoriaString = "Preistoria";
var etàDelBronzoAnticoString = "Età del Bronzo Antico";
var etàDelBronzoMedioString = "Età del Bronzo Medio";
var etàDelBronzoTardoString = "Età del Bronzo Tardo";
var civiltàMinoicaString = "Civiltà Minoica";
var civiltàMiceneaString = "Civiltà Micenea";
var etàOscuraString = "Età Oscura";
var etàArcaicaString = "Età Arcaica";
var etàClassicaString = "Età Classica";
var etàEllenisticaString = "Età Ellenistica";
var dominazioneRomanaString = "Dominazione romana";
var doriString = "Dori";
var distruzioneDiCorintoString = "Distruzione di Corinto";
var arthurEvansString = "Arthur Evans";
var heinrichSchliemannString = "Heinrich Schliemann";
var acheiString = "Achei";
var guerraDiTroiaString = "Guerra di troia";
var arthurEvansScopreString = "Arthur Evans scopre la civiltà cretese, iniziando gli scavi nel sito di Cnosso";
var pitagoraString = "Pitagora";
var miletoAnnessaDaiPersianiString = "Mileto annessa dai Persiani";
var eraclitoDiEfesoString = "Eraclito di Efeso";
var esiodoString = "Esiodo";
var taleteDiMiletoString = "Talete di Mileto";
var saffoString = "Saffo";
var licurgoString = "Licurgo";
var soloneString = "Solone";
var pisistratoString = "Pisistrato";

var itemsArray = [
    { id: 1, content: preistoriaString, start: "-004000", end: "-003000", type: "background", className: "indigo" },
    { id: 2, content: etàDelBronzoAnticoString, start: "-003000", end: "-001600", type: "background", className: "orange" },
    { id: 3, content: etàDelBronzoMedioString, start: "-001600", end: "-001400", type: "background", className: "lime" },
    { id: 4, content: etàDelBronzoTardoString, start: "-001400", end: "-001100", type: "background", className: "cyan" },
    { id: 5, content: civiltàMinoicaString, start: "-002700", end: "-001400", className: "XXX", title: "ca. 2700 a.C. - ca. 1400 a.C." },
    { id: 6, content: civiltàMiceneaString, start: "-001600", end: "-001100", className: "XXX", title: "ca. 1600 a.C. - ca. 1100 a.C." },
    { id: 7, content: etàOscuraString, start: "-001100", end: "-000800", type: "background", className: "darkgray" },
    { id: 8, content: etàArcaicaString, start: "-000800", end: "-000500", type: "background", className: "yellow" },
    { id: 12, content: etàClassicaString, start: "-000500", end: "-000323", type: "background", className: "purple" },
    { id: 15, content: etàEllenisticaString, start: "-000323", end: "-000146", type: "background", className: "pink" },
    { id: 18, content: dominazioneRomanaString, start: "-000146", end: "00476", type: "background", className: "brown" },
    { id: 19, content: doriString, start: "-001100", end: "-000500", className: "XXX", title: "ca. 1100 a.C. - ca. 500 a.C." },
    { id: 20, content: distruzioneDiCorintoString, start: "-000146", end: "-000146", type: "box" },
    { id: 21, content: arthurEvansString, start: "001851-7-8", end: "001941-7-11" },
    { id: 22, content: heinrichSchliemannString, start: "001822-1-6", end: "001890-12-26" },
    { id: 23, content: acheiString, start: "-002000", end: "-001200", className: "XXX", title: "ca. 2000 a.C. - ca. 1200 a.C." },
    { id: 24, content: guerraDiTroiaString, start: "-001300", end: "-001200", className: "XXX", title: "ca. 1300 a.C. - ca. 1200 a.C." },
    { id: 25, content: arthurEvansScopreString, start: "001900", type: "box" },
    { id: 27, content: pitagoraString, start: "-000580", end: "-000495", className: "XXX", title: "ca. 580 a.C. - ca. 495 a.C." },
    { id: 28, content: miletoAnnessaDaiPersianiString, start: "-000546", type: "box" },
    { id: 29, content: eraclitoDiEfesoString, start: "-000535", end: "-000475", className: "XXX", title: "ca. 535 a.C. - ca. 475 a.C." },
    { id: 30, content: esiodoString, start: "-000750", end: "-000650", className: "XXX", title: "ca. 750 a.C. - ca. 650 a.C." },
    { id: 31, content: taleteDiMiletoString, start: "-000624", end: "-000546", className: "XXX", title: "ca. 624 a.C. - ca. 546 a.C." },
    { id: 32, content: saffoString, start: "-000630", end: "-000570", className: "XXX", title: "ca. 630 a.C. - ca. 570 a.C." },
    { id: 33, content: licurgoString, start: "-000820", end: "-000730", className: "XXX", title: "ca. IX – ca. VIII secolo a.C." },
    { id: 34, content: soloneString, start: "-000638", end: "-000558", className: "XXXEndPrecise", title: "ca. 638 a.C. - 558 a.C." },
    { id: 35, content: pisistratoString, start: "-000600", end: "-000527", className: "XXX", title: "ca. 600 a.C. - ca. 527 a.C." }
];

var items = new vis.DataSet(itemsArray);