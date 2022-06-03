const Topic = require('../Model/Topic.model');


const addTopic = (req, res) => {
    const topic = new Topic(req.body);
    topic.save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(200).send(err));
}
module.exports = {
    addTopic
}