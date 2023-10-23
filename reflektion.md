# Reflektioner

## Clean Code: Chapter 2 Meaningful Names

Alla namn är för metoder i klassen BarChart, där de anropas på ett `BarChart`-objekt (lite bakgrund för **Add Meaningful Context** CC p. 27)

### Tabell över namngivningsexempel
|Namn och förklaring|Reflektion och regler från Clean Code|
|:---|:---|
|`setColor(color)`     |Namnet säger tydligt vad metoden gör (**Use Intention-Revealing Names** CC. p. 18) även om det sedan är lite oklart *exakt* vad `color` syftar till, är det grafen? Är det staplarna? Förbättring hade kunnat vara t.ex. `setBarColors(color)`.|
|                      |Inget kontext var adderat till namnet som inte var nödvändigt (**Don't Add Gratuitous Context** CC p. 29), även om det kanske dragits lite långt så namnet var lite för kort och koncist, och att intentionen om *vad* som skulle ritas hade kunnat förbättras. Så det blir en balans mellan **Use Intention-Revealing Names** (CC. p. 18) och **Don't Add Gratuitous Context** (CC p. 29) |
|                      |Det krävs ingen *mental mapping* av en läsare, namnet säger tydligt vad det är metoden gör (**Avoid Mental Mapping** CC p. 25).|
|`setWidth(newWidth)`  |Metod-namnet indikerar rätt tydligt vad den gör, men jag hade även här kunnat förtydliga ännu mer vems `width` det handlar om (**Use Intention-Revealing Names** CC. p. 18) |
|                      |Namnet missleder inte allt för mycket, det är en *width* som ska sättas (**Avoid Disinformation** CC p. 19).|
|                      |Namnet är lätt att uttala för diskussion av koden (**Use Pronounceable Names** CC p. 21).|
|                      |Hela `width` skrivs ut i namnet, och inte bara t.ex. `setW` för att korta ner det, vilket kan argumentera för **Avoid Encodings** (CC p. 23). |
|`setData(data)`       |Här är återigen en metod för att ändra/uppdatera objektet på något sätt. Det är återigen lite vagt på **Use Intention-Revealing Names** (CC. p. 18), det hade kunnat göras tydligare med namnet med vad för data det är eller hur det ska användas. Det ska vara datan som ska plottas ut i grafen, men det hade kunnat gjorts tydligare med ett lite längre och tydligare namn.| 
|`setRandomColors()`   |Namnet på denna metod förmedlar vad den gör, även om hur och varför är lite mer oklart, så att explicit berätta lite mer hade inte skadat (**Use Intention-Revealing Names** CC. p. 18), t.ex. `setRandomColorsOnBars`.   |
|                      |Namnet använder ett verb för att indikera att är ett metod-namn (**Method Names** CC p. 25).|
|`setYAxisLabel(label)`| **Pick One Word Per Concept** (CC p. 26) är gäller generellt bland alla de publika metoderna för modulen, att det är setters för att ändra/uppdatera/konfigurera grafen. Bland de privata metoderna, närmare till själva utritandet av grafen, har ofta `draw` använts i början av metoderna. Detta istället för `set` för att konceptuellt särskilja dem lite åt.   |    
|                      |Det är ett längre namn (jämfört med de andra) för att verkligen tydliggöra vad metoden gör (**Use Intention-Revealing Names** CC. p. 18).|
|                      |Detta var speciellt viktigt när det är mycket pill med axlar åt olika håll och olika etiketter och titlar i grafen (**Make Meaningful Distinctions** CC p. 20). |

### Reflektion över Kapitel 2
Namngivning är bland det jag tycker är svårast när man kodar, speciellt om man ska försöka få koden någorlunda förståeligt för någon annan, både sitt framtida jag eller någon annan programmerare. Det är verkligen vid ("bra") namngivning jag kan fastna alldeles för länge och inte får något gjort, för att sedan ta beslut som består av "bara ta något namn så länge”, för att komma vidare. Detta beslut är inte alltid helt vattentätt, och ofta får jag gå tillbaka och uppdatera för att få det mer förståeligt eller konsekvent. Men jag tänker också att det är okej att iterera under processens gång, och att det inte måste vara perfekt från början. Så länge man kommer ihåg att tänka på den sista filningen, och inte lämnar namnet i ett för förskräckligt skick. 

Att följa "**Use Intention-Revealing Names**" (CC. p. 18) där namnet ska förklara **vad**, **varför** och hur **är** ju lättare sagt än gjort. Och det ska inte heller vara för långt eller addera mer kontext än nödvändigt "**Don't Add Gratuitous Context**" (CC p. 29). Man får inte vara lat, snabb och/eller ogenomtänkt för att "**Make Meaningful Distinctions**" ska hålla heller.

Jag har det tufft att hantera att kommentarer är av ondo (**Use Intention-Revealing Names**, "comments are bad"). Vad är självklart? Vad antas man att veta? En liten kommentar kan ju ändå gardera lite för olika bakgrunder och erfarenheter, även om man fått till det perfekta namnet. Jag missstänker att jag är en över-kommenterare av rang, men oftast förstår inte mitt "framtida jag" mitt "nutida jags" stora genialitet. Att saker man suttit och grottat ner sig i är självklara för stunden, men vid senare tillfälle har vissa insikter bleknat.

Många av reglerna/rubrikerna i kapitel 2 kan tyckas  lite självklara ibland, t.ex. att inte ta med onödig information, eller rent ut sagt vilseleda någon, bättre att vara otydlig än rent ut sagt fel i så fall. Eller **Don't Be Cute**? Jag har inte ens tid för att försöka vara rolig, det finns bara namngivningsångest. 

## Clean Code: Chapter 3 Functions

### Tabell över funktioner

|Metodnamn|Antal rader|Reflektion|
|:---------------------------------------|:--|---|
|`setCategories(xLabels: Array<string>)` |6  | Metodens namn hade kunnat utformats för att tydligare förklara vad metoden gör, t.ex. `setXAxisCategories` (**Use Descriptive Names** CC p. 39), och inte bara `setCategories`. |
|                                        |   | Just nu sätter metoden både "data" (i form av x-axelns kategorier) OCH etiketter för x-axeln i stapeldiagrammet. En förbättring hade varit att separera data-tilldelning från diagram-utseende (**Do One Thing** CC p. 35). |
|                                        |   | På grund av punkten ovan, beroende på vad man förväntar sig att metoden `setCategories` ska göra, så kan metoden kunna ha oväntade följder, vilket inte heller är optimalt (**Have No Side Effects** CC p. 44). |
|`setColor(color: string)`               |2  | Metoden är inte helt tydlig med vad för färg det är som sätts (**Use Descriptive Names** CC p. 39), så den hade nog uppdateras till `setBarColor(color)` för att tydligare visa vad den färgsätter. |
|                                        |   | Metoden sätter/uppdaterar färgen på staplarna, inget mer (**Command Query Separation** CC p. 45) |
|                                        |   | Det är en mycket liten metod på två rader, den uppdaterar en variabel och anropar en annan metod för att rita om grafen med den nya färgen (**Small!** CC p. 31).  |
|`setHeight(newHeight: number)`          |2  | Med bara två rader kod är det en väldigt liten metod (**Small!** CC p. 31). |
|                                        |   | Utan några argument i metoden hade det varit svårt att ändra diagrammets höjd, så metoden har så få argument som det någonsin går, men tyvärr inte noll i detta fallet (**Function Arguments - monadic** CC p. 40).  |
|                                        |   | Metoden har gör bara en sak, uppdaterar diagrammets höjd (**Do One Thing** CC p. 35)  |
|`setTitle(title: string)`               |3  | För att uppdatera titeln krävs en sträng som argument, positionen av titeln kan inte bestämmas, vilket minskade antalet argument från 3 till 1 (**Function Arguments** CC p. 40). |
|                                        |   | Namnet är kort, och gör som det låter, sätter en titel (**Use Descriptive Names** CC p. 39). Tanken var att det inte var så många oklarheter i kontexten av ett diagram vad det kan vara för titel, och att namnet var tillräckligt förklarande. |
|`setXAxisLabel(label: string)`          |3  | Här togs också valet bort att kunna exakt specificera var etiketten för x-axeln skulle sitta, och lämnar bara ett argument för att specificera texten för etiketten (**Function Arguments** CC p. 40). |
|                                        |   | Två av metodens tre rader betstår av bestämma/"räkna ut" koordinaterna för textens placering, tredje raden anropar sedan metod för själva utritandet av metoden. För att hålla samma abstraktionsnivå (**One Level of Abstraction per Function** CC p. 36) hade t.ex. uträkning av position kunnat ske i en privat metod, så hade `setXAxisLabel` inte varierat med uträkningar tillsammans med metod-anrop, utan bara metodanrop, och då varit mer på samma abstraktionsnivå. |

### Reflektion över Kapitel 3

Som nämnt i tabellen så hade abstraktionsnivån kunnat göras "högre" och/eller konsekvent i de flesta av de publika metoderna (**One Level of Abstraction per Function** CC p. 36). T.ex. så blandas "uträkningar" (starkt ord, men rent konceptuellt) med metodanrop. Istället hade även uträkningar kunnat faktoreras ut i en privat metod som sedan använts i den publika metoden. Eftersom det inte fanns oändligt med tid, och det ändå var kod som var för specifik för att återanvändas, utan den faktoreringen mest varit för att fixa abstraktionsnivån, så var det inte högsta prioritering.

I efterhand och utanför kod-bubblan så kom insikten att flera metod-namn kunnat göras lite tydligare (**Use Descriptive Names** CC p. 39) till bekostnad av längd. 

Felhantering saknas, därför är vissa Clean Code-rubriker inte applicerbara (**Prefer Exceptions to Returning Error Codes** CC p. 46). Kommentarer till metoderna hjälper förhoppningsvis till lite för att det inte ska bli helt tokigt, men avsaknad av felhantering är inte optimalt. 

Flera av rubrikerna blir lite upprepning i tabellen eftersom jag tyckte att metoderna ändå följde vissa av dem rätt bra, t.ex. de är rätt små och inte så många rader då mycket av själva utritandet är i private metoder (**Small!** CC p. 31). De är inte heller så komplicerade i form av kontroll-satser osv (vilket gör att stycket om t.ex. **Switch Statements** CC p. 37 inte heller är applicerbart). 

Många av metoderna handlar om att rita ut etiketter, rubriker, mm. Här har valet av exakta placeringen tagits bort för att minska ner beslutsångest och hålla beslut på minimal nivå. Det hade blivit betydligt rörigare om man lagt till två argument (x- och y-koordinater) för varje metod för användaren att kunna själv exakt placera ut etiketter, rubriker, mmm, i diagrammet. Detta beslut togs dock för att minska beslut för användaren och inte för att boken starkt ej rekommenderade stort antal argument. Då hade t.ex. att göra koordinaterna till en egen `Position`-klass och då kunnat ha ett objekt som argument (**Function Arguments** - Argument Objects CC p. 43).

## Reflektion
I en sammanfattande reflektion över min kodkvalitet, baserat på Clean Code, finner jag att mina metoder är små, vilket följer bokens rekommendationer (**Small!** CC p. 31). De utför generellt en uppgift (**Do One Thing** CC p. 35), även om det alltid finns förbättringar. De private metoderna är dock något större, även om de ligger inom gränsen för acceptabel funktions-storlek. Dessa privata metoder hade kunnat delats upp ytterligare, till exempel genom att separera koden in mindre klasser, och även genom att refaktorera duplicerad kod smugit sig in på sina ställen. Även namngivningen, som tidigare nämnts, har efter reflektions-insikter kunnat förtydligas. Som sagts innan, namngivning är något jag brukar tycka är oproportionerligt svårt, och bokens synpunkter på namngivning har gett värdefulla riktlinjer i hur man kan tänka när man väljer lämpilga namn.

Modulen är inte särskilt komplex, utan mycket av koden är till för utritandet av de olika delarna i diagrammet. Detta har underlättat efterlevnaden av flera av bokens rekommendationer, till exempel **One Level of Abstraction per Function** (CC p. 36) eftersom det inte finns så många nivåer, och även **Function Arguments** (CC p. 40) eftersom de publika metoderna bara har ett eller inga argument.

Jag tenderar att använda fler kommentarer än vad som rekommenderas i boken. I modulen finns både JSDoc och rad-kommentarer. Jag har svårt att komma fram till att alla kommentarer är av ondo, och därför finns de kvar. De fungerar som påminnelser och förtydliganden, och även i andra kod-sammanhang så känns det otroligt att koden, som inte alltid är särskilt uttrycksfull, ska kunna förklara/motivera ett val/sammanhang/domän.

Sammanfattningsvis, även jag inte håller med kommentars-delen, så har boken många bra poänger och har utmanat mina kod-tänk och tillvägagångssätt. Som med allt antar jag att det bör göras med måtta. Till exempel, att små metoder inte bara görs små bara för att de ska vara det, utan i så fall att det underlättar att läsbarhet och förståelse. Boken har gett mig nya perspektiv för min kod, och att det inte måste bli perfekt första iterationen, utan det är en process.

