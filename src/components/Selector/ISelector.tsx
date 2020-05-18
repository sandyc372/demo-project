export interface ISelectorProps {
  options: SelectorOption[];
}

export interface SelectorOption {
  label: string;
  onSelect: (data?: any) => void;
  data?: any;
}