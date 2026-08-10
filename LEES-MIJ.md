# Circle Snelzoeker — testversie als Android-app

Dit is een klaargezet Capacitor-project dat via GitHub (gratis, in de cloud)
automatisch een .apk-bestand bouwt van de Snelzoeker. Er is **geen hosting**
nodig: alle bestanden (HTML, JS, afbeeldingen) worden in de app zelf verpakt.

## Wat je moet doen (eenmalig, ±10 minuten)

1. **Maak een gratis GitHub-account** op github.com, als je die nog niet hebt.
2. **Maak een nieuwe, private repository** (bijv. genaamd `circle-snelzoeker`).
   Zet 'm op **private** — dit is voor eigen test, niet voor het publiek.
3. **Upload deze hele map** naar die repository. Makkelijkste manier:
   - Ga naar de repository-pagina op github.com
   - Klik "uploading an existing file" / "Add file" → "Upload files"
   - Sleep de hele inhoud van deze map erin (inclusief de verborgen `.github`-map —
     die moet je mogelijk los uploaden of via GitHub Desktop, omdat sommige
     browsers verborgen mappen niet meenemen bij slepen)
4. Ga naar het tabblad **"Actions"** in je repository. De build start automatisch
   zodra de bestanden er staan (het duurt ongeveer 3-5 minuten).
5. Als de build groen is (klaar), klik erop en scrol naar beneden naar
   **"Artifacts"** → download `circle-snelzoeker-apk`. Dat is een .zip met de
   .apk erin.

## Op je telefoon installeren

1. Pak de .apk uit de zip en stuur 'm naar je telefoon (bijv. via e-mail, Google
   Drive, of een USB-kabel).
2. Open het bestand op je telefoon. Android vraagt om "onbekende apps
   installeren" toe te staan voor de app waarmee je het bestand opent
   (bijv. je bestandsbeheer-app of Gmail) — dat mag je hier toestaan.
3. Tik op installeren. Klaar — je hebt nu een "Circle Snelzoeker"-icoontje.

## Let op

Dit is een **debug-build**, bedoeld om zelf te testen — niet geschikt om
zomaar naar anderen door te sturen (zie eerdere opmerking over het
copyright van het document). Zodra je tevreden bent met de test kunnen we
kijken naar een nette signed release-versie.
