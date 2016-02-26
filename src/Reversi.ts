/// <reference path="../typings/tsd.d.ts" />

export default class Reversi {
    static BoardSize: number = 8;
    constructor(public board: string[][]) {
    }

    GetEligibleMoves(player: string): string[][] {
        this.ComputeHorizontalMoves(player);
        return this.board;
    }

    ComputeHorizontalMoves(player: string) {
        for (var index = 0; index < this.board.length; index++) {
            var line = this.board[index];
            this.board[index] = this.ProcessLine(line, player);
            //this.board[index] = _.reverse(this.ProcessLine(_.reverse(line), player));
        }
    }

    ProcessLine(line :string[], player:string) : string[] {
        for (var i = 0; i < line.length; i++) {
            var element = line[i];
            if (element != player) {
                continue;
            }
            if (i < line.length - 2) {
                let position = this.IsValidPosition(line, i, this.OtherPlayer(player));
                if (position !== -1) {
                    line[position] = 'o';
                }
            }
        }
        return line;
    }
    OtherPlayer(player: string): string {
        return player === 'B' ? 'W' : 'B';
    }
    IsValidPosition(line: string[], index: number, playerToFound: string): number {
        let isGood = false;
        for (var i = index + 1; i < line.length; i++) {
            var element = line[i];
            if (element === playerToFound) {
                isGood = true;
                continue;
            }
            if (element === '.') {
                if (isGood) {
                    //console.log('element', i);
                    line[i] = 'o';
                    return i;
                }
                return -1;
            }
            return -1;
        }
    }

}
//}
