import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";


type Story = StoryObj<typeof meta>;

const meta = {
    title: "FGL-UI-Library/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Hello World!",
    },
};

export const Secondary: Story = {
    args: {
        label: "Click Me!",
    },
};


export default meta;