//Calculate the area of an circle object in read mode only

const circle = {
    radius : 2,
    get area(){
        return Math.PI*(Math.pow(this.radius, 2));
    }
};
console.log(circle.area);