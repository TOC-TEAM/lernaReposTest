const task = (arr) => arr.join(' && ')
module.exports = {
  'hooks': {
    'pre-commit': task(['echo 1', 'echo 2', 'echo 3', 'echo 4'])
  }
}
