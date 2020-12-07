const Sample = ({ loadingPost, loadingUsers, post, users, onHandleUsers }) => {
  return (
    <>
      <section>
        <h1>post</h1>
        {loadingPost && 'loading...'}
        {!loadingPost && post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h2>사용자 목록</h2>
        <button onClick={onHandleUsers}>get User</button>
        {loadingUsers && 'loading...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username}({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Sample;
