/** @type {import('cz-git').UserConfig} */
module.exports = {
    extends: [ '@commitlint/config-conventional' ],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'wip', 'file', 'revert', 'chore'
            ]
        ]
    },
    prompt: {
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围（可选）:',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: '选择关联issue前缀（可选）:',
            customFooterPrefix: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?'
        },
        types: [
            {
                value: 'feat',
                name: 'feat:     新增功能'
            },
            {
                value: 'fix',
                name: 'fix:      修复缺陷'
            },
            {
                value: 'docs',
                name: 'docs:     文档更新'
            },
            {
                value: 'style',
                name: 'style:    代码格式  (不影响代码含义的更改)'
            },
            {
                value: 'refactor',
                name: 'refactor: 代码重构  (既没有修复错误也没有添加功能的代码更改)'
            },
            {
                value: 'perf',
                name: 'perf:     性能提升  (改进性能的代码更改)'
            },
            {
                value: 'test',
                name: 'test:     测试相关  (添加缺失的测试或更正现有的测试)'
            },
            {
                value: 'build',
                name: 'build:    构建相关  (影响构建系统或外部依赖关系的更改)'
            },
            {
                value: 'ci',
                name: 'ci:       持续集成  (CI配置文件和脚本的更改)'
            },
            {
                value: 'wip',
                name: 'wip:      在开发中  (功能正在开发中)'
            },
            {
                value: 'file',
                name: 'file:     变更文件  (删除或添加文件)'
            },
            {
                value: 'revert',
                name: 'revert:   回退代码'
            },
            {
                value: 'chore',
                name: 'chore:    其他修改  (其他不修改src或测试文件的更改)'
            }
        ],
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: "custom",
        emptyScopesAlias: "empty",
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: [ 'feat', 'fix' ],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [
            // 如果使用 gitee 作为开发管理
            { value: 'link', name: 'link:     链接 ISSUES 进行中' },
            { value: 'closed', name: 'closed:   标记 ISSUES 已完成' }
        ],
        emptyIssuePrefixAlias: "skip",
        customIssuePrefixAlias: "custom",
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
}
