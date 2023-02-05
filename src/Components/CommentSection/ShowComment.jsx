import React from 'react';
import { useSelector } from 'react-redux';
import EachComment from './EachComment';

function ShowComment(props) {
    let {posts} = useSelector(state=>state);

    return (
        <div>
            {
                posts.map((eachPost)=>{
                    return (
                         <EachComment {...eachPost}/>
                      

                    )
                })
            }

            
        </div>
    );
}

export default ShowComment;