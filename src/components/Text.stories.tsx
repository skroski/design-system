import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum',
        size: 'sm'
    },

} as Meta<TextProps>

export const Default: StoryObj = {
    args: {
        size: 'md'
    },
}
export const Small: StoryObj = {
    args: {
        size: 'sm'
    },
}
export const Large: StoryObj = {
    args: {
        size: 'lg'
    },
}
export const CustomComponent: StoryObj = {
    args: {
        asChild: true,
        children: (
            <p>Testando </p>
        )
    },
}