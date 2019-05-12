const path = require('path')
const data = require('./colors.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/color.js')

  data.forEach(color_object => {
    var path = color_object.name;
    createPage({
      path,
      component: template,
      context: color_object,
    })
  })
}