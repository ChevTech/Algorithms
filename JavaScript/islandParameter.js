var islandPerimeter = function(grid) {    
    debugger;
    var res = 0;
    if(grid.length === 0 || grid[0].length === 0){
        return res;
    }
    
    for(var i=0; i < grid.length; i++){
        for(var j=0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                return helper(grid, i, j);
            }
        }
    }
};

function helper(grid, x, y){
    if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0){
        return 1;
    }

    if(grid[x][y] === -1) { return 0; }

    if(grid[x][y] === 1){
        grid[x][y] = -1;
        return helper(grid, x-1, y) + helper(grid, x+1, y) + helper(grid, x, y-1) + helper(grid, x, y+1); 
    }
}

var island = 
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]];

console.log(islandPerimeter(island));