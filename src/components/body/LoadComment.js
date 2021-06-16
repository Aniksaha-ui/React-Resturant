import React from 'react';
import dateFormat from 'dateformat';


const LoadComment =(props)=>{

    return(

        props.comments.map(comments=>{
            return(
                <div key={comments.id}>
                        <h5 >{comments.author}</h5>
                        <p>{comments.comment}</p>
                        <p>{dateFormat(comments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            );
        })

    );
}

export default LoadComment;