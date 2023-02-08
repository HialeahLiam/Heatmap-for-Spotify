import React from 'react';

type Trigger = {
  callee: Function;
};

type Props = {
  text: string;
  trigger: Trigger;
};

function SplitTitle({ text, trigger }: Props) {
  const spanElements = text
    .trim()
    .split('')
    .map((s) => <span>{s}</span>);

  function triggeredFunction() {
    console.log('hello!');
  }

  trigger.callee = triggeredFunction;

  return <h1 className="text-7xl mb-4">{spanElements}</h1>;
}

export default SplitTitle;
