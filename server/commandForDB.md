npx sequelize-cli model:generate --name User --attributes nameUser:string,email:string,password:string

npx sequelize-cli model:generate --name Questions --attributes body:string,answer:string,price:string

npx sequelize-cli model:generate --name Game --attributes score:string,user_id:string


npx sequelize-cli model:generate --name Group --attributes question100_id:string,question200_id:string,question300_id:string,question400_id:string,question500_id:string



npx sequelize-cli seed:generate --name User
npx sequelize-cli seed:generate --name Game
npx sequelize-cli seed:generate --name Questions
npx sequelize-cli seed:generate --name Group



npx sequelize-cli model:generate --name Ticket --attributes origin:string,destination:string,origin_airport:string,destination_airport:string,price:string,airline:string,flight_number:string,departure_at:string,return_at:string,transfers:string,return_transfers:string,duration:string,link:string,user_id:string

airline:
airlineName:
departure_at:
destination:
destinationCity:
destination_airport:
duration:
flight_number:
link:
origin:
originCity:
origin_airport:
price:
return_at:
return_transfers:
transfers:
user_id:string

npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:seed:all
 
    "username": "aleksandrmasalov",
    "password": "bershka8820!",
    "database": "ticket-office",
    "host": "127.0.0.1",
    "dialect": "postgres"
