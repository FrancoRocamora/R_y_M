const server = require('../server');
const session = require('supertest');
const agent = session(server);


describe('Test de routes', () => {
    describe('Get rickandmorty/onsearch/{id}', () => {
        it('responde con status 200', async () => {
           const response = await agent.get('/rickandmorty/onsearch/1')
           expect(response.statusCode).toEqual(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
            const response = await agent.get('/rickandmorty/onsearch/1').expect(200);
            expect(Object.keys(response.body)).toContain('id', 'name', 'species', 'image', 'gender')
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/onsearch/IDqueNoExiste').expect(500)
        })
    })
    describe('Get rickandmorty/detail/{id}', () => {
        it('responde con status 200', async () => {
            const response = await agent.get('/rickandmorty/detail/1')
            expect(response.statusCode).toEqual(200)
         })
         it('Responde un objeto con las propiedades: "id", "name", "species", "origin",  "gender" e "image"', async () => {
             const response = await agent.get('/rickandmorty/detail/1').expect(200);
             expect(Object.keys(response.body)).toContain('id', 'name', 'species', 'image', 'gender', 'origin')
         })
         it('Si hay un error responde con status: 500', async () => {
             await agent.get('/rickandmorty/detail/IDqueNoExiste').expect(500)
         })
    })
    describe('Get rickandmorty/fav', () => {
        it('responde con status 200', async () => {
            const response = await agent.get('/rickandmorty/fav')
            expect(response.statusCode).toEqual(200)
         })
         it('Responde un objeto con las propiedades: "id", "name", "species", "origin",  "gender" e "image"', async () => {
            const response = await agent.get('/rickandmorty/fav').expect(200);
            expect(Array.isArray(response.body)).toEqual(true)
        })
    })
    describe('Post rickandmorty/fav', () => {
        it('responde con status 200', async () => {
            const response = await agent.post('/rickandmorty/fav')
            expect(response.statusCode).toEqual(200)
         })
         it('Se puede haer post a fav', async () => {
            const response = await agent.post('/rickandmorty/fav', {id: 999, name: 'tester', species: 'jest', gender: 'machine', image: 'No Image'})
            expect(Object.keys(response.body)).toContain('success', 'post')
         })
    })

    describe('Delete rickandmorty/fav/id', () => {
        it('responde con status 200', async () => {
            const response = await agent.delete('/rickandmorty/fav/1')
            expect(response.statusCode).toEqual(200)
         })
    })
})