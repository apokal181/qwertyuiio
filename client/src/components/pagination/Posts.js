import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Pop from "../popup/pop";
import Popcomp from "../popup/popcomp";
import Loader from 'react-loader-spinner'



const Posts = ({ posts, loading }) => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [postId, setPostId] = useState(0)


    if(loading) {
        return <h2>Loading...</h2>;
    }
    return(

        <ul className="list-group mb-4">
        <Loader/>
            {posts.map(post => (
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{post.title}</span>
                                <p>{post.body}</p>
                            </div>
                            <div>
                                {post.name}
                            </div>

                            <div className="card-action">
                                <div className={Pop}>
                                    <main>
                                        <br/><br/>
                                        <Button onClick={() => {
                                            setButtonPopup(true);
                                            setPostId(post.id);
                                        }}>Read</Button>
                                    </main>
                                    <Popcomp post={post} postId={postId} trigger={buttonPopup} setTrigger={setButtonPopup}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </ul>
    )


}

export default Posts