# n8n-nodes-pdf-page-extract

This node for n8n extracts text from PDF files and returns the text per page as an array.

## Features

- Extract text from PDF files
- Return text per page as an array
- Optional: Include full raw text
- Optional: Include PDF metadata

## Installation

### Local Installation

1. Go to your n8n installation folder
2. Install the package:
   ```bash
   npm install n8n-nodes-pdf-page-extract
   ```

3. Start n8n

### Manual Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/n8n-nodes-pdf-page-extract.git
   ```

2. Go to the package directory:
   ```bash
   cd n8n-nodes-pdf-page-extract
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

4. Build the package:
   ```bash
   npm run build
   # or
   pnpm build
   ```

5. Link to your n8n installation:
   ```bash
   npm link
   cd /path/to/n8n
   npm link n8n-nodes-pdf-page-extract
   ```

### Docker Installation

If you're running n8n in Docker, you can mount the package directory as a volume:

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  -v /path/to/n8n-nodes-pdf-page-extract:/home/node/.n8n/custom/n8n-nodes-pdf-page-extract \
  n8nio/n8n
```

Or add this line to your Docker Compose file:
```yaml
volumes:
  - /path/to/n8n-nodes-pdf-page-extract:/home/node/.n8n/custom/n8n-nodes-pdf-page-extract
```

## Usage

1. Add the "PDF Page Extract" node to your workflow
2. Connect it to a node that provides a PDF file (e.g., HTTP Request or Read Binary File)
3. Configure the node:
   - Select the binary property that contains the PDF file
   - Choose whether to include the full raw text
   - Choose whether to include the PDF metadata
4. The output will contain an array with the text of each page

## Output Example

```json
{
  "filename": "document.pdf",
  "totalPages": 3,
  "pages": [
    "Text from page 1",
    "Text from page 2",
    "Text from page 3"
  ],
  "metadata": {
    "...": "..."
  },
  "info": {
    "...": "..."
  }
}
```

## Requirements

- n8n version 0.125.0 or later
- Node.js 18.10 or later

## Development

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build: `pnpm build`
4. Link: `pnpm link`

## License

[MIT](LICENSE.md)
