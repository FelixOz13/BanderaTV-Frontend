import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CommentItem from './CommentItem'
import CommentForm from './CommentForm'
import { getComments, reset } from '../features/comments/commentSlice'
import './Comments.css'

function CommentBox() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { comments } = useSelector((state) => state.comments)

  useEffect(() => {
    dispatch(getComments())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])

  const renderedComments = comments.map((comment) => (
    <CommentItem key={comment._id} comment={comment} />
  ))

  return (
    <div>
      <section className="comments-container">
        <div className="comments">{renderedComments}</div>
      </section>

      <CommentForm />
    </div>
  )
}

export default CommentBox
