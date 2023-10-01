module.exports = {
    // Módulos transformados con Babel
    transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    },
    
    // Ignora la carpeta "node_modules" y archivos no JavaScript
    transformIgnorePatterns: [
    '/node_modules/',
    '\\.(jpg|jpeg|png|gif|svg)$',
    '\\.(css|scss|less)$',
    ],

    // Redirige los archivos no JavaScript a un módulo vacío
    moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|css|scss|less)$': '<rootDir>/empty-module.js',
    },

    // Configuración del entorno de prueba
    testEnvironment: 'jsdom', // Agrega esta línea
};