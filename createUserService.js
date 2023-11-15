// createUserService.js
import pgp from "pg-promise";
import crypto from "crypto";
//devo importar o Dao

class CreateUserService {
  constructor() {
    //devo instanciar o Dao
  }

  async createUser(input) {
    input.id = crypto.randomUUID();
    input.date = new Date();
    // Você pode adicionar validações adicionais aqui, se necessário.
    const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
    // devo salvar no Dao ((método save))
    await connection.$pool.end();
    return {
      id: input.id,
    };
  }

  async getUser(userId) {
    const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
    // devo recuperar no Dao o userId ((método getById))
    await connection.$pool.end();
    const user = await this.userDAO.getById(userId);
    return user;
  }
}

export default CreateUserService;
