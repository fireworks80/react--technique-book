import { connect } from 'react-redux';
import Sample from '../Components/Sample';
import { getPost, getUsers } from '../modules/sample';

import { useEffect } from 'react';

const SampleContainer = ({ post, user, loadingPost, loadingUsers, getPost, getUsers }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        // await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost]);
  return (
    <Sample post={post} users={user} loadingPost={loadingPost} loadingUsers={loadingUsers} onHandleUsers={getUsers} />
  );
};

const mapStateToProps = ({ sample, loading }) => {
  const { post, user } = sample;
  console.log(loading);
  return {
    post,
    user,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS,
  };
};

const mapDispatchToProps = {
  getPost,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
