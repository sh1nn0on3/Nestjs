** nest 
    - nest g controller user
    - nest g module user
    - nest g service user
    - nest --help

** docker
    - -d : deamon/background mode
    - docker compose up -d 
    - docker compose up [name-container] -d
    - docker compose rm [name-container] --stop --force --volumes

** Prisma
    - npm i -d prisma
    - npx prisma init
    - npx prisma --help
    <!-- Update for db real -->
    - npx prisma migrate dev
    - npx prisma migrate deploy
    <!-- GUI postgregs -->
    - npx prisma studio

** Validate
    - npm i class-validator class-transformer
    - Tạo file DTO
    <!-- tạo pipes global -->
    - app.useGlobalPipes(new ValidationPipe());

** Config
    - npm i @nestjs/config
    - ConfigModule
    - ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    - 

** JWT 
    - npm i @nestjs/jwt 
    - npm i @nestjs/passport passport
    - npm i -D passport-jwt @types/passport-jwt

** Strategy
    - create jwt.strategy.ts
    - import ... providers (auth.module)
    - authentication strategy using the ` Passport ` 
        - Class Declaration
        - Constructor
            - super({ jwtFromRequest ,  ignoreExpiration , secretOrKey })
    - @UseGuards(AuthGuard('jwt'))

** 