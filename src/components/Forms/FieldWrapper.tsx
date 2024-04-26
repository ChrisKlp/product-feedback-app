import React from 'react'
import { type FieldError } from 'react-hook-form'

type Props = {
  label: string
  headline: string
  children: React.ReactNode
  error?: FieldError
}

export default function FieldWrapper({
  label,
  headline,
  children,
  error,
}: Props) {
  return (
    <div className="grid">
      <label className="h4 mb-1 text-xs">{label}</label>
      <span className="mb-4 text-xs">{headline}</span>
      {children}
      {error && (
        <span className="mt-1 text-[14px] text-@red-500">{error.message}</span>
      )}
    </div>
  )
}
