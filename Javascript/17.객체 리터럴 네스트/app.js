// 방명록 게시판 시스템
// 방명록(배열)에는 '유저(객체)', '포스트 글(변수)', '게시 날짜(변수)'
// 유저(객체)에는 '이름', '생년월일'

const comments = [
    {
        user: { 
            id : 'ehdrb3663',
            name : '이동규',
            birthDay : 19871016 
        }, 
        txt: '안녕하세요~ 첫 방문입니다.',
        date: '2021-12-01'
    },

    {
        user: { 
            id : 'ejdrb87',
            name : '이동건',
            birthDay : 19870913 
        }, 
        txt: 'Hello New World!',
        date: '2021-12-02'
    },

    {
        user: { 
            id : 'eidung89',
            name : '이동팔',
            birthDay : 20010134 
        }, 
        txt: '새글 남겨요~ 등업해주세요.',
        date: '2021-12-03'
    },
]

console.log(comments[0], comments[1], comments[2]);
console.log(comments[0].user.id, comments[1].user.id, comments[2].user.id);
console.log(comments[0].user['name'], comments[1].user['name'], comments[2].user['name']);
console.log(comments[0]['txt'], comments[1]['txt'], comments[2]['txt']);
console.log(comments[0].date, comments[1].date, comments[2].date);