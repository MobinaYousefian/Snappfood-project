export const toEnglishNumber = (number) => {
    return number.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) & 0xf;
    })
}

export const toFarsiNumber = (num) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return num.toString().replace(/\d/g, x => farsiDigits[x]);
}


export const priceFormatting = (number) => {
    return new Intl.NumberFormat().format(number);
}