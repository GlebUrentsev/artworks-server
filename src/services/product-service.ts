// import { Product } from '../models';

class ProductService {
  public async products() {
    // const candidate = await UserDb.findOne({ email });
    // if (candidate) {
    //   throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
    // }
    // const hashPassword = await bcrypt.hash(password, 3);
    // const user = await UserDb.create({
    //   email,
    //   password: hashPassword,
    // });
    // const userDto = new UserDto(user); // id, email
    // const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);
    // return { ...tokens, user: userDto };
    // return product with sorting or filters
  }
}
const productService = new ProductService();

export { productService };
