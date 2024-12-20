import jwt from 'jsonwebtoken'
const KEY = "=illasc3ndasth3sunintoth3night&?"

export function geraToken(usuario){
  if(usuario == undefined)
    throw new Error("Verifique se o email e senha estão corretos.")
  return jwt.sign(usuario, KEY)
}

export function autenticar(req, res, next){
    return autenticacao(req, res, next)
}

export function autenticacao(req, res, next) {
    try {
      let token = req.headers['x-access-token'];
  
      if (token === undefined)
        token = req.query['x-access-token']
  
      let signd = jwt.verify(token, KEY);
  
      req.user = signd;
      
      next();
  
    } catch (e) {
      res.status(401).send({erro: "Falha na autenticação"}).end();
    }
  }