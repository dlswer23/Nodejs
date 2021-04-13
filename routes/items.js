const express = require('express');
// 라우터 생성
const router = express.Router();
// JSON 데이터 배열 생성
let data = [
    { id: 1, title: '안녕하세요',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: '시나그램 신입생 여러분',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: '백엔드 어떤 것 같아요?', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: '사실 잘 모르겠죠?', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: '저도 잘 모르겠어요', order: 5, completed: false, createdOn: new Date() },
];

// READ
// JSON 데이터 배열 반환
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// id로 찾은 데이터 배열에서 객체 반환
// url 엔드포인터에서 id 얻음
router.get('/:id', function (req, res) {
    // 'id'와 일치하는 'data'배열에서 객체 찾기
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // 개체가 발견되면 개체 반환 , 그렇지 않으면 http 상태코드 404(not-found) 반환
    if (found) {
        //개체 반환
        res.status(200).json(found);
    } else {
        // not-found
        res.sendStatus(404);
    }
});

// CREATE
// 항목 목록에 새 개체 추가
// 'data' 배열에 새 객체 추가
router.post('/', function (req, res) {
    // 데이터 배열에서 item 가져오기
    let itemIds = data.map(item => item.id);
    // 데이터 배열에서 orderNums 가져오기
    let orderNums = data.map(item => item.order);

    // 새 ID 생성
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    // 새 주문 번호 생성(기본적으로 마지막 항목 개체의 +1)
    let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

    // 새 항목의 개체 만들기
    let newItem = {
        id: newId, // 위 단계에서 생성
        title: req.body.title, // 'title'의 값은 POST 요청에서 가져오기
        order: newOrderNum, // 위 단계에서 생성
        completed: false, // 기본값은 false 
        createdOn: new Date() // 새 날짜 개체
    };

    // 새 항목 객체를 항목의 데이터 배열로 푸시
    data.push(newItem);

    // http 상태코드 201(생성됨)로 반환
    // 하나 이상의 새 리소스 생성
    res.status(201).json(newItem);
});

// UPDATE
// 기존 항목 객체 업데이트
// 업데이트 할 항목의 api 엔드포인트에서 'id'와 'title' 얻기
router.put('/:id', function (req, res) {
    // 'id'로 항목 객체 일치 가져오기
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // 항목이 있는 지 확인
    if (found) {
        let updated = {
            id: found.id,
            title: req.body.title, // 'title'의 값 설정 요청에서 가져오기
            order: req.body.order, // 'order' 값 설정 요청에서 가져오기
            completed: req.body.completed // `completed` 값 요청에서 가져오기
        };

        // 데이터 배열에서 찾은 개체의 인덱스 찾기
        let targetIndex = data.indexOf(found);

        // 데이터 목록의 개체를 업데이트 된 개체로 바꾸기
        data.splice(targetIndex, 1, updated);

        // http 상태 코드 204(성공)반환
        // 요청이 성공함
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
// 기존항목 객체 삭제
// 데이터 배열,`id`로 일치 항목을 찾은 다음 삭제
router.delete('/:id', function (req, res) {
    // 데이터 배열에서 항목 찾기
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        // 항목이 발견되면 'data' 배열에 저장
        let targetIndex = data.indexOf(found);

        // splice는 인덱스를 사용하여 'data'배열에서 항목을 삭제하는 것을 의미
        data.splice(targetIndex, 1);
    }

    // http 상태 코드 204(성공)반환
    // 요청이 성공함
    res.sendStatus(204);
});

// module.exports 는 node.js의 모든 Js 파일에 포함 된 객체
//module.exports에 할당하는 모든 것은 모듈로 노출
module.exports = router;