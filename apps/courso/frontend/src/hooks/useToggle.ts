import { useState } from 'react';

export const useToggle = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggle];
};
