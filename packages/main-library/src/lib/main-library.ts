import { dualEntryLazyLibrary } from '@nx-repro/dual-entry-lazy-library';

export async function mainLibrary(): Promise<string> {
  const {secondary} = await import(
    '@nx-repro/dual-entry-lazy-library/secondary'
  );
  return secondary + dualEntryLazyLibrary();
}
