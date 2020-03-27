module.exports = {
    base: '/jluzh-Graduation-Project/',
    title: 'jluzh-hx UI 组件库',
    description: 'Just playing around',
    themeConfig: {
        search: false,
        sidebar: [
            {
                title: '入门',
                children: ['/introduce/','/install/','/get-started/']
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/icon',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/collapse'
                ]
            },
            {
                title: '联系方式',
                children: [
                    '/contact/'
                ]
            }
        ]
    }
}