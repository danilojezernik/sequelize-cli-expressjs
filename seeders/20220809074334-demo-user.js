module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            firstName: 'Tester',
            lastName: 'Testing',
            age: '30'
        }].map((obj) => ({
            ...obj, createdAt: new Date().toDateString(), updatedAt: new Date().toDateString(),
        })), {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
