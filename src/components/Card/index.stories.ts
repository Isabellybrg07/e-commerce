import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from ".";



const meta = {

    title: 'Docs/Card',
    component: Card,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>

export const Red: Story = {
    args: {
        product: {
            title: 'modelo',
            imageSrc: '',
            Preço: 'R$15,00'

        }
    },
};