const Post = require('./models/post');

function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트${i}`,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ea inventore, sed eveniet fuga corrupti quisquam necessitatibus officiis. Dolorum ea harum totam possimus at rerum voluptatem deleniti optio ad iste?',
    tags: ['fake', 'data']
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
module.exports = createFakeData;
