** nest g --help 

** docker
    - docker compose up -d 

** Prisma
    - npm i -d prisma
    - npx prisma init
    - npx prisma --help
    <!-- Update for db real -->
    - npx prisma migrate dev
    <!-- GUI postgregs -->
    - npx prisma studio

** Validate
    - npm i class-validator class-transformer
    - Tạo file DTO
    <!-- tạo pipes global -->
    - app.useGlobalPipes(new ValidationPipe());
