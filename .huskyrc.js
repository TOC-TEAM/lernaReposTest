const task = arr => arr.join(' && ');
module.exports = {
  hooks: {
    'pre-commit': task(['echo "======"', 'lint-staged', 'echo "======"']),
  },
};
