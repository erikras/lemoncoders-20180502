module.exports = (req, res) => {
  if (!req.session.user) {
    console.info('no user')
    req.session.user = 'Erik'
  } else {
    console.log('user: ', req.session.user)
  }
  res.json({ result: 'funciona!' })
}
