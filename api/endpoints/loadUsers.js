module.exports = (req, res) => {
  res.json([
    { name: 'Juan', age: 34 },
    { name: 'Samuel', age: 21 },
    { name: 'José', age: 65 }
  ])
}
