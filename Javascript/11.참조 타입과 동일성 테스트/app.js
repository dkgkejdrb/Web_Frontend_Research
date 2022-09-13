// false
// 두 개의 콘텐츠를 비교하는 것이 아니라, 두 개의 주소값을 비교하기 때문
[1, 2, 3, 4] === [1, 2, 3, 4];

// false
nums1 = [1, 2, 3, 4];
nums2 = [1, 2, 3, 4];
nums1 === nums2;

// true
// nums의 주소값이 numsCopy에도 저장되었기 때문에 같은 참조를 따름
let nums = [1, 2, 3, 4];
let numsCopy = nums;
nums === numsCopy;