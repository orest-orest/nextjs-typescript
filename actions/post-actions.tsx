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

