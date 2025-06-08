import type { Dispatch, FC, SetStateAction, SVGProps } from 'react'

export type TSVG = FC<SVGProps<SVGSVGElement>>

export enum ELanguage {
  uk = 'uk',
  ru = 'ru',
}

export type useStateType<T> = Dispatch<SetStateAction<T>>
