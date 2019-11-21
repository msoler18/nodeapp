/* Stream */
'use strict'

var fs = require('fs'),
	readStream = fs.createReadStream('assets/players.txt'),
	writeStream = fs.createWriteStream('assets/copy_players.txt')

	/*readStream.pipe(writeStream);

	readStream.on('data',function(chunk){
		console.log(
			'Read:',
			chunk.length,
			'characters'
		)
	})

	readStream.on('end',function(){
		console.log('Finish read');
	})*/

/* Refactor */
readStream.pipe(writeStream);

readStream
  .on('data',function(chunk){
    console.log(
      'Read:',
      chunk.length,
      'characters'
    )
  })
  .on('end',function(){
    console.log('Finish read');
  })


