// ================기능=================
// 'quit'을 입력할 때까지, 'What would you like to do?' 묻고 입력 대기
// 'new'-> 'Enter new todo' 묻고 입력대기 -> 콘솔에 '입력한 값 + added to list' 메시지 출력
// 'list' -> 'index 값: value' 출력
// 'delete' -> 'Enter index of todo to delete' 묻고 입력대기 -> 콘솔에 '입력한 값 + Removed' 메시지 출력
// 'quit' -> 콘솔에 'OK, YOU QUIT THE APP' 메시지 출력

let input = prompt('What would you like to do?');
const toDoList = [];

while(input !== 'quit') {
    if (input === 'new') {
        let tmp = prompt('Enter new todo');
        console.log(`${tmp} added to list`);
        toDoList.push(tmp);
        input = '';
    }
    else if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('**********');
        input = '';
    }
    else if (input === 'delete') {
        let del_i = parseInt(prompt('Enter index of todo to delete'));
        console.log(`${toDoList[del_i]} Removed`);
        toDoList.splice(del_i, 1);
        input = '';
    }
    input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP');