# open-extensions

Independent release repository for OpenCode extensions. Each directory is a
self-contained extension (including a committed, prebuilt `dist/` because
`@opencode-ai/extension-kit` is not publicly published, so extensions cannot
be rebuilt outside the monorepo).

Install `.tgz` archives are distributed through
[GitHub Releases](https://github.com/panyw5/open-extensions/releases). Each
`<extension>/stable.json` is the release descriptor consumed by the
"release URL" install source:

```text
https://raw.githubusercontent.com/panyw5/open-extensions/main/<extension>/stable.json
```

Publishing is automated by `script/extension-publish.ts` in the opencode
monorepo; do not hand-edit generated `stable.json` files.
