'use client'
import { usePageViews } from '@koiztech/next-yandex-metrika'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  usePageViews()
  return <>{children}</>
}
