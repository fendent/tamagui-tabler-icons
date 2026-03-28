# tamagui-tabler-icons

[Tabler Icons](https://tabler-icons.io) as [Tamagui](https://tamagui.dev) components. Works on React and React Native.

6,092 icons including outline, filled, and brand variants.

## Install

```bash
npm install tamagui-tabler-icons
```

Or as a git dependency:

```json
"tamagui-tabler-icons": "github:youruser/tamagui-tabler-icons"
```

### Peer dependencies

- `react` >= 19
- `react-native-svg` >= 12

## Usage

```tsx
import { IconBrandGithub, IconHeart, IconArrowLeft } from 'tamagui-tabler-icons'

// Supports Tamagui tokens
<IconBrandGithub color="$color" size="$4" />

// Filled variants
import { IconHeartFilled } from 'tamagui-tabler-icons'

<IconHeartFilled color="$red10" size={32} />
```

For tree-shaking, import individual icons:

```tsx
import { IconBrandGithub } from 'tamagui-tabler-icons/icons/IconBrandGithub'
```

## Naming

All components use the `Icon` prefix, matching Tabler's own convention:

| Tabler icon | Component |
|---|---|
| `arrow-left` | `IconArrowLeft` |
| `brand-github` | `IconBrandGithub` |
| `heart` (filled) | `IconHeartFilled` |

## Regenerating

When Tabler releases new icons:

```bash
npm update @tabler/icons
node scripts/generate.mjs
```

## Credits

- Icons by [Tabler Icons](https://tabler-icons.io) by [Paweł Kuna](https://github.com/codecalm), MIT licensed
- Icon component pattern from [@tamagui/lucide-icons-2](https://github.com/tamagui/tamagui)

## License

MIT
