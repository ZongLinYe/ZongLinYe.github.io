
// 宣告
const iPhoneList = [
    {
        model: 'iPhone 13 Pro',
        mainImg: './pic/iphone/iphone-13-pro-family-hero.png',
        price: 32900,

        content: [{
            name: 'iPhone 13 Pro',
            price: 32900,
            monitor: '6.1 吋顯示器',
            img: './pic/iphone/iphone-13-pro-family-select.jpg',
            colorList: [
                { name: '松嶺青色', color: '#576856', img: './pic/iphone/iphone-13-pro-green-select.png', colorName: 'green' },
                { name: '銀色', color: '#f2f3ee', img: './pic/iphone/iphone-13-pro-silver-select.png', colorName: 'silver' },
                { name: '金色', color: '#faead3', img: './pic/iphone/iphone-13-pro-gold-select.png', colorName: 'gold' },
                { name: '石墨色', color: '#5d5c58', img: './pic/iphone/iphone-13-pro-graphite-select.png', colorName: 'graphite' },
                { name: '天峰藍色', color: '#adc6dc', img: './pic/iphone/iphone-13-pro-blue-select.png', colorName: 'blue' },

            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3500 },
                    { name: '512GB', priceDifference: 10500 },
                    { storage: '1TB', priceDifference: 17500 },
                ]
            }]
        },
        {
            name: 'iPhone 13 Pro Max',
            price: 36900,
            monitor: '6.7 吋顯示器',
            img: './pic/iphone/iphone-13-pro-max-family-select.jpg',
            colorList: [
                { name: '松嶺青色', color: '#576856', img: './pic/iphone/iphone-13-pro-max-green-select.png', colorName: 'green' },
                { name: '銀色', color: '#f2f3ee', img: './pic/iphone/iphone-13-pro-max-silver-select.png', colorName: 'silver' },
                { name: '金色', color: '#faead3', img: './pic/iphone/iphone-13-pro-max-gold-select.png', colorName: 'gold' },
                { name: '石墨色', color: '#5d5c58', img: './pic/iphone/iphone-13-pro-max-graphite-select.png', colorName: 'graphite' },
                { name: '天峰藍色', color: '#adc6dc', img: './pic/iphone/iphone-13-pro-max-blue-select.png', colorName: 'blue' },

            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3500 },
                    { name: '512GB', priceDifference: 10500 },
                    { storage: '1TB', priceDifference: 17500 },
                ]
            }]
        },]
    },
    {
        model: 'iPhone 13',
        mainImg: './pic/iphone/iphone-13-family-hero.png',
        price: 25900,
        content: [{
            name: 'iPhone 13',
            price: 25900,
            monitor: '6.1 吋顯示器',
            img: './pic/iphone/iphone-13-family-select.jpg',
            colorList: [
                { name: '綠色', color: '#425341', img: './pic/iphone/iphone-13-green-select.png' },
                { name: '粉紅色', color: '#fbe2dd', img: './pic/iphone/iphone-13-pink-select-2021.png' },
                { name: '藍色', color: '#437691', img: './pic/iphone/iphone-13-blue-select-2021.png' },
                { name: '午夜色', color: '#42474d', img: './pic/iphone/iphone-13-midnight-select-2021.png' },
                { name: '星光色', color: '#fbf7f4', img: './pic/iphone/iphone-13-starlight-select-2021.png' },
                { name: '(PRODUCT)RED', color: '#c82333', img: './pic/iphone/iphone-13-product-red-select-2021.png' },
            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3500 },
                    { name: '512GB', priceDifference: 10500 },
                ]
            }]
        },
        {
            name: 'iPhone 13 mini',
            price: 22900,
            monitor: '5.4 吋顯示器',
            img: './pic/iphone/iphone-13-mini-family-select.jpg',
            colorList: [
                { name: '綠色', color: '#425341', img: './pic/iphone/iphone-13-mini-green-select.png' },
                { name: '粉紅色', color: '#fbe2dd', img: './pic/iphone/iphone-13-mini-pink-select-2021.png' },
                { name: '藍色', color: '#437691', img: './pic/iphone/iphone-13-mini-blue-select-2021.png' },
                { name: '午夜色', color: '#42474d', img: './pic/iphone/iphone-13-mini-midnight-select-2021.png' },
                { name: '星光色', color: '#fbf7f4', img: './pic/iphone/iphone-13-mini-starlight-select-2021.png' },
                { name: '(PRODUCT)RED', color: '#c82333', img: './pic/iphone/iphone-13-mini-product-red-select-2021.png' },
            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3500 },
                    { name: '512GB', priceDifference: 10500 },
                ]
            }]
        },]
    },
]




const iPadList = [
    {
        model: 'iPad Pro',
        mainImg: './pic/ipad/ipad-pro-12-11-select-202104_GEO_TW.jpg',
        price: 24900,

        content: [{
            name: '11 吋顯示器',
            price: 24900,
            monitor: 'Liquid Retina 顯示器',
            img: './pic/ipad/ipad-pro-11-select-202104_GEO_TW.png',
            colorList: [
                { name: '太空灰色', color: '#abaeb1', img: './pic/ipad/ipad-pro-11-select-wifi-spacegray-202104_GEO_TW.jpg' },
                { name: '銀色', color: '#dddfde', img: './pic/ipad/ipad-pro-11-select-wifi-silver-202104_GEO_TW.jpg' },

            ], colorCellList: [
                { name: '太空灰色', color: '#abaeb1', img: './pic/ipad/ipad-pro-11-select-cell-spacegray-202104_GEO_TW.jpg' },
                { name: '銀色', color: '#dddfde', img: './pic/ipad/ipad-pro-11-select-cell-silver-202104_GEO_TW.jpg' },

            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3100 },
                    { name: '512GB', priceDifference: 9300 },
                    { name: '1TB', priceDifference: 21700 },
                    { name: '2TB', priceDifference: 34100 },

                ]
            }, {
                name: '連線能力',
                specDetail: [
                    { name: 'Wi-Fi', priceDifference: 0 },
                    { name: 'Wi-Fi + 行動網路', priceDifference: 5000 },
                ]
            }]

        }, {
            name: '12.9 吋顯示器',
            price: 34900,
            monitor: 'Liquid Retina XDR 顯示器',
            img: './pic/ipad/ipad-pro-12-select-202104_GEO_TW.png',
            colorList: [
                { name: '太空灰色', color: '#abaeb1', img: './pic/ipad/ipad-pro-12-select-wifi-spacegray-202104_GEO_TW.jpg' },
                { name: '銀色', color: '#dddfde', img: './pic/ipad/ipad-pro-12-select-wifi-silver-202104_GEO_TW.jpg' },

            ],
            colorCellList: [
                { name: '太空灰色', color: '#abaeb1', img: './pic/ipad/ipad-pro-12-select-cell-spacegray-202104_GEO_TW.jpg' },
                { name: '銀色', color: '#dddfde', img: './pic/ipad/ipad-pro-12-select-cell-silver-202104_GEO_TW.jpg' },

            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '128GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 3100 },
                    { name: '512GB', priceDifference: 9300 },
                    { name: '1TB', priceDifference: 21700 },
                    { name: '2TB', priceDifference: 34100 },
                ]
            }, {
                name: '連線能力',
                specDetail: [
                    { name: 'Wi-Fi', priceDifference: 0 },
                    { name: 'Wi-Fi + 行動網路', priceDifference: 5000 },


                ]
            }]
        },]
    },
    {
        model: 'iPad Air',
        mainImg: './pic/ipad/ipad-air-select-202203.jpg',
        price: 17900,

        content: [{
            price: 17900,
            colorList: [
                { name: '太空灰色', color: '#727075', img: './pic/ipad-air-select-wifi-spacegray-202203.png/' },
                { name: '粉紅色', color: '#e7d2cf', img: './pic/ipad/ipad-air-select-wifi-pink-202203.png' },
                { name: '紫色', color: '#bfbdd3', img: './pic/ipad/ipad-air-select-wifi-purple-202203.png' },
                { name: '藍色', color: '#90b4c2', img: './pic/ipad/ipad-air-select-wifi-blue-202203.png' },
                { name: '星光色', color: '#faf7f2', img: './pic/ipad/ipad-air-select-wifi-starlight-202203.png' },

            ],
            colorCellList: [
                { name: '太空灰色', color: '#727075', img: './pic/ipad/ipad-air-select-cell-spacegray-202203.png' },
                { name: '粉紅色', color: '#e7d2cf', img: './pic/ipad/ipad-air-select-cell-pink-202203.png' },
                { name: '紫色', color: '#bfbdd3', img: './pic/ipad/ipad-air-select-cell-purple-202203.png' },
                { name: '藍色', color: '#90b4c2', img: './pic/ipad/ipad-air-select-cell-blue-202203.png' },
                { name: '星光色', color: '#faf7f2', img: './pic/ipad/ipad-air-select-cell-starlight-202203.png' },

            ],
            spec: [{
                name: '容量',
                specDetail: [
                    { name: '64GB', priceDifference: 0 },
                    { name: '256GB', priceDifference: 5000 },


                ]
            }, {
                name: '連線能力',
                specDetail: [
                    { name: 'Wi-Fi', priceDifference: 0, },
                    { name: 'Wi-Fi + 行動網路', priceDifference: 5000, },
                ]
            }]

        }]
    }]


// DOM 

const navbarNav = document.querySelector('.navbar-nav')
const productName = document.querySelector('.commodity-information .product-name')
const commodityPrice = document.querySelector('.commodity-information .commodity-price')
const commodityTitle = document.querySelector('.container-commodity .title')
const productImg = document.querySelector('.commodity-pic .product-img')

const modelAreaBtn = document.querySelector('[aria-controls="panelsStayOpen-model"]')
const colorAreaBtn = document.querySelector('[aria-controls="panelsStayOpen-color"]')

const modelArea = document.querySelector('.model-item .model-area')
const colorArea = document.querySelector('.color-item .color-area')
const storageArea = document.querySelector('.storage-group .storage-area')

const accordionBox = document.querySelector('.accordion')

// console.log(navbarNav)

// window.onload

window.onload = function () {
    // window.onresize = function () {
    //     mobileResponsive()
    // }

    // navItemsDom.forEach((navItem) => {
    //     console.dir(navItem)
    //     // navItem.addEventListener('',)
    // })
    // modelAreaBuild()

    showNavbar()


}

function showNavbar() {
    const iphoneList = iPhoneList.map(p => p.model)
    iphoneList.forEach((p, index) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = p
        a.href = `#${p}`
        a.classList.add('nav-link')
        a.onclick = function () {
            modelArea.innerText = ''
            selectIphoneProduct(iPhoneList[index])
        }
        li.classList.add('nav-item')
        li.appendChild(a)
        navbarNav.appendChild(li)
    })

    const ipadList = iPadList.map(p => p.model)
    ipadList.forEach((p, index) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = p
        a.href = `#${p}`
        a.classList.add('nav-link')

        a.onclick = function () {
            selectIpadProduct(iPadList[index])
        }
        li.classList.add('nav-item')
        li.appendChild(a)
        navbarNav.appendChild(li)
    })
}

function selectIphoneProduct(product) {
    productName.innerText = product.model
    commodityTitle.innerText = `購買 ${product.model}`
    productImg.src = product.mainImg
    commodityPrice.innerText = `NT$${product.price}起`


    // model
    product.content.forEach((item, index) => {
        // console.log(item)
        const div = document.createElement('div')
        div.classList.add('col-12', 'mb-3')
        const btn = document.createElement('button')
        btn.classList.add('btn', 'model-btn', 'w-100', 'd-flex', 'align-items-center', 'justify-content-between')

        const modelInformation = document.createElement('div')
        modelInformation.classList.add('col-8', 'model-information')

        const divModel = document.createElement('div')
        divModel.classList.add('text-start', 'model-name')
        divModel.innerText = item.name
        const divMonitor = document.createElement('div')
        divMonitor.classList.add('text-start', 'monitor')
        divMonitor.innerText = item.monitor

        const divPrice = document.createElement('div')
        divPrice.classList.add('col-4', 'text-end', 'model-price')
        divPrice.innerText = `NT$${item.price} 起`




        btn.onclick = function () {

            colorArea.innerText = ''
            // console.log(item)
            productImg.src = item.img

            const boxArray = [...modelAreaBtn.children][0]
            boxArray.innerText = ""
            boxArray.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'w-100')
            const choose = document.createElement('div')
            choose.classList.add('text', 'text-start')
            const chooseModel = document.createElement('div')
            chooseModel.innerText = item.name
            const chooseMonitor = document.createElement('div')
            chooseMonitor.innerText = item.monitor
            chooseMonitor.classList.add('fw-normal', 'choose-monitor')
            const choosePrice = document.createElement('div')
            choosePrice.classList.add('choose-price', 'px-3')
            choosePrice.innerText = `NT$${item.price} 起`


            choose.appendChild(chooseModel)
            choose.appendChild(chooseMonitor)
            boxArray.appendChild(choose)
            boxArray.appendChild(choosePrice)
            modelAreaBtn.appendChild(boxArray)

            modelAreaBtn.click()


            // color
            // console.log(product.content[index])

            product.content[index].colorList.forEach((item, index) => {

                // console.log(item)
                const div = document.createElement('div')
                div.classList.add('col-6', 'mb-3')
                const btn = document.createElement('button')
                btn.classList.add('btn', 'color-btn', 'w-100')
                const btnIconContainer = document.createElement('div')
                btnIconContainer.classList.add('color-information')
                const btnIcon = document.createElement('i')
                btnIcon.classList.add('fas', 'fa-circle', `${item.colorName}`)
                const colorName = document.createElement('div')
                colorName.classList.add('color-name')
                colorName.innerText = `${item.name}`

                btnIconContainer.appendChild(btnIcon)
                btn.appendChild(btnIconContainer)
                btn.appendChild(colorName)
                div.appendChild(btn)
                colorArea.appendChild(div)

            })




        }

        const btnDiv = document.createElement('div')

        modelInformation.appendChild(divModel)
        modelInformation.appendChild(divMonitor)
        btn.appendChild(modelInformation)
        btn.appendChild(divPrice)
        div.appendChild(btn)
        modelArea.appendChild(div)




    })



}

function selectIpadProduct(product) {

    productName.innerText = product.model
    commodityTitle.innerText = `購買 ${product.model}`
    productImg.src = product.mainImg
    commodityPrice.innerText = `NT$${product.price}起`
    // console.log("hi")

    // model
    product.content.forEach((item, index) => {
        // console.log("hi")

        const div = document.createElement('div')
        div.classList.add('col-12', 'mb-3')
        const btn = document.createElement('button')
        btn.classList.add('btn', 'model-btn', 'w-100', 'd-flex')
        const divModel = document.createElement('div')
        divModel.classList.add('text-start', 'model-name')
        divModel.innerText = item.name
        const divMonitor = document.createElement('div')
        divMonitor.classList.add('text-start', 'monitor')
        divMonitor.innerText = item.monitor
        const divPrice = document.createElement('div')
        divPrice.classList.add('col-5', 'text-end', 'model-price')
        divPrice.innerText = item.price
        // console.log("hi")

        btn.onclick = function () {
            // console.log("hi")
            productImg.src = item.img

            let boxArray = [...modelAreaBtn.children][0]
            boxArray.innerHTML = ""
            boxArray.classList.add('d-flex')
            let choose = document.createElement('div')
            choose.classList.add('text', 'text-start')
            let chooseModel = document.createElement('div')
            chooseModel.innerText = item.model
            let chooseMonitor = document.createElement('div')
            chooseMonitor.innerText = item.monitor
            let choosePrice = document.createElement('div')
            choosePrice.innerText = (item.price)


            choose.appendChild(chooseModel)
            choose.appendChild(chooseMonitor)
            boxArray.appendChild(choose)
            boxArray.appendChild(choosePrice)
            modelAreaBtn.appendChild(boxArray)

            modelAreaBtn.click()
        }

        const btnDiv = document.createElement('div')




    })


}






// function modelAreaBuild() {
//     iPhoneList
// }


// function

// function mobileResponsive() {
//     let windowWidth = window.innerWidth
//     console.log(windowWidth)
//     if (windowWidth < 991) {
//         navItemsDom.forEach((navItem) => {
//             navItem.classList.add('border-bottom', 'border-light')
//         })
//     }

//     if (windowWidth > 992) {
//         navItemsDom.forEach((navItem) => {
//             navItem.classList.remove('border-bottom', 'border-light')
//         })
//     }
// }