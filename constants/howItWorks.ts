export interface Step {
    id: number;
    title: string;
    description: string;
    time: string;
}

export const gettingStartedSteps: Step[] = [
    {
        id: 1,
        title: "Sign Up & Setup",
        description: "Create your account and configure your library details in under 5 minutes. No technical skills required.",
        time: "Takes 5 minutes"
    },
    {
        id: 2,
        title: "Add Students & Seats",
        description: "Import your existing student data or add new students. Configure seat layout and pricing plans.",
        time: "Takes 10 minutes"
    },
    {
        id: 3,
        title: "Go Live",
        description: "Start accepting bookings and managing your library operations. Track everything from your dashboard.",
        time: "You're ready!"
    }
];
