'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import 'react-quill/dist/quill.snow.css'

interface EditorProps {
  onChange: (value: string) => void
  value: string
}

const Editor = ({ onChange, value }: EditorProps) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(
        () => {
          hljs.configure({
            // optionally configure hljs
            languages: ['javascript', 'typescript', 'css', 'html'],
          })
          // @ts-ignore
          window.hljs = hljs
          return import('react-quill')
        },
        {
          ssr: false,
          loading: () => <p>Loading</p>,
        }
      ),
    []
  )

  const modules = {
    syntax: true,
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['code-block'],
    ],
  }

  return (
    <div className="w-full bg-white rounded text-teal-900">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Editor
