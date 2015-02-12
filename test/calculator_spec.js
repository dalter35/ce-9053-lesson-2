var Calculator = {
    foo: "bar",
    add: function(a,b){
        return a + b;
    }
};

describe("Calculator", function(){
    it("Calculator is defined", function (){
        expect(Calculator).toBeDefined();    
    }); 
    
    describe("addition", function(){
        it("can add 1 and 1", function(){
            expect(Calculator.add(1,1)).toEqual(2);
        });
        
    });
   
});

var Subtraction = {
    subtract: function(a, b){
        return a - b;
    }
};

describe("Subtraction", function() {
    it("1-1 is 0", function(){
        expect(Subtraction.subtract(1,1)).toEqual(0);
    });
});