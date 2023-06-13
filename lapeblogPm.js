/**
 * pm2 配置文件
 * 通过进程管理工具 pm2 自动跑 blog 进程
 */

const {
    exec
} = require('child_process')
exec('hexo server -p 4000 & ', (error, stdout, stderr) => {
    if (error) {
        console.log('exec error: ${error}')
        return
    }
    console.log('stdout: ${stdout}');
    console.log('stderr: ${stderr}');
})