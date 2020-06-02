import * as types from './action-types';

const apiKey: string = 'https://simple-blog-api.crew.red/posts';

export function receivePosts(postList: any) {
    console.log('step2');
    return {type: types.RECIEVE_POSTS_LIST, postList: postList};
}

export function createPostAction(title, body) {
    console.log(title, body);
    return {type: types.CREATE_POST, payload: {
        title,
            body
    }
    };
}


// export const fetchPosts = () => {
//     // @ts-ignore
//     return async dispatch => {
//     //@ts-ignore
//         const req = new Request(apiKey);
//         let json = await fetch(apiKey).then(response => response.json());
//         //@ts-ignore
//        dispatch(receivePosts(json));
//
//     };
// };

export async function getStaticProps() {
    const res = await fetch('https://simple-blog-api.crew.red/posts');
    const json = await res.json();

    return {
        props: {
           json
        },
    }
}


// export const fetchData = () => {
//     console.log('step2')
//     return (dispatch) => {
//         return axios.get(apiKey)
//             .then(response => {
//                 return response.data
//             })
//             .then(data => {
//                 dispatch(receivePosts)
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };