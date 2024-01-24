import { ButtonHTMLAttributes, ReactNode } from "react"

export interface PropsI extends ButtonHTMLAttributes<HTMLButtonElement>  {
  theme?: 'primary' | 'secondary',
  loading?: boolean,
  children: ReactNode | ReactNode[]
}

export type CompT = (props: PropsI) => JSX.Element


