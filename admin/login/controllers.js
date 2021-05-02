const login = async (req, res) => {
  strMethod = "";
  if (req.method == "GET") {
    res.render('admin/login');
  }
  if (req.method == "POST") {
    
    res.redirect('/admin')
  }
};

module.exports = {
  login,
};
