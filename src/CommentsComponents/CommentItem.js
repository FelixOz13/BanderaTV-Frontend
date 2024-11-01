import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, updateComment } from '../features/comments/commentSlice'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useState } from 'react'

function CommentItem({ comment }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth) // Get the logged-in user from Redux state
  const [isEditing, setIsEditing] = useState(false)
  const [updatedText, setUpdatedText] = useState(comment.text)

  const handleDelete = () => {
    if (window.confirm('Estas Seguro que deseas Eliminar tu Comentario?')) {
      dispatch(deleteComment(comment._id))
    }
  }

  const handleUpdate = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    dispatch(updateComment({ id: comment._id, text: updatedText }))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setUpdatedText(comment.text) // reset the text
  }

  return (
    <div className="comment-item">
      <div className="comment-header">
        <h3 className="comment-username">
          <span>{comment.username}</span>
          <span className="comment-date">
            {new Date(comment.createdAt).toLocaleString('en-US')}
          </span>
        </h3>

        {/* Only show icons if the logged-in user is the owner of the comment */}
        {user?.username === comment.username && (
          <>
            <FaTrash
              className="delete-icon"
              onClick={handleDelete}
              title="Delete comment"
              role="button"
              aria-label="Delete comment"
            />
            <FaEdit
              className="edit-icon"
              onClick={handleUpdate}
              title="Edit comment"
              role="button"
              aria-label="Edit comment"
            />
          </>
        )}
      </div>

      {isEditing ? (
        <div>
          <textarea
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="comment-edit-textarea"
            placeholder="Editar"
          />
          <button onClick={handleSave} className="btn1">Proceder</button>
          <button onClick={handleCancel} className="btn1">Cancelar</button>
        </div>
      ) : (
        <p className="comment-text" style={{ fontSize:'2rem'}}>{comment.text}</p>
      )}
    </div>
  )
}

export default CommentItem
