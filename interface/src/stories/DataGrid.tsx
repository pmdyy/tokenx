import React from 'react'
import Button from '@mui/material/Button'
// import './button.css'

interface DataGridProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  children: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const DataGrid = ({ primary = false, children, ...props }: DataGridProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return <Button mode={mode}>{children}</Button>
}
