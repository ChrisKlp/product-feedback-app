import Textarea from '@/components/Forms/Textarea'
import React from 'react'

export default function AddCommentForm() {
  return (
    <section className="rounded-dlg bg-white p-6 md:px-8 md:pb-8">
      <h3 className="h3 mb-6 text-[18px]">Add Comment</h3>
      <Textarea placeholder="Type your comment here" />
      <div className="mt-4 flex items-center justify-between">
        <p className="md:text-[15px]">250 Characters left</p>
        <button type="button" className="btn">
          Post Comment
        </button>
      </div>
    </section>
  )
}
