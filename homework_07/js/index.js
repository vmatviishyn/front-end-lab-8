$( document ).ready(function() {
    let player1 = true; //white
    let player2 = false; //black

    const charToCheck = "OOOOO";
    const charToCheck2 = "XXXXX";

    let boardArr = [ ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-'],];

    let horizonRows =  ["","","","","","","","","","","","","","","",""];
    let verticalRows = ["","","","","","","","","","","","","","","",""];
    let diagonalRows = ["","","","","","","","","","","","","","","",""];
    let diagonalRows2 = ["","","","","","","","","","","","","","","",""];

    let inputValue = (index, playerValue) => {
        var horiIndex = Math.floor(index/boardArr.length);
        var vertIndex = index % boardArr.length;
        boardArr[horiIndex][vertIndex] = playerValue;
    }

    let whoWin = () => {
        horizonCheck();
        verticalCheck();
        diagonalCheck1();
        diagonalCheck2();
    }

    let horizonCheck = () => {
        for(let j = 0; j < boardArr.length; j++)
        {
            let temArr = [];
            for(let k =0; k < boardArr.length; k++)
            {
                temArr.push(boardArr[j][k]);   
                horizonRows[j] = temArr.join('');  
            }
            checkForWin(horizonRows[j]);
        }
    }

    let verticalCheck = () => {
        for(let b=0;b<boardArr.length;b++)
        {
            let temArr2 = [];
            for(let c = 0; c <boardArr.length;c++)
            {
                temArr2.push(boardArr[c][b]);       
                verticalRows[c] = temArr2.join(''); 
                checkForWin(verticalRows[c]);
            }

        }
    }

    let diagonalCheck1 = () => {
        let temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [],
            temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],
            temArr8 = [],temArr9 = [],temArr10 = [],temArr11 = [],
            temArr12 = [],temArr13 = [],temArr14 = [],temArr15 = [],
            temArr16 = [],temArr17 = [],temArr18 = [],temArr19 = []
            temArr20 = [],temArr21 = [],temArr22 = [];
     
        for(let d=0;d<boardArr.length;d++)
        {
            for(let e = 0; e < boardArr.length; e++)
            {
                if( d + e === 4){      
                temArr0.push(boardArr[d][e]);       
                diagonalRows[0] = temArr0.join(''); 
                }else if(d + e ===5){  
                temArr1.push(boardArr[d][e]);      
                diagonalRows[1] = temArr1.join(''); 
                }else if(d + e === 6){
                temArr2.push(boardArr[d][e]);
                diagonalRows[2] = temArr2.join('');
                }else if(d + e === 7){
                temArr3.push(boardArr[d][e]);
                diagonalRows[3] = temArr3.join('');
                }else if(d + e === 8){
                temArr4.push(boardArr[d][e]);
                diagonalRows[4] = temArr4.join('');
                }else if(d + e === 9){
                temArr5.push(boardArr[d][e]);
                diagonalRows[5] = temArr5.join('');
                }else if(d + e === 10){
                temArr6.push(boardArr[d][e]);
                diagonalRows[6] = temArr6.join('');
                }else if(d + e === 11){
                temArr7.push(boardArr[d][e]);
                diagonalRows[7] = temArr7.join('');
                }else if(d + e === 12){
                temArr8.push(boardArr[d][e]);
                diagonalRows[8] = temArr8.join('');
                }else if(d + e === 13){
                temArr9.push(boardArr[d][e]);
                diagonalRows[9] = temArr9.join('');
                }else if(d + e === 14){
                temArr10.push(boardArr[d][e]);
                diagonalRows[10] = temArr10.join('');
                }else if(d + e === 15){
                temArr11.push(boardArr[d][e]);
                diagonalRows[11] = temArr11.join('');
                }else if(d + e === 16){
                temArr12.push(boardArr[d][e]);
                diagonalRows[12] = temArr12.join('');
                }else if(d + e === 17){
                temArr13.push(boardArr[d][e]);
                diagonalRows[13] = temArr13.join('');
                }else if(d + e === 18){
                temArr14.push(boardArr[d][e]);
                diagonalRows[14] = temArr14.join('');
                }else if(d + e === 19){
                temArr15.push(boardArr[d][e]);
                diagonalRows[15] = temArr15.join('');
                }else if(d + e === 20){
                temArr16.push(boardArr[d][e]);
                diagonalRows[16] = temArr16.join('');
                }else if(d + e === 21){
                temArr17.push(boardArr[d][e]);
                diagonalRows[17] = temArr17.join('');
                }else if(d + e === 22){
                temArr18.push(boardArr[d][e]);
                diagonalRows[18] = temArr18.join('');
                }else if(d + e === 23){
                temArr19.push(boardArr[d][e]);
                diagonalRows[19] = temArr19.join('');
                }else if(d + e === 24){
                temArr20.push(boardArr[d][e]);
                diagonalRows[20] = temArr20.join('');
                }else if(d + e === 25){
                temArr21.push(boardArr[d][e]);
                diagonalRows[21] = temArr21.join('');
                }else if(d + e === 26){
                temArr22.push(boardArr[d][e]);
                diagonalRows[22] = temArr22.join('');
                }
            }
        }
        for(let u=0; u<diagonalRows.length;u++){
             checkForWin(diagonalRows[u]);
        }
    }

    let diagonalCheck2 = () => {
        let temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [],
            temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],
            temArr8 = [],temArr9 = [],temArr10 = [],temArr11 = [],
            temArr12 = [],temArr13 = [],temArr14 = [],temArr15 = [],
            temArr16 = [],temArr17 = [],temArr18 = [],temArr19 = []
            temArr20 = [],temArr21 = [],temArr22 = [];
        
        for(let w=0;w<boardArr.length;w++)
        {
            for(let k = 0; k < boardArr.length; k++)
            {
                if( w - k === -11){       
                    temArr0.push(boardArr[w][k]);          
                    diagonalRows2[0] = temArr0.join('');  
                }else if(w - k === -10){   
                    temArr1.push(boardArr[w][k]);         
                    diagonalRows2[1] = temArr1.join('');   
                }else if(w - k === -9){
                    temArr2.push(boardArr[w][k]);
                    diagonalRows2[2] = temArr2.join('');
                }else if(w - k === -8){
                    temArr3.push(boardArr[w][k]);
                    diagonalRows2[3] = temArr3.join('');
                }else if(w - k === -7){
                    temArr4.push(boardArr[w][k]);
                    diagonalRows2[4] = temArr4.join('');
                }else if(w - k === -6){
                    temArr5.push(boardArr[w][k]);
                    diagonalRows2[5] = temArr5.join('');
                }else if(w - k === -5){
                    temArr6.push(boardArr[w][k]);
                    diagonalRows2[6] = temArr6.join('');
                }else if(w - k === -4){
                    temArr7.push(boardArr[w][k]);
                    diagonalRows2[7] = temArr7.join('');
                }else if(w - k === -3){
                    temArr8.push(boardArr[w][k]);
                    diagonalRows2[8] = temArr8.join('');
                }else if(w - k === -2){
                    temArr9.push(boardArr[w][k]);
                    diagonalRows2[9] = temArr9.join('');
                }else if(w - k === -1){
                    temArr10.push(boardArr[w][k]);
                    diagonalRows2[10] = temArr10.join('');
                }else if(w === k){
                    temArr11.push(boardArr[w][k]);
                    diagonalRows2[11] = temArr11.join('');
                }else if(w - k === 1){
                    temArr12.push(boardArr[w][k]);
                    diagonalRows2[12] = temArr12.join('');
                }else if(w - k === 2){
                    temArr13.push(boardArr[w][k]);
                    diagonalRows2[13] = temArr13.join('');
                }else if(w - k === 3){
                    temArr14.push(boardArr[w][k]);
                    diagonalRows2[14] = temArr14.join('');
                }else if(w - k === 4){
                    temArr15.push(boardArr[w][k]);
                    diagonalRows2[15] = temArr15.join('');
                }else if(w - k === 5){
                    temArr16.push(boardArr[w][k]);
                    diagonalRows2[16] = temArr16.join('');
                }else if(w - k === 6){
                    temArr17.push(boardArr[w][k]);
                    diagonalRows2[17] = temArr17.join('');
                }else if(w - k === 7){
                    temArr18.push(boardArr[w][k]);
                    diagonalRows2[18] = temArr18.join('');
                }else if(w - k === 8){
                    temArr19.push(boardArr[w][k]);
                    diagonalRows2[19] = temArr19.join('');
                }else if(w - k === 9){
                    temArr20.push(boardArr[w][k]);
                    diagonalRows2[20] = temArr20.join('');
                }else if(w - k === 10){
                    temArr21.push(boardArr[w][k]);
                    diagonalRows2[21] = temArr21.join('');
                }else if(w - k === 11){
                    temArr22.push(boardArr[w][k]);
                    diagonalRows2[22] = temArr22.join('');
                }
            }
        }
        for(let v=0; v<diagonalRows.length;v++){
            checkForWin(diagonalRows2[v]);
        }
    }

    let checkForWin = (str) => {
        for(let a =0; a<str.length;a++)
        {   
            if( str.substring(a,a+5) === charToCheck){
                $(".result").text(`Player 1 WIN (White stones)`);
                $(".box").off(`click`);
                return;
            }else if( str.substring(a,a+5) === charToCheck2){
                $(".result").text(`Player 2 WIN (Black stones)`);
                $(".box").off(`click`);
                return;
            }
        }
        
    }

    let createHeader = () => {
        let h1 = $("<h1></h1>").text("Gomoku(Go)");
        let p = $("<p></p>").text("Free-style gomoku requires a row of 4 or more stones for a win.");
        let pl1 = $("<h3></h3>").text("Player 1 (white)").addClass("pl1 highlightPlayer");
        let pl2 = $("<h3></h3>").text("Player 2 (black)").addClass("pl2");
        let rez = $("<h1></h1>").addClass("result");
        let players = $("<div></div>").addClass("players").append(pl1, rez, pl2);
        return $("header").append(h1, p, players);
    }

    let createDivs = () => {
        for (let i=1; i <= 16; i++) {
            for (let j=1; j <= 16; j++) {
                let box = $("<div></div>")
                    .addClass(`box`)
                    .css({
                        "left":j*50+"px",
                        "top": i*50+"px"
                    })
                    .attr("id",`${i} ${j}`);
                    $('#grid').append(box);
            }
        }
    }

    let createBoard = () => {
        let table = $("<table></table>")[0];
        let tbody = $("<tbody></tbody>")[0];
        for (let i=0; i < 15; i++) {
            let tr = $("<tr></tr>")[0];
            for (let j=0; j < 15; j++) {
                let td = $("<td></td>")[0];
                tr.append(td);
            }
            tbody.append(tr);   
        }
        table.append(tbody);
        $("#board").append(table);
    }

    let lightNext = (pl1, pl2) => {
        if (pl1) {
            $(".box").mouseover(function() {
                $(this).css({
                    "background-color":"rgba(255, 255, 255, 0.6)",
                    "border-radius": "100%"
                });
            });
            $( ".box" ).mouseleave(function() {
                $(this).css({
                    "background-color":""
                });
            });
        }   
        else {
            $( ".box" ).mouseover(function() {
                $(this).css({
                    "background-color":"rgba(0, 0, 0, 0.6)",
                    "border-radius": "100%"
                });
            });
            $( ".box" ).mouseleave(function() {
                $(this).css({
                    "background-color":""
                });
            });
        }
    }

    let move = (player1, player2) => {
        
        $(".box").click(function(event){
            if (player1){
                if(event.target.classList[2] == "white" || event.target.classList[2] == "black"){
                    return;
                }
                else {
                    $(event.target).addClass("set white");
                    player1 = false;
                    $(".pl1").toggleClass("highlightPlayer");
                    $(".pl2").toggleClass("highlightPlayer");
                    lightNext(player1, player2);
                    
                    inputValue($(this).index(), "O");
                }
            }
            else {
                if(event.target.classList[2] == "white" || event.target.classList[2] == "black"){
                    return;
                }
                else {
                    $(event.target).addClass("set black");
                    player1 = true;
                    player2 = false;
                    $(".pl1").toggleClass("highlightPlayer");
                    $(".pl2").toggleClass("highlightPlayer");
                    lightNext(player1, player2);

                    inputValue($(this).index(), "X");
                }
            }
            whoWin();
        });
    }

    createHeader();
    createBoard();
    createDivs();
    lightNext(player1, player2);
    move(player1, player2);
});  



