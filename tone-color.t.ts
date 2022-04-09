import { SensenColorSchemeBase } from "./color.t";
import { SensenTColor } from "./index.t";




export type SensenToneSchemeIs = 'light' | 'dark';


export interface SensenToneScheme extends SensenColorSchemeBase{

    text: SensenTColor;
    textRgb?: SensenTColor;
    textRgbSmaller?: SensenTColor;
    textRgbSmall?: SensenTColor;
    textRgbMedium?: SensenTColor;
    textRgbBig?: SensenTColor;
    textRgbBigger?: SensenTColor;

    textLite: SensenTColor;
    textLiteRgb?: SensenTColor;
    textLiteRgbSmaller?: SensenTColor;
    textLiteRgbSmall?: SensenTColor;
    textLiteRgbMedium?: SensenTColor;
    textLiteRgbBig?: SensenTColor;
    textLiteRgbBigger?: SensenTColor;

    textHigh: SensenTColor;
    textHighRgb?: SensenTColor;
    textHighRgbSmaller?: SensenTColor;
    textHighRgbSmall?: SensenTColor;
    textHighRgbMedium?: SensenTColor;
    textHighRgbBig?: SensenTColor;
    textHighRgbBigger?: SensenTColor;

    layer: SensenTColor;
    layerRgb?: SensenTColor;
    layerRgbSmaller?: SensenTColor;
    layerRgbSmall?: SensenTColor;
    layerRgbMedium?: SensenTColor;
    layerRgbBig?: SensenTColor;
    layerRgbBigger?: SensenTColor;

    layerLite: SensenTColor;
    layerLiteRgb?: SensenTColor;
    layerLiteRgbSmaller?: SensenTColor;
    layerLiteRgbSmall?: SensenTColor;
    layerLiteRgbMedium?: SensenTColor;
    layerLiteRgbBig?: SensenTColor;
    layerLiteRgbBigger?: SensenTColor;

    layerHigh: SensenTColor;
    layerHighRgb?: SensenTColor;
    layerHighRgbSmaller?: SensenTColor;
    layerHighRgbSmall?: SensenTColor;
    layerHighRgbMedium?: SensenTColor;
    layerHighRgbBig?: SensenTColor;
    layerHighRgbBigger?: SensenTColor;

    dark: SensenTColor;
    darkRgb?: SensenTColor;
    darkRgbSmaller?: SensenTColor;
    darkRgbSmall?: SensenTColor;
    darkRgbMedium?: SensenTColor;
    darkRgbBig?: SensenTColor;
    darkRgbBigger?: SensenTColor;

    light: SensenTColor;
    lightRgb?: SensenTColor;
    lightRgbSmaller?: SensenTColor;
    lightRgbSmall?: SensenTColor;
    lightRgbMedium?: SensenTColor;
    lightRgbBig?: SensenTColor;
    lightRgbBigger?: SensenTColor;

    white: SensenTColor;
    whiteRgb?: SensenTColor;
    whiteRgbSmaller?: SensenTColor;
    whiteRgbSmall?: SensenTColor;
    whiteRgbMedium?: SensenTColor;
    whiteRgbBig?: SensenTColor;
    whiteRgbBigger?: SensenTColor;

    black: SensenTColor;
    blackRgb?: SensenTColor;
    blackRgbSmaller?: SensenTColor;
    blackRgbSmall?: SensenTColor;
    blackRgbMedium?: SensenTColor;
    blackRgbBig?: SensenTColor;
    blackRgbBigger?: SensenTColor;

}




