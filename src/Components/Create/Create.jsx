import React from 'react';
import "./create.css"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/action';
import { useRef } from 'react';
function Create(props) {

    let [comment, setComment] = useState("");
    let dispatch = useDispatch();
    let inputRef = useRef();
    // let [showalert , setShowAlert] = useState(false);
    let [parent, setParent] = useState("nil");
    let {posts} = useSelector(state=>state);
    console.log(posts);

    const commentUpdata = (e)=>{
          setComment(e.target.value);
    }
    const handleCreate = ()=>{
        if(comment.length>200){
            alert("Input length should be less that 200 characters")
        }else{
         
            let newComment = {
                text : comment,
                children : [],
                id: uuidv4(),
                likes : 0,
                parent 
            }

            posts.push(newComment);
            addComment(dispatch, posts);

            alert("created")
            inputRef.current.value = "";
            setComment("");

        }
    }

    return (
       <div>
         <div className='buttoninput'>
            <input ref={inputRef} onChange={commentUpdata} type="text" placeholder='Join the discussion...'></input>
            <div class="container">
	              <button onClick={handleCreate} class="button hover-btn"><span>Create</span></button>
            </div>
        </div>
        <p style={{color:comment.length>200?"red":"green"}} className="commentsize">{comment.length}/200</p>
       </div>

    );
}

export default Create;