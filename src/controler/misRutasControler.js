const gethome = (req, res) => {
    res.render('home');
};
const getlogin = (req, res) => {
    res.render('login');
};
const getproducts = (req, res) => {
    res.render('products');
};
const getregister = (req, res) => {
    res.render('register');
};
const getlist = (req, res) => {
    res.render('list');
};
const getspecificcontent = (req, res) => {
    res.render('specificcontent');
}; 
module.exports = {
    gethome,
    getlogin,
    getproducts,
    getregister,
    getlist,
    specificcontent
};