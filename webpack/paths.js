const path = require('path')

const ROOT_DIR = path.dirname(__dirname)

const PATHS = {
    SRC: path.resolve(ROOT_DIR, 'src'),
    BUILD: path.resolve(ROOT_DIR, 'build'),
    DEFAULT_TEMPLATE: path.resolve(ROOT_DIR, 'src', 'public', 'template', 'index.html'),
    PUBLIC: path.resolve(ROOT_DIR, 'src', 'public')
}

module.exports = {
    PATHS
}