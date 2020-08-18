var fs = require('fs');
 
// 파일 읽기(동기적)
try {
	var data = fs.readFileSync('notexist.txt', 'utf8'); // 파일이 없는데 읽으려 함
	console.log(data);
} catch (err) {
    console.log(err);
}

var fs = require('fs');
 
// 파일 읽기(비동기)
fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});

