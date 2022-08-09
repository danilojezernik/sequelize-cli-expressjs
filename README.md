# Setting up Sequelize v6 and Express.js
## Installation and Setting up a project

[Initialize a project:](https://docs.npmjs.com/cli/v8/commands/npm-init)
```bash
  npm init
```
Generate [Express.js](https://expressjs.com/):
```bash
  npm i express
  npx express-generator
  npm i nodemon
  npm i dotenv
```
Set `nodemon` in `package.json`.

Make `.env` file in `main` folder and set `NODE_ENV`, `PORT` and `DEBUG`.
Generate [Express.js](https://expressjs.com/)

Setup [Sequelize-CLI](https://sequelize.org/docs/v6/other-topics/migrations/):
```bash
  npm i sequelize
  npm i sqlite3
  npm i sequelize-cli
  npx sequelize-cli init
```
Check out: [The Sequelize Command Line Interface (CLI) GitHub](https://github.com/sequelize/cli)

Make changes to `config/config.json`:
```javascript
{
    "development": {
        "storage": "db.sqlite3",
            "logger": true,
            "dialect": "sqlite"
    },
    "test": {
        "database": "database_test",
            "logger": true,
            "dialect": "sqlite"
    },
    "production": {
        "database": "database_production",
            "logger": true,
            "dialect": "sqlite"
    }
}
```
Generate model:
```bash
  npx sequelize-cli modle:generate --name Users -- attributes firstName:string,age:integer
  npx sequelize-cli db:migrate
  npx sequelize-cli seed:generate --name demo-user
```
Add `.map` in created seed file `xxxxxxxxxxx-demo-user.js` after object:
```javascript
await queryInterface.bulkInsert('Users', [{
    firstName: 'Tester',
    lastName: 'Testing',
    age: '30'
}].map((obj) => ({
    ...obj, createdAt: new Date().toDateString(), updatedAt: new Date().toDateString(),
})), {});
```

Populate database:
```bash
  npx sequelize-cli db:seed:all
```

Build REST for Users route:
```javascript
/* GET users */
router.get('/', (req, res) => {
    return db.Users.findAll().then((data) => res.json(data))
});

/* GET user */
router.get('/:id', (req, res) => {
    return db.Users.findOne(
        {
            where: {id: req.params.id}
        }).then((data) => res.json(data));
})

/* CREATE user */
router.post('/', (req, res) => {
    return db.Users.create(req.body)
        .then((data) => res.json(data))
})

/* UPDATE user */
router.post('/:id/update', (req, res) => {
    return db.Users.create(req.body,
        {
            where: {id: req.params.id}
        }).then((data) => res.json(data))
})

/* DELETE user */
router.delete('/:id', (req, res) => {
    return db.Users.destroy(
        {
            where:
                {id: req.params.id}
        }).then((data) => res.json(data))
})
```
