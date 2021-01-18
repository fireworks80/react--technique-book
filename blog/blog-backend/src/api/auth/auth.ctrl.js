const User = require('../../models/user');

// POST /api/auth/register
// {
//    username: 'velopert',
//    password: 'mypass123'
// }

exports.register = async ctx => {
  // 회원가입
  const {username, password} = ctx.request.body;
  // console.log(username);
  try {
    // 사용자가 이미 존재 한지...
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; //  Conflict
      return;
    }

    const user = new User({username});

    await user.setPassword(password);
    await user.save();

    // 응답할 데이터에서 hashedpassword 필드 제거
    ctx.body = user.serialize();

  } catch(e) {
    ctx.throw(500, e);
  }
};

exports.login = async ctx => {
  // login
};

exports.check = async ctx => {
  // check login status
};

exports.logout = async ctx => {
  // logout
};