module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('Users', [{
            firstName: 'Tester',
            lastName: 'Testing',
            age: '30',
            username: 'dani',
            password: '123456',
        }].map((obj) => ({
            ...obj, createdAt: new Date(), updatedAt: new Date(),
        })), {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
