interface Bundesland {
    name: string;
    flaecheKm2: number;
    einwohner: number;
    fuehrendePartei: string;

}


const bundeslaender: Bundesland[] = [
    { name: "Burgenland", flaecheKm2: 3965, einwohner: 301000, fuehrendePartei: "SPÖ" },
    { name: "Kärnten", flaecheKm2: 9536, einwohner: 569000, fuehrendePartei: "SPÖ" },
    { name: "Niederösterreich", flaecheKm2: 19180, einwohner: 1727000, fuehrendePartei: "ÖVP" },
    { name: "Oberösterreich", flaecheKm2: 11982, einwohner: 1527000, fuehrendePartei: "ÖVP" },
    { name: "Salzburg", flaecheKm2: 7156, einwohner: 567000, fuehrendePartei: "ÖVP" },
    { name: "Steiermark", flaecheKm2: 16401, einwohner: 1264000, fuehrendePartei: "FPÖ" },
    { name: "Tirol", flaecheKm2: 12648, einwohner: 777000, fuehrendePartei: "ÖVP" },
    { name: "Vorarlberg", flaecheKm2: 2601, einwohner: 410000, fuehrendePartei: "ÖVP" },
    { name: "Wien", flaecheKm2: 415, einwohner: 2006000, fuehrendePartei: "SPÖ" }
];



function TotalArea(bundeslaender: Bundesland[]): number {
    return bundeslaender.reduce((sum, bundeslaender) => sum + bundeslaender.flaecheKm2, 0);

}

function PperKM2(bundeslaender: Bundesland[]): string[] {
    return bundeslaender.map(a => {
        const dichte = a.einwohner / a.flaecheKm2;
        return `${a.name}: ${dichte} Einwohner pro km²`;
    });
}

//nicht fertig
function Party(bundeslaender: Bundesland[]): number {

    return bundeslaender.filter(e => e.einwohner > 14000);
}



//sort fehlt noch

//console.log(TotalArea(bundeslaender));


