const users = [
    {
        id: '1',
        name: 'Mark',
        email: 'mark@naver.com',
        age: 20
    },
    {
        id: '2',
        name: 'Jason',
        email: 'json@gmail.com'
    },
    {
        id: '3',
        name: 'Henry',
        email: 'henry@naver.com',
        age: 20
    }
]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
}]

const comments = [
    {
        id: '98',
        text: 'shit',
        author: '1',
        post: '10'
    },
    {
        id: '99',
        text: 'fuck',
        author: '2',
        post: '11'
    },
    {
        id: '100',
        text: 'hell',
        author: '2',
        post: '11'
    },
    {
        id: '101',
        text: 'holy',
        author: '1',
        post:'12'
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default }