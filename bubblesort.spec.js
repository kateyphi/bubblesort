describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles a single element array', function(){
      expect( bubbleSort([2]) ).toEqual( [2] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles a multiple element array', function(){
      expect( bubbleSort([5,50,78,2,0]) ).toEqual( [0,2,5,50,78] );
    });
  });