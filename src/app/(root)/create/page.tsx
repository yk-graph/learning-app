'use client'

import { useContentStore } from '@/hooks'

import { CategoryForm, IssueForm, SectionForm } from './_components'

export default function CreatePage() {
  const { categoryId, sectionId } = useContentStore()

  return (
    <>
      <CategoryForm />
      <SectionForm />
      {categoryId && sectionId && <IssueForm />}
    </>
  )
}
