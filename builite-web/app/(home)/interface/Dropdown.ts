export interface Option {
  id: number;
  label?: string;
  href?: string;
  hasModal?: any;
  action?: any;
}

export interface DropdownMenuProps {
  label: string;
  options: Option[];
  buttonSpan?: any;
}
