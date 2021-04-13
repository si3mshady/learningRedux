import React, {useState} from 'react'

export default function PostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    return (
        <div>

        <h1>Add Post</h1>       
        <form>
            <div>
                <label>Title: </label> <br/>
                <input onChange={handleTitleChange} value={title} type='text' name='title'/>
            </div>
            <div>
                <label>Body: </label> <br/>
                <textarea onChaged={handleBodyChange} value={body} name='body' type='text'/>
            </div>
            <br/>
            <button type='submit'>Submit</button>
        </form>     
            
        </div>
    )
}
