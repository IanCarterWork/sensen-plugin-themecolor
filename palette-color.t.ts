import { SensenColorSchemeBase } from "./color.t";
import { SensenColorVariation, SensenTColor } from "./index.t";


export interface SensenPaletteScheme extends SensenColorSchemeBase{

    one: SensenTColor;
    oneRgb?: SensenTColor;
    oneRgbSmaller?: SensenTColor;
    oneRgbSmall?: SensenTColor;
    oneRgbMedium?: SensenTColor;
    oneRgbBig?: SensenTColor;
    oneRgbBigger?: SensenTColor;

    two: SensenTColor;
    twoRgb?: SensenTColor;
    twoRgbSmaller?: SensenTColor;
    twoRgbSmall?: SensenTColor;
    twoRgbMedium?: SensenTColor;
    twoRgbBig?: SensenTColor;
    twoRgbBigger?: SensenTColor;

    three: SensenTColor;
    threeRgb?: SensenTColor;
    threeRgbSmaller?: SensenTColor;
    threeRgbSmall?: SensenTColor;
    threeRgbMedium?: SensenTColor;
    threeRgbBig?: SensenTColor;
    threeRgbBigger?: SensenTColor;

    four: SensenTColor;
    fourRgb?: SensenTColor;
    fourRgbSmaller?: SensenTColor;
    fourRgbSmall?: SensenTColor;
    fourRgbMedium?: SensenTColor;
    fourRgbBig?: SensenTColor;
    fourRgbBigger?: SensenTColor;

    five: SensenTColor;
    fiveRgb?: SensenTColor;
    fiveRgbSmaller?: SensenTColor;
    fiveRgbSmall?: SensenTColor;
    fiveRgbMedium?: SensenTColor;
    fiveRgbBig?: SensenTColor;
    fiveRgbBigger?: SensenTColor;

    success: SensenTColor;
    successRgb?: SensenTColor;
    successRgbSmaller?: SensenTColor;
    successRgbSmall?: SensenTColor;
    successRgbMedium?: SensenTColor;
    successRgbBig?: SensenTColor;
    successRgbBigger?: SensenTColor;

    successText: SensenTColor;
    successTextRgb?: SensenTColor;
    successTextRgbSmaller?: SensenTColor;
    successTextRgbSmall?: SensenTColor;
    successTextRgbMedium?: SensenTColor;
    successTextRgbBig?: SensenTColor;
    successTextRgbBigger?: SensenTColor;

    warning: SensenTColor;
    warningRgb?: SensenTColor;
    warningRgbSmaller?: SensenTColor;
    warningRgbSmall?: SensenTColor;
    warningRgbMedium?: SensenTColor;
    warningRgbBig?: SensenTColor;
    warningRgbBigger?: SensenTColor;

    warningText: SensenTColor;
    warningTextRgb?: SensenTColor;
    warningTextRgbSmaller?: SensenTColor;
    warningTextRgbSmall?: SensenTColor;
    warningTextRgbMedium?: SensenTColor;
    warningTextRgbBig?: SensenTColor;
    warningTextRgbBigger?: SensenTColor;

    error: SensenTColor;
    errorRgb?: SensenTColor;
    errorRgbSmaller?: SensenTColor;
    errorRgbSmall?: SensenTColor;
    errorRgbMedium?: SensenTColor;
    errorRgbBig?: SensenTColor;
    errorRgbBigger?: SensenTColor;

    errorText: SensenTColor;
    errorTextRgb?: SensenTColor;
    errorTextRgbSmaller?: SensenTColor;
    errorTextRgbSmall?: SensenTColor;
    errorTextRgbMedium?: SensenTColor;
    errorTextRgbBig?: SensenTColor;
    errorTextRgbBigger?: SensenTColor;
    
}



export type SensenPaletteVariations = {

    [K in keyof SensenPaletteScheme]: SensenColorVariation
    
};







