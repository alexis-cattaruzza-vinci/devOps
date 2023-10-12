import { Main } from '../src/app.js';

describe("A suite of test for the class Main for Berlin Clock", function(){
    let main = new Main();
    let time = new Date().getMinutes();

    it("minuteFirstLine  given 0.01 should return jaune", function(){
            
        let result = main.minuteFirstLine(time);

        expect(result).toBe('jaune');
    });

    it("minuteFirstLine  given 0.00 should return noir", function(){
            
        let result = main.minuteFirstLine(time);

        expect(result).toBe('noir');
    });

    it("minuteFirstLine  given 0.03 should return jaune", function(){
            
        let result = main.minuteFirstLine(time);

        expect(result).toBe('jaune');
    });

    it("minuteFirstLine  given 0.04cas  should return jaune", function(){
            
        let result = main.minuteFirstLine(time);

        expect(result).toBe('jaune');
    });


});