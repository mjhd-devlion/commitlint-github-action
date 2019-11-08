const test = r.test.bind(r)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: false,
  ignores: [
    test(
      /^((Merge pull request)|(Merge (.*?) into (.*?)|(Merge branch (.*?)))(?:\r?\n)*$)/m,
    ),
    test(/^(R|r)evert (.*)/),
    test(/^(fixup|squash)!/),
    test(/^Merged (.*?)(in|into) (.*)/),
    test(/^Merge remote-tracking branch (.*)/),
    test(/^Automatic merge(.*)/),
    test(/^Auto-merged (.*?) into (.*)/),
  ],
  rules: {
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 72],
    'header-max-length': [2, 'always', 72],
    'subject-max-length': [1, 'always', 50],
    'subject-empty': [2, 'never'],
    'scope-empty': [2, 'always'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'fix',
        'hotfix',
        'feat',
        'update',
        'refactor',
        'clean',
        'disable',
        'revert',
        'upgrade',
        'docs',
        'style',
        'chore',
        'perf',
        'a11y',
        'test',
        'release',
      ],
    ],
  },
}
