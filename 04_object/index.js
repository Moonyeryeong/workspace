var cat = {
    name : '나비',
    age : 1,
    mew : function() {
        return '냐옹'
    }
}
cat['gender'] = 'boy'

console.log(cat.age);
console.log(cat.mew());
console.log(cat.gender);
console.log(cat)

const arr1 = [1,2,3, '안녕', '반가워', {name: '나비', age: 1}, {name: '고양', age: 2}]
console.log(arr1.length)
console.log(arr1.push('추가'))
console.log(arr1)
console.log(arr1.pop())
console.log(arr1)
console.log(arr1.unshift('맨앞에추가'))
console.log(arr1)
console.log(arr1.shift())
console.log(arr1)
console.log('3찾기:', arr1.indexOf(3))

// arr1[0] = 0
// arr1=[100,200,300]

console.log(arr1[5].name)

let arr2 = [{name: '나비', age: 1}, {name: '고양', age: 2}, {name: '초코', age: 5},]

for (var i =0; i<arr2.length; i++) {
    console.log(arr2[i].name)
}

const dog = {
    name: '토니',
    age: 2,
    gender: 'boy'
}

for (var i in dog) {
    console.log(dog[i])
    console.log(i)
}
console.log(arr1)

let arr3 = [1,2,3,'안녕', '반가워']
for (var i of arr3) {
    console.log(i)
}

const date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getFullYear())
console.log(`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 입니다.`)
document.write(`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 입니다.`)
console.log(date.getDay())
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.toLocaleString())

console.log(Math.min(10,20,30,40,50))
console.log(Math.max(10,20,30, 'str')) //nan 문자 안됨
//Math.floor 내림
console.log(Math.floor(Math.random()*10)+1)
//Math.ceil 올림
console.log(Math.ceil(Math.random()*10))
//Math.round 반올림
console.log(Math.round(Math.random()*10))
