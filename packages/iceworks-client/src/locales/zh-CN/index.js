export default {
  // global
  'iceworks.global.disconnect.title': '连接中断',
  'iceworks.global.connect': '已连接',
  'iceworks.global.reconnecting': 'Socket 断开连接，正在重新连接中',
  'iceworks.global.reconnect_failed': 'Socket 重新连接失败，请重新启动 iceworks 服务',
  'iceworks.global.disconnect': 'Socket 断开连接',
  'iceworks.global.button.yes': '确定',
  'iceworks.global.button.no': '取消',
  'iceworks.global.button.submit': '提交',
  'iceworks.global.button.selectAll': '全选',
  'iceworks.global.fallback.title': '加载错误',

  // menu
  'iceworks.menu.project': '项目',
  'iceworks.menu.task': '工程',
  'iceworks.menu.task.dev': 'dev',
  'iceworks.menu.task.dev.desc': '启动服务(用于开发环境)',
  'iceworks.menu.task.build': 'build',
  'iceworks.menu.task.build.desc': '构建项目(用于生产环境)',
  'iceworks.menu.task.lint': 'lint',
  'iceworks.menu.task.lint.desc': '语法检查(用于开发环境)',
  'iceworks.menu.task.configuration': 'configuration',
  'iceworks.menu.task.configuration.desc': '自定义项目配置',
  'iceworks.menu.material': '物料',
  'iceworks.menu.setting': '设置',
  'iceworks.menu.setting.general': '通用设置',
  'iceworks.menu.setting.general.desc': '设置主题和语言',

  // setting
  'iceworks.setting.title': '设置',
  'iceworks.setting.general.title': '通用设置',
  'iceworks.setting.general.language.title': '语言',
  'iceworks.setting.general.language.zh': '中文',
  'iceworks.setting.general.language.en': '英文',
  'iceworks.setting.general.theme.title': '主题',
  'iceworks.setting.general.theme.dark': '深色',
  'iceworks.setting.general.theme.light': '浅色',
  'iceworks.setting.general.editor.title': '编辑器',

  // project
  'iceworks.project.title': '项目管理',
  'iceworks.project.create.init.title': '初始化项目',
  'iceworks.project.create.init.content': '当前项目依赖尚未安装，安装过程可能需要几分钟，是否立即安装？',
  'iceworks.project.submenu.opts.openProject': '打开项目',
  'iceworks.project.submenu.opts.createProject': '创建项目',

  // project panel
  'iceworks.project.panel.page.title': '页面管理',
  'iceworks.project.panel.fallback.title': '面板',
  'iceworks.project.panel.fallback.desc': '面板加载出错',

  // project page
  'iceworks.project.panel.page.create.title': '创建页面',
  'iceworks.project.panel.page.create.progress.start': '开始创建页面...',
  'iceworks.project.panel.page.delete.title': '删除页面',
  'iceworks.project.panel.page.delete.content': '确定移除页面 {name} ？',
  'iceworks.project.panel.page.save.title': '填写页面信息',
  'iceworks.project.panel.page.save.name.label': '页面目录名',
  'iceworks.project.panel.page.save.name.placeholder': '请输入页面目录名，字母与数字组合，字母开头',
  'iceworks.project.panel.page.save.routePath.label': '路由路径',
  'iceworks.project.panel.page.save.createRouterGroup.label': '是否新建路由分组',
  'iceworks.project.panel.page.save.parentRoutePath.label': '路由分组路径',
  'iceworks.project.panel.page.save.parentRouteComponent.label': '路由分组组件',
  'iceworks.project.panel.page.save.routePath.group.label': '选择群组路径',
  'iceworks.project.panel.page.save.routePath.placeholder': '请输入小写字母数字组合，支持二级路由以 `/` 分隔',
  'iceworks.project.panel.page.save.menuName.label': '页面导航名',
  'iceworks.project.panel.page.save.menuName.placeholder': '为空则不生成导航项',

  // project dependency
  'iceworks.project.panel.dependency.title': '依赖管理',
  'iceworks.project.panel.dependency.main.refresh': '刷新',
  'iceworks.project.panel.dependency.main.download': '重装依赖',
  'iceworks.project.panel.dependency.main.add': '添加依赖',
  'iceworks.project.panel.dependency.main.upgrade': '可升级到 {wantedVestion}',
  'iceworks.project.panel.dependency.main.reset.title': '安装项目依赖',
  'iceworks.project.panel.dependency.main.reset.content': '将重置安装项目所有依赖，安装期间无法进启动调试服务、新建页面、构建项目操作，请耐心等待。',
  'iceworks.project.panel.dependency.main.incompatible.title': '不兼容提醒',
  'iceworks.project.panel.dependency.main.incompatible.content': '新添加的依赖 {setDependencyText} 主版本号与项目依赖 {projectDependencyText} 主版本号发生改变可能存在不兼容的 API 修改，确定要继续吗？',
  'iceworks.project.panel.dependency.create.title': '添加依赖',
  'iceworks.project.panel.dependency.create.placeholder': '请输入 npm 包名以及版本号，例如：lodash@latest。按回车输入多个依赖。',

  // project layout
  'iceworks.project.panel.layout.title': '布局列表',
  'iceworks.project.panel.layout.none': '暂无布局',

  'iceworks.project.panel.todo.title': 'TODO',
  'iceworks.project.panel.def.title': 'DEF 发布',

  // project git
  'iceworks.project.panel.git.title': 'Git',
  'iceworks.project.panel.git.button.add': '新建分支',
  'iceworks.project.panel.git.button.switch': '切换分支',
  'iceworks.project.panel.git.button.pull': '拉取远程代码',
  'iceworks.project.panel.git.button.push': '发布本地代码',
  'iceworks.project.panel.git.button.edit': '修改仓库地址',
  'iceworks.project.panel.git.button.refresh': '刷新',
  'iceworks.project.panel.git.addRemote': '关联仓库',
  'iceworks.project.panel.git.remote.url.label': '仓库地址：',
  'iceworks.project.panel.git.edit.title': '修改仓库地址',
  'iceworks.project.panel.git.createBranch.title': '新建分支',
  'iceworks.project.panel.git.createBranch.branch.label': '新分支名：',
  'iceworks.project.panel.git.main.status.conflicted': '冲突',
  'iceworks.project.panel.git.main.status.not_added': '未添加',
  'iceworks.project.panel.git.main.status.modified': '已变更',
  'iceworks.project.panel.git.main.status.created': '新创建',
  'iceworks.project.panel.git.main.status.deleted': '已删除',
  'iceworks.project.panel.git.main.status.renamed': '重命名',
  'iceworks.project.panel.git.main.submit.file': '选择文件提交',
  'iceworks.project.panel.git.main.submit.message': '输入信息提交',
  'iceworks.project.panel.git.main.tip.unstageFiles': '变更文件',
  'iceworks.project.panel.git.main.tip.refresh': '变更信息不会实时刷新，提交前请先通过右上角的按钮更新状态',
  'iceworks.project.panel.git.switch.title': '切换分支',
  'iceworks.project.panel.git.switch.select': '选择分支',
  'iceworks.project.panel.git.switch.input': '请输入本地分支名称',
  'iceworks.project.panel.oss.title': 'OSS',
  'iceworks.project.panel.oss.button.clear': '清空',

  // project menu
  'iceworks.project.panel.menu.create.title': '创建导航',
  'iceworks.project.panel.menu.delete.title': '删除导航',
  'iceworks.project.panel.menu.delete.content': '确定移除导航 \'{name}\' ？',
  'iceworks.project.panel.menu.delete.subcontent': '导航组下还有导航，删除请谨慎！！！',
  'iceworks.project.panel.menu.edit.title': '编辑导航',
  'iceworks.project.panel.menu.title': '导航管理',
  'iceworks.project.panel.menu.form.type': '类型',
  'iceworks.project.panel.menu.form.type.placeholder': '请选择类型',
  'iceworks.project.panel.menu.form.name': '名称',
  'iceworks.project.panel.menu.form.name.placeholder': '请输入名称',
  'iceworks.project.panel.menu.form.icon': '图标',
  'iceworks.project.panel.menu.form.icon.placeholder': '请输入图标',
  'iceworks.project.panel.menu.form.path': '路径',
  'iceworks.project.panel.menu.form.path.placeholder': '请输入与路径',
  'iceworks.project.panel.menu.form.newwindow': '是否打开新窗口',

  // project router
  'iceworks.project.panel.router.create.title': '创建路由',
  'iceworks.project.panel.router.delete.title': '删除路由',
  'iceworks.project.panel.router.delete.content': '确定移除路由 \'{name}\' ？',
  'iceworks.project.panel.router.edit.title': '编辑路由',
  'iceworks.project.panel.router.title': '路由管理',
  'iceworks.project.panel.router.form.path': '路径',
  'iceworks.project.panel.router.form.component': '组件',
  'iceworks.project.panel.router.form.exact': '是否精确匹配',
  'iceworks.project.panel.router.form.layout': '布局',

  // task
  'iceworks.task.title': '工程管理',
  'iceworks.task.dev.title': '启动服务',
  'iceworks.task.dev.desc': '编译和热更新(用于开发环境)',
  'iceworks.task.start': '运行',
  'iceworks.task.stop': '停止',
  'iceworks.task.setting': '设置',
  'iceworks.task.build.title': '构建项目',
  'iceworks.task.build.desc': '编译并压缩(用于生产环境)',
  'iceworks.task.lint.title': '检查语法',
  'iceworks.task.lint.desc': '检查代码规范并进行修复',

  // material
  'iceworks.material.title': '物料管理',
  'iceworks.material.scaffold': '模版',
  'iceworks.material.block': '区块',
  'iceworks.material.component': '组件',
  'iceworks.material.add': '添加物料',
  'iceworks.material.all': '全部',
  'iceworks.material.preview': '效果预览',
  'iceworks.material.source': '查看源码',
  'iceworks.material.download': '使用该模版',
  'iceworks.material.doc': '文档',
  'iceworks.material.install': '安装',
  'iceworks.material.install.component.title': '组件下载',
  'iceworks.material.install.component.pacakgeName': '组件包名：',
  'iceworks.material.install.component.packageVersion': '组件版本：',
  'iceworks.material.noDesc': '暂无描述',
  'iceworks.material.sourceUrl': '物料源地址',
  'iceworks.material.noData': '暂无数据',
  'iceworks.material.customMaterial': '自定义物料',
  'iceworks.material.officialMaterial': '官方物料',
  'iceworks.material.name': '物料名称',

  // global bar
  'iceowrks.global.bar.project': '当前项目名称',
  'iceowrks.global.bar.terminal': '终端',
  'iceowrks.global.bar.folder': '文件夹',
  'iceowrks.global.bar.editor': '编辑器',
  'iceowrks.global.bar.theme': '主题',
  'iceowrks.global.bar.feedback': '反馈',
  'iceowrks.global.bar.feedback.title': '体验反馈',
  'iceowrks.global.bar.feedback.join': '加入钉钉社区群',
  'iceowrks.global.bar.feedback.submit': '反馈建议或提交 Bug',
};
