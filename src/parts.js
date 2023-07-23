const hairItems = [
    {
        id: "defaultTwintail",
        text: "짱갈래",
        category: "hairs",
        colorable: true,
        pointingIndex: 1,
        subParts: [
            {
                id: "twintail1",
                targetSvg: "defaultTwintail",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    },
    {
        id: "pastelTwintail",
        text: "파스텔짱갈래",
        category: "hairs",
        colorable: false,
        pointingIndex: 2
    },
    {
        id: "cottonCandyTwintail",
        text: "솜사탕짱갈래",
        category: "hairs",
        colorable: false,
        pointingIndex: 3
    },
    {
        id: "heihachi",
        text: "헤이하치",
        category: "hairs",
        colorable: true,
        pointingIndex: 4,
        subParts: [
            {
                id: "heihachi1",
                targetSvg: "heihachiHair",
                defaultColor: ["#808080"]
            }
        ]
    },
    {
        id: "criring",
        text: "크리링",
        category: "hairs",
        colorable: false,
        pointingIndex: 5
    },
    {
        id: "bob",
        text: "보브",
        category: "hairs",
        colorable: true,
        pointingIndex: 6,
        subParts: [
            {
                id: "bobHair1",
                targetSvg: "bobHair",
                defaultColor: ["#be3535", "#3f48cc", "#88fabf"]
            }
        ]
    },
    {
        id: "dokdo",
        text: "독도다연",
        category: "hairs",
        colorable: false,
        pointingIndex: 7
    },
    {
        id: "paul",
        text: "폴 피닉스",
        category: "hairs",
        colorable: true,
        pointingIndex: 8
    },
    {
        id: "kiyoung",
        text: "기영이",
        category: "hairs",
        colorable: false,
        pointingIndex: 9
    },
    {
        id: "shortcut",
        text: "숏컷",
        category: "hairs",
        colorable: false,
        pointingIndex: 10,
        subParts: [
            {
                id: "shortcutHair1",
                targetSvg: "shortcutHair",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    },
    {
        id: "thug",
        text: "일진",
        category: "hairs",
        colorable: false,
        pointingIndex: 11
    },
    {
        id: "curled bob",
        text: "컬 보브",
        category: "hairs",
        colorable: true,
        pointingIndex: 12,
        subParts: [
            {
                id: "curledBobHair1",
                targetSvg: "curledBobHair",
                defaultColor: ["#e66a57", "#ffd689"]
            }
        ]
    },
    {
        id: "see-through bang",
        text: "시스루뱅",
        category: "hairs",
        colorable: true,
        pointingIndex: 13,
        subParts: [
            {
                id: "seeThroughBangHair1",
                targetSvg: "seeThroughBang",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    },
    {
        id: "long hair A",
        text: "롱헤어A",
        category: "hairs",
        colorable: true,
        pointingIndex: 14,
        subParts: [
            {
                id: "longHairA1",
                targetSvg: "longHairA",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    },
    {
        id: "long hair B",
        text: "롱헤어B",
        category: "hairs",
        colorable: true,
        pointingIndex: 15,
        subParts: [
            {
                id: "longHairB1",
                targetSvg: "longHairB",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    }
]

const clotheItems = [
    {
        id: "dress",
        text: "드레스",
        category: "clothes",
        colorable: true,
        pointingIndex: 4,
        subParts: [
            {
                id: "dress1",
                targetSvg: "dress",
                defaultColor: ["#ffffff", "#000000"]
            }
        ]
    },
    {
        id: "roka",
        text: "로카 티",
        category: "clothes",
        colorable: true,
        pointingIndex: 1
    },
    {
        id: "martial",
        text: "무술복",
        category: "clothes",
        colorable: true,
        pointingIndex: 3
    },
    {
        id: "otaku",
        text: "쉽덕코스프레",
        category: "clothes",
        colorable: true,
        pointingIndex: 5
    },
    {
        id: "underarmor",
        text: "언더아머",
        category: "clothes",
        colorable: true,
        pointingIndex: 6
    },
    {
        id: "red devil",
        text: "붉은악마",
        category: "clothes",
        colorable: true,
        pointingIndex: 7
    },
    {
        id: "maid",
        text: "메이드복",
        category: "clothes",
        colorable: true,
        pointingIndex: 8
    },
    {
        id: "prisoner",
        text: "죄수복",
        category: "clothes",
        colorable: true,
        pointingIndex: 9
    },
    {
        id: "suit",
        text: "정장",
        category: "clothes",
        colorable: true,
        pointingIndex: 10
    },
    {
        id: "birthday",
        text: "생일축하합니다",
        category: "clothes",
        colorable: true,
        pointingIndex: 11
    },
    {
        id: "off shoulder",
        text: "오프숄더",
        category: "clothes",
        colorable: true,
        pointingIndex: 12,
        subParts: [
            {
                id: "offShoulder1",
                targetSvg: "offShoulder1",
                defaultColor: ["#c20e0e"]
            }
        ]
    },
    {
        id: "baseball jumper",
        text: "야구잠바",
        category: "clothes",
        colorable: true,
        pointingIndex: 13,
        subParts: [
            {
                id: "baseballJumper1",
                targetSvg: "baseballJumper1",
                defaultColor: ["#3735a5", "#a53535"]
            },
            {
                id: "baseballJumper2",
                targetSvg: "baseballJumper2",
                defaultColor: ["#ffffff"]
            }
        ]
    },
    {
        id: "hanbok fork village",
        text: "민속촌 야방 한복",
        category: "clothes",
        colorable: true,
        pointingIndex: 14
    },
    {
        id: "hanbok ps",
        text: "플스잉 한복",
        category: "clothes",
        colorable: true,
        pointingIndex: 15
    },
    {
        id: "fur jacket",
        text: "퍼자켓",
        category: "clothes",
        colorable: true,
        pointingIndex: 16
    },
    {
        id: "dress shirt",
        text: "와이셔츠",
        category: "clothes",
        colorable: true,
        pointingIndex: 17
    },
    {
        id: "necktie",
        text: "넥타이",
        category: "clothes",
        colorable: true,
        pointingIndex: 18,
        subParts: [
            {
                id: "necktie1",
                targetSvg: "necktie1",
                defaultColor: ["#c20e0e", "#2026cf", "#5a5a5a", "#000000"]
            }
        ]
    },
    {
        id: "blazer",
        text: "블레이저",
        category: "clothes",
        colorable: true,
        pointingIndex: 22,
        subParts: [
            {
                id: "blazer1",
                targetSvg: "blazer1",
                defaultColor: ["#373737", "#ffc87b", "#ef3030", "#0d258e"]
            }
        ]
    },
    {
        id: "agile cardigan",
        text: "아가일 가디건",
        category: "clothes",
        colorable: false,
        pointingIndex: 26
    },
    {
        id: "tshirt",
        text: "이너 티",
        category: "clothes",
        colorable: true,
        pointingIndex: 29,
        subParts: [
            {
                id: "shirt1",
                targetSvg: "shirt1",
                defaultColor: ["#ffffff", "#000000"]
            }
        ]
    },
    {
        id: "lashguard",
        text: "래시가드",
        category: "clothes",
        colorable: false,
        pointingIndex: 35
    },
    {
        id: "nurse",
        text: "간호복",
        category: "clothes",
        colorable: false,
        pointingIndex: 36
    },
]

const weaponItems = [
    {
        id: "spear",
        text: "낫창",
        category: "weapon",
        colorable: false,
        pointingIndex: 3
    },
    {
        id: "morning star",
        text: "모닝스타",
        category: "weapon",
        colorable: false,
        pointingIndex: 1
    },
    {
        id: "m16",
        text: "M16",
        category: "weapon",
        colorable: false,
        pointingIndex: 2
    },
    {
        id: "potato chip",
        text: "프링글스",
        category: "weapon",
        colorable: false,
        pointingIndex: 4
    },
    {
        id: "death sythe",
        text: "데스사이즈",
        category: "weapon",
        colorable: false,
        pointingIndex: 5
    },
    {
        id: "wand",
        text: "완드",
        category: "weapon",
        colorable: false,
        pointingIndex: 6
    },
    {
        id: "sriracha",
        text: "스리라차",
        category: "weapon",
        colorable: false,
        pointingIndex: 7
    },
    {
        id: "bat",
        text: "야구빠따",
        category: "weapon",
        colorable: false,
        pointingIndex: 8
    },
    {
        id: "cake",
        text: "생일케이크",
        category: "weapon",
        colorable: false,
        pointingIndex: 9
    },
    {
        id: "double blade",
        text: "쌍칼",
        category: "weapon",
        colorable: false,
        pointingIndex: 10
    },
    {
        id: "saw",
        text: "전기톱",
        category: "weapon",
        colorable: false,
        pointingIndex: 11
    },
    {
        id: "mirror",
        text: "거울",
        category: "weapon",
        colorable: false,
        pointingIndex: 12
    },
    {
        id: "picket",
        text: "팻말",
        category: "weapon",
        colorable: false,
        pointingIndex: 13
    },
    {
        id: "fire bottle",
        text: "화염병",
        category: "weapon",
        colorable: false,
        pointingIndex: 14
    },
    {
        id: "americano",
        text: "아아",
        category: "weapon",
        colorable: false,
        pointingIndex: 15
    },
    {
        id: "yellow card",
        text: "옐로카드",
        category: "weapon",
        colorable: false,
        pointingIndex: 16
    },
    {
        id: "red card",
        text: "레드카드",
        category: "weapon",
        colorable: false,
        pointingIndex: 17
    },
    {
        id: "rod",
        text: "낚싯대",
        category: "weapon",
        colorable: false,
        pointingIndex: 18
    },
    {
        id: "whip",
        text: "채찍피티",
        category: "weapon",
        colorable: false,
        pointingIndex: 19
    },
    {
        id: "book",
        text: "책",
        category: "weapon",
        colorable: false,
        pointingIndex: 20
    },
    {
        id: "axe",
        text: "도끼",
        category: "weapon",
        colorable: false,
        pointingIndex: 21
    },
    {
        id: "injector",
        text: "주사기",
        category: "weapon",
        colorable: false,
        pointingIndex: 22
    }
]

const accessoryAitems = [
    {
        id: "helmet",
        text: "방탄모",
        category: "accessoriesA",
        color: false,
        pointingIndex: 1
    },
    {
        id: "flag",
        text: "태극기",
        category: "accessoriesA",
        color: false,
        pointingIndex: 2
    },
    {
        id: "ribbon",
        text: "리본",
        category: "accessoriesA",
        color: true,
        pointingIndex: 3,
        subParts: [
            {
                id: "ribbon1",
                targetSvg: "ribbon1",
                defaultColor: ["#ff0000"]
            }
        ]
    },
    {
        id: "thick glasses",
        text: "뿔테안경",
        category: "accessoriesA",
        color: true,
        pointingIndex: 4
    },
    {
        id: "glasses",
        text: "안경",
        category: "accessoriesA",
        color: false,
        pointingIndex: 6
    },
    {
        id: "sunglasses",
        text: "선글라스",
        category: "accessoriesA",
        color: false,
        pointingIndex: 7
    },
    {
        id: "nekomimi",
        text: "네코미미",
        category: "accessoriesA",
        color: false,
        pointingIndex: 8
    },
    {
        id: "scar",
        text: "칼빵자국",
        category: "accessoriesA",
        color: false,
        pointingIndex: 9
    },
    {
        id: "frill",
        text: "메이드복 프릴",
        category: "accessoriesA",
        color: false,
        pointingIndex: 10
    },
    {
        id: "beret",
        text: "베레모",
        category: "accessoriesA",
        color: false,
        pointingIndex: 11
    },
    {
        id: "id card",
        text: "사원증",
        category: "accessoriesA",
        color: false,
        pointingIndex: 12
    },
    {
        id: "broch necklace",
        text: "브로치 목걸이",
        category: "accessoriesA",
        color: false,
        pointingIndex: 13
    },
    {
        id: "sticker",
        text: "도유정 스티커",
        category: "accessoriesA",
        color: false,
        pointingIndex: 14
    },
    {
        id: "thorn",
        text: "뿔",
        category: "accessoriesA",
        color: false,
        pointingIndex: 15,
        subParts: [
            {
                id: "thorn1",
                targetSvg: "thorn1",
                defaultColor: ["#ba3434"]
            }
        ]
    },
    {
        id: "mask",
        text: "마스크",
        category: "accessoriesA",
        color: false,
        pointingIndex: 16,
        subParts: [
            {
                id: "mask1",
                targetSvg: "mask1",
                defaultColor: ["#ffffff", "#000000"]
            }
        ]
    },
    {
        id: "hentai mask",
        text: "변태가면",
        category: "accessoriesA",
        color: false,
        pointingIndex: 17
    },
    {
        id: "witch hat",
        text: "마녀모자",
        category: "accessoriesA",
        color: false,
        pointingIndex: 18
    },
    {
        id: "cone hat",
        text: "고깔모자",
        category: "accessoriesA",
        color: false,
        pointingIndex: 19
    },
    {
        id: "pirinapal",
        text: "피리나팔",
        pointingIndex: 20
    },
    {
        id: "ball cap",
        text: "볼캡",
        pointingIndex: 21
    },
    {
        id: "angel halo",
        text: "엔젤헤일로",
        pointingIndex: 22
    },
    {
        id: "tara",
        text: "티아라",
        pointingIndex: 23
    },
    {
        id: "vr",
        text: "VR 헤드셋",
        pointingIndex: 24
    },
    {
        id: "white rabbit",
        text: "흰 토끼 머리띠",
        pointingIndex: 25
    },
    {
        id: "black rabbit",
        text: "검은 토끼 머리띠",
        pointingIndex: 26
    },
    {
        id: "monocule",
        text: "단안경",
        pointingIndex: 27
    },
    {
        id: "protest",
        text: "결사반대 머리띠",
        pointingIndex: 28
    },
    {
        id: "gengar",
        text: "팬텀 스티커",
        pointingIndex: 29
    },
    {
        id: "scouter",
        text: "스카우터",
        pointingIndex: 30
    },
    {
        id: "wheat hat",
        text: "밀짚모자",
        pointingIndex: 31
    },
    {
        id: "tube",
        text: "튜브",
        pointingIndex: 32
    },
    {
        id: "nurse cap",
        text: "너스캡",
        pointingIndex: 33
    },
    {
        id: "snorkle",
        text: "스노클",
        pointingIndex: 34
    },
    {
        id: "shoulder mole left",
        text: "어깨점(좌)",
        pointingIndex: 35
    },
    {
        id: "shoulder mole right",
        text: "어깨점(우)",
        pointingIndex: 36
    }
]

const accessoryBitems = [
    {
        id: "angel wing",
        text: "천사날개",
        pointingIndex: 1,
        subParts: [
            {
                id: "angelwing1",
                targetSvg: "angelwing1",
                defaultColor: ["#ffffff", "#CA3636", "#2B2B2B"]
            }
        ]
    },
    {
        id: "devil wing",
        text: "악마날개",
        pointingIndex: 4,
        subParts: [
            {
                id: "devilwing1",
                targetSvg: "devilwing1",
                defaultColor: ["#1c1c1c", "#CA3636", "#ffffff"]
            }
        ]
    },
    {
        id: "devil tail",
        text: "악마꼬리",
        pointingIndex: 5
    },
    {
        id: "starbucks",
        text: "스타벅스",
        pointingIndex: 6
    },
    {
        id: "mermaid",
        text: "인어공주",
        pointingIndex: 7
    },
    {
        id: "cthultu",
        text: "크툴루",
        pointingIndex: 8
    },
    {
        id: "cape",
        text: "망토",
        pointingIndex: 9
    },
    {
        id: "kuroneko",
        text: "쿠로네코",
        pointingIndex: 10
    }
]

const makeupItems = [
    {
        id: "lip",
        text: "립",
        pointingIndex: 1,
        subParts: [
            {
                id: "lip1",
                targetSvg: "lip",
                defaultColor: ["#ff5e00", "#3f48cc", "#ff0000", "#000000"]
            }
        ]
    },
    {
        id: "double eyelid",
        text: "쌍커풀",
        pointingIndex: 5
    },
    {
        id: "cheek mole left",
        text: "볼점(좌)",
        pointingIndex: 6
    },
    {
        id: "cheek mole right",
        text: "볼점(우)",
        pointingIndex: 7
    },
    {
        id: "dark circle",
        text: "다크서클",
        pointingIndex: 8
    },
    {
        id: "maskara",
        text: "마스카라",
        pointingIndex: 9
    },
    {
        id: "blusher",
        text: "블러셔",
        pointingIndex: 10
    },
    {
        id: "tears",
        text: "눈물",
        pointingIndex: 11
    },
    {
        id: "tongue",
        text: "메롱",
        pointingIndex: 12
    },
    {
        id: "mustache",
        text: "콧수염",
        pointingIndex: 13
    },
    {
        id: "beard",
        text: "턱수염",
        pointingIndex: 14
    },
    {
        id: "kkondae",
        text: "꼰대수염",
        pointingIndex: 22
    },
    {
        id: "eight wrinkle",
        text: "팔자주름",
        pointingIndex: 15
    },
    {
        id: "smokey",
        text: "스모키 화장",
        pointingIndex: 16
    },
    {
        id: "dead sesame",
        text: "주근깨",
        pointingIndex: 17
    },
    {
        id: "circle lens",
        text: "서클렌즈",
        pointingIndex: 18,
        subParts: [
            {
                id: "circleLens1",
                targetSvg: "circleLens",
                defaultColor: ["#3f48cc", "#cc3f3f", "#53cc3f", "#ffe745","#ffffff","#000000"]
            }
        ]
    },
    {
        id: "oshi no ko",
        text: "최애의 아이",
        pointingIndex: 21
    },
    {
        id: "thick eyebrow",
        text: "송충이눈썹",
        pointingIndex: 23
    },
    {
        id: "jiraionna",
        text: "지뢰계",
        pointingIndex: 24
    },
    {
        id: "eye patch left",
        text: "안대(좌)",
        pointingIndex: 26
    },
    {
        id: "eye patch right",
        text: "안대(우)",
        pointingIndex: 27
    },
    {
        id: "kratos",
        text: "크레이토스",
        pointingIndex: 28
    }
]

const balloonItems = [
    {
        id: "balloon1",
        text: "말풍선1",
        pointingIndex: 1
    },
    {
        id: "balloon2",
        text: "말풍선2",
        pointingIndex: 2
    },
    {
        id: "balloon3",
        text: "말풍선3",
        pointingIndex: 3
    },
    {
        id: "balloon4",
        text: "말풍선4",
        pointingIndex: 4
    }
]

const parts = {
    hairs: {
        label: "머가리",
        items: hairItems,
        tabStyle: {
            backgroundColor: "#c5d0eb",
            color: "#343434"
        }
    },
    makeup: {
        label: "메이크업",
        items: makeupItems,
        tabStyle: {
            backgroundColor: "#d0e1f5",
            color: "#343434"
        }
    },
    clothes: {
        label: "옷",
        items: clotheItems,
        tabStyle: {
            backgroundColor: "#e8fffd",
            color: "#343434"
        }
    },
    weapons: {
        label: "무기",
        items: weaponItems,
        tabStyle: {
            backgroundColor: "#fffcf7",
            color: "#343434"
        }
    },
    accessoriesA: {
        label: "악세사리A",
        items: accessoryAitems,
        tabStyle: {
            backgroundColor: "#ffece3",
            color: "#343434"
        }
    },
    accessoriesB: {
        label: "악세사리B",
        items: accessoryBitems,
        tabStyle: {
            backgroundColor: "#f5cbcb",
            color: "#343434"
        }
    },
    balloon: {
        label: "말풍선",
        items: balloonItems,
        tabStyle: {
            backgroundColor: "#f075ab",
            color: "#343434"
        }
    }
}

export default parts