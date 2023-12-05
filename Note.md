** nest g --help 

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


