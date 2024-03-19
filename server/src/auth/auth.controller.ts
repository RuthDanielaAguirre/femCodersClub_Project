

@Controller('auth')
export class AuthController {
  











  

    @Post('login')
    async login(@Body() loginDto: LoginDto){
      return this.userRepository.findOne(loginDto)
    }

}
