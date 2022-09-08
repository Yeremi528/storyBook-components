import './mylabel.css'

export interface Props {
    /**
     * This is the principal Label and you must put text inside of this  
    */ 
    label: string;
    /** 
    * This is for the size uwu
    */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * This is the color 
     */
    color?: 'tertiary' | 'secundary' | 'primary'
    /**
     * This is if UpperCase or LowerCase 
    */
    allCaps?: boolean
    /**
     *  What background color you use
     */
    backgroundColor? : string;
}

export const MyLabel = ({label='No Lagel',size='normal',color='primary',allCaps=false,backgroundColor}:Props) => {
  
  return (
    <span style={{ color:backgroundColor}} className={`label ${ size } text-${color} `}>
        {allCaps === true ? label.toUpperCase() : label}
    </span>
  )
}
