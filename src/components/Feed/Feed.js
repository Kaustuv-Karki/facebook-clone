import React, { useState } from 'react'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import db from '../../firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useState(() => {
        db.collection('posts').onSnapshot(snapshot => 
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        )
        console.log(posts)
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post => (
                <Post 
                    key={post.id}
                    username={post.data.username}
                    image={post.data.image}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed
