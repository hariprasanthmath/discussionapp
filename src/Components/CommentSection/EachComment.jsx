import React, { useRef, useState } from 'react';
import "./eachcomment.css"
import { useSelector } from 'react-redux';
import { addComment } from '../../redux/action';
import { useDispatch } from 'react-redux';
function EachComment({children, id ,parent, text, likes}) {

    let {posts} = useSelector(state=>state);
    let dispatch = useDispatch();
    let [showEdit, setShowEdit] = useState(false);
    let editRef = useRef();
    const deleteComment = ()=>{
       let result = posts.filter((eachPost)=>{
            if(eachPost.id !== id){
                return eachPost;
            }
        })
        addComment(dispatch, result);
    }

    const editComment = () => {
        setShowEdit(true);
        editRef.current.value = text;
    }

    const saveEdit = () =>{
        let value = editRef.current.value;
        setShowEdit(false);

        let result =  posts.map((eachPost)=>{
            if(eachPost.id === id){
                eachPost.text = value;
            }
            return eachPost;
        })
        addComment(dispatch, result);
    }

    const increaseLike = () => {
      let result =  posts.map((eachPost)=>{
            if(eachPost.id === id){
                eachPost.likes = eachPost.likes + 1;
            }
            return eachPost;
        })
        addComment(dispatch, result);

    }

    return (
        <div key={id} className="eachcmtcont">
            <div className='maincont'>
            <p className='cmtmessagetext'>{text}</p>
            <input ref={editRef} style={{display:showEdit?"":"none"}}  type={"text"}></input>
            <button onClick={saveEdit} style={{display:showEdit?"":"none"}} className={"btn"}>Save</button>
             <div>
                <p>Likes: {likes}</p>
                <button onClick={increaseLike}>+</button>
             </div>
            </div>

            <div>
            <button onClick={editComment} className='edit btn'> Edit</button>
            <button onClick={deleteComment} className='delete btn'> Delete</button>
            </div>
        </div>
    );
}

export default EachComment;