import Reversi from "../src/Reversi";
import { expect } from 'chai';
// import { _ } from 'lodash';


describe("Reversi", () => {
    describe("horizontal to the right", () => {
    it("Should find a solution in the same line", () => {
        let board = new Reversi([['B','W','.','.','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['B','W','o','.','.']]);
    });

    it("Should not find a solution in the same line", () => {
        let board = new Reversi([['W','B','.','.','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['W','B','.','.','.']]);
    });

    it("Should find a solution in the same line when there is a lot of other player serie", () => {
        let board = new Reversi([['B','W','W','.','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['B','W','W','o','.']]);
    });

    it("Should find a solution when there is a white before a black", () => {
        let board = new Reversi([['W','B','W','.','.','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['W','B','W','o','.','.']]);
    });

    it("Should not find a solution when last one is player color", () => {
        let board = new Reversi([['W','B','W','B','.','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['W','B','W','B','.','.']]);
    });

    it("Should find 2 solutions", () => {
        let board = new Reversi([['B','W','.','B','W','.']]);

        var newBoard = board.GetEligibleMoves('B');
        console.log(newBoard);
        expect(newBoard).to.be.deep.equal([['B','W','o','B','W','o']]);
    });
  })


    describe("horizontal the left", () => {
        it("Should find a solution in the same line", () => {
            let board = new Reversi([['.','.','.','B','W',]]);

            var newBoard = board.GetEligibleMoves('W');
            console.log(newBoard);
            expect(newBoard).to.be.deep.equal([['.','.','o','B','W']]);
        });
//
//     it("Should not find a solution in the same line", () => {
//         let board = new Reversi([['W','B','.','.','.']]);
//
//         var newBoard = board.GetEligibleMoves('B');
//         console.log(newBoard);
//         expect(newBoard).to.be.deep.equal([['W','B','.','.','.']]);
//     });
//
//     it("Should find a solution in the same line when there is a lot of other player serie", () => {
//         let board = new Reversi([['B','W','W','.','.']]);
//
//         var newBoard = board.GetEligibleMoves('B');
//         console.log(newBoard);
//         expect(newBoard).to.be.deep.equal([['B','W','W','o','.']]);
//     });
//
//     it("Should find a solution when there is a white before a black", () => {
//         let board = new Reversi([['W','B','W','.','.','.']]);
//
//         var newBoard = board.GetEligibleMoves('B');
//         console.log(newBoard);
//         expect(newBoard).to.be.deep.equal([['W','B','W','o','.','.']]);
//     });
//
//     it("Should not find a solution when last one is player color", () => {
//         let board = new Reversi([['W','B','W','B','.','.']]);
//
//         var newBoard = board.GetEligibleMoves('B');
//         console.log(newBoard);
//         expect(newBoard).to.be.deep.equal([['W','B','W','B','.','.']]);
//     });
//
//     it("Should find 2 solutions", () => {
//         let board = new Reversi([['B','W','.','B','W','.']]);
//
//         var newBoard = board.GetEligibleMoves('B');
//         console.log(newBoard);
//         expect(newBoard).to.be.deep.equal([['B','W','o','B','W','o']]);
//     });
  })
//   xit("Should find a solution in the same line", () => {
//     let board = new Reversi([
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','B','W','.','.','.'],
// ['.','.','.','W','B','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.']]);
//
//     var newBoard = board.GetEligibleMoves('B');
//     console.log(newBoard);
//     expect(newBoard[3][5]).to.be.deep.equal('o');
//   });

});

// [['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','B','W','.','.','.'],
// ['.','.','.','W','B','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.'],
// ['.','.','.','.','.','.','.','.']]
