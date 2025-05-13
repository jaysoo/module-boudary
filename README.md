**Run:**

```
nx lint @nx-repro/main-library
```

**Expected:**

No errors

**Actual:**

Error, even though the static and dynamic imports are from different entry points in `packages/main-library/src/lib/main-library.ts`.

```
/private/tmp/module-boudary/packages/main-library/src/lib/main-library.ts
  1:1  error  Static imports of lazy-loaded libraries are forbidden.

Library "@nx-repro/dual-entry-lazy-library" is lazy-loaded in these files:
- packages/main-library/src/lib/main-library.ts  @nx/enforce-module-boundaries

✖ 1 problem (1 error, 0 warnings)
```


See: https://github.com/nrwl/nx/pull/30809
