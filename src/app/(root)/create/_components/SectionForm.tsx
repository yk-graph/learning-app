'use client'

import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'

import { db } from '@/firebase/clientApp'
import { useAuthStore, useContentStore } from '@/hooks'
import type { Section } from '@/types'

const SectionForm = () => {
  const { authUser } = useAuthStore()
  const { categoryId, setSectionId } = useContentStore()

  const [inputValue, setInputValue] = useState({
    id: '',
    name: '',
  })
  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    const unsub = onSnapshot(
      collection(
        db,
        `users/${authUser?.uid}/categories/${categoryId}/sections`
      ),
      (res) => {
        const fetchedSections = res.docs
          .map((doc) => doc.data() as Section)
          .sort((a, b) => a.position - b.position)
        setSections(fetchedSections)
      }
    )
    return () => unsub()
  }, [categoryId])

  const handleChangeSelectCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputValue({ id: '', name: '' })
    setSectionId(e.target.value)
  }

  const handleSubmitAddSection = async () => {
    await setDoc(
      doc(
        db,
        `users/${authUser?.uid}/categories/${categoryId}/sections/${inputValue.id}`
      ),
      {
        id: inputValue.id,
        name: inputValue.name,
        position: sections.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    )
      .then(() => alert('セクションを追加しました'))
      .catch(() => alert('セクションの追加に失敗しました'))
      .finally(() => setInputValue({ id: '', name: '' }))
  }

  return (
    <div className="mt-8 border-b border-b-slate-500">
      <div className="mb-8">
        <h2>セクション追加</h2>
        <div className="flex gap-x-4">
          <input
            className="h-10 w-40 rounded px-4 text-teal-900"
            type="text"
            disabled={!categoryId}
            placeholder="id"
            value={inputValue.id}
            onChange={(e) => {
              setInputValue((prev) => ({ ...prev, id: e.target.value }))
            }}
          />
          <input
            className="h-10 flex-1 rounded px-4 text-teal-900"
            type="text"
            disabled={!categoryId}
            placeholder="name"
            value={inputValue.name}
            onChange={(e) => {
              setInputValue((prev) => ({ ...prev, name: e.target.value }))
            }}
          />
          <button
            className="h-10 w-24 ml-auto border border-solid border-white rounded cursor-pointer"
            disabled={!categoryId || !inputValue.id || !inputValue.name}
            onClick={handleSubmitAddSection}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2>セクション選択</h2>
        <div className="flex gap-x-4">
          <select
            className="h-10 w-full rounded px-4 text-teal-900"
            disabled={!categoryId}
            onChange={(e) => handleChangeSelectCategory(e)}
          >
            <option hidden>選択してください</option>
            {sections.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SectionForm
