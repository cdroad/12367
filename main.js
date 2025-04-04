const elementToClick = document.querySelector("#app > div > div.scmcc-layout-frame.theme-bg-gray-color > div.scmcc-layout-frame-right > div.scmcc-header > div.scmcc-header-center > div.cinccbar > ul > li:nth-child(4) > button");

function autoClick() {
    if (elementToClick.disabled) {
        console.log('接听按钮未亮起');
    } else {
        console.log('接听按钮亮起');
        elementToClick.click()
    }
}

// 每10秒自动扫描一次
var jishi = setInterval(autoClick, 10000);

//停止监听
clearInterval(jishi)
