export interface Option {
  id: number;
  icon?: any;
  label?: string;
  href?: string;
  modal?: any;
  action?: any;
}

export interface DropdownMenuProps {
  label: string;
  options: Option[];
  buttonSpan?: any;
}
