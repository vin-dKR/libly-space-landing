export interface ComparisonPoint {
    id: number;
    traditional: string;
    liblySpace: string;
}

export const comparisonPoints: ComparisonPoint[] = [
    {
        id: 1,
        traditional: "Manual data entry for every student - Time-consuming and error-prone",
        liblySpace: "Instant digital records with quick search"
    },
    {
        id: 2,
        traditional: "No automatic reporting system",
        liblySpace: "Powerful and smart dashboard with automatic reporting — everything at a glance"
    },
    {
        id: 3,
        traditional: "No real-time seat allotment system",
        liblySpace: "Real-time seat occupancy and shift management"
    },
    {
        id: 4,
        traditional: "Payment tracking takes too much time",
        liblySpace: "Advance payment tracking & invoice generation"
    },
    {
        id: 5,
        traditional: "Membership management is manual and time consuming",
        liblySpace: "Seamlessly and automatically track and manage membership expiry and validity"
    },
    {
        id: 6,
        traditional: "Complicated Payment and membership management often lead to revenue loss and missed payment",
        liblySpace: "Advanced payment and membership management — track every rupees"
    },
    {
        id: 7,
        traditional: "Manual reciept and bill sharing",
        liblySpace: "On click reciept sharing on WhatsApp — no need to maintain billing register"
    },
    {
        id: 8,
        traditional: "Complicated to manage multiple shifts with hundreds of students and their seats",
        liblySpace: "Easily manage thousand of student with multiple shift with different timing and fees"
    },
    {
        id: 9,
        traditional: "No bulk or Excel import",
        liblySpace: "Cloud-based secure data storage — access anytime, anywhere"
    },
    {
        id: 10,
        traditional: "High chance of record loss or mix-ups",
        liblySpace: "Easy to set up and simple to use — no tech skills needed"
    }
];
