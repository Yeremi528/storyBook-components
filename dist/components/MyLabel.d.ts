/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * This is the principal Label and you must put text inside of this
    */
    label: string;
    /**
    * This is for the size uwu
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * This is the color
     */
    color?: 'tertiary' | 'secundary' | 'primary';
    /**
     * This is if UpperCase or LowerCase
    */
    allCaps?: boolean;
    /**
     *  What color you use
     */
    fontColor?: string;
    /**
     * Background Color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
