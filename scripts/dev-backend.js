const { spawn } = require('node:child_process');
const path = require('node:path');

const backendDir = path.join(__dirname, '..', 'backend');
const command = process.platform === 'win32' ? 'mvnw.cmd' : './mvnw';

const child = spawn(command, ['spring-boot:run'], {
  cwd: backendDir,
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
