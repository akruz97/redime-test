import { useState } from 'react';

export const useForm = <T extends object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (value: any, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const setFormValue = (form: T) => {
    setState(form);
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
