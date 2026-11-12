# open-extensions

Distribution-only release repository for OpenCode extensions. Each
`<extension>/` directory contains only its release metadata: `stable.json`
(the signed release descriptor), `stable.json.sig` when published, and a
README. Extension source lives in the opencode monorepo; the descriptor's
`source.commit` records the exact commit a release was built from.

Install `.tgz` archives are distributed through
[GitHub Releases](https://github.com/panyw5/open-extensions/releases). Each
`<extension>/stable.json` is the release descriptor consumed by the
"release URL" install source:

```text
https://raw.githubusercontent.com/panyw5/open-extensions/main/<extension>/stable.json
```

Publishing is automated by `script/extension-publish.ts` in the opencode
monorepo; do not hand-edit generated `stable.json` files.
