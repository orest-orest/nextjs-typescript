import Nav from '../components/Nav'
import {useDispatch, useSelector} from 'react-redux';
import {receivePosts} from "../actions/post-actions";
import fetch from 'node-fetch';



export async function getStaticProps() {
    const res = await fetch('https://simple-blog-api.crew.red/posts');
    const json = await res.json();

    return {
        props: {
            post: json
        },
    }
}


export default function LatestPosts({post}) {


    const dispatch = useDispatch();
    console.log('step1');
    dispatch(receivePosts(post));

    const state = useSelector((state) => state.postList);
    console.log(state);

    const listItems = state.map((state) =>
        <li>
            <h3>{state.title}</h3>
            <p>{state.body}</p>
        </li>

    );

    return (
        <>
            <Nav title="LatestPosts"></Nav>
            <div>
                <ul>

                        <p>latest post is gonna be here</p>
                        {listItems}

                </ul>
            </div>
        </>
    )
};



