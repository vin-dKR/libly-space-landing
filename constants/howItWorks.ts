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
        time: "⏱️ Quick & Secure"
    },
    {
        id: 2,
        title: "Setup Your Library",
        description: "Add your library details then define your library's total seat, shifts, shift timing, plans and fees.",
        time: "⚙️ Simple Configuration"
    },
    {
        id: 3,
        title: "Import Student Data",
        description: "You could either upload excel sheet with all your library data or manually add students and their details.",
        time: "📊 Effortless Import"
    },
    {
        id: 4,
        title: "All Set",
        description: "Wait for your data to import into your library account then you are all set and ready to use Libly Space.",
        time: "🚀 Ready to Go!"
    }
];
