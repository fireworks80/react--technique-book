import { connect } from 'react-redux';
import Sample from '../Components/Sample';
import { getPost, getUsers } from '../modules/sample';

import { useEffect } from 'react';

const SampleContainer = ({ post, users, loadingPost, loadingUsers, getPost, getUsers }) => {
  useEffect(() => {
    getPost(1);
    // getUsers(1);
  }, [getPost]);
  return (
    <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} onHandleUsers={getUsers} />
  );
};

const mapStateToProps = ({ sample }) => {
  console.log(sample);
  return {
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  };
};

const mapDispatchToProps = {
  getPost,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
