module.exports = (req, res) => {
  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'knowledge';
  // res.send('article');
  res.render('home/knowledge');
};