export function addBorder(picture: string[]): string[] {
    let rectangleWidth = picture[0].length + 2;
    let result = [];
    let stars = "*".repeat(rectangleWidth)

    for (let i = 0; i < picture.length; i++) {
            result.push("*" + picture[i] + "*");
    }

    result.unshift(stars);
    result.push(stars);
    return result;
}

console.log(addBorder(["abc", "ded"]));