const items = [
    [
        'item-1',
        'img1'
    ],
    [
        'item-2',
        'img2'
    ],
    [
        'item-3',
        'img3'
    ]
]

items.forEach(function(item){
    document.getElementById(item[0]).addEventListener("mouseover", function(){
        setTimeout(() => {
            document.getElementById(item[1]).src = "../images/book-open.svg"
        }, 150);
    })

    document.getElementById(item[0]).addEventListener("mouseout", function(){
        setTimeout(() => {
            document.getElementById(item[1]).src = "../images/book-close.svg"
        }, 150);
    })
})