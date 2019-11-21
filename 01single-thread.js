/* Single thread - Objeto -modulo - process */
'use strict'

function singleThread(){

  console.log('------------------------------------');
  console.log('         PROCESO NODE JS            ');
  console.log('Id del proceso.......'  + process.pid)  
  console.log('Titulo.................'+ process.title);
  console.log('Directorio de node....' + process.execPath);
  console.log('Directorio actual.....' + process.cwd());
  console.log('Version de node.......' + process.version);
  console.log('Versiones dependencias' + process.versions);
  console.log('Plataforma (S.O)......' + process.platform);
  console.log('Arquitectura (S.O)....' + process.arch);
  console.log('Tiempo activo de node.' + process.uptime());
  console.log('Argumentos del proceso' + process.argv);
  console.log('Configuracion..........'+ process.config);
  console.log('------------------------------------');

}

singleThread();