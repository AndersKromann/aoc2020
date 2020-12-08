module.exports = {
    extension: ['spec.ts'],
    require: [
        'ts-node/register',
        'tsconfig-paths/register',
        'source-map-support/register',
    ],
    spec: './src/**/*.spec.ts',
    ignore: ['./src/template/*'],
};
