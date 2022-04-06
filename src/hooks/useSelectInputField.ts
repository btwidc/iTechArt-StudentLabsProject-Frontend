import { useState } from 'react';
import { SingleValue } from 'react-select';

import {
  SelectState,
  SelectType,
} from '../components/EventFormComponents/DropDownSelect/DropDownSelect';

export const useSelectInputField = (
  initialState: SelectState | null,
): [SelectState | null, (option: SingleValue<SelectType>) => void] => {
  const [selectedElement, setSelectedElement] = useState<SelectState | null>(
    initialState,
  );
  return [
    selectedElement,
    (option: SingleValue<SelectType>): void => {
      setSelectedElement({
        selectedOption: option,
      });
    },
  ];
};
