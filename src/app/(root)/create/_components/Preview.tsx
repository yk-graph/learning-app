'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import 'react-quill/dist/quill.snow.css'

interface PreviewProps {
  value: string
}

const Preview = ({ value }: PreviewProps) => {
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
  }

  return (
    <div className="h-full w-full text-white">
      <ReactQuill theme="bubble" modules={modules} value={value} readOnly />
    </div>
  )
}

export default Preview
