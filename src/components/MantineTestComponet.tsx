'use client';

import { CopyButton } from '@mantine/core';

export function MantineTestComponet() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </button>
      )}
    </CopyButton>
  );
}