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

** Config env
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
        - Validate
    - @UseGuards(AuthGuard('jwt'))

** Guard 
    - 

** Decorator


** Swagger
    - npm i @nestjs/swagger swagger-ui-express
    - fix main.ts
        -    const config = new DocumentBuilder()
                .setTitle('Cats example')
                .setDescription('The cats API description')
                .setVersion('1.0')
                .addTag('cats')
                .build();
            const document = SwaggerModule.createDocument(app, config);
            SwaggerModule.setup('api', app, document);
    - @ApiTags
    - @ApiOkResponse
    - @ApiBody
    - @ApiCreatedResponse
    - @ApiProperty
