'use client'

import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore'

import { db } from '@/firebase/clientApp'
import { useAuthStore } from '@/hooks'
import type { Category } from '@/types'

const CategoryForm = () => {
  const { authUser } = useAuthStore()
  const [inputValue, setInputValue] = useState({
    id: '',
    name: '',
  })
  const [selectValue, setSelectValue] = useState<string>()

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, `users/${authUser?.uid}/categories`),
      (res) => {
        const fetchedCategories = res.docs
          .map((doc) => doc.data() as Category)
          .sort((a, b) => a.position - b.position)
        setCategories(fetchedCategories)
      }
    )
    return () => unsub()
  }, [])

  const handleChangeSelectCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputValue({ id: '', name: '' })
    setSelectValue(e.target.value)
  }

  const handleSubmitAddCategory = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    await setDoc(
      doc(db, `users/${authUser?.uid}/categories/${inputValue.id}`),
      {
        id: inputValue.id,
        name: inputValue.name,
        position: categories.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    )
      .then(() => alert('カテゴリーを追加しました'))
      .catch(() => alert('カテゴリーの追加に失敗しました'))
      .finally(() => setInputValue({ id: '', name: '' }))
  }

  return (
    <div>
      <div className="mb-8">
        <h2>カテゴリー追加</h2>
        <form className="flex gap-x-4" onSubmit={handleSubmitAddCategory}>
          <input
            className="h-10 w-20 rounded px-4 text-teal-900"
            type="text"
            placeholder="id"
            value={inputValue.id}
            onChange={(e) => {
              setInputValue((prev) => ({ ...prev, id: e.target.value }))
            }}
          />
          <input
            className="h-10 flex-1 rounded px-4 text-teal-900"
            type="text"
            placeholder="name"
            value={inputValue.name}
            onChange={(e) => {
              setInputValue((prev) => ({ ...prev, name: e.target.value }))
            }}
          />
          <button
            className="h-10 w-24 ml-auto border border-solid border-white rounded"
            disabled={!inputValue.id || !inputValue.name}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h2>カテゴリー選択</h2>
        <div className="flex gap-x-4">
          <select
            className="h-10 w-full rounded px-4 text-teal-900"
            onChange={(e) => handleChangeSelectCategory(e)}
          >
            <option hidden>選択してください</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CategoryForm
