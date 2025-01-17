import React from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col items-stretch justify-around w-full gap-2">
    <AuthCode
      length={6}
      stretch={true}
      onChange={(value: string) => {
        console.log('** EXAMPLE - New value - ', value);
      }}
      onSubmit={(value: string) => {
        console.log('** EXAMPLE - Submit value - ', value);
      }}
    />
    <AuthCode
      length={4}
      stretch={true}
      onChange={(value: string) => {}}
      onSubmit={(value: string) => {}}
    />
  </div>
);

export default Example;
