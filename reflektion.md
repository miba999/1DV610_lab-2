# Reflektioner

## Clean Code: Chapter 2 Meaningful Names

Alla är metoder i klassen BarChart, där de anropas på ett `BarChart`-objekt (lite bakgrund för **Add Meaningful Context**)

### Tabell över namngivningsexempel
|Namn och förklaring|Reflektion och regler från Clean Code|
|:---|:---|
|`setColor(color)`     |Namnet säger tydligt var metoden gör (**Use Intention-Revealing Names**) även om det sedan är lite oklart *exakt* vad `color` syftar till, är det grafen? Är det staplarna? Så det hade kunnat förbättras till t.ex. `setBarColors(color)`.|
|                      |Inget var adderat till namnet som inte var nödvändigt (**Don't Add Gratuitous Context**), även om det kanske dragits lite långt, och att intentionen om vad som skulle ritas hade kunnat förbättras.|
|                      |Det krävs ingen mental mapping av en läsare eller, namnet säger tydligt vad det är metoden gör (**Avoid Mental Mapping**).|
|`setWidth(newWidth)`  |Metod-namnet indikerar tydligt vad den gör, även om det hade kunnat förtydligas ännu mer vems `width` det handlar om här.|
|                      |Men det missleder inte allt för mycket, det är en width som ska sättas (**Avoid Disinformation**).|
|                      |Namnet är lätt att uttala för diskussion av koden (**Use Pronounceable Names**).|
|                      |Hela `width` skriv ut, och inte bara t.ex. `setW` för att korta ner det, vilket kan argumentera för **Avoid Encodings**. |
|`setData(data)`       |Här är återigen en metod för att ändra/uppdatera objektet på något sätt. Det är återigen lite vagt på **Use Intention-Revealing Names**, det hade kunnat göras tydligare med namnet med vad för data det är eller hur det ska användas. Det ska vara datan som ska plottas ut i grafen, men det hade kunnat gjorts tydligare med ett lite längre och tydligare namn.| 
|                      |Men det följer i alla fall **Use Searchable Names**, även om det kanske börjar bli många setters som börjar med `set`. Men det är i alla fall ett lite längre namn och inte magisk siffra eller ensam bokstav.|
|`setRandomColors()`   |Namnet på denna metod förmedlar vad den gör, även om hur och varför är lite mer oklart, så att explicit berätta lite mer hade inte skadat (**Use Intention-Revealing Names**), t.ex. `setRandomColorsOnBars`.   |
|                      |Namnet använder ett verb för att indikera att är ett metod-namn (**Method Names**).|
|`setYAxisLabel(label)`| **Pick One Word Per Concept** är gäller generellt bland alla de publika metoderna för modulen, att det är setters för att ändra/uppdatera/konfigurera grafen. Bland de privata metoderna, närmare till själva utritandet av grafen, har ofta `draw` använts i början av metoderna. Detta istället för `set` för att särskilja dem lite åt.   |    
|                      |Här är ett litet längre namn (jämfört med de andra) för verkligen tydliggöra vad metoden gör (**Use Intention-Revealing Names**).|
|                      |Detta speciellt när det är mycket pill med axlar åt olika håll och olika etiketter och titlar i grafen (**Make Meaningful Distinctions**). |

### Reflektion över Kapitel 2
Namngivning är bland det jag tycker är svårast när man kodar, speciellt om man ska försöka få koden någorlunda förståeligt för någon annan, både sitt framtida jag eller någon annan programmerare. Det är verkligen vid ("bra") namngivning jag kan fastna alldeles för länge och inte får något gjort, för att sedan ta beslut som består av "bara ta något namn" så länge, för att komma vidare. Detta beslut är inte alltid helt vattentätt, och ofta får jag gå tillbaka och uppdatera för att få det mer förståeligt eller konsekvent.

Att följa "**Use Intention-Revealing Names**" där namnet ska förklara **vad**, **varför** och hur **är** ju lättare sagt än gjort. Och det ska inte heller vara för långt **Don't Add Gratuitous Context**. Man får inte vara lat för att **Make Meaningful Distinctions**, visst, `source` och `destination` är ju klockrena namn nu när du nämner det, men när man satt där så var det mycket lättare med ett litet `a1` till `a2`. Jag antar att lite erfarenhet och andras kassa kod kanske gör en lite vassare med namngivning på sikt.

Dock har jag tufft att hantera att kommentarer är av ondo (**Use Intention-Revealing Names**, "comments are bad") Vad är självklart? Vad antas man att veta? En liten kommentar kan ju ändå gardera lite för olika bakgrunder och erfarenheter, även om man fått till det perfekta namnet. Och ja, jag jobbar för att minska kommentarerna, men det är svårt att få ihop det när mitt framtida jag inte alltid förstår mitt nutida jags stora genialitet. Och oftast känns det som att saker i stunden, när man grottat ned sig i det, är mer självklara än vad de senare är, vilket jag märkte tydligt på ungefär alla namn i tabellen ovan.

Många av reglerna/rubrikerna i kapitel 2 kan tyckas  lite självklara ibland, t.ex. att inte ta med onödig information, eller rent ut sagt vilseleda någon, bättre att vara otydlig än rent ut sagt fel i så fall. Eller **Don't Be Cute**? Jag har inte ens tid för att försöka vara rolig, det finns bara namngivningsångest. 

