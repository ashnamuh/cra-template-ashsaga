import * as React from 'react'

interface Props {
  title: string;
}

export default function AshComponent({ title }: Props) {
  return (
    <p>{title}</p>
  )
}