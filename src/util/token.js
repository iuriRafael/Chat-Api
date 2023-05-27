const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const verifyToken = promisify(jwt.verify);

const checkToken = async (token, id, key) => {
  try {
    const decoded = await verifyToken(token, key);
    if (decoded.id === id) {
      return true; // token e id são válidos
    } else {
      return false; // id não corresponde ao do token
    }
  } catch (err) {
    return false; // erro na verificação do token
  }
};

const setToken = async (id, key) => {
    console.log(id);
    if(id){
        return jwt.sign({id}, key, {expiresIn: 28800});
    }
    return false;
};

module.exports = {
    checkToken,
    setToken
};