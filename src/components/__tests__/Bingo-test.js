jest.dontMock('../Bingo.js');
describe('Bingo', function() {
  it('initialize bingo cell', function() {
    var React = require('react/addons');
    var Bingo = require('../Bingo.js');
    var TestUtils = React.addons.TestUtils;

    function getRandomNumbers() {
      var board = [];
      var numbers = [
        1, 2, 3, 4, 5, 
        6, 7, 8, 9, 10,
        11, 12, 13, 14, 15,
        16, 17, 18, 19, 20,
        21, 22, 23, 24, 25
      ];
      for (var i = 0; i < 25; i++) {
        board.push({value: numbers.splice(Math.floor(Math.random() * numbers.length), 1)}); 
      }
      return board
    }

    var bingo = TestUtils.renderIntoDocument(
      <Bingo data={getRandomNumbers()} />
    );
    var cells = TestUtils.scryRenderedDOMComponentsWithClass(
      bingo, 'cell'
    );

    expect(cells.getDOMNode().length).toEqual(25);
  });
});