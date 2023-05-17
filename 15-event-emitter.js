const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`First block of logic from ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log('More logic');
});

customEmitter.emit('response', 'john', 17);