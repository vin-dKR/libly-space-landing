export interface Step {
    id: number;
    title: string;
    description: string;
    time: string;
}

export const gettingStartedSteps: Step[] = [
    {
        id: 1,
        title: "Sign Up",
        description: "Sign up and create your account — add details like your Library name, number, email.",
        time: "Takes 5 minutes"
    },
    {
        id: 2,
        title: "Setup Your Library",
        description: "Add your library details then define your library's total seat, shifts, shift timing, plans and fees.",
        time: "Takes 10 minutes"
    },
    {
        id: 3,
        title: "Import Student Data",
        description: "You could either upload excel sheet with all your library data or manually add students and their details.",
        time: "Takes 5 minutes"
    },
    {
        id: 4,
        title: "All Set",
        description: "Wait for your data to import into your library account then you are all set and ready to use Libly Space.",
        time: "You're ready!"
    }
];
