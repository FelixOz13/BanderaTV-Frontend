import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComment} from '../features/comments/commentSlice'

function CommentForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createComment({ text }))
    setText('')
  }

  return (
    <section className="form2">
    <form onSubmit={onSubmit}>
      <div className="form-group2">
        <label htmlFor="text">Tabla de Comentarios</label>
        <input
          className="comments-container"
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Agrega Tu Comentario'
        />
      </div>
      <div className="form-group">
        <button className="btn1 btn-block" type="submit">
          Agrega tu Comentario
        </button>
      </div>
    </form>
  </section>
  )
}

export default CommentForm