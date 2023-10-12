import { Main } from '../src/app.js';

describe("A suite of test for the class Main for Berlin Clock", function(){
    let time = new Main();

    it("minuteFirstLine  given 0.01 should return jaune", function(){
            
        let result = time.minuteFirstLine(1);

        expect(result).toBe('jaune');
    });


    });

});