import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}
const index: FC<Iprops> = () => {
  return <h1>Stage</h1>
}
export default memo(index)
