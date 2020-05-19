/**
 * Created by haiping on 2018/10/09.
 * 直播详情
 */

var vm = new Vue({
    el: "#living-detail",
    data: {
        products: [
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "白令手表男士防水进口石英表钢带dw黑金情侣 简约ins 白令手表男士防水进口石英表钢带dw黑金情侣",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            },
            {
                "src": "https://img14.360buyimg.com/mobilecms/s455x455_jfs/t24811/56/1847290556/147042/e119cf09/5bbd4aedN738ff071.jpg!q70.dpg.webp",
                "name": "xxxxx",
                "price": "343.00",
                "delprice": "555.25",
            }
        ], //全部宝贝
        playList: [
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "dasf",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "bering白令手表男进口简约时尚防水女表薄款潮腕表情侣石英表DW02",
                "time": "2018-10-10",
                "watch": "1231"
            },
            {
                "src": "https://img.alicdn.com/bao/uploaded/i4/672156617/TB2sdp.Cr1YBuNjSszhXXcUsFXa_!!672156617-0-item_pic.jpg",
                "name": "dasf",
                "time": "2018-10-10",
                "watch": "1231"
            }
        ], //TA的回放
        hotPlayer: [
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            },
            {
                "src": "https://gdp.alicdn.com/imgextra/i2/2936349667/O1CN012LHXEHsjy5BCB33_!!2936349667.jpg",
                "watch": 1312312,
                "name": "面膜大战面膜大战面膜大战面膜大战",
                "goods": [
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "1",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "2",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "3",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "4",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "5",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "6",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "7",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "8",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "9",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                    {
                        "img": "https://img.alicdn.com/bao/uploaded/i1/2914118316/TB2OyIRxYSYBuNjSspfXXcZCpXa_!!2914118316-0-item_pic.jpg",
                        "price": "10",
                        "name": "COOREENA 时尚短袖T恤细背带裤"
                    },
                ],
            }
        ], //精彩回放
        reviewList:[
            {
                "id":2334,
                "content":"11111111111111111111111111111111111111111111111111",
                "uid":3392,
                "level": 3,
                "user_info":{
                    "id":3392,
                    "nick":"彭于晏",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/01_16:32:34/6463c88460bd63bbe256e495c63aa40b.png"
                }
            },
            {
                "id":2335,
                "content":"11111",
                "uid":3392,
                "level": 3,
                "user_info":{
                    "id":3392,
                    "nick":"彭于晏",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/01_16:32:34/6463c88460bd63bbe256e495c63aa40b.png"
                }
            }
        ],  //评论列表
        place: {},
        enveTime: 30, //没领红包倒计时
        redEnvelope: false,  //红包显示隐藏
        isShow: 1,
        attentionTxt: "关注",
        sendInfo: ''
    },
    computed: {
        goodsList: function () {
            return this.goods_list.slice(0, this.limitNum);
        }
    },
    watch: {
        "place": {
            handler: function (defaultProvince) {},
            immediate: false, //声明immediate: true表示创建组件时立马执行一次
            deep: true
        },
    },
    methods: {

        //关闭直播商品推荐弹出框
        closeCustomer(e) {
            this.isShow = null;
        },

        //加入购物车
        addcartCustomer(e) {
            console.log("加入购物车:", e)
        },

        //30s倒计时
        enveTimeCustomer(){
            let self=this;
            var t = setTimeout(function () {
                if(self && !self._isDestroyed && self.enveTime > 0){
                    self.enveTime--;
                    t;
                    console.log("1",self.enveTime)
                }else{
                    self.redEnvelope = false;
                    clearTimeout(t);
                    console.log("2",self.enveTime)
                }
            }, 1000);
            t;
        },

        //拆红包
        splitCustomer(e){

        },

        //关注主播按钮
        attenCustomer(e, attentionTxt) {
            const atten = attentionTxt == "关注" ? "已关注" : "关注"
            this.$set(this.$data, "attentionTxt", atten)
            console.log("关注:", e, attentionTxt)
        },

        loginCustomer(e){
            let loginUrl = "http://flnet-api.flnet.cn:8080/api/auth/login";
            this.ajaxCustomer(loginUrl, "post", "", function () {
                console.log("Ajax sucess")
            })

           // var xhr = new XMLHttpRequest()
           // xhr.open('POST', loginUrl, true)
           // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           // xhr.onreadystatechange = function () {
           //     if (this.readyState === 4) {
           //         if (this.status === 200) {
           //             console.log("success")
           //         } else {
           //             var resJson = { code: this.status, response: this.response }
           //             console.log("error")
           //         }
           //     }
           // }
           //
           // xhr.send()
        },

        //发送聊天信息
        sendCustomer(e, info) {
            // const reviewListScroll = document.getElementById("review-list").scrollTop;
            // // const reviewListH = document.getElementById("review-list").offsetHeight;
            // const reviewListH = document.getElementById("review-list").clientHeight;
            const reviewObj = {
                "id":2334,
                "content": info,
                "uid":3392,
                "level": 3,
                "user_info":{
                    "id":3392,
                    "nick":"彭于晏",
                    "head_image_url":"http://flnet-test.oss-cn-shanghai.aliyuncs.com/head/2017/11/01_16:32:34/6463c88460bd63bbe256e495c63aa40b.png"
                }
            }

            if(info!=""){
                this.reviewList.push(reviewObj);
                const reviewListAll = document.getElementById("review-list").scrollHeight;
                setTimeout(()=>{
                    document.getElementById("review-list").scrollTop = reviewListAll + 40;
                },1)
                console.log(reviewListAll);
            }else{
                alert("评论不能为空")
            }

            this.$set(this.$data, "sendInfo", "");
            console.log("发送聊天信息:", e, info, this.reviewList);
        },

        //回车键发送聊天信息
        keyupCustomer(e, info) {
            this.sendCustomer(e, info);
            console.log("回车键发送聊天信息:", e, info)
        },

        //获取URL参数
        getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        },

        //接口请求
        ajaxCustomer(url, type, data, success){
            $.ajax({
                url: url,
                type: type,
                data: data,
                dataType: "json", //请求数据类型
                contentType: "application/x-www-form-urlencoded;charset=UTF-8",
                timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
                cache: false, //是否缓存，默认值: true，dataType 为 script 和 jsonp 时默认为 false
                async: true,
                beforeSend: function (XMLHttpRequest) {
                    //开始请求之前
                    console.log("正在获取数据...");
                },
                success: success,
                // success: function (response) {
                //     console.log(response)
                //     console.log("Ajax success!");
                // },
                complete: function (XMLHttpRequest, textStatus) {
                    //请求完成
                    // textStatus 可能为：null、'success'、 'notmodified'、 'error'、 'timeout'、 'abort'或'parsererror'等
                    console.log("获取数据完毕...");
                    if (textStatus == 'timeout') {
                        //判断是否超时
                        var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
                        xmlhttp.abort(); //终止当前请求
                        console.log("网络超时！");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("Ajax error!");
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            })
        },

        //匿名方式
        anonymityCustomer(){
            const addrs = [];
            $.ajax({
                url: "http://flnet-wap.flnet.cn/index/request_room_address",
                type: 'post',
                dataType: 'json',
                data: {
                    AppKey: '4bf95ee6ca75cf9aef21e926356a5b9c',
                    accid: '4647',
                    roomid: "4647"
                    // roomid:roomid
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    "CheckSum": "51eb13ea5ee3a2c00e8388e48e61c65c7866c366",
                    "AppKey": "4bf95ee6ca75cf9aef21e926356a5b9c",
                    "CurTime": new Date().getTime()
                },
                timeout: 1000,
                success: function (data, status) {

                    // 匿名方式登录
                    var chatroom = SDK.Chatroom.getInstance({
                        appKey: '4bf95ee6ca75cf9aef21e926356a5b9c',
                        // account: resultObj.data.accid,
                        // token: resultObj.data.token,
                        //account: '4361',
                        // token: '22036d5e34c17a085936811966fd4609',
                        // token: '1713d85d69cf13bcd360756bc83fb325',
                        // chatroomId: roomid,
                        chatroomId: "4647",
                        chatroomAddresses: data.data.address,
                        chatroomNick: 'chatroomNick',
                        chatroomAvatar: 'chatroomAvatar',
                        isAnonymous: true,
                        onconnect: onChatroomConnect,
                        onwillreconnect: onWillreconnect,
                        ondisconnect: onDisconnect,
                        onerror: onError,
                        onmsgs: onMsgs
                    });


                    function onChatroomConnect (obj) {
                        // 该处chatroom为全局生成的实例
                        console.log(1231231231231)
                        window.account = chatroom.account

                        console.log(obj)
                    }

                    function onWillreconnect(obj) {
                        console.log('即将重连');
                        console.log(obj);
                    }

                    function onDisconnect(error) {
                        // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
                        console.log('连接断开', error, error.code);
                        if (error) {
                            switch (error.code) {
                                // 账号或者密码错误, 请跳转到登录页面并提示错误
                                case 302:
                                    console.log("账号或者密码错误")
                                    break;
                                // 被踢, 请提示错误后跳转到登录页面
                                case 'kicked':
                                    console.log("被踢")
                                    break;
                                default:
                                    break;
                            }
                        }
                    }


                    function onError() {
                        console.log(error);
                    }

                    function onMsgs(msgs) {

                        //<li style="color:blue;">弹幕服务器连接中...

                        var joinAttach = msgs[0].attach  //(进入直播间)
                        // if(joinAttach != undefined){
                        //     var memberType = joinAttach.type;
                        //     console.log('收到聊天室消息', memberType);
                        //     switch (memberType){
                        //         case "memberEnter":
                        //             output.innerHTML += '<li class="userMsg" style="color:blue;">'+joinAttach.fromNick+'  进入直播间<p></p></li>'
                        //             break;
                        //         case "memberExit":
                        //             output.innerHTML += '<li class="userMsg" style="display: none">'+joinAttach.fromNick+'  离开直播间<p></p></li>'
                        //             break;
                        //     }
                        // }else{
                        //     var user_nick = msgs[0].fromNick == undefined ? ' ' : msgs[0].fromNick;  //(聊天)
                        //     var chatMsg = msgs[0].text == '' ? (msgs[0].fromNick == undefined?'':'<i class="colorViolet">  关注了主播</i>') : ' :  '+msgs[0].text;
                        //     var lvMsg = msgs[0].fromNick == undefined ? ' ' : '<span class="lvMsg">Lv'+(JSON.parse(msgs[0].fromCustom)).level+'</span>';  //等级
                        //     var fromNick = '<span class="nickMsg colorOrange">'+user_nick+'</span>';
                        //     var chatMessages = '<span class="txtMsg colorWhite">'+chatMsg+'</span>';
                        //     output.innerHTML += '<li class="userMsg" style="color:blue;">'+lvMsg+fromNick+chatMessages+'<p></p></li>'
                        // }
                        console.log('收到聊天室消息', msgs);
                        console.log('收到聊天室消息', msgs, msgs[0].fromNick, msgs[0].text);
                    }
                    console.log(data)
                },
                fail: function (err, status) {
                    console.log(err)
                }
            })
        },


    },
    beforeCreate() {
        console.log('beforeCreate')
        // $.ajax({
        //     url: "http://flnet-wap.flnet.cn/flnet_live/liveList",
        //     type: "post",
        //     data: "",
        //     dataType: "json", //请求数据类型
        //     contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        //     timeout: 15000, //设置请求超时时间（毫秒）。此设置将覆盖全局设置。
        //     cache: false, //是否缓存，默认值: true，dataType 为 script 和 jsonp 时默认为 false
        //     async: true,
        //     beforeSend: function (XMLHttpRequest) {
        //         //开始请求之前
        //         console.log("正在获取数据...");
        //     },
        //     success: function (response) {
        //         console.log("Ajax success!");
        //         console.log("response:", response);
        //     },
        //     complete: function (XMLHttpRequest, textStatus) {
        //         //请求完成
        //         // textStatus 可能为：null、'success'、 'notmodified'、 'error'、 'timeout'、 'abort'或'parsererror'等
        //         console.log("获取数据完毕...");
        //         if (textStatus == 'timeout') {
        //             //判断是否超时
        //             var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
        //             xmlhttp.abort(); //终止当前请求
        //             console.log("网络超时！");
        //         }
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log("Ajax error!");
        //         console.log("XMLHttpRequest.status:",XMLHttpRequest.status);
        //         console.log("XMLHttpRequest.readyState:",XMLHttpRequest.readyState);
        //         console.log("textStatus:",textStatus);
        //     }
        // })

    },
    created() {
        var _self = this;



        //获取参数
        const playbackId = this.getUrlParam("id");
        console.log(playbackId)

        //视频详情评论列表接口
        const liveListUrl = "http://flnet-wap.flnet.cn/flnet_live/liveList";
        this.ajaxCustomer(liveListUrl, "post", "", function (response) {
            console.log("response:",response)
            console.log("Ajax success")
        });

    },
    beforeMount() {},
    mounted() {
        this.$nextTick(function () {


            this.enveTimeCustomer();

            /******** IM start *******************************************************************/
            //匿名方式
            this.anonymityCustomer();
            /******** IM end *******************************************************************/


            /********播放器 start *******************************************************************/
            var player = new Aliplayer({
                id: "player-con",
                source: "http://player.pier39.cn/video/editor.mp4",
                width: "100%",
                height: "100%",
                cover: 'https://img.alicdn.com/tps/TB1EXIhOFXXXXcIaXXXXXXXXXXX-760-340.jpg',
                /* 设置封面时需要将 autoplay 和 preload 设置为 false */
                autoplay: true,
                preload: false,
                language: "zh-cn",
                isLive: false
            }, function (player) {
                console.log("播放器创建成功");
            });
            // var player = new Aliplayer({
            //     "id": "player-con",
            //     "source": "//player.alicdn.com/video/aliyunmedia.mp4",
            //     "width": "100%",
            //     "height": "500px",
            //     "autoplay": true,
            //     "isLive": false,
            //     "rePlay": false,
            //     "playsinline": true,
            //     "preload": true,
            //     "controlBarVisibility": "hover",
            //     "useH5Prism": true
            // }, function (player) {
            //     console.log("播放器创建了。");
            // });

            /********播放器 end *******************************************************************/




            /********轮播效果 start *******************************************************************/

            /**
             * TA的回放轮播
             */
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 2,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });


            /**
             * 精彩回放=>商品推荐轮播
             */
            var swiper2 = new Swiper('.swiper-container2', {
                slidesPerView: 3.32,
                spaceBetween: 15,
                freeMode: true,
                slidesPerGroup: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            /********轮播效果 end *******************************************************************/


            // 封装点赞效果 start
            // (function ($) {
            //     // 最大心
            //     var heartMax = 32,
            //         // 最小心
            //         heartMin = 26,
            //         // 心的最多数量
            //         heartMaxNum = 80,
            //         // 心颜色数组
            //         colors = ["FF5D31", "FF7043", "FF9800", "F9A825", "F57F17", "FFCA28"],
            //         // 心svg图形
            //         svgString = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>',
            //
            //         /**
            //          * [心样式及动画构造]
            //          * @param  {[object]} element [装心的容器]
            //          * @return {}
            //          */
            //         heartTemplate = function (element) {
            //             // 容器宽度
            //             this.width = element.width(),
            //                 // 容器高度
            //                 this.height = element.height();
            //             // 从[svgString]中取得图形随机色值
            //             var _color = colors[Math.floor(Math.random() * colors.length)],
            //                 // 添加进svgString并取得dom
            //                 _svgDom = $(svgString.replace("$fill$", "#" + _color));
            //
            //             // 赋值svgDom
            //             this.$el = _svgDom,
            //                 // 初始X坐标（容器宽度的一半减去10）
            //                 this.startX = this.width / 2 - 10,
            //                 // 初始Y坐标
            //                 this.y = 0,
            //
            //                 this.pos = Math.random() * Math.PI,
            //                 this.hz = Math.random() * 20 + 10,
            //                 this.zf = Math.random() * 15 + 10,
            //                 // 随机初始透明度值
            //                 this.opacityStart = Math.random() * 10 + 10,
            //
            //                 // 设置svg样式
            //                 this.setStyle(),
            //
            //                 // 插入容器
            //                 element.append(_svgDom),
            //
            //                 // 运行动画
            //                 this.run()
            //         };
            //
            //     /**
            //      * [设置样式]
            //      */
            //     heartTemplate.prototype.setStyle = function () {
            //
            //             var _left = this.startX + Math.sin(this.pos + this.y / this.hz) * this.zf,
            //                 _opactiy = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
            //                 _size = Math.min(this.y * 2 / this.height * (heartMax - heartMin) + heartMin, heartMax);
            //
            //             this.$el.css({
            //                 left: _left,
            //                 bottom: this.y,
            //                 opacity: _opactiy
            //             }).width(_size).height(_size)
            //         },
            //         /**
            //          * [动画函数]
            //          * @return {}
            //          */
            //         heartTemplate.prototype.run = function () {
            //             var that = this,
            //                 delay = Math.random() * 20 + 10,
            //                 now = $.now(),
            //                 timer = setInterval(function () {
            //                     var curNow = $.now();
            //                     that.y += Math.round((curNow - now) / delay),
            //                         now = curNow,
            //
            //                         // 设置样式
            //                         that.setStyle(),
            //
            //                         // 如果y值大于等于容器高度则移除svgDom并且清除定时器
            //                         that.y >= that.height && (that.$el.remove(), clearTimeout(timer))
            //                 }, delay)
            //         };
            //
            //     /**
            //      * [点赞]
            //      * @return {}
            //      */
            //     var praises = function () {
            //         this.$root = $("#player-praises"),
            //             this.$inner = this.$root.find(".bubble");
            //         var broswer = 0;
            //         try {
            //             broswer = navigator.userAgent.match(/MSIE (\d+)/i)[1]
            //         } catch (n) {
            //             broswer = 0
            //         }
            //         broswer == 0 ? (this.$root.show(), this.initEvent()) : this.$root.hide()
            //     };
            //
            //     // 插入Dom
            //     praises.prototype.add = function (num) {
            //             num = num || 1;
            //             if (this.$inner.find("svg").length + num > heartMaxNum) return;
            //             for (var i = num; i > 0; i--)
            //                 new heartTemplate(this.$inner)
            //         },
            //
            //         // 事件绑定
            //         praises.prototype.initEvent = function () {
            //             var that = this;
            //
            //             this.$root.find(".praises").on("click", function (event) {
            //                 event.preventDefault(),
            //                     that.add()
            //             })
            //
            //             this.$root.on("praise:receive", function (e) {
            //                 that.add(e.num)
            //             })
            //         }
            //
            //     // 执行点赞方法
            //     new praises();
            //
            // })(jQuery)
            // 封装点赞效果 end


            /********点赞效果 start *******************************************************************/

            // (function ($) {
                const heartMax = 32; //最大心
                const heartMin = 26; //最小心
                const heartMaxNum = 80; //心的最多数量
                const colors = ["FF5D31", "32ccea", "ff5dc1", "5a61f1", "FF7043", "ff922a", "FF9800", "F9A825", "F57F17", "FFCA28", "ff0000", "44d21d"]; // 心颜色数组
                const svgString = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>'

                /**
                 * [心样式及动画构造]
                 * @param  {[object]} element [装心的容器]
                 * @return {}
                 */
                const heartTemplate = function (element) {
                    // 容器宽度
                    this.width = element.width(),
                        // 容器高度
                        this.height = element.height();
                    // 从[svgString]中取得图形随机色值
                    // var _color = colors[Math.floor(Math.random() * colors.length)],
                    var _color = colors[Math.floor(Math.random() * colors.length)],
                        // 添加进svgString并取得dom
                        _svgDom = $(svgString.replace("$fill$", "#" + _color));

                    // 赋值svgDom
                    this.$el = _svgDom,
                        // 初始X坐标（容器宽度的一半减去10）
                        this.startX = this.width / 2 - 10,
                        // 初始Y坐标
                        this.y = 0,

                        this.pos = Math.random() * Math.PI,
                        this.hz = Math.random() * 20 + 10,
                        this.zf = Math.random() * 15 + 10,
                        // 随机初始透明度值
                        this.opacityStart = Math.random() * 10 + 10,

                        // 设置svg样式
                        this.setStyle(),

                        // 插入容器
                        element.append(_svgDom),

                        // 运行动画
                        this.run()
                }


                /**
                 * [设置样式]
                 */
                heartTemplate.prototype.setStyle = function () {

                        var _left = this.startX + Math.sin(this.pos + this.y / this.hz) * this.zf,
                            _opactiy = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
                            _size = Math.min(this.y * 2 / this.height * (heartMax - heartMin) + heartMin, heartMax);

                        this.$el.css({
                            left: _left,
                            bottom: this.y,
                            opacity: _opactiy
                        }).width(_size).height(_size)
                    },


                /**
                 * [动画函数]
                 * @return {}
                 */
                heartTemplate.prototype.run = function () {
                    var that = this,
                        delay = Math.random() * 20 + 10,
                        now = $.now(),
                        timer = setInterval(function () {
                            var curNow = $.now();
                            that.y += Math.round((curNow - now) / delay),
                                now = curNow,

                                // 设置样式
                                that.setStyle(),

                                // 如果y值大于等于容器高度则移除svgDom并且清除定时器
                                that.y >= that.height && (that.$el.remove(), clearTimeout(timer))
                        }, delay)
                };

                /**
                 * [点赞]
                 * @return {}
                 */
                const praises = function () {
                    this.$root = $("#play-like"),
                        this.$inner = this.$root.find(".bubble");
                    var broswer = 0;
                    try {
                        broswer = navigator.userAgent.match(/MSIE (\d+)/i)[1]
                    } catch (n) {
                        broswer = 0
                    }
                    broswer == 0 ? (this.$root.show(), this.initEvent()) : this.$root.hide()
                };


                // 插入Dom
                praises.prototype.add = function (num) {
                        console.log(num)
                        num = num || 1;
                        if (this.$inner.find("svg").length + num > heartMaxNum) return;
                        for (var i = num; i > 0; i--)
                            new heartTemplate(this.$inner)
                    },

                // 事件绑定
                praises.prototype.initEvent = function () {
                    var that = this;

                    this.$root.find(".praises").on("click", function (event) {
                        event.preventDefault(),
                            that.add(3)
                    })

                    this.$root.on("praise:receive", function (e) {
                        that.add(e.num)
                    })
                }

                // 执行点赞方法
                new praises();
            // })(jQuery)

            /********点赞效果 end *******************************************************************/

        })
    },
    beforeUpdate() {},
    updated() {
        if(this.redEnvelope == true){
            this.enveTimeCustomer();
        }
    },
    beforeDestory() {},
    destroyed() {}
})
