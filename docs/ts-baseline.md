# TypeScript Baseline

## Comparison

- Pre-Fase A: `fccf4a3`
- Fase A: `0891ad4`
- The full application typecheck (`NODE_OPTIONS=--max-old-space-size=4096 pnpm exec tsc --noEmit -p artifacts/numatik/tsconfig.json`) was terminated by `SIGTERM` for both commits, before diagnostics were produced.
- To compare the commits, the same targeted TypeScript program was run for the changed i18n entry points and these material folders: `aljabar`, `bilangan-bulat`, `bilangan-rasional`, `garis-singgung-lingkaran`, `himpunan`, `koordinat-cartesius`, and `lingkaran`.
- The baseline produced 278 diagnostics across those roots. Fase A produced the same 278 diagnostics; after normalizing temporary worktree paths, the diagnostic lists were identical. No new diagnostic was found in this comparison.

## Baseline diagnostics by folder

| Folder | Diagnostics |
| --- | ---: |
| `aljabar` | 16 |
| `bilangan-bulat` | 14 |
| `bilangan-rasional` | 144 |
| `garis-singgung-lingkaran` | 17 |
| `himpunan` | 6 |
| `koordinat-cartesius` | 29 |
| `lingkaran` | 38 |
| Imported shared components | 14 |
| **Total** | **278** |

## Baseline diagnostic categories

| Code | Count | Existing diagnostic |
| --- | ---: | --- |
| TS2339 | 1 | `DiagramVennPage.tsx`: property `lang` does not exist on the selected translation object. |
| TS2345 | 2 | `BusurJuringPage.tsx`: `RefObject<SVGSVGElement \| null>` is not assignable to `RefObject<SVGSVGElement>`. |
| TS2367 | 4 | `KaitanBangunDatarLainnyaPage.tsx`: comparisons between the literal strings `"Dikurangi"` and `"Subtraction"` have no overlap. |
| TS7006 | 70 | Parameters implicitly have type `any`. |
| TS7016 | 53 | No declaration file for module `react-katex`. |
| TS7031 | 104 | Destructured binding elements implicitly have type `any`. |
| TS7053 | 44 | A six-language `Language` value indexes translation maps containing only `id`, `en`, and `ja`. |

These are pre-existing baseline diagnostics, not regressions in commit `0891ad4`. They are recorded for comparison and are not authorized for repair under the baseline-only scope.

## Shared component diagnostics

The following imported components had 14 baseline diagnostics, and the same diagnostics were present in `0891ad4`:

| File | Baseline message |
| --- | --- |
| `src/components/FactorTreeAnimation.tsx` | TS7053: `Language` indexes a map containing only `id`, `en`, and `ja`; TS7006: parameters `label` and `i` implicitly have type `any`. |
| `src/components/FractionCircleAnimation.tsx` | TS7016: no declaration file for `react-katex`; TS7053: `Language` indexes a map containing only `id`, `en`, and `ja`. |
| `src/components/FractionMultiplicationAnimation.tsx` | TS7016: no declaration file for `react-katex`. |
| `src/components/JarakDuaTitikInteraktif.tsx` | TS7016: no declaration file for `react-katex`. |
| `src/components/JarakTitikKeGarisInteraktif.tsx` | TS7016: no declaration file for `react-katex`. |
| `src/components/RangkumanSection.tsx` | TS7016: no declaration file for `react-katex`. |
| `src/components/SudutPusatInteraktif.tsx` | TS7053: `Language` indexes a map containing only `id`, `en`, and `ja`. |
| `src/components/SudutPusatProofAnim.tsx` | TS7016: no declaration file for `react-katex`; TS7053: `Language` indexes a map containing only `id`, `en`, and `ja`; TS7006: parameters `_` and `i` implicitly have type `any`. |

## Pre-Fase 0 vs HEAD split comparison (2026-11-21)

- Baseline: `894c52e` (the parent of Fase 0 commit `fccf4a3`).
- Requested HEAD: `e8366e1`.
- There is no `tsconfig.app.json`; the app config is `artifacts/numatik/tsconfig.json`.
- Direct `tsc` runs with a 6144 MiB heap were run sequentially in two `/tmp` worktrees. Both full checks were terminated (`143`, SIGTERM). Subsets for `src/lib`, `src/components`, `src/contexts`, and `src/pages/buku-animasi-matematika` completed. The remaining source was split into page, game, data, and other source subsets. The subset containing `App.tsx` and its lazy-import graph was also terminated on both revisions.
- Counts below are unique diagnostics by `(file, line, column, code, message)` across completed subsets; imported diagnostics repeated in multiple subsets are counted once. They do not include diagnostics unique to the unfinished `App.tsx` entry subset.
- The candidate HEAD counts include a type-only correction to `pickLang` that replaces an `unknown` result with the union of the provided locale-map value types. That correction removes the newly introduced `unknown` diagnostics but reveals additional incompatibilities at existing call sites. The correction is included in the follow-up commit that records this comparison.

| Folder | Baseline diagnostics | Current split count after focused fixes |
| --- | ---: | ---: |
| `src/components` | 111 | 88 |
| `src/games` | 13 | 13 |
| `src/pages/<root>` | 272 | 244 |
| `src/pages/bank-soal` | 21 | 2 |
| `src/pages/buku-animasi-matematika` | 2,246 | 1,616 |
| `src/pages/lkpd` | 97 | 90 |
| `src/pages/menghitung-cepat` | 8 | 0 |
| `src/pages/numatik-gamez` | 74 | 74 |
| `src/pages/ruang-untuk-guru` | 46 | 10 |
| `src/pages/tka` | 18 | 7 |
| `src/pages/tugas-latihan-mandiri` | 135 | 6 |
| **Total completed subsets** | **3,041** | **2,150** |

The split comparison initially reported 18 new `(file, TS code)` pairs. A focused rerun with the same explicit 16 page entry files found that four TS2322 pairs in unchanged files were already present at baseline; they were not regressions. The remaining 14 pairs were in changed pages and are listed below.

New pairs in changed files and the TypeScript messages:

| File and line | Code | Message |
| --- | --- | --- |
| `bilangan-bulat/PembagianPage.tsx:1265,1295,1322,1352` | TS2352 | Conversion of readonly locale tuples/arrays to mutable array types may be a mistake because neither type sufficiently overlaps; TypeScript suggests converting to `unknown` first. |
| `garis-singgung-lingkaran/GSPDPage.tsx:250` | TS2352 | Conversion of the localized object to `Record<..., string>` may be a mistake because the types do not sufficiently overlap. |
| `garis-singgung-lingkaran/SabukLilitanPage.tsx:339` | TS2352 | Conversion of the localized object to `Record<..., string>` may be a mistake because the types do not sufficiently overlap. |
| `lingkaran/BusurJuringPage.tsx:1012` | TS2719 | The localized value is not assignable to the expected localized value type; two different types with this name exist, but they are unrelated. |
| `lingkaran/KaitanBangunDatarLainnyaPage.tsx:1248` | TS2322 | The union of locale objects is not assignable to the expected locale object type. |
| `lingkaran/KaitanBangunDatarPage.tsx:415` | TS2322 | The union of locale objects is not assignable to the expected locale object type. |
| `lingkaran/KelilingLuasPage.tsx:717` | TS2719 | The localized value is not assignable to the expected localized value type; two different types with this name exist, but they are unrelated. |
| `lingkaran/PenerapanKontekstualPage.tsx:501` | TS2719 | The localized value is not assignable to the expected localized value type; two different types with this name exist, but they are unrelated. |
| `lingkaran/SudutPusatKelilingPage.tsx:406` | TS2719 | The localized value is not assignable to the expected localized value type; two different types with this name exist, but they are unrelated. |
| `lingkaran/UnsurUnsurPage.tsx:672,762` | TS2719, TS2345 | The localized value is not assignable to the expected localized value type; two different types with this name exist, but they are unrelated. The argument's locale-object type is not assignable to the expected locale-object type. |
| `plsv-ptlsv/KalimatTerbukaTertutupPage.tsx:448` | TS2551 | Property `terbukaDefBody4` does not exist on the localized value type; did you mean `terbukaDefBody`? |
| `relasi-fungsi/GrafikFungsiPage.tsx:496,497,532,533` | TS2339 | Properties `graph1_title`, `graph1_sub`, `graph2_title`, and `graph2_sub` do not exist on the union of locale objects. |
| `relasi-fungsi/GrafikFungsiPage.tsx:622,624,692,694,750,752` | TS2322 | Readonly locale tuples/arrays are not assignable to the mutable array types expected by these props. |

## Focused regression verification (2026-11-22)

- Re-ran the same targeted TypeScript program sequentially on baseline `894c52e` and the corrected working tree. The program explicitly includes the 12 changed page files listed above plus the four unchanged pages that had been reported as regressions; imported dependencies are included by TypeScript.
- The baseline program reported 54 diagnostics and the corrected program reported 10. There are **0 new `(file, TS code)` pairs** in the corrected program. The 10 remaining diagnostics are already present at baseline: four TS2322 entries in unchanged pages, two TS2345 ref-type entries in `BusurJuringPage.tsx`, and four diagnostics in the imported `SudutPusat*` components.
- The 14 changed-file pairs (36 diagnostic locations) were addressed with type-only changes. No translation or user-facing content was changed.
- The broad folder totals above subtract those 36 resolved diagnostic locations from the previous HEAD candidate counts. They remain split-subset totals, not a successful full-application typecheck.
- The full application check and the subset rooted at `App.tsx`/its lazy-import graph still terminate with SIGTERM (exit 143) before completing. Those scopes remain unverified; the focused page regression subset completed with zero new pairs.
