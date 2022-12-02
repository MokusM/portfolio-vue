/**
 * This is a mock webpack config that is not used in the applications,
 * but provides correct resolve for aliases for IDE
 */

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'images': path.resolve(__dirname, 'src/assets/images/index.js'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'components': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views')
    }
  }
}
