
import SensenColor from "./color";
import type { SensenColorNature } from "./color.t";
import type { SensenPaletteScheme, SensenPaletteVariations } from "./palette-color.t";



export class SensenPaletteColor extends SensenColor{

    nature: SensenColorNature = '@palette';

    mixed: SensenPaletteVariations = {} as SensenPaletteVariations;

    constructor(
        
        public name: string, 
        
        public scheme: SensenPaletteScheme
        
    ){

        super();

    }

    
}