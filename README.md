# Web Finder

**Get direct download links for almost anything.**

Web Finder is a specialized search interface that helps you find direct download links for various file types across the web. Instead of sifting through countless search results, Web Finder uses optimized search queries to help you discover direct file links efficiently.

## Features

### 🔍 Smart Search Queries

- Automatically builds optimized search queries with file type filters
- Excludes unwanted URLs (jsp, php, html, etc.)
- Includes `intitle:index.of` for better directory indexing results
- Filters out known spam and low-quality sites

### 📁 File Type Categories

- **TV/Movies** - mkv, mp4, avi, mov, mpg, wmv, divx, mpeg
- **Books** - MOBI, CBZ, CBR, PDF, EPUB
- **Music** - mp3, wav, flac, ogg
- **Software/Games** - exe, iso, dmg, tar, rar, zip
- **Images** - jpg, png, bmp, gif
- **Other** - Generic search without file type restrictions

### 🌐 Multiple Search Engines

- **Google** - The most comprehensive search results
- **Startpage** - Privacy-focused Google results
- **Searx** - Open-source metasearch engine
- **FilePursuit** - Specialized file search engine

### 🎨 Modern Interface

- Clean, responsive design built with Tailwind CSS
- Mobile-friendly interface
- Dynamic search engine logos
- Intuitive dropdowns for easy selection

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Font**: Fira Code Variable

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd web-finder
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

### Search Query Building

Web Finder constructs intelligent search queries by:

1. **Base Query**: Your search term
2. **File Type Filter**: Adds file extension filters based on selected category
3. **Exclusions**: Removes unwanted file types and sites
4. **Directory Indexing**: Includes `intitle:index.of` for better results
5. **Spam Filtering**: Excludes known low-quality sites

Example query for searching "Ubuntu" in Software category:

```
Ubuntu +(exe|iso|dmg|tar|rar|zip) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)
```

### Engine-Specific URLs

Each search engine has its own URL structure:

- **Google**: `https://www.google.com/search?q=...`
- **Startpage**: `https://www.startpage.com/do/dsearch?query=...`
- **Searx**: `https://searx.me/?q=...`
- **FilePursuit**: `https://filepursuit.com/search/.../type/...`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── EngineDropdown.tsx    # Search engine selector
│   │   ├── FileTypeDropdown.tsx  # File type category selector
│   │   ├── Header.tsx           # App header with logo
│   │   ├── SearchForm.tsx       # Main search interface
│   │   ├── styleConstants.ts    # Shared styling constants
│   │   └── utls.ts             # Engine logos (base64)
│   ├── fonts/                  # Fira Code font files
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── utils.js                # Search logic utilities
└── lib/
    └── utils.ts                # Utility functions
```

## Development

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

Web Finder is a search tool that helps users find publicly available files on the internet. Users are responsible for ensuring they have the right to download any files they find. Respect copyright laws and intellectual property rights.
