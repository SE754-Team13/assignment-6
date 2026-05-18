const { spawn } = require('node:child_process');
const path = require('node:path');

const frontendDir = path.join(__dirname, '..', 'frontend');
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const child = spawn(command, ['run', 'dev'], {
  cwd: frontendDir,
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
