const nums = [1, 2, 3];

// 컨테이너를 유지하는 선에서 데이터를 추가, 수정, 삭제할 수 있음
nums.push(4);
nums.pop();
console.log(nums);

// 단, 새로운 참조를 할당할 수는 없음
nums = [];
nums = [5, 6, 7, 8];