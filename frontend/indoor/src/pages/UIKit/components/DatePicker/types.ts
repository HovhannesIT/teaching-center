export interface PropsI {
  onChange: (newDateState: string) => void;
  value: string;
}

export interface StateI {
  year: number;
  month: number;
  day: number;
}

export type CompT = React.FC<PropsI>


