# Astrolace

An easy way to use Shoelace.style within your Astro Project!

## Usage

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add @matthiesenxyz/astrolace
```

```bash
npx astro add @matthiesenxyz/astrolace
```

```bash
yarn astro add @matthiesenxyz/astrolace
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add @matthiesenxyz/astrolace
```

```bash
npm install @matthiesenxyz/astrolace
```

```bash
yarn add @matthiesenxyz/astrolace
```

2. Add the integration to your astro config

```diff
+import astrolace from "@matthiesenxyz/astrolace";

export default defineConfig({
  integrations: [
+    astrolace(),
  ],
});
```

### Setup

1. Add the `<ShoelaceHeader>` Element to your Layout's `<head>`

```astro
---
import { ShoelaceHeader } from "astrolace:components/header";

---

<html>
    <head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Example</title>
		<ShoelaceHeader />
    </head>
</html>
```

2. Use any of the exported components!

```astro
---
import { 
	Alert, AnimatedImage, Avatar, Badge, Breadcrumb, BreadcrumbItem, 
	ButtonGroup, Button, Card, Carousel, CarouselItem, Checkbox, 
	ColorPicker, CopyButton, Details, Divider, Dialog, Drawer, 
	Dropdown, FormatBytes, FormatDate, FormatNumber, Icon, IconButton,
	ImageComparer, Include, Input, Menu, MenuItem, MenuLabel,  MutationObserver, 
	Option, Popup, ProgressBar, ProgressRing, QrCode, Radio, RadioButton, 
	RadioGroup, Range, Rating, RelativeTime, ResizeObserver, Select, 
	Skeleton, Spinner, SplitPanel, Switch, Tab, TabGroup, TabPanel, 
	Tag, Textarea, Tooltip, Tree, TreeItem, VisuallyHidden
} from "astrolace:components";
---
```

### Advanced Configuration

#### Tools

- `registerIconLibrary` - Allows the user to register extra icons (example shown is to register the default icon library(Bootstrap Icons))
```astro
---
import { ShoelaceHeader } from "astrolace:components/header";
---
<html>
    <head>
		<ShoelaceHeader />
        <script>
        // `registerIconLibrary` function from Shoelace.style
        import { registerIconLibrary } from "astrolace:tools";

        // Register the default icon library
        registerIconLibrary('default', {
            resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}.svg`
        });
        </script>
    </head>
</html>
```

#### Types

All types are exported from `"astrolace:types"`.

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground and package watcher:

```bash
pnpm dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/matthiesenxyz/Astrolace/blob/main/LICENSE). Made with ❤️ by [AdamMatthiesen](https://github.com/AdamMatthiesen).

## Acknowledgements

- [`Shoelace.style`](https://shoelace.style) - The whole purpose of this project!