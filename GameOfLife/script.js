function generator(matLen, gr, grEat, pre, pre2, dea) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pre; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < pre2; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < dea; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
   
    return matrix;
}

let side = 20;

let matrix = generator(20, 80, 30, 15, 15, 3);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let predator2Arr = []
let deathArr = []



function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(2)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            } else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            } else if (matrix[y][x] == 4) {
                let gr = new Predator2(x, y)
                predator2Arr.push(gr)
            } else if (matrix[y][x] == 5) {
                let gr = new Death(x, y)
                deathArr.push(gr)
            }
            
        }
    }
}
function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
                rect(x * side, y * side, side, side)
            } else if (matrix[y][x] == 2) {
                fill('yellow')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill('red')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill('black')
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill('blue')
                rect(x * side, y * side, side, side)
            }
            
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()

    }
    for (var i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()

    }
    for (var i in predator2Arr) {
        predator2Arr[i].mul()
        predator2Arr[i].eat()

    }
    for (var i in deathArr) {
        
        deathArr[i].kill()
    }
    
}