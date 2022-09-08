import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select'},
        size:  { control: 'select'},
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>

//Utilizacion de nuestro componente
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

//No se debe mutar el mismo objeto
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal'
}
//Estas son las historias
export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}


export const  Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color:'secundary'
}


export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    size: 'h1'
}