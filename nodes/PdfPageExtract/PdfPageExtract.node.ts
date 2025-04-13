# PDF Page Extract - n8n Custom Node

Deze n8n custom node stelt je in staat om tekst per pagina uit een PDF-bestand te extraheren. Handig als je gestructureerd informatie uit een document wilt halen.

## ✨ Functionaliteit

- Extraheert tekst uit elke pagina van een PDF-bestand
- Optioneel: voeg de volledige platte tekst (raw text) toe
- Optioneel: voeg PDF metadata toe (titel, auteur, enz.)
- Werkt met bestanden die in n8n als binary worden meegestuurd

## 🛠 Gebruik

1. Voeg deze node toe via de **n8n Community Nodes** UI.
2. Gebruik een node zoals HTTP Request of Webhook om een PDF-bestand aan te leveren.
3. Koppel de PDF aan het binary veld (standaard heet dit `data`).
4. Kies de gewenste opties:
   - `Include Raw Text`: voeg de volledige platte tekst toe
   - `Include Metadata`: voeg documentmetadata toe aan de output

## 🖼 Voorbeeldworkflow

Onderstaande workflow laat zien hoe je de PDF Page Extract node kunt gebruiken om een PDF van een URL op te halen en de tekst per pagina te splitsen:

![Voorbeeldworkflow](./assets/workflow-example.png)

1. **Webhook** – Ontvangt een request (bijv. via browser of automation tool).
2. **HTTP Request** – Downloadt een PDF-bestand vanaf een externe URL.
3. **PDF Page Extract** – Extraheert de tekst per pagina.
4. **Split Out** – Splitst de array met pagina’s in losse items, zodat je per pagina verder kunt werken (bijv. AI, validatie, extractie, etc).

Plaats `workflow-example.png` in een `assets/` map binnen de repo (optioneel: optimaliseer op max 1000px breedte).

## 🔁 Output

De node retourneert per item een JSON-structuur zoals:

```json
{
  "filename": "example.pdf",
  "totalPages": 5,
  "pages": [
    "Eerste pagina tekst...",
    "Tweede pagina tekst...",
    ...
  ],
  "text": "Volledige tekst (optioneel)",
  "metadata": {...}, // Optioneel
  "info": {...} // Optioneel
}
```

## 🧩 Tip

Gebruik de output van deze node met andere nodes zoals:
- `Set` node om specifieke tekstvelden te isoleren
- `If` node om voorwaarden toe te passen op specifieke pagina's
- `HTTP Request` node om informatie naar een API te sturen

---

Voor vragen of feedback kun je een issue openen op GitHub.
