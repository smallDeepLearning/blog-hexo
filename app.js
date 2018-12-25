/**
 * Hexo 进程守护
 * @authors JYuan (13826506407@139.com)
 * @date    2018-12-25 19:03:39
 */

const {
	exec
} = require('child_process')
exec('hexo server', (error, stdout, stderr) => {
	if (error) {
		console.log('exec error: ${error}')
		return
	}
	console.log('stdout: ${stdout}');
	console.log('stderr: ${stderr}');
})
