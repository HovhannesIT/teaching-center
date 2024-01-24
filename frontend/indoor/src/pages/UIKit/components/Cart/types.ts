import { ReactNode } from "react"

export interface PropsI {
  children: ReactNode | ReactNode[]
}

export type CompT = React.FC<PropsI>


