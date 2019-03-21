const task = arr => arr.join(' && ');
module.exports = {
  hooks: {
    'pre-commit': task(['echo "======"', 'lint-staged', 'echo "======"']),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'post-commit': 'standard-version',
  },
};
