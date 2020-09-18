const Query = {
    users(parent, args, { db }, info) {
        if(!args.query){
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
        })
    },

    posts(parent, args, { db }, info){
        if(!args.query){
            return db.posts
        }

        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            const isBodyMatch = post.body.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },

    comments(parent, args, { db }, info) {
        return db.comments
    },

    me() {
        return {
            id: '22332',
            name: 'mark',
            email: 'aef@awef.com'
        }
    },
    
    post() {
        return {
            id: '3r3r3',
            title: 'ejife',
            body: "fheihf",
            published: true
        }
    }
}

export { Query as default }