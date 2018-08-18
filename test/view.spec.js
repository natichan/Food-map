const assert = require('chai').assert;
global.window = global;
require('../src/js/view/view'); 

describe('funciones de vista', () => {
    describe('creador de marcadores', () => {
        it('Deberia ser una función para creador de marcadores en el mapa', () => {
            assert.isFunction(createMarker);
        });  
    });  
    describe('mostrador de información de la foto', () => {
        it('Deberia ser una función mostrar la imagen', () => {
            assert.isFunction(showInformationPhoto);
        });  
    });
    describe('muestra el modal', () => {
        it('Deberia ser una función para crear el modal al hacer click en imagen', () => {
            assert.isFunction(showModal);
        });  
    });    
});