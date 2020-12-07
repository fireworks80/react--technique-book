const data = {
  velopert: {
    name: '김민준',
    desc: '리액트를 좋아하는 놈',
  },
  gildong: {
    name: '홍길도',
    desc: '고전 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  console.log(username);
  if (!profile) {
    return <p>존재 하지 않는 사용자</p>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desc}</p>
    </div>
  );
};

export default Profile;
