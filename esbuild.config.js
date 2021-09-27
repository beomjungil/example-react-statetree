const fs = require('fs-extra');

function clean() {
    fs.rmSync('./dist/static', { recursive: true, force: true });
}

function copyPublic() {
    fs.copySync('./public', './dist');
}

module.exports = {
    config: {
        entryPoints: ['app.jsx'],
        bundle: true,
        minify: true,
        loader: { '.js': 'jsx' },
        outdir: 'dist/static/js',
        sourcemap: true,
        target: ['chrome58','firefox57','safari11','edge16'],
    },
    clean: clean,
    copyPublic: copyPublic
}