import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";


type Story = StoryObj<typeof meta>;

const meta = {
    title: "FGL-UI-Library/Alert",
    component: Alert,
} satisfies Meta<typeof Alert>;

export const Primary: Story = {
    args: {
        type: "success",
        message: "This is a success!"
    },
};

export const Secondary: Story = {
    args: {
        type: "warning",
        message: "This is warning!"
    },
};


export default meta;