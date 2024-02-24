# assignment1

This is a base nest js  project with CRUD Api implemented for Products with Drizzle ORM (pg), which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.


src -> Inside the src folder all the actual source code regarding the project will reside


core -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the config and database config and connection maintained here with drizzle migrations saved here.

controllers -> In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

services -> contains the business logic and interacts with repositories for data from the databases





Setup the project

Download this template from github and open it in your text editor.
Go inside the folder path and execute the following command:
npm install
In the root directory create a .env.development file and add the following env variables

    PORT=<port number of your choice>
    CONNECTION_STRING=<pg conection string>
ex:

    PORT=3000
    CONNECTION_STRING='postgres://gdgdggddd:RfOT4zHonAnZcRtNNpBilsqiyZfM6bbZ@heyt.db.postgressql.com/gprxubts'

go inside the src folder and execute the following command:

npm run generate:migrate
npm run push:migrate

By executing the above command you will get the migration folder and push that migration folder


If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

To run the server execute

npm run start:dev

