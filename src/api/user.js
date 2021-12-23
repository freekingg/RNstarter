import request from './request';
// 注册
export function register(params) {
  return request({
    url: '/api/member/register',
    method: 'POST',
    data: params,
  });
}

// 登录
export function login(params) {
  return request({
    url: '/api/member/login',
    method: 'POST',
    data: params,
  });
}

// 获取用户信息
export function getUserInfo(params) {
  return request({
    url: '/api/member/my_info',
    method: 'get',
    params: params,
  });
}

// 获取用户当前进度
export function schedule(params) {
  return request({
    url: '/api/member/schedule',
    method: 'get',
  });
}

// 退出
export function logout(params) {
  return request({
    url: '/api/member/logout',
    method: 'POST',
    params: params,
  });
}

// 检测手机是否可用
export const checkMobile = mobile => {
  return request({
    url: `/api/member/checkMobile/${mobile}`,
  });
};

// 修改登录密码
export const loginpwd = formData => {
  return request({
    url: '/api/member/pwd',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'PUT',
    data: formData,
  });
};

// 重置登录密码
export const forgotpwd = formData => {
  return request({
    url: '/api/member/forgot_pwd',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'PUT',
    data: formData,
  });
};

// 是否设置取款密码
export function withdrawalpwdisset(params) {
  return request({
    url: '/api/member/withdrawal_pwd/isset',
    method: 'get',
  });
}
// 设置取款密码PUT
export const withdrawalpwd = formData => {
  return request({
    url: '/api/member/withdrawal_pwd',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'PUT',
    data: formData,
  });
};

// 修改取款密码
export const updatewithdrawalpwd = formData => {
  return request({
    url: '/api/member/withdrawal_pwd/modify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'PUT',
    data: formData,
  });
};

// 绑定新手机
export const bindNewMobile = formData => {
  return request({
    url: '/api/member/mobile',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'PUT',
    data: formData,
  });
};

// 添加实名认证
export function bindRealName(params) {
  return request({
    url: '/api/member/real_name',
    method: 'POST',
    data: params,
  });
}

// 获取实名认证
export function getRealName(params) {
  return request({
    url: '/api/member/real_name',
    params: params,
  });
}

// 获取我的推荐
export function invite_info(params) {
  return request({
    url: '/api/member/my_info/invite_info',
    params: params,
  });
}
