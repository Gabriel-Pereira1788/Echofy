import {useState} from 'react';

type Props<Key, Value> = {
  initialState: Key;
  mappedNextStates: Record<string, {nextState: Key; nextValue: Value}>;
  onChanged: (value: Value) => void;
};

export function useMappedStatesChanged<Key, Value>({
  initialState,
  mappedNextStates,
  onChanged,
}: Props<Key, Value>) {
  const [currentState, setCurrentState] = useState<Key>(initialState);

  function handleChangeState() {
    const mappedValue =
      mappedNextStates[currentState as keyof typeof mappedNextStates];

    setCurrentState(mappedValue.nextState);
    onChanged(mappedValue.nextValue);
  }

  return {
    currentState,
    handleChangeState,
  };
}
