module.exports = function(db,app){
    
    var cards = [
    {
        "id": 7783,
        "title": "xzxz",
        "description": "xzxz\nxz\nxzz\nxz\nxxz\nxzxz\n\nxz",
        "color": "#c9c9c9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28760,
                "name": "4545",
                "done": false
            },
            {
                "id": 28761,
                "name": "4654",
                "done": false
            },
            {
                "id": 28714,
                "name": "sds",
                "done": false
            },
            {
                "id": 28763,
                "name": "545",
                "done": false
            },
            {
                "id": 28762,
                "name": "545",
                "done": false
            }
        ]
    },
    {
        "id": 7770,
        "title": "okay, just one more card",
        "description": "cuz i want to drag and drop",
        "color": "#c9c9c9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28752,
                "name": "qweqew",
                "done": false
            },
            {
                "id": 28723,
                "name": "sdfsd",
                "done": false
            }
        ]
    },
    {
        "id": 7792,
        "title": "ㅁㅇㄴㄻㄴㄹ",
        "description": "ㅁㄴㅇㄹㅇㅁㄴㄹ",
        "color": "#c9c9c9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28679,
                "name": "55",
                "done": false
            },
            {
                "id": 28739,
                "name": "ASDFGHJK",
                "done": false
            }
        ]
    },
    {
        "id": 7794,
        "title": "ㅁㄴㄹㅇㅁㄴㅇㄻㄴㄻㄴㄹ",
        "description": "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ\n",
        "color": "#c9c9c9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28661,
                "name": "asdfghj",
                "done": false
            },
            {
                "id": 28662,
                "name": "asdfgh",
                "done": false
            },
            {
                "id": 28663,
                "name": "asdfgh",
                "done": false
            }
        ]
    },
    {
        "id": 7819,
        "title": "sdef234cb",
        "description": "sdf",
        "color": "#C9C9C9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28678,
                "name": "456",
                "done": true
            },
            {
                "id": 28657,
                "name": "fghjskdfg",
                "done": true
            },
            {
                "id": 28659,
                "name": "asdfgh",
                "done": false
            },
            {
                "id": 28660,
                "name": "asdfg",
                "done": false
            },
            {
                "id": 28658,
                "name": "",
                "done": false
            },
            {
                "id": 28655,
                "name": "asdfg[",
                "done": true
            },
            {
                "id": 28654,
                "name": "werty",
                "done": true
            }
        ]
    },
    {
        "id": 7766,
        "title": "Write some code",
        "description": "Code along with the samples in the book at [github](https://github.com/pro-react)",
        "color": "#3A7E28",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7768,
        "title": "this is no joke",
        "description": "whatever",
        "color": "#c9c9c9",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7769,
        "title": "this is the first time this has worked",
        "description": "it's forcing me to fill in description",
        "color": "#c9c9c9",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7842,
        "title": "cock",
        "description": "\nfoobar\n",
        "color": "#c9c9c9",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7771,
        "title": "Test Todo12 made by me",
        "description": "가나다라 마바사 아자차카",
        "color": "#000000",
        "status": "done",
        "tasks": [
            {
                "id": 28736,
                "name": "sdfsdf",
                "done": false
            },
            {
                "id": 28737,
                "name": "sfsdf",
                "done": false
            }
        ]
    },
    {
        "id": 7781,
        "title": "cczxz",
        "description": "zxzzx",
        "color": "#c9c9c9",
        "status": "in-progress",
        "tasks": [
            {
                "id": 28756,
                "name": "545",
                "done": false
            },
            {
                "id": 28758,
                "name": "987897",
                "done": false
            },
            {
                "id": 28754,
                "name": "545",
                "done": false
            },
            {
                "id": 28755,
                "name": "3223",
                "done": false
            },
            {
                "id": 28757,
                "name": "6565",
                "done": false
            },
            {
                "id": 28759,
                "name": "545",
                "done": false
            }
        ]
    },
    {
        "id": 7784,
        "title": "dds",
        "description": "dssdsdsd\n",
        "color": "#c9c9c9",
        "status": "todo",
        "tasks": [
            {
                "id": 28724,
                "name": "sdfsd",
                "done": true
            },
            {
                "id": 28708,
                "name": "sadasdsadd",
                "done": true
            },
            {
                "id": 28707,
                "name": "sadsadsa",
                "done": true
            }
        ]
    },
    {
        "id": 7765,
        "title": "Read the Book",
        "description": "I should read the **whole** book",
        "color": "#BD8D31",
        "status": "todo",
        "tasks": []
    },
    {
        "id": 7820,
        "title": "111223",
        "description": "dfdfbfngn",
        "color": "#C9C9C9",
        "status": "todo",
        "tasks": [
            {
                "id": 28656,
                "name": "dfghjk",
                "done": false
            }
        ]
    },
    {
        "id": 7795,
        "title": "great Pro React",
        "description": "awesomeeeeee",
        "color": "#ff0000",
        "status": "todo",
        "tasks": [
            {
                "id": 28565,
                "name": "123",
                "done": false
            },
            {
                "id": 28568,
                "name": "5",
                "done": false
            },
            {
                "id": 28566,
                "name": "2",
                "done": false
            },
            {
                "id": 28567,
                "name": "4",
                "done": false
            }
        ]
    },
    {
        "id": 7782,
        "title": "xzzx",
        "description": "xzxzxzz",
        "color": "#c9c9c9",
        "status": "todo",
        "tasks": [
            {
                "id": 28680,
                "name": "666",
                "done": false
            }
        ]
    },
    {
        "id": 7796,
        "title": "React Pro 공부중인 분?? 2017-08-21",
        "description": "드럽게 안되네",
        "color": "#00ffff",
        "status": "todo",
        "tasks": [
            {
                "id": 28717,
                "name": "ddfdf",
                "done": false
            },
            {
                "id": 28718,
                "name": "sdf",
                "done": false
            },
            {
                "id": 28719,
                "name": "sdf",
                "done": false
            },
            {
                "id": 28720,
                "name": "sf",
                "done": false
            },
            {
                "id": 28722,
                "name": "sdf",
                "done": false
            },
            {
                "id": 28634,
                "name": "ㄴㅇㄹ",
                "done": true
            },
            {
                "id": 28669,
                "name": "想吃VB你",
                "done": false
            },
            {
                "id": 28670,
                "name": "水电费刚回家看",
                "done": false
            }
        ]
    },
    {
        "id": 7821,
        "title": "35",
        "description": "dfgfnre",
        "color": "#C9C9C9",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7785,
        "title": "dsdssd",
        "description": "dsssdsdss",
        "color": "#c9c9c9",
        "status": "done",
        "tasks": []
    },
    {
        "id": 7793,
        "title": "썅 드럽게 안되네 - 걱정하지마 나도 안됨 ㅋㅋ",
        "description": "따라 쳐도 안되네 샹샹",
        "color": "#ff0080",
        "status": "done",
        "tasks": [
            {
                "id": 28710,
                "name": "asdsadsadsad",
                "done": false
            }
        ]
    }
]
    
    app.get('/cards', function(req,res){
        
        res.send(cards);    
    });
    
}