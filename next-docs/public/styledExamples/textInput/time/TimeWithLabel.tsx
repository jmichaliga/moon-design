import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="time"
      inputSize="medium"
      label="medium"
      placeholder="Placeholder"
    />
    <TextInput
      type="time"
      inputSize="large"
      label="large"
      placeholder="Placeholder"
    />
    <TextInput
      type="time"
      inputSize="xlarge"
      label="xlarge"
      placeholder="Placeholder"
    />
  </div>
);

export default Example;
