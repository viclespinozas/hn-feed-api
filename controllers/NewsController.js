const News = require('../models/News')

module.exports = {
    validateAndPost: (data) => {
        data.forEach(element => {
            News.find({ newsId: element.objectID}, (err, doc) => {
                if (doc.length == 0) {
                    var child = {};
                    child['createdAt'] = element.created_at
                    child['title'] = element.title
                    child['storyTitle'] = element.story_title
                    child['url'] = element.url
                    child['storyUrl'] = element.story_url
                    child['author'] = element.author
                    child['newsId'] = element.objectID
                    child['active'] = true

                    var promise = new Promise((resolve, reject) => {
                        News.create(child)
                        .then(data => {
                            resolve(data)
                        })
                        .catch(err => {
                            reject(err)
                        })
                    })
                    
                }
            })
        });
        return new Promise((resolve, reject) => {
            resolve()
        })
        
    },
    get: (params) => {
        return new Promise((resolve, reject) => {
            News.find(
                { storyTitle: { $ne: null }, active: true }
            )
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}