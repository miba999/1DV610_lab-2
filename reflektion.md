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
|`setCategories(xLabels: Array<string>)` |6  | This method refers to a data set of categories    |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|`setColor(color: string)`               |2  |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|`setHeight(newHeight: number)`          |2  |   |
|                                        |   |   |
|                                        |   |   |
|`setTitle(title: string)`               |3  |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|`setXAxisLabel(label: string)`          |3  |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |
|                                        |   |   |



### Reflektion över Kapitel 3