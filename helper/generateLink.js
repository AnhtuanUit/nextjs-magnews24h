
import categories from "../constants/categories";

function detectCategoryPath(categoryName) {
    return categories.find(x => x.categoryName === categoryName) && categories.find(x => x.categoryName === categoryName).type || "/trang-nhat";
}

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}

function generateLink({ title, id, categoryName }) {
    let formatTitle = removeAccents(title);
    formatTitle = formatTitle.toLowerCase();
    formatTitle = formatTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    return `${detectCategoryPath(categoryName)}/${formatTitle}-${id}.html`;
}

export default generateLink;