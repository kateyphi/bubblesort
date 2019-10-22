

describe('Bubble Sort', function(){
  beforeAll(function () {

  });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single element array', function(){
      expect( bubbleSort([2]) ).toEqual( [2] );
    });
    it('handles a multiple element array', function(){
      expect( bubbleSort([5,50,78,2,0]) ).toEqual( [0,2,5,50,78] );
    })
    it('sorting an array of 5 elements involves 25 comparisons', function(){
      spyOn(window, 'swap').and.callThrough(); 
      bubbleSort([2,7,10,23,42])
      expect(swap.calls.count()).toEqual(25)
    })
  });
