<<<<<<< HEAD
import Button from "./Button"
import { enterComment, filterComment, readComment } from "@api/commentApi"
import { AddCommentProps } from "interface"
import React, { useEffect, useRef, useState } from "react"

function AddComment({ videoId, setCommentData }: AddCommentProps) {
  const [isFocus, setIsFocus] = useState(false)
  const [text, setText] = useState<string>("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isSubmit, setIsSubmit] = useState(false)

  const handleInputFocus = () => {
    setIsFocus(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
=======
import React, { useState } from "react"
import Button from "./Button"

function AddComment() {
  const [state, setState] = useState(false)
  const [text, setText] = useState<string>("")

  const handleInputFocus = () => {
    setState(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setText(e.target.innerText)
>>>>>>> 06e00f2 (v0.0.0 리뷰드려요. review라는 키워드를 검색하시면 찾을 수 있으실거에요.)
  }

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
<<<<<<< HEAD
    setIsFocus(false)
    setText("")
  }

  const handleCommentSubmit = async () => {
    await enterComment(text, videoId)
    setIsSubmit((prevState) => !prevState)
    setText("")
  }

  useEffect(() => {
    const promiseData = filterComment(videoId)
    promiseData
      .then((comments) => {
        setCommentData(comments || [])
      })
      .catch((error) => {
        console.error("에러 발생: ", error)
      })
  }, [isSubmit])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (text === "") {
        return
      } else {
        handleCommentSubmit()
      }
    }
  }

  // useEffect를 사용하여 텍스트가 변경될 때마다 높이를 조절합니다.
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "30px"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [text])
=======
    setState(false)
    setText("")
  }

  const handleCommentSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("댓글 등록:", text)
    setText("")
  }
>>>>>>> 06e00f2 (v0.0.0 리뷰드려요. review라는 키워드를 검색하시면 찾을 수 있으실거에요.)

  // review
  // 콘솔로그는 디버깅용으로만 사용해주세요. 개발할 때 사용하시고 삭제해주세요.
  return (
    <div className="w-full pb-2">
      <div className="h-auto flex">
        <div className="min-h-[102px] pr-4">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src="/smile.png"
              alt="프로필 사진"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>

        <form className=" w-full flex-col gap-10">
          <textarea
            ref={textareaRef}
            placeholder="댓글 추가..."
            className="w-full border-b-2 mb-2 focus:outline-none focus:border-b-slate-500 overflow-hidden resize-none"
            value={text}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />

          {isFocus && (
            <div className="flex gap-3 justify-end">
              <Button
                text={"취소"}
                type={"button"}
                onClick={handleCancel}
                activeClass="hover:bg-slate-200"
              />
              <Button
                text={"등록"}
                type={"button"}
                onClick={handleCommentSubmit}
                color={
                  text ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                }
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default AddComment
