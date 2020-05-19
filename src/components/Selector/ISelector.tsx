export interface ISelectorProps {
  options: ISelectorOption[];
}

export interface ISelectorOption {
  label: string;
  onSelect: (data?: any) => void;
  data?: any;
}